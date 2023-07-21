
interface ConfigInterface {
    port: number;
    mongoUrl: string;
    jwt_key: string;
}

export const config: ConfigInterface = {
    // Server port
    "port": 3000,
    // MongoDB connection link
    "mongoUrl": "mongodb://localhost:27017/notepad-js",
    // JWT secret key\
    "jwt_key": "secret",
};