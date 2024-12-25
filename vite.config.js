import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {src: 'public/css/css/css_javascript/*.css', dest: 'css' },
                {src: 'public/js/*.js', dest: 'js' },
                {src: 'public/assets/*.png', dest: 'images'},
                {src: 'public/assets/*.jpeg', dest: 'imagens'}
            ]
        })
    ]
});