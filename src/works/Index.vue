<template>
  <div class="links">
    <RouterLink class="link" :to="route.path" :key="route.path" v-for="route in routes">
      {{ route.component.name }}
    </RouterLink>
  </div>
</template>

<script>
import {routes} from "@/router";

export default {
  name: "Index",
  computed: {
    routes() {
      return routes
          .filter((r, i) => i !== 0);
    },
  },
}
</script>

<style scoped>
.links {
  display: flex;

  flex-direction: column;
}
.links .link {
  color: blue;
}
</style>