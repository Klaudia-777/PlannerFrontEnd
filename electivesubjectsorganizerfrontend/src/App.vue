<template>
    <div id="app">
        <!--<AdminLogin></AdminLogin>-->
        <!--<StudentLogin></StudentLogin>-->
        <ChooseLoginOption v-if="!isLogged && !isAdminLogged"></ChooseLoginOption>
        <StudentPersonal v-if="isLogged && !isConfirmed && !isAdminLogged"
                         v-bind:user-data="userData"></StudentPersonal>
        <PrioritizeSubjects v-if="isConfirmed && !isSaved"></PrioritizeSubjects>
        <MainView v-if="isAdminLogged"></MainView>
        <!--<ChangeLimits v-if="changeLimits"></ChangeLimits>-->
    </div>
</template>

<script>


    // import StudentLogin from "./components/login/student/StudentLogin";
    // import AdminLogin from "./components/login/admin/AdminLogin";
    import ChooseLoginOption from "./components/login/ChooseLoginOption/ChooseLoginOption";
    import EventBus from './eventBus';
    import StudentPersonal from "./components/login/showPersonalData/studentData/StudentPersonal";
    import PrioritizeSubjects from "./components/prioritizeSubjects/PrioritizeSubjects";
    import MainView from "./components/login/admin/mainView/MainView";
    import FieldOfStudyView from "./components/login/admin/FieldOfStudyViewAdmin/FieldOfStudyView";
    import ChangeLimits from "./components/login/admin/changeLimits/ChangeLimits";

    export default {
        name: 'app',
        data() {
            return {
                isLogged: false,
                isConfirmed: false,
                userData: null,
                isSaved: false,
                isAdminLogged: false,
                uploadStudents: false,
                fieldOfStudyChosen: false,
                subjectsJson: [],
                fieldOfStudy: ''

            }
        },
        components: {
            ChangeLimits,
            StudentPersonal,
            // StudentLogin,
            // AdminLogin,
            ChooseLoginOption,
            PrioritizeSubjects,
            MainView,
            FieldOfStudyView
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
                console.log("AAPPPPPPPP" + isLogged);
                console.log(isLogged);
                console.log(this.isAdminLogged);
                this.isAdminLogged = isLogged;
                console.log(this.isAdminLogged);

            });
            EventBus.$on('CHOICE_SAVED', () => {
                this.isSaved = true;
            });
            EventBus.$on('STUDENTS_UPLOADED', (isUploaded) => {
                this.uploadStudents = isUploaded;
            });
            EventBus.$on('FIELD_OF_STUDY_CHOSEN', () => {
                this.fieldOfStudyChosen = true;
            });
        }
    }

</script>


<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: black;
        margin-top: 60px;
    }

    body {
        background: darkgrey;

        /*"Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie";*/
        background-image: url("Znak_graficzny_AGH.svg.png");
        background-repeat: no-repeat;
        background-position: left top;
        background-attachment: fixed;
        background-size: auto;

    }
</style>
