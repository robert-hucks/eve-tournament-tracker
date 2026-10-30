import { createInertiaApp } from '@inertiajs/vue3';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';

const preset = definePreset(Aura, {
    semantic: {
        typography: {
            fontFamily: 'Inter',
        },
        primary: {
            50: '{orange.50}',
            100: '{orange.100}',
            200: '{orange.200}',
            300: '{orange.300}',
            400: '{orange.400}',
            500: '{orange.500}',
            600: '{orange.600}',
            700: '{orange.700}',
            800: '{orange.800}',
            900: '{orange.900}',
            950: '{orange.950}',
        },
    },
});

const appTitle: string = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => (title ? `${appTitle} | ${title}` : title),
    progress: {
        color: '#4B5563',
    },
    withApp: (app) =>
        app.use(PrimeVue, {
            theme: {
                preset: preset,
                options: {
                    cssLayer: {
                        name: 'primevue',
                        order: 'theme, base, primevue',
                    },
                },
            },
            license: import.meta.env.VITE_PRIMEUI_LICENSE_KEY,
        }),
});
