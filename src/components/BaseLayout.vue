<template>
  <v-container class="d-flex flex-row">
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <LeftPanel></LeftPanel>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <MainContent></MainContent>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LeftPanel from "./LeftPanel";
import MainContent from "./MainContent";
export default {
  components: {
    LeftPanel,
    MainContent
  },
  data: () => ({})
};
</script>