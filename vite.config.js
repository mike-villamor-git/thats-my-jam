import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

require('./build/' + cmd + '.js');
path.join(__dirname, 'assets/' + viewName);