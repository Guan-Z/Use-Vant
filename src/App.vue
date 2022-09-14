<template>
  <div>
    <ChooseTheme />
    <VantPaging />
  </div>
</template>

<script>
import ChooseTheme from './components/ChooseTheme.vue'
import VantPaging from './components/VantPaging.vue'

export default {
  name: 'App',
  components: {
    ChooseTheme,
    VantPaging
  },
  methods: {
  },
  beforeMount(){
  }
}
</script>

<style>
</style>
