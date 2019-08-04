<template src="./ChooseLoginOption.html"/>
<style src="./ChooseLoginOption.css"></style>
<script>
    import StudentLogin from "../student/StudentLogin";
    import AdminLogin from "../admin/AdminLogin";

    export default {

        name: 'ChooseLoginOption',
        components: {
             StudentLogin,
             AdminLogin
        },
        data() {
            return {
                student: false,
                admin: false
            }
        },

        methods: {
            studentLogin: function () {
                this.student = true;
                this.admin = false;
            },
            adminLogin: function () {
                this.admin = true;
                this.student = false;

            }
        }
    }
    ;
</script>

