import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginView from "../../login/LoginView";
import RegisterView from "../../register/RegisterView";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={LoginView} />
                <Stack.Screen name="Register" component={RegisterView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};