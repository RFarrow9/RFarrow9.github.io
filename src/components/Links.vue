<template>
  <main class="links">
    <a href="mailto:rob.farrow+cv@hotmail.com" target="_blank">rob.farrow+cv@hotmail.com</a>
    <icon name="envelope"/>
    <a href="https://goo.gl/maps/jpvoQb3vADQ5AK8B6" target="_blank">Bicester, Oxfordshire</a>
    <icon name="map-marked-alt"/>
    <a href="tel:07938128115" target="_blank">07938 128115</a>
    <icon name="mobile-alt"/>
    <a href="https://github.com/RFarrow9?tab=repositories" target="_blank">RFarrow9</a>
    <icon brand name="github"/>
    <a href="https://www.linkedin.com/in/robertfarrow1/" target="_blank">LinkedIn</a>
    <icon brand name="linkedin"/>
    <a href="https://medium.com/@rob-f" target="_blank">Medium</a>
    <icon brand name="medium"/>
  </main>
</template>

<script>
import Icon from "./Icon";
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
