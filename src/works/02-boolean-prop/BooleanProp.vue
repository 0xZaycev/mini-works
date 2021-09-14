<template>
  <p>{{ testProperty }}</p>
</template>

<script>
/**
 * В чем особенность булевых пропов во vue?
 * */
export default {
  name: 'BooleanProp',
  props: {
    testProperty: {
      type: Boolean,
    },
  },
};
</script>