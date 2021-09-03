<template>
  <p>{{ testProperty }}</p>
</template>

<script>
export default {
  name: 'BooleanProp',
  props: {
    testProperty: {
      type: Boolean,
    },
  },
};
</script>