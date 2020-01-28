<template>
  <v-app>
  <v-content class="ma-5 pa-1">
    <HelloWorld/>
  </v-content> 
  </v-app>
</template>
<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
