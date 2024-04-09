import PropTypes from 'prop-types'; // Importa o PropTypes

function Lista({ itens }) {
  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>
          {typeof item === 'string' ? (
            item
          ) : (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.texto}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

// Define a PropTypes para a propriedade 'itens'
Lista.propTypes = {
  itens: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string, // Pode ser uma string simples
      PropTypes.shape({
        texto: PropTypes.string.isRequired, // Deve ter uma prop 'texto' do tipo string obrigatória
        url: PropTypes.string.isRequired, // Deve ter uma prop 'url' do tipo string obrigatória
      }),
    ])
  ).isRequired, // É uma matriz obrigatória
};

export default Lista;
