import { defineConfig } from 'vite';
import rewriteAll from 'vite-plugin-rewrite-all';
 import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [rewriteAll,react()],
});
