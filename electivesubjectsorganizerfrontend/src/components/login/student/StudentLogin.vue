<template src="./StudentLogin.html"></template>
<style src="./StudentLogin.css"></style>
<script>
    import StudentPersonal from "../showPersonalData/studentData/StudentPersonal";


    export default {

        name: 'StudentLogin',
        components: {
            StudentPersonal
        },
        computed: {
            sentName () {
                return this.$router.params.sentName;
            }
        },
        data() {
            return {
                albumNumber: '',
                Name: '',
                Surname: '',
                fieldOfStudy: '',
                studiesDegree: '',
                Speciality: '',

                numberOfSemester: '',
                averageGrade: '',

                confirmation: false,
                info: null,
                login: false
            }
        },

        methods: {
            // confirm: function () {
            //     this.confirmation = true
            // },
            // sendForm: function () {
            //   axios
            //       .post('http://localhost:8080/students/login'), {
            //     albumNumber,
            //     Name,
            //     Surname,
            //     fieldOfStudy,
            //     studiesDegree,
            //     Speciality,
            //     numberOfSemester,
            //     averageGrade
            //   }.then(
            //       app.confirm,
            //   )
            // },

            logIn: function () {
                this.login=true
            }
        }
    }
    ;
</script>

