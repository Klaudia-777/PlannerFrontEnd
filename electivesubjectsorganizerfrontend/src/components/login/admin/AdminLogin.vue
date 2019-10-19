<template src="./AdminLogin.html"></template>
<style src="./AdminLogin.css"></style>
<script>
    import EventBus from '../../../eventBus'
    import axios from 'axios';

    export default {

        name: 'AdminLogin',
        data() {
            return {
                adminData: {
                    login: '',
                    password: ''
                },
                    confirmation: false,
                    info: null
                }
        },

        methods: {
            confirm: function () {
                axios.post(`http://localhost:8090/api/admin/login`, this.adminData).then(response => {
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

