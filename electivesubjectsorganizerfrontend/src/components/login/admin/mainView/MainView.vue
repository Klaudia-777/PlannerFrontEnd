<template src="./MainView.html"></template>
<style src="./MainView.css"></style>
<script>
    import EventBus from '../../../../eventBus'
    import axios from 'axios';
    import AdminLogin from "../AdminLogin";
    import FieldOfStudyView from "../FieldOfStudyViewAdmin/FieldOfStudyView";

    export default {

        name: 'MainView',
        components: {
            AdminLogin,
            FieldOfStudyView
        },
        data() {
            return {
                fieldsOfStudy: []
            }
        },
        mounted() {
                axios.get('http://localhost:8081/api/fieldsOfStudy').then(response => {
                    this.fieldsOfStudy = response.data;
                    console.log(response.data);
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });
            },
        methods:{
            goTo : function(selectedButton) {
                EventBus.$emit('FIELD_OF_STUDY_CHOSEN',selectedButton);
                return selectedButton;
            }
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

    };
</script>

