import VueRouter from 'vue-router';
import ClientsView from './views/ClientsView';
import GroupsView from './views/GroupsView';

export default new VueRouter({
    routes: [
        {
            path: '', 
            component: ClientsView
        },
        {
            path: '/GroupsView', 
            component: GroupsView
        }
    ],
    mode: 'history'
})