import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: '0.0.0.0',  // This ensures the dev server listens on all network interfaces
        port: process.env.PORT || 3000,  // Use the dynamic port assigned by Render, fallback to 3000 for local development
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
