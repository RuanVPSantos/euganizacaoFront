import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Button,
  Typography,
  TextField,
  CircularProgress,
  Alert,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete'; // Importação do ícone de exclusão
// Definir a URL base para todas as chamadas do Axios
axios.defaults.baseURL = 'http://127.0.0.1:5175';

// Interceptor para simular falhas na API
axios.interceptors.request.use(
  (config) => {
    const shouldFail = Math.random() < 0.1; // Simula erro com 10% de chance
    if (shouldFail) {
      return Promise.reject(new Error('Erro simulado'));
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Componente para um sub-item
function SubItem({ subItem, onToggle }) {
  return (
    <ListItem button onClick={() => onToggle(subItem.id)}>
      <ListItemIcon>
        <Checkbox checked={subItem.completed} />
      </ListItemIcon>
      <ListItemText primary={subItem.name} />
    </ListItem>
  );
}

// Componente para um item e seus sub-itens
function ToDoItem({ item, onToggleItem, onToggleSubItem, onDelete }) {
  const allSubItemsCompleted = item.subItems.every((si) => si.completed);

  return (
    <div>
      <ListItem button onClick={() => onToggleItem(item.id)}>
        <ListItemIcon>
          <Checkbox checked={allSubItemsCompleted} />
        </ListItemIcon>
        <ListItemText primary={item.name} />
        <IconButton onClick={() => onDelete(item.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <List component="div" disablePadding>
        {item.subItems.map((subItem) => (
          <SubItem key={subItem.id} subItem={subItem} onToggle={onToggleSubItem} />
        ))}
      </List>
    </div>
  );
}

// Função para adicionar um novo item
const handleAddItem = async (name, setItems, setError) => {
  if (!name.trim()) {
    setError('O nome do item não pode estar vazio.');
    return;
  }

  try {
    const response = await axios.post('/api/todo/items', { name });
    setItems((prevItems) => [...prevItems, response.data]);
    setError(null);
  } catch (err) {
    setError(`Erro ao adicionar item: ${err.message}`);
  }
};

// Componente principal da lista de tarefas
function ToDoList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/todo/items');
        if (response.data && response.data.length > 0) {
          setItems(response.data);
        } else {
          setError('A resposta da API está vazia.');
        }
      } catch (err) {
        setError(`Erro ao buscar itens: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  const toggleItemCompletion = async (itemId) => {
    try {
      const response = await axios.post(`/api/todo/items/${itemId}/toggle`);
      const updatedItem = response.data;
  
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? updatedItem : item
        )
      );
      setError(null);
    } catch (err) {
      setError(`Erro ao alternar item: ${err.message}`);
    }
  };
  
  // Função para alternar sub-itens
  const toggleSubItem = async (subItemId) => {
    try {
      const response = await axios.post(`/api/todo/subitems/${subItemId}/toggle`);
      const updatedSubItem = response.data;
  
      setItems((prevItems) =>
        prevItems.map((item) => {
          return {
            ...item,
            subItems: item.subItems.map((subItem) =>
              subItem.id === subItemId ? updatedSubItem : subItem
            ),
          };
        })
      );
      setError(null);
    } catch (err) {
      setError(`Erro ao alternar sub-item: ${err.message}`);
    }
  };
  

  return (
    <Container>
      <Typography variant="h4">To-Do List</Typography>
      {error && <Alert severity="error">{error}</Alert>}

      <List>
        {items.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            onToggleItem={() => toggleItem(item.id, setItems)}
            onToggleSubItem={(subItemId) => toggleSubItem(subItemId, setItems)}
            onDelete={(itemId) => {
              setItems((prevItems) =>
                prevItems.filter((it) => it.id !== itemId)
              );
              setError(null);
            }}
          />
        ))}
      </List>

      <TextField
        label="Novo Item"
        onBlur={(e) => handleAddItem(e.target.value, setItems, setError)}
        variant="outlined"
      />
      <Button
        onClick={() => handleAddItem('Novo item', setItems, setError)}
        startIcon={<AddIcon />}
        variant="contained"
      >
        Adicionar
      </Button>
    </Container>
  );
}

export default ToDoList;
