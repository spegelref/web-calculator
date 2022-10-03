<template>
<div class="keypad">
  <div class="five-grid">
    <button
      class="col1 line1"
      @click="$emit('op', 'paren_start')"
    >
      (
    </button>
    <button
      class="col2 line1"
      @click="$emit('op', 'paren_end')"
    >
      )
    </button>
    <button
      class="col3 line1 memory"
      @click="$emit('mem', 'recall')"
    >
      RCL
    </button>
    <button
      class="col4 line1 memory"
      @click="$emit('mem', 'store')"
    >
      STO
    </button>
    <button
      class="col5 line1 memory"
      @click="$emit('mem', 'ans')"
    >
      ANS
    </button>
  </div>
  <div class="four-grid">
    <button
      class="col1 line4"
      @click="$emit('number', 0)"
    >
      0
    </button>
    <button 
      class="col1 line3" 
      @click="$emit('number', 1)"
    >
      1
      </button>
    <button 
      class="col2 line3" 
      @click="$emit('number', 2)"
    >
      2
      </button>
    <button 
      class="col3 line3" 
      @click="$emit('number', 3)"
    >
      3
      </button>
    <button 
      class="col1 line2" 
      @click="$emit('number', 4)"
    >
      4
      </button>
    <button 
      class="col2 line2" 
      @click="$emit('number', 5)"
    >
      5
      </button>
    <button 
      class="col3 line2" 
      @click="$emit('number', 6)"
    >
      6
      </button>
    <button 
      class="col1 line1" 
      @click="$emit('number', 7)"
    >
      7
      </button>
    <button 
      class="col2 line1" 
      @click="$emit('number', 8)"
    >
      8
      </button>
    <button 
      class="col3 line1" 
      @click="$emit('number', 9)"
    >
      9
      </button>
    <button 
      class="col4 line4 operator"
      @click="$emit('op', 'add')"
    >
      &#x002b;
      </button>
    <button 
      class="col4 line3 operator" 
      @click="$emit('op', 'sub')"
    >
      &#x2212;
    </button>
    <button 
      class="col4 line2 operator" 
      @click="$emit('op', 'mul')"
    >
      &#x00d7;
    </button>
    <button 
      class="col4 line1 operator" 
      @click="$emit('op', 'div')"
    >
      &#x00f7;
    </button>
    <button 
      class="col2 line4" 
      @click="$emit('decimal')"
    >
      .
    </button>
    <button 
      class="col3 line4 operator" 
      @click="$emit('op', 'neg')"
    >
      (&#x002d;)
    </button>
    <button 
      class="col1 line5 clear" 
      @click="$emit('clear')"
    >
      C
      </button>
    <button 
      class="col2 line5 backspace"
      @click="$emit('backspace')"
    >
      BS
      </button>
    <button 
      class="eval" 
      @click="$emit('eval')"
    >
      EVAL
      </button>
  </div>
</div>
</template>

<script setup>
const emit = defineEmits([
  'decimal',
  'number',
  'op',
  'eval',
  'backspace',
  'clear',
  'mem'
])
</script>

<style scoped>
.keypad, .keypad > .four-grid, .keypad .five-grid {
  display: grid;
  gap: 0px 0px;
  /* safari */
  grid-gap: 0px 0px;
  justify-items: stretch;
  align-items: stretch;
}
.keypad {
  height: 100%;
  grid-template-columns: [main] 100%;
  grid-template-rows: 50px auto;
}
.keypad > .five-grid {
  grid-template-columns: [col-start col1] 20% [col2] 20% [col3] 20% [col4] 20% [col5] 20% [col-end];
  grid-template-rows: [line1] 100%;
}
.keypad > .four-grid {
  grid-template-columns: [col-start col1] 25% [col2] 25% [col3] 25% [col4] 25% [col-end];
  grid-template-rows: [line1] 20% [line2] 20% [line3] 20% [line4] 20% [line5] 20%;
}

.line1 {
  grid-row: line1;
}
.line2 {
  grid-row: line2;
}
.line3 {
  grid-row: line3;
}
.line4 {
  grid-row: line4;
}
.line5 {
  grid-row: line5;
}
.col1 {
  grid-column: col1;
}
.col2 {
  grid-column: col2;
}
.col3 {
  grid-column: col3;
}
.col4 {
  grid-column: col4;
}
.four-grid > .eval {
  grid-row: line5;
  grid-column: col3 / col-end;
}

/* Colors */
.keypad button {
  border: 1px solid grey;
  border-radius: 0;
  margin: 0px;
  color: black;
}
.operator {
  background: lightgray;
}
.keypad button.eval {
  background: green;
  color: white
}
.keypad button.clear {
  background: maroon;
  color: white
}
.backspace {
  background: orange;
}
.memory {
  background: lightblue;
}

.keypad button.eval {
  border-color: green;
}
.keypad button.clear {
  border-color: maroon;
}
.keypad button.backspace {
  border-color: orange;
}
</style>
