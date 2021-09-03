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