import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titulo: {
        width: '90%',
        marginTop: 50,
        marginHorizontal: "auto",
        textAlign: "center",
        fontSize: 28,
        fontWeight: "700",
        color: "#4f46e5",
        marginBottom: 30,
    },
    label: {
        fontSize: 16,
        width: '90%',
        marginHorizontal: "auto",
        marginBottom: 8,
        color: "#374151",
        fontWeight: "500",
    },
    textInput: {
        width: '90%',
        marginHorizontal: "auto",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#c7d2fe",
        backgroundColor: "#f3f4f6",
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        color: "#111827",
    },
    buttonSubmit: {
        width: '90%',
        marginHorizontal: "auto",
        borderRadius: 10,
        paddingVertical: 14,
        backgroundColor: "#6366f1",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    registroContainer: {
        marginTop: 25,
        alignItems: "center",
    },
    registroText: {
        color: "#4f46e5",
        textDecorationLine: "underline",
        fontSize: 14,
    },
});