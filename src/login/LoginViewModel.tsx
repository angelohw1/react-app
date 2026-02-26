// src/login/LoginViewModel.tsx
import { useState } from "react";
import { LoginData } from "./login-interface";

const LoginViewModel = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const iniciarSesion = async () => {
        if (!validarCampos()) return;

        const data: LoginData = { email, password };

    };

    const validarCampos = (): boolean => {
        if (!email.includes("@")) {
            alert("Correo electrónico no válido, hace falta '@'");
            return false;
        }
        if (password.length < 6) {
            alert("La contraseña debe tener mínimo 6 caracteres");
            return false;
        }
        return true;
    };

    return {
        email,
        password,
        setEmail,
        setPassword,
        iniciarSesion,
    };
};

export default LoginViewModel;