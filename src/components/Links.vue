<template>
  <main class="links">
    <a href="https://google.com" target="_blank">#######</a>
    <icon name="envelope"/>
    <a href="https://google.com" target="_blank">#######</a>
    <icon name="map-marked-alt"/>
    <a href="https://google.com" target="_blank">#######</a>
    <icon name="mobile-alt"/>
    <a href="https://google.com" target="_blank">#######</a>
    <icon brand name="github"/>
    <a href="https://google.com" target="_blank">#######</a>
    <icon brand name="linkedin"/>
    <a href="https://google.com" target="_blank">#######</a>
    <icon brand name="medium"/>
    <a href="https://google.com" target="_blank">#######</a>
    <icon brand name="vuejs"/>
  </main>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: { Icon },
};
</script>

<style lang="scss" scoped>
.links {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-rows: 2em;
  padding: 10px 15px;
  text-align: right;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: center;

  > a {
    justify-self: right;
    font-weight: normal;
  }

  > i {
    justify-self: center;
  }

  > * {
    padding: 0;
  }
}
</style>
