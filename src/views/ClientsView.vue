<template>
  <div>
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
            class="col-lg-12 col-md-12 col-sm-12 font-weight-bold elevation-1"
            :headers="headers"
            :items="clients"
          >
            <template v-slot:item.edit="{ item }">
              <ClientsEdit v-bind:dataClient="item"></ClientsEdit>
            </template>

            <template v-slot:item.action="{item}">
              <v-icon small @click="deleteClients(item.id)">mdi-close</v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </div>
    <div class="d-flex flex-row align-center justify-center">
      <v-btn class="mt-1 add" height="57px" color="primary" :to="href">Добавить клиента</v-btn>
    </div>
  </div>
</template>

<script>
import LeftPanel from "../components/LeftPanel";
import ClientsEdit from "../views/ClientsEdit"
export default {
  components: {
    LeftPanel,
    ClientsEdit
  },
  data: () => ({
    headers: [
      { text: "ФИО", align: "left", value: "name", sortable: false },
      { text: "НОМЕР ТЕЛЕФОНА", value: "phone", sortable: false },
      { text: "ГРУППА", value: "group", sortable: false },
      { text: "", value: "action", sortable: false },
      { text: "", value: "edit", sortable: false }
    ],
    href: "/AddClients",
    hrefToEdit: "/EditClients"
  }),

  computed: {
    clients() {
      return this.$store.getters.allClients;
    }
  },

  mounted() {
    this.initClients();
  },

  methods: {
    initClients() {
      this.$store.dispatch("fetchClients");
    },

    deleteClients(id) {
      this.clientsData = this.$store.dispatch("deleteClients", {
        id: id
      });
    }
  }
};
</script>