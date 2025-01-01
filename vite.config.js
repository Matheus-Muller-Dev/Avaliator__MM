import { defineConfig } from 'vite';

export default defineConfig({
    root: './public',
    build: {
        outDir: 'dist',  // Certifique-se de que os arquivos de build vão para 'dist'
        rollupOptions: {
          input: '/index.html'  // Especifique explicitamente o arquivo de entrada
        }  // Certifique-se de que o Vite está gerando a pasta dist
  },
  server: {
    open: '/index.html', // Isso abrirá o arquivo index.html no navegador automaticamente
  },
});