// Datos que enviamos al login
export type LoginData = {
    email: string;
    password: string;
};

// Datos que recibimos del backend
export interface UserInterface {
    id: number;
    email: string;
    username: string;
    token: string;
    refresh_token: string;
}