import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Define a pasta de saída
    emptyOutDir: true, // Limpa a pasta dist antes do build
    rollupOptions: {
      input: {
        main: './public/index.html',
        avaliacao: './public/avaliacoes.html',
        menu: './public/menu.html',
        painel: './public/painel.html',
        reset: './public/reset.html',
      },
    },
  },
});
