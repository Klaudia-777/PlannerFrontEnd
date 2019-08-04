<template src="./AdminLogin.html"/>
<style src="./AdminLogin.css"></style>
<script>
    export default {

        name: 'AdminLogin',
        data() {
            return {
                login: '',
                password: '',

                confirmation: false,
                info: null
            }
        },

        methods: {
            confirm: function () {
                this.confirmation = true
            },
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
            loggg: function () {

            }
        }
    }
    ;
</script>

