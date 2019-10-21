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
                buttonTextValue: '',
                students: [],
                noSemester:'',
                studiesDegree:'',
                cleanStudents: false
            }
        },
        mounted() {
                axios.get('http://localhost:8090/api/fieldsOfStudy').then(response => {
                    this.fieldsOfStudy = response.data;
                    console.log(response.data);
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });
            },
        methods:{
            // getButtonText : function(buttonText){
            //     EventBus.$emit('FIELD_OF_STUDY_CHOSEN');
            //     this.buttonTextValue=buttonText;
            //     console.log(this.buttonTextValue);
            //     return buttonText;
            // }
            studentList: function(buttonText) {
                axios.get(`http://localhost:8090/api/admin/fieldOfStudyView/${buttonText}`).then(response => {
                    if(this.cleanStudents){
                        this.students=[];
                        this.cleanStudents=false;
                    }
                    // EventBus.$emit('STUDENTS_PRINTED', response);
                    this.buttonTextValue = buttonText;
                    this.students = response.data;
                    this.studiesDegree=this.students[1].studiesDegree;
                    this.noSemester=this.students[1].numberOfSemester;
                    this.cleanStudents=true;
                }).catch(err => {
                    console.log(err.response);
                })
            },
            fileUpload: function(){
                this.buttonTextValue = 'Upload Files';
            }

        },
        computed: {

        }
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

    };
</script>

