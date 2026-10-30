<script lang="ts" setup>
import Search from '@primeicons/vue/search';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
</script>

<template>
    <nav class="px-2 flex h-14 w-full items-center gap-2 bg-panel-background border-b border-b-panel-border">
        <Avatar label="TT" />

        <Button text>Matches</Button>
        <Button text>Characters</Button>
        <Button text>Ships</Button>

        <IconField class="w-100 ml-auto">
            <InputIcon>
                <Search />
            </InputIcon>
            <InputText class="transition-all" type="text" placeholder="Search for characters, ships and teams" fluid />
        </IconField>
    </nav>
</template>
