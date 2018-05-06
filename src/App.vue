<template>
  <div id="app">
    <the-heading/>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import theHeading from "./components/header/TheHeading";
export default {
  components: {
    theHeading
  }
};
</script>

<style lang="scss">
@import "./style/base";
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
