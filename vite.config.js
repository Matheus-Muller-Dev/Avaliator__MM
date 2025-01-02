import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    open: 'public/index.html', // Abre automaticamente o index.html
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Cria um alias para a pasta src
      'firebase-config': path.resolve(__dirname, './src/firebase/firebaseconfig.js'), // Alias direto para firebaseconfig.js
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'public/index.html', // Garante que o ponto de entrada é index.html
      },
    },
  },
});
