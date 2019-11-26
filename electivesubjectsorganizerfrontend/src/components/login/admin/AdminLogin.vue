<template src="./AdminLogin.html"></template>
<style src="./AdminLogin.css"></style>
<script>
    import EventBus from '../../../eventBus'
    import axios from 'axios';
    import {url} from "../../../constants";

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
                axios.post(`${url}api/admin/login`, this.adminData).then(response => {
                    console.log("AAAAAAAA" + response);
                    console.log(response);
                    this.confirmation = response.data;
                    if(this.confirmation===false){
                        alert("Błędny login lub hasło.")
                    }
                    EventBus.$emit('ADMIN_LOGGED', response.data);
                }).catch(err => {
                    console.log(err.response);
                });
            },
        }
    }
    ;
</script>

