<template>
<div class="main-container">
  <div class="display">
    <calculator-display :value="text" />
  </div>
  <div class="function">
  </div>
  <div class="keypad">
    <calculator-keypad 
      @decimal="decimal"
      @number="append"
      @op="operator"
      @mem="memory"
      @eval="evaluate"
    />
  </div>
  <div class="safearea">
    <!-- Empty area -->
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'

import CalculatorDisplay from '@/components/CalculatorDisplay.vue'
import CalculatorKeypad from '@/components/CalculatorKeypad.vue'

const text = ref('')

function decimal() {
    console.log('comma')
    text.value = text.value.concat(',')
}

function append(i) {
    console.log('Append number', i)
    text.value = text.value.concat(i.toString())
}

function operator(op) {
  console.log('operator', op)
}

function memory(action) {
  console.log('memory', action)
}

function evaluate() {
  console.log('evaluate')
}
</script>

<style scoped>
.main-container {
  height: 100%;

  display: grid;
  grid-template-columns: [main] 100%;
  grid-template-rows: 100px auto 375px [safearea] 34px [safearea-end];
}

.display {
}

.function {
}

.keypad {
}
</style>
