<template>
<div id="output">
    {{ props.value }}
</div>
</template>

<script setup>
const props = defineProps({
    value: String
})
</script>

<style scoped>
#output {
    height: 100%;
    background: var(--color-display-background);
    color: var(--color-display-text);

    text-align: left;
    padding: 10px;

    font-size: 25px;
}
</style>