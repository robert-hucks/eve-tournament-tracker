<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import MatchList from '@/components/matchList.vue';
import Base from '@/layouts/base.vue';

defineOptions({ layout: Base });

const matchData = [
    {
        tournament: {
            name: 'AT XXI',
        },
        id: 1,
        name: '62 / 4',
        scheduled_at: '22:40 · Sat 26 Oct, 2025',
        length: 496,
        red_team: {
            name: 'Meta Reloaded',
            score: 50,
        },
        blue_team: {
            name: 'The Tuskers Co.',
            score: 200,
        },
    },
    {
        tournament: {
            name: 'AT XXI',
        },
        id: 2,
        name: '62 / 3',
        scheduled_at: '22:00 · Sat 26 Oct, 2025',
        length: 600,
        red_team: {
            name: 'Meta Reloaded',
            score: 180,
        },
        blue_team: {
            name: 'The Tuskers Co.',
            score: 42,
        },
    },
    {
        tournament: {
            name: 'AT XXI',
        },
        id: 3,
        name: '62 / 2',
        scheduled_at: '21:20 · Sat 26 Oct, 2025',
        length: 600,
        red_team: {
            name: 'Meta Reloaded',
            score: 80,
        },
        blue_team: {
            name: 'The Tuskers Co.',
            score: 115,
        },
    },
    {
        tournament: {
            name: 'AT XXI',
        },
        id: 4,
        name: '62 / 1',
        scheduled_at: '20:40 · Sat 26 Oct, 2025',
        length: 867,
        red_team: {
            name: 'Meta Reloaded',
            score: 0,
        },
        blue_team: {
            name: 'The Tuskers Co.',
            score: 200,
        },
    },
];
</script>

<template>
    <Head title="Tournaments" />

    <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2">
            <h1 class="font-bold text-gray-300 uppercase">Matches</h1>

            <MatchList :data="matchData" />
        </div>
    </div>
</template>
