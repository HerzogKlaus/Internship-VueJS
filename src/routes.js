import VueRouter from 'vue-router';
import ClientsView from './views/ClientsView';
import GroupsView from './views/GroupsView';
import ClientsAdd from './views/ClientsAdd';
import ClientsEdit from './views/ClientsEdit';

export default new VueRouter({
    routes: [
        {
            path: '', 
            component: ClientsView
        },
        {
            path: '/GroupsView', 
            component: GroupsView
        },
        {
            path: '/AddClients', 
            component: ClientsAdd
        },
        {
            path: '/EditClients',
            component: ClientsEdit
        }

    ],
    mode: 'history'
})