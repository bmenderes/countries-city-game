<template>
  <div>
    <div v-for="city in cities" :key="city.cca2">
      {{ city.name.common }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: this.$store.state.cities,
    };
  },
};
</script>