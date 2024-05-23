import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginCard from './components/loginCard';
import Upper from './components/upper';
import Title from './components/title';
import Inputs from './components/inputs';
import FooterButtons from './components/FooterButtons';
import { Typography } from '@mui/material';
import { loginApi } from '../../services/api';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async () => {
        try {
            const userData = await loginApi(email, password);
            navigate("/");
        } catch (error) {
            setError("Erro ao fazer login: " + error.message);
        }
    }

    return (
        <LoginCard>
            <Upper />
            <Title content={"Log In"} />
            <Typography color={"red"}>{error}</Typography>
            <Inputs
                content={[
                    {
                        key: 1,
                        label: 'Email',
                        value: email,
                        changeValue: handleChangeEmail,
                        type: 'email'
                    },
                    {
                        key: 2,
                        label: 'Senha',
                        value: password,
                        changeValue: handleChangePassword,
                        type: 'password'
                    }
                ]}
            />
            <FooterButtons
                buttons={[
                    { key: 2, text: "Login", color: "primary", type: "submit", onClickHandler: handleSubmit, fullWidth: false }
                ]}
            />
        </LoginCard>
    );
}
