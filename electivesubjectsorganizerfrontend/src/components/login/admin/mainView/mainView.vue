<template src="./AdminLogin.html"/>
<style src="mainView.css"></style>
<script>
    import EventBus from '../../../eventBus'
    import axios from 'axios';

    export default {

        name: 'mainView',
        data() {
            return {
                mainView: {
                    login: '',
                    password: ''
                },
                confirmation: false,
                info: null
            }
        },

        methods: {
            uploadStudents: function () {
                axios.post(`http://localhost:8081/api/admin/login`, this.adminData).then(response => {
                    console.log("AAAAAAAA" + response);
                    console.log(response);
                    this.confirmation = response;
                    EventBus.$emit('ADMIN_LOGGED', response);
                }).catch(err => {
                    console.log(err.response);
                });
            },
            uploadSubjects: function () {
            },

            changeNoPlaces: function () {
                axios.post(`http://localhost:8081/api/admin/login`, this.adminData).then(response => {
                    console.log("AAAAAAAA" + response);
                    console.log(response);
                    this.confirmation = response;
                    EventBus.$emit('ADMIN_LOGGED', response);
                }).catch(err => {
                    console.log(err.response);
                });
            },
        }
    }
    ;
</script>

