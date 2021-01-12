<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="1234" />
    <h1>124</h1>
    <v-button>123</v-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import VButton from '../../lib/v-button'

export default {
  name: "Home",
  components: {
    HelloWorld,
    VButton
  }
};
</script>
