<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-btn :to="href" outlined>
      <v-icon medium>mdi-close</v-icon>
    </v-btn>
    <v-text-field v-model="name" :counter="60" :rules="nameRules" label="Имя" required></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
    <v-text-field v-model="phone" :counter="17" :rules="phoneRules" label="Номер телефона" required v-mask="'+7 (###) ###-####'"></v-text-field>
    <v-text-field v-model="address" :counter="100" :rules="addressRules" label="Адрес" required></v-text-field>
    <v-select :items="allClients" item-text="group" label="Группа" v-model="select"></v-select>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="addClient()">Сохранить</v-btn>
    <v-btn color="error" class="mr-4" @click="reset">Очистить форму</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    href: "/",
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Это поле обязательно к заполнению",
      v => (v && v.length <= 60) || "Не более 20 символов"
    ],
    email: "",
    emailRules: [
      v => !!v || "Это поле обязательно к заполнению",
      v => /.+@.+\..+/.test(v) || "Неверный формат E-Mail"
    ],
    phone: "",
    isActive: true,
    phoneRules: [
      v => !!v || "Это поле обязательно к заполнению",
      v => (v && v.length <= 17) || "Не более 12 символов"
    ],
    address: "",
    addressRules: [
      v => !!v || "Это поле обязательно к заполнению",
      v => (v && v.length <= 100) || "Не более 100 символов"
    ],
    select: null,
    clientData: []
  }),

  computed: {
    allClients() {
      return this.$store.getters.allClients;
    }
  },

  mounted() {
    this.initClients();
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    initClients() {
      this.$store.dispatch("fetchClients");
    },
    addClient() {
      this.clientsData = this.$store.dispatch("addClients", {
        name: this.name,
        isActive: this.isActive,
        group: this.select,
        email: this.email,
        phone: this.phone,
        address: this.address
      });
      this.$router.push("/");
    }
  }
};
</script>