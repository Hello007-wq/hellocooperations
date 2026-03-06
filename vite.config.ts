import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    allowedHosts: true,
    proxy: {
      '/n8n-chat': {
        target: 'https://basicchatbot77.app.n8n.cloud',
        changeOrigin: true,
        secure: true,
        rewrite: () => '/webhook/1c3a1dfc-cb31-4178-b752-c0e74773290c/chat',
      },
    },
  }
});
