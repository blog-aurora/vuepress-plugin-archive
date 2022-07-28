import { defineClientConfig } from '@vuepress/client';
import AuroraArchive from './components/AuroraArchive.vue';
import './style/aurora-archive.css';

export default defineClientConfig({
    enhance({ app }) {
        app.component('AuroraArchive', AuroraArchive);
    }
});
