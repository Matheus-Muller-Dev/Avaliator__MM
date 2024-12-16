import { defineConfig } from "vite";

export default defineConfig({
    server: {
        https:{
            key: './hey.pem',
            cert: './cert.pem',
        },
        port: 3000,
    }
})