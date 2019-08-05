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
                albumNumber: '',
                Name: '',
                Surname: '',
                fieldOfStudy: '',
                studiesDegree: '',
                Speciality: '',

                numberOfSemester: '',
                averageGrade: '',

                confirmation: false,
                info: null,
            }
        },

        methods: {
            // confirm: function () {
            //     this.confirmation = true
            // },
            // sendForm: function () {
            //   axios
            //       .post('http://localhost:8080/students/login'), {
            //     albumNumber,
            //     Name,
            //     Surname,
            //     fieldOfStudy,
            //     studiesDegree,
            //     Speciality,
            //     numberOfSemester,
            //     averageGrade
            //   }.then(
            //       app.confirm,
            //   )
            // },

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

