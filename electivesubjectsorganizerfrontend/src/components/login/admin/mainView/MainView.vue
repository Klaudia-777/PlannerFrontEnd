<template src="./MainView.html"></template>
<style src="./MainView.css"></style>
<script>

    import axios from 'axios';
    import AdminLogin from "../AdminLogin";
    import FieldOfStudyView from "../FieldOfStudyViewAdmin/FieldOfStudyView";
    import FileUpload from "../fileUpload/FileUpload";

    export default {

        name: 'MainView',
        components: {
            AdminLogin,
            FileUpload,
            FieldOfStudyView
        },
        data() {
            return {
                fieldsOfStudy: [],
                fieldOfStudy: '',
                buttonTextValue: '',
                students: [],
                noSemester: '',
                studiesDegree: '',
                cleanStudents: false
            }
        },
        mounted() {
            axios.get('http://localhost:8098/api/fieldsOfStudy').then(response => {
                this.fieldsOfStudy = response.data;
                console.log(response.data);
            })
                .catch(err => {
                    console.log('FAILURE!!');
                    console.log(err.response);
                });
        },
        methods: {
            submit: function () {
            },

            clicked: function (FOS) {
                this.buttonTextValue = FOS;
                this.fieldOfStudy = FOS;
            },

            setNoSemAndStDegree: function (noSem, stDeg) {
                this.studiesDegree = noSem;
                this.noSemester = stDeg;
            },

            studentList: function () {
                this.buttonTextValue = "Wybierz";
                axios.get(`http://localhost:8098/api/admin/fieldOfStudyView/${this.fieldOfStudy}/${this.studiesDegree}/${this.noSemester}`).then(response => {
                    if (this.cleanStudents) {
                        this.students = [];
                        this.cleanStudents = false;
                    }
                    this.buttonTextValue = buttonText;
                    this.students = response.data;

                    this.cleanStudents = true;
                }).catch(err => {
                    console.log(err.response);
                })
            },
            fileUpload: function () {
                this.buttonTextValue = 'Załaduj pliki';
            }

        },
        computed: {}
        // uploadSubjects: function () {
        // },

        // changeNoPlaces: function () {
        //     axios.post(`http://localhost:8098/api/admin/login`, this.adminData).then(response => {
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

