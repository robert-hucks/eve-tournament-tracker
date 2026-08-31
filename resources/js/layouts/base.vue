<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

</script>

<template>
    <div class="absolute w-full">
        <nav class="relative top-0 flex flex-row justify-end gap-2 shadow p-2">
            <Link href="#">...</Link>
        </nav>

        <slot />
    </div>
</template>
