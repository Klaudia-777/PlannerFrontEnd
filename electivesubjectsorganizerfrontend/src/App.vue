<template>
    <div id="app">
        <!--<AdminLogin></AdminLogin>-->
        <!--<StudentLogin></StudentLogin>-->
        <ChooseLoginOption v-if="!isLogged && !isAdminLogged"></ChooseLoginOption>
        <StudentPersonal v-if="isLogged && !isConfirmed && !isAdminLogged" v-bind:user-data="userData"></StudentPersonal>
        <PrioritizeSubjects v-if="isConfirmed && !isSaved"></PrioritizeSubjects>
        <Saved v-if="isAdminLogged"></Saved>
    </div>
</template>

<script>


    // import StudentLogin from "./components/login/student/StudentLogin";
    // import AdminLogin from "./components/login/admin/AdminLogin";
    import ChooseLoginOption from "./components/login/ChooseLoginOption/ChooseLoginOption";
    import EventBus from './eventBus';
    import StudentPersonal from "./components/login/showPersonalData/studentData/StudentPersonal";
    import PrioritizeSubjects from "./components/prioritizeSubjects/PrioritizeSubjects";
    import Saved from "./components/saved/Saved";
    import AdminLogin from "./components/login/admin/AdminLogin";

    export default {
        name: 'app',
        data() {
            return {
                isLogged: false,
                isConfirmed: false,
                userData: null,
                isSaved: false,
                isAdminLogged: false
            }
        },
        components: {
            StudentPersonal,
            // StudentLogin,
            // AdminLogin,
            ChooseLoginOption,
            PrioritizeSubjects,
            Saved
        },
        mounted() {
            EventBus.$on('STUDENT_LOGGED', (data) => {
                this.userData = data;
                this.isLogged = true;
            });
            EventBus.$on('LOGIN_CONFIRMED', (isConfirmed) => {
                this.isConfirmed = isConfirmed;
            });
            EventBus.$on('ADMIN_LOGGED', (isLogged) => {
                console.log("AAPPPPPPPP"+isLogged);
                this.isAdminLogged = isLogged;
            });
            EventBus.$on('CHOICE_SAVED', () => {
                this.isSaved = true;
            })
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    body {
        background: lightblue;
    }
</style>
