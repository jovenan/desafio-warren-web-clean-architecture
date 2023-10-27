<script setup lang="ts">
    defineProps<{
        close: boolean,
    }>();
    defineEmits<{
        closed: [id: boolean]
    }>()
</script>

<template>
    <div class="overlay" :style="close ? 'display: flex' : 'display: none'">
        <div class="modal">
            <span class="close" @click="$emit('closed', true)">X</span>
            <slot></slot> 
        </div>
    </div>
</template>

<style scoped lang="less">
    .overlay {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;

        .modal {
            position: relative;
            background-color: #fff;
            width: 600px;
            height: 300px;
            border-radius: 20px;

            .close {
                width: 20px;
                cursor: pointer;
                position: absolute;
                top: 10px;
                right: 10px;
            }
        }
    }
</style>