<template src="./StudentLogin.html"></template>
<style src="./StudentLogin.css"></style>
<script>
    import EventBus from '../../../eventBus'
    import StudentPersonal from "../showPersonalData/studentData/StudentPersonal";

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
                // console.log(dataToSend);
                EventBus.$emit('STUDENT_LOGGED', dataToSend);
            }
        }
    }
    ;
</script>

