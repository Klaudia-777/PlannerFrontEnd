<template src="./StudentPersonal.html"></template>
<style src="./StudentPersonal.css"></style>
<script>

    import EventBus from '../../../../eventBus'
    import axios from 'axios';

    export default {
        props: {
            userData: Object
        },
        name: 'StudentPersonal',
        data() {
            return {

                studentData: {
                    albumNumber: '',
                    name: '',
                    surname: '',
                    fieldOfStudy: '',
                    studiesDegree: '',
                    speciality: '',
                    numberOfSemester: '',
                    averageGrade: ''
                },
                anotherData: {
                    confirmation: false,
                    info: null
                }
            }
        },

        methods: {
            confirm: function () {
                axios.post(`http://localhost:8081/api/students/login`, this.studentData).then(response => {
                    console.log(response);
                    this.anotherData.confirmation = response;
                    EventBus.$emit('LOGIN_CONFIRMED',response);
                }).catch(err => {
                    console.log(err.response);
                });
            },

            updateData: function (data) {

                console.log(data);
                this.studentData.albumNumber = data.albumNumber,
                    this.studentData.name = data.Name,
                    this.studentData.surname = data.Surname,
                    this.studentData.fieldOfStudy = data.fieldOfStudy,
                    this.studentData.studiesDegree = data.studiesDegree,
                    this.studentData.speciality = data.Speciality,
                    this.studentData.numberOfSemester = data.numberOfSemester,
                    this.studentData.averageGrade = data.averageGrade
            }
        },
        mounted() {
            console.log('mounted');
            this.updateData(this.userData)
        }
    }
    ;
</script>

