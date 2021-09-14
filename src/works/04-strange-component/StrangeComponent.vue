<template>
  <div>
    <div v-if="canShowTopMessage">
      Top message
    </div>

    <div>
      <TestComponent/>
    </div>

    <button
        @click="showTopMessage()"
        v-if="!canShowTopMessage"
    >
      Show top message
    </button>
  </div>
</template>

<script>
/**
 * При моунте компонент TestComponent выведет в консоль "I`m mounted"
 *
 * После нажатия на кнопку "Show top message" компонент TestComponent
 * выведет в консоль еще два раза "I`m mounted"
 *
 * Вопрос: почему это происходит?
 * */

import TestComponent from "@/works/04-strange-component/TestComponent";
export default {
  name: 'StrangeComponent',
  components: {TestComponent},
  data() {
    return {
      canShowTopMessage: false,
    };
  },

  methods: {
    showTopMessage() {
      this.canShowTopMessage = true;

      setTimeout(() => {
        this.canShowTopMessage = false;
      }, 1000);
    },
  },
};
</script>