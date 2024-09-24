import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';

export default defineConfig({
  worker: {
      format: "es",

},
	server: {
		https: true,
		proxy: {}
	},
  build: {
    target: "es2022"

  },

	plugins: [sveltekit(), mkcert(), crossOriginIsolation()]
});
