<template src="./StudentLogin.html"></template>
<style src="./StudentLogin.css"></style>
<script>
    import EventBus from '../../../eventBus';
    import axios from 'axios';
    import StudentPersonal from "../showPersonalData/studentData/StudentPersonal";
    import {url} from "../../../constants";

    export default {

        name: 'StudentLogin',
        components: {
            StudentPersonal
        },
        data() {
            return {
                albumNumber: '291715',
                Name: 'Anna',
                Surname: 'Ogiela',
                fieldOfStudy: 'Teleinformatyka',
                studiesDegree: 'pierwszego_stopnia',
                Speciality: 'x',
                numberOfSemester: '6',
                averageGrade: '4.66',

                date: '',
                confirmation: false,
                info: null,
            }
        },

        methods: {

            logIn: function () {
                const dataToSend = {
                    albumNumber: this.albumNumber,
                    Name: this.Name,
                    Surname: this.Surname,
                    fieldOfStudy: this.fieldOfStudy,
                    studiesDegree: this.studiesDegree,
                    Speciality: this.Speciality,
                    numberOfSemester: this.numberOfSemester,
                    averageGrade: this.averageGrade
                };

                let todaysDate = new Date().toLocaleDateString();
                if (!(todaysDate === this.date)) {
                    console.log(todaysDate);
                    console.log(this.date);
                    EventBus.$emit('STUDENT_LOGGED', dataToSend);
                }
            }
        },
        mounted() {
            axios.get(`${url}api/student/${this.fieldOfStudy}/${this.numberOfSemester}/${this.studiesDegree}/getDate`).then(response => {
                this.date = new Date(response.data).toLocaleDateString();
                console.log(this.date)
            }).catch(err => {
                console.log(err.response);
            });
        }
    }
    ;
</script>

