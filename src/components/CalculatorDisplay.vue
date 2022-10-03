<template>
<div class="display">
    <div id="input">
        {{ props.input }}
    </div>
    <div id="output">
        {{ props.output }}
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    input: String,
    output: String
})
</script>

<style scoped>
.display {
    height: 100%;
    padding: 10px;
    background: var(--color-display-background);
    color: var(--color-display-text);
}

#input, #output {
    height: 50%;
    display: block;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 400;
    line-height: 55px;
    font-size: 25px;
}

#input {
    text-align: left;
}

#output {
    text-align: right;
}
</style>