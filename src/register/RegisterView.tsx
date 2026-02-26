import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles as loginStyles } from "../login/LoginStyle";
import { ButtonWithIcon } from "../sharedComponents/ButtonWithIcon";
import { RootStackParamList } from "presentation/navigation/RootNavigator";

const RegisterView = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleRegister = () => {
        if (!email.includes("@")) {
            alert("Correo electrónico no válido, hace falta '@'");
            return;
        }
        if (password.length < 6) {
            alert("La contraseña debe tener mínimo 6 caracteres");
            return;
        }
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // Aquí iría la lógica real de registro (API, etc.)
        alert("Registro exitoso");
        navigation.navigate("Home");
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
            <View style={{ alignItems: "center" }}>
                <Text style={loginStyles.titulo}>Crear cuenta</Text>

                <Text style={loginStyles.label}>Correo electrónico</Text>
                <TextInput
                    style={loginStyles.textInput}
                    placeholder="usuario@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    value={email}
                />

                <Text style={loginStyles.label}>Contraseña</Text>
                <TextInput
                    style={loginStyles.textInput}
                    placeholder="••••••••"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                />

                <Text style={loginStyles.label}>Confirmar contraseña</Text>
                <TextInput
                    style={loginStyles.textInput}
                    placeholder="••••••••"
                    secureTextEntry
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                />

                <ButtonWithIcon
                    text="Registrarme"
                    fnDeOtroComponente={handleRegister}
                    type="lg"
                    iconName="user-plus"
                />
            </View>
        </ScrollView>
    );
};

export default RegisterView;
