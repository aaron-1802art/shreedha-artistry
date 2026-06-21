import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        refunds: resolve(__dirname, 'refunds.html'),
        shipping: resolve(__dirname, 'shipping.html'),
        terms: resolve(__dirname, 'terms.html'),
        shop: resolve(__dirname, 'shop.html')
      }
    }
  }
});
