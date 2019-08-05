<template>
    <div id="app">
        <!--<AdminLogin></AdminLogin>-->
        <!--<StudentLogin></StudentLogin>-->
        <ChooseLoginOption v-if="!isLogged"></ChooseLoginOption>
        <StudentPersonal v-if="isLogged && !isConfirmed && !isSaved" v-bind:user-data="userData"></StudentPersonal>
        <PrioritizeSubjects v-if="isConfirmed && !isSaved"></PrioritizeSubjects>
        <Saved v-if="isSaved"></Saved>
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

    export default {
        name: 'app',
        data() {
            return {
                isLogged: false,
                isConfirmed: false,
                userData: null,
                isSaved: false
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
            EventBus.$on('LOGIN_CONFIRMED', () => {
                this.isConfirmed = true;
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
