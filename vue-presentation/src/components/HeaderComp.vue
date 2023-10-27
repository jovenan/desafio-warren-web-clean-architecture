<script setup lang="ts">
    import ImageComponent from './ui/ImageComp.vue';
</script>
<template>
    <header>
        <ImageComponent 
            src="https://warren.com.br/images/logo.svg"
            alt="Warren investimentos"
            :width="100"
            :height="50"
            :is-largest-contentful-paint="true"
        />
    </header>
</template>

<style scoped lang="less">
    @import "../assets/variables.less";

    header {
        background-color: @primary;
        box-shadow: 5px 5px 50px 5px rgba(0,0,0,0.5);
        width: 100%;
        height: 100px;

        display: flex;
        align-items: center;

        img {
            padding-left: 3%;
            width: 100px;

            @media (min-width: @screen-md) {
                width: 120px;
            }
            @media (min-width: @screen-lg) {
                width: 150px;
            }
        }
    }
</style>