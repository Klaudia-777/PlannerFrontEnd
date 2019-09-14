<template src="./FieldOfStudyView.html"></template>
<style src="./FieldOfStudyView.css"></style>
<script>
    import EventBus from '../../../../eventBus'
    import axios from 'axios';
    import MainView from "../mainView/MainView";

    export default {

        name: 'FieldOfStudyView',
        components: {
            MainView
        },
        data() {
            return {
                MainView: {
                    fileStudents: '',
                    fileSubjects: '',
                    uploadStudents: false,
                    uploadSubjects: false,
                    changeNoPlaces: false
                }
            }
        },
        methods: {
            handleFileUpload() {
                this.FieldOfStudyView.file = this.$refs.file.files[0];
            },
            submitFile() {
                let formData = new FormData();
                formData.append('file', this.file);
                axios.post('/http://localhost:8081/api/students', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(response => {
                    console.log('SUCCESS!!');
                    this.MainView.uploadStudents = response;
                    EventBus.$emit('STUDENTS_UPLOADED', response);
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
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

