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
        props: ['fieldOfStudy', 'students', 'noSem', 'stDegree'],
        data() {
            return {
                FieldOfStudyView: {
                    file: '',
                    fileStudents: '',
                    fileSubjects: '',
                    uploadStudents: false,
                    uploadSubjects: false,
                    changeNoPlaces: false
                }
            }
        },
        methods: {
            handleFileUpload(e) {
                this.FieldOfStudyView.file = e.target.files || e.dataTransfer.files;
                console.log(this.FieldOfStudyView.file)
            },
            submitFile() {
                let formData = new FormData();
                formData.append('file', this.FieldOfStudyView.file[0]);
                axios.post('http://localhost:8090/api/students', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(response => {
                    console.log('SUCCESS!!');
                    this.FieldOfStudyView.uploadStudents = response;
                    EventBus.$emit('STUDENTS_UPLOADED', response);
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });
            },

            // uploadSubjects: function () {
            // },

            // changeNoPlaces: function () {
            //     axios.post(`http://localhost:8090/api/admin/login`, this.adminData).then(response => {
            //         console.log("AAAAAAAA" + response);
            //         console.log(response);
            //         this.confirmation = response;
            //         EventBus.$emit('ADMIN_LOGGED', response);
            //     }).catch(err => {
            //         console.log(err.response);
            //     });
            // },
            startAlgorithm: function () {
                console.log(`http://localhost:8090/api/admin/${this.fieldOfStudy}/${this.noSem}/${this.stDegree}/start`);
                axios.post(`http://localhost:8090/api/admin/${this.fieldOfStudy}/${this.noSem}/${this.stDegree}/start`).then(response => {
                    console.log(response);
                    this.anotherData.confirmation = response;
                    EventBus.$emit('LOGIN_CONFIRMED', response);
                }).catch(err => {
                    console.log(err.response);
                });
            }
        },

        updated: {}
    };
</script>

