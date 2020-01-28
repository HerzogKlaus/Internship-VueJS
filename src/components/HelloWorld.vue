<template>
    <v-container class="d-flex flex-column">
      <h1 class="title">Клиенты этой группы</h1>
      <v-data-table
        class="col-lg-10 font-weight-bold col-md-12 col-sm-12"
        :headers="headers"
        :items="clients"
        hide-default-footer>
          <template v-slot:item.action="{item}">
            <v-icon
              small
              @click="deleteItem(item)"
            >
          mdi-close
            </v-icon>
          </template>
      </v-data-table>
      <div class="add-client d-flex flex-row justify-space-around align-center col-lg-10 flex-wrap">
        <div class="select-block col-lg-7">
          <v-select
            :items="items"
            label="Выбрать из списка"
            outlined
          >
          </v-select>
        </div>
      <v-btn class="mt-n7 add flex-wrap align-center" height="57px" outlined color = 'grey'>
        Добавить
      </v-btn>
      <p class="ma-0 mt-n7 body-2 font-weight-bold">или</p>
      <v-btn text small class="new-client-create ma-0 mt-n7 font-weight-bold body-2">
      Создать нового клиента
      </v-btn>
      </div>
      <p class="ma-0 font-weight-bold body-2">Для того, чтобы отредактировать или удалить клиентов из списка, перейдите в раздел <v-btn text class="white-lists pa-0 font-weight-bold">Белые списки</v-btn></p>
      <v-btn height="50px" class="save-changes font-weight-bold body-2 mt-8 col-lg-3 col-md-12 col-sm-12" raised color = '#767676'>
        Сохранить изменения
      </v-btn>
    </v-container>
</template>
<script>
  export default {
    data: () =>({
        headers: [
          {
            text: 'ФИО',
            align: 'left',
            sortable: false,
            value: 'name',
            
          },
          { text: 'НОМЕР ТЕЛЕФОНА', value: 'phone',sortable: false},
          { text: 'ГРУППА', value: 'group', sortable: false },
          { text: '', value: 'action', sortable: false }
        ],
        clients: [
          {
            name: 'Константинов Константин Константинович',
            phone: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ"
          },
          {
            name: 'Константинов Александр Константинович',
            phone: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ"
          },
          
        ],
    }),
    methods:{
      deleteItem(item) {
        const index = this.clients.indexOf(item)
        confirm('Действительно хотите удалить?') && this.clients.splice(index, 1)
      }
    }
  }
</script>