import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./LoginStyle";
import viewModel from "./LoginViewModel";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "presentation/navigation/RootNavigator";
import { ButtonWithIcon } from "../sharedComponents/ButtonWithIcon";

const LoginView = () => {
    const { iniciarSesion, setEmail, setPassword } = viewModel();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.titulo}>Iniciar sesión</Text>

                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="usuario@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="••••••••"
                    secureTextEntry
                    onChangeText={setPassword}
                />

                <ButtonWithIcon
                    text="Entrar"
                    fnDeOtroComponente={() => {
                        iniciarSesion();
                        navigation.navigate("Home");
                    }}
                    type="lg"
                    iconName="sign-in"
                />

                <TouchableOpacity
                    style={styles.registroContainer}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={styles.registroText}>¿No tienes cuenta? Registrarme</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default LoginView;