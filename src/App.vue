<template>
<div class="main-container">
  <calculator-display 
    :input="state.input"
    :output="state.output" />
  <div class="function"></div>
  <calculator-keypad 
    @decimal="decimal"
    @number="append"
    @op="operator"
    @mem="memory"
    @eval="evaluate"
    @clear="clear"
    @backspace="backspace"
  />
  <div class="safearea">
    <!-- Empty area -->
  </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'

import CalculatorDisplay from '@/components/CalculatorDisplay.vue'
import CalculatorKeypad from '@/components/CalculatorKeypad.vue'

import { operationToSign } from '@/services/calculatorService'

const state = reactive({
  input: '',
  output: '',
  cursorPosition: 0,
  evaluated: false
})

function decimal() {
  if (state.evaluated) {
    clear()
  }
  state.input = state.input.concat('.')
}

function append(i) {
  if (state.evaluated) {
    clear()
  }
  state.input = state.input.concat(i.toString())
}

function operator(op) {
  if (state.evaluated) {
    clear()
  }

  const sign = operationToSign(op)
  state.input = state.input.concat(sign)
}

function memory(action) {
  console.log('memory', action)
}

function evaluate() {
  state.output = eval(state.input)
  state.evaluated = true
}

function clear() {
  state.input = ''
  state.output = ''
  state.cursorPosition = 0
  state.evaluated = false
}

function backspace() {
  if (state.input.length > 0) { 
    state.input = state.input.slice(0, -1)
  }
}

</script>

<style scoped>
.main-container {
  height: 100%;

  display: grid;
  grid-template-columns: [main] 100%;
  grid-template-rows: 110px auto 350px [safearea] 34px [safearea-end];
}
</style>
