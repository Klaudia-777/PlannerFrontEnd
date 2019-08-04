import Vue from 'vue'
import Router from 'vue-router'
import StudentPersonal from '@/components/login/showPersonalData/studentData/StudentPersonal';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/data',
            name: 'StudentPersonal',
            component: StudentPersonal
        }
    ]
})