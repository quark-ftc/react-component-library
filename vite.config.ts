import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'src/styles/variables.scss';`,
      },
    },
  },
});
