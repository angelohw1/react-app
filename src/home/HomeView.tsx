import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeView = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido!</Text>
            <Text style={styles.subtitle}>Has iniciado sesión correctamente.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eef2ff",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#4f46e5",
        marginBottom: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#4b5563",
        textAlign: "center",
    },
});

export default HomeView;
