import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

interface Props {
    text: string;
    componente: () => void;
    type?: "sm" | "md" | "lg";
    iconName?: string;
}

export const ButtonWithIcon: React.FC<Props> = ({ text, fnDeOtroComponente, type = "md", iconName }) => {
    const height = type === "lg" ? 50 : type === "sm" ? 30 : 40;

    return (
        <TouchableOpacity style={[styles.button, { height }]} onPress={fnDeOtroComponente}>
            {iconName && <FontAwesome name={iconName as any} size={20} color="#fff" style={{ marginRight: 10 }} />}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        backgroundColor: "#0900ae",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: '90%',
        marginHorizontal: "auto",
        marginVertical: 10
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});