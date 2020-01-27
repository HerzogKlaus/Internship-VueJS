<template>
  <v-app>
    <h1 :style="{fontSize: '20px'}" class="mx-5 pa-5">Клиенты этой группы</h1>
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
