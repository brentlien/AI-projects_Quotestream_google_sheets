import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/webhook': {
        target: 'https://localhost:5678',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/webhook/, '/webhook-test/122780b8-983f-4b2f-b717-1ca45a90b417')
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
