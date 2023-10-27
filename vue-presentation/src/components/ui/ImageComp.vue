<script setup lang="ts">
    defineProps<{
        src: string,
        alt: string,
        width: number,
        height?: number,
        isLargestContentfulPaint: boolean
    }>();
</script>

<template>
    <img 
        :src="src" 
        :alt="alt"
        :width="width"
        :height="height ? height : 'auto'"
        :loading="isLargestContentfulPaint ? 'eager' : 'lazy'"
        :fetchPriority="isLargestContentfulPaint ? 'high' : 'low'"
    />
</template>