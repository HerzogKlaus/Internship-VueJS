<template>
  <div class="d-flex flex-row">
    <v-navigation-drawer>
      <v-col cols="12" md="12" sm="12">
        <left-panel></left-panel>
      </v-col>
    </v-navigation-drawer>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <h1 class="title">Клиенты</h1>
        <v-data-table
          class="col-lg-12 col-md-12 col-sm-12 font-weight-bold"
          :headers="headers"
          :items="clientArray"
          hide-default-footer
        >
          <template v-slot:item.action="{item}">
            <v-icon small @click="deleteItem(item)">mdi-close</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LeftPanel from "../components/LeftPanel";
export default {
  components: {
    LeftPanel
  },
  data: () => ({
    headers: [
      { text: "ФИО", align: "left", value: "name", sortable: false },
      { text: "НОМЕР ТЕЛЕФОНА", value: "phone", sortable: false },
      { text: "ГРУППА", value: "group", sortable: false },
      { text: "", value: "action", sortable: false }
    ]
  }),
  computed: {
    clientArray() {
      this.$store.dispatch('clientArrayFormation');
      return this.$store.getters.clientGetter;
    },
  },

};
</script>