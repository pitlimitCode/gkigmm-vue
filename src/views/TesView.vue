<template>
  <div class="tes">
    <Navv />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Navv from '@/components/Nav.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'TesView',
  components: {
    HelloWorld,
    Navv
  }
}
</script>
