<template src="./MainView.html"></template>
<style src="./MainView.css"></style>
<script>
    import EventBus from '../../../../eventBus'
    import axios from 'axios';
    import AdminLogin from "../AdminLogin";

    export default {

        name: 'MainView',
        components: {
            AdminLogin
        },
        data() {
            return {
                MainView: {
                    fieldsOfStudy: [],
                }
            }
        },
        methods: {
            getAllFieldsOfStudy() {
                axios.get('/http://localhost:8081/api/fieldsOfStudy').then(response => {
                    console.log(response.data);
                    // this.MainView.fieldOfStudy = response.data;
                    // EventBus.$emit('FIELD_OF_STUDY_CHOSEN', response);
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response.data);
                    });
            }
            // uploadSubjects: function () {
            // },

            // changeNoPlaces: function () {
            //     axios.post(`http://localhost:8081/api/admin/login`, this.adminData).then(response => {
            //         console.log("AAAAAAAA" + response);
            //         console.log(response);
            //         this.confirmation = response;
            //         EventBus.$emit('ADMIN_LOGGED', response);
            //     }).catch(err => {
            //         console.log(err.response);
            //     });
            // },
        }
    };
</script>

