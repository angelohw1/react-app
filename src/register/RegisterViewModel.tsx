import { useState } from "react";
import { RegisterData } from "./Register-interface";

const RegisterViewModel = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const registrar = (): boolean => {
        if (!validarCampos()) return false;

        const data: RegisterData = { email, password, confirmPassword };

        // Aquí iría la lógica real de registro (API, etc.) usando "data"
        alert("Registro exitoso");
        return true;
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
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return false;
        }
        return true;
    };

    return {
        email,
        password,
        confirmPassword,
        setEmail,
        setPassword,
        setConfirmPassword,
        registrar,
    };
};

export default RegisterViewModel;

