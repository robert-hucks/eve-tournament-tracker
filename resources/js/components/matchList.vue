<script setup lang="ts">
import ChevronRight from '@primeicons/vue/chevron-right';
import Stopwatch from '@primeicons/vue/stopwatch';
import Trophy from '@primeicons/vue/trophy';
import DateTime from 'luxon';
import Select from 'primevue/select';
import Tag from 'primevue/tag';

const { head = true } = defineProps<{
    head?: boolean;
    data: Array<{
        tournament: {
            name: string;
        };
        id: number;
        name: string;
        scheduled_at: string;
        length: number;
        red_team: {
            name: string;
            score: number;
        };
        blue_team: {
            name: string;
            score: number;
        };
    }>;
}>();

defineSlots<{
    head: any;
}>();

const secondsToReadable = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
</script>

<template>
    <div class="flex flex-col rounded-md border border-panel-border bg-panel-background">
        <div v-if="head" class="p-2">
            <slot name="head">
                <Select
                    placeholder="Tournaments"
                    :options="[
                        { label: 'All Tournaments', value: 'all' },
                        { label: 'Alliance Tournament XXII', value: 'at-xxii' },
                        { label: 'Alliance Tournament XXI', value: 'at-xxi' },
                        { label: 'Alliance Tournament XX', value: 'at-xx' },
                        { label: 'Alliance Tournament XIX', value: 'at-xix' },
                        { label: 'Alliance Tournament XVIII', value: 'at-xviii' },
                        { label: 'Alliance Tournament XVII', value: 'at-xvii' },
                    ]"
                    optionLabel="label"
                    optionValue="value"
                />
            </slot>
        </div>
        <div
            v-for="match in data"
            :key="match.id"
            class="grid cursor-pointer grid-cols-[auto_1fr_auto_auto] border-t border-t-panel-border p-2 text-sm hover:bg-panel-background-hover"
        >
            <div class="flex flex-col gap-1">
                <span class="font-bold">{{ match.tournament.name }} · {{ match.name }}</span>
                <span class="text-xs text-gray-300">{{ match.scheduled_at }}</span>
            </div>

            <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <!-- Red Team -->
                <div
                    class="flex flex-row items-center justify-end gap-4 text-white"
                    :class="{
                        'text-white': match.red_team.score > match.blue_team.score,
                        'text-gray-300': match.red_team.score < match.blue_team.score,
                    }"
                >
                    <Tag v-if="match.red_team.score > match.blue_team.score" severity="warn" size="small">
                        <Trophy />
                    </Tag>
                    <span :class="{ 'font-bold': match.red_team.score > match.blue_team.score }">
                        {{ match.red_team.name }}
                    </span>
                    <span class="w-8 text-right text-xl font-bold text-gray-300">{{ match.red_team.score }}</span>
                </div>
                <!-- Divider -->
                <span class="text-xs text-gray-300">vs</span>
                <!-- Blue Team -->
                <div
                    class="flex flex-row items-center gap-4 text-white"
                    :class="{
                        'text-white': match.blue_team.score > match.red_team.score,
                        'text-gray-300': match.blue_team.score < match.red_team.score,
                    }"
                >
                    <span class="w-8 text-xl font-bold text-gray-300">{{ match.blue_team.score }}</span>
                    <span :class="{ 'font-bold': match.blue_team.score > match.red_team.score }">
                        {{ match.blue_team.name }}
                    </span>
                    <Tag v-if="match.blue_team.score > match.red_team.score" severity="warn" size="small">
                        <Trophy />
                    </Tag>
                </div>
            </div>

            <div class="flex flex-row items-center gap-2 text-gray-300">
                <Stopwatch />
                <span class="font-mono">{{ secondsToReadable(match.length) }}</span>
            </div>

            <div class="flex items-center pl-4">
                <ChevronRight size="16" />
            </div>
        </div>
    </div>
</template>
