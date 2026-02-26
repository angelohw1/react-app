import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./RegisterStyle";
import { ButtonWithIcon } from "../sharedComponents/ButtonWithIcon";
import { RootStackParamList } from "presentation/navigation/RootNavigator";
import viewModel from "./RegisterViewModel";

const RegisterView = () => {
    const {
        email,
        password,
        confirmPassword,
        setEmail,
        setPassword,
        setConfirmPassword,
        registrar,
    } = viewModel();

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleRegister = () => {
        const ok = registrar();
        if (ok) {
            navigation.navigate("login");
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.titulo}>Unete</Text>

                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="usuario@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    value={email}
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="••••••••"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                />

                <Text style={styles.label}>Confirmar contraseña</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="••••••••"
                    secureTextEntry
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                />

                <ButtonWithIcon
                    text="Registrarme"
                    componente={handleRegister}
                    type="lg"
                    iconName="user-plus"
                />
            </View>
        </ScrollView>
    );
};

export default RegisterView;
