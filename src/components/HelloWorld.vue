<template>
    <v-container class="d-flex flex-column">
    <v-data-table
      :style="{width: '80%', fontWeight: 'bold'}" 
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
    <div class="d-flex flex-row justify-space-between align-center" :style="{width: '80%'}">
      <div :style="{width: '60%'}">
    <v-select
      :items="items"
      label="Выбрать из списка"
      outlined
      :style="{marginTop: '29px'}"
    ></v-select>
    </div>
    <v-btn :style="{fontSize: '12px', textTransform: 'capitalize', height: '55px', justifyContent: 'space-evenly'}" outlined color = 'grey'>
      Добавить
    </v-btn>
    <p class="ma-0" :style="{fontSize: '14px', fontWeight: 'bold'}">или</p>
    <v-btn text small class="ma-0" :style="{fontSize: '14px', textTransform: 'none', textDecoration: 'underline', fontWeight: 'bold'}">
      Создать нового клиента
    </v-btn>
    </div>
    <p class="ma-0" :style="{fontWeight: 'bold', fontSize: '14px'}" >Для того, чтобы отредактировать или удалить клиентов из списка, перейдите в раздел <a :style="{textDecoration: 'underline', color: 'inherit'}">Белые списки</a></p>
    <v-btn :style="{fontSize: '14px', color: '#fff', textTransform: 'none', height: '50px', width: '20%', marginTop: '30px'}" raised color = '#767676'>
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