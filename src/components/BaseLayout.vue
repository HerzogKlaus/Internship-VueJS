<template>
  <v-container class="d-flex flex-row">
    <v-navigation-drawer>
      <v-col cols="12" md="12" sm="12">
        <left-panel>
          
        </left-panel>
      </v-col>
    </v-navigation-drawer>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <slot>

        </slot>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LeftPanel from "./LeftPanel";
export default {
  components: {
    LeftPanel,
  },
  data: () => ({})
};
</script>