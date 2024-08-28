// vite.config.js or vite.config.ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	server: {
		port: 2403, // Set your custom port here
		open: true, // This will open the browser automatically
	},
})
