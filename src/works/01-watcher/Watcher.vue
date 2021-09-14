<template>
  <p>I'm Test component</p>
</template>

<script>
/**
 * Lifecycle hooks
 *
 * Есть пропертя amount
 * Есть вотчер, который смотрит за этой пропертей и при изменениях выводит в консоль новое знначение
 *
 * В каждом lifecycle хуке мы меняем значение amount
 *
 * Вопрос: что будет выведено в консоль и почему именно так?
 * */
export default {
  name: 'Watcher',
  data() {
    return {
      amount: 0,
    };
  },

  watch: {
    amount(newVal) {
      console.log(newVal);
    },
  },

  beforeCreate() {
    this.amount = 1;
  },
  created() {
    this.amount = 2;
  },
  beforeMount() {
    this.amount = 3;
  },
  mounted() {
    this.amount = 4;
  },
  beforeDestroy() {
    this.amount = 5;
  },
  destroyed() {
    this.amount = 6;
  },
};
</script>