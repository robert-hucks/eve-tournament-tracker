<script setup lang="ts">
import NavBar from '@/components/navBar.vue';

</script>

<template>
    <div class="relative mt-18">
        <NavBar class="fixed top-0" />

        <div class="px-4">
            <slot />
        </div>
    </div>
</template>
