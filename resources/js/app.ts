import { createInertiaApp } from '@inertiajs/vue3';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';

const preset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{surface.50}',
            100: '{surface.100}',
            200: '{surface.200}',
            300: '{surface.300}',
            400: '{surface.400}',
            500: '{surface.500}',
            600: '{surface.600}',
            700: '{surface.700}',
            800: '{surface.800}',
            900: '{surface.900}',
            950: '{surface.950}',
            color: 'light-dark({primary.950}, {primary.50})',
            contrastColor: 'light-dark(#ffffff, {primary.950})',
            hoverColor: 'light-dark({primary.800}, {primary.200})',
            activeColor: 'light-dark({primary.700}, {primary.300})',
        },
        highlight: {
            background: 'light-dark({primary.950}, {primary.50})',
            focusBackground: 'light-dark({primary.700}, {primary.300})',
            color: 'light-dark(#ffffff, {primary.950})',
            focusColor: 'light-dark(#ffffff, {primary.950})',
        },
    },
});

const title = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => (title ? `${title} | ${title}` : title),
    progress: {
        color: '#4B5563',
    },
    withApp: (app) =>
        app.use(PrimeVue, {
            theme: {
                preset: preset,
                options: {
                    darkModeSelector: false,
                    cssLayer: {
                        name: 'primevue',
                        order: 'theme, base, primevue',
                    },
                },
            },
            license: import.meta.env.VITE_PRIMEUI_LICENSE_KEY,
        }),
});
