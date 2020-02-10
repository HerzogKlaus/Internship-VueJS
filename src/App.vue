<template>
  <v-app>
  <v-content class="ma-5 pa-1">
    <MainContent/>
  </v-content> 
  </v-app>
</template>
<script>
import MainContent from './components/MainContent';

export default {
  name: 'App',

  components: {
    MainContent
  },

  data: () => ({
    //
  }),
};
</script>
