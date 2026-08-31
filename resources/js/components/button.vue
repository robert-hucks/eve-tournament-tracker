<script lang="ts" setup>
defineEmits(['click']);
</script>

<template>
    <button
        class="px-3 py-1 border cursor-pointer"
        @click="() => $emit('click')"
    >
        <slot/>
    </button>
</template>
