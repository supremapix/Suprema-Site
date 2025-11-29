import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente baseadas no modo (development/production)
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    // O objeto 'define' substitui strings globais durante o build
    define: {
      // Evita "Uncaught ReferenceError: process is not defined"
      'process.env': {}, 
    },
  };
});