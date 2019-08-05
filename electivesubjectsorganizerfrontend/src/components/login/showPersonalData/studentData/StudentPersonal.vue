<template src="./StudentPersonal.html"></template>
<style src="./StudentPersonal.css"></style>
<script>

    import EventBus from '../../../../eventBus'

    export default {
        props: {
            userData: Object
        },
        name: 'StudentPersonal',
        data() {
            return {

                sentAlbumNumber: '',
                sentName: '',
                sentSurname: '',
                sentFieldOfStudy: '',
                sentStudiesDegree: '',
                sentSpeciality: '',
                sentNumberOfSemester: '',
                sentAverageGrade: '',
                confirmation: false,
                printAllData: false,
                info: null

            }
        },

        methods: {
            print: function () {
                this.printAllData = true;
            },

            confirm: function () {
                this.confirmation = true;
                EventBus.$emit('LOGIN_CONFIRMED');
            },

            updateData: function (data) {

                console.log(data);
                this.sentAlbumNumber = data.albumNumber,
                    this.sentName = data.Name,
                    this.sentSurname = data.Surname,
                    this.sentFieldOfStudy = data.fieldOfStudy,
                    this.sentStudiesDegree = data.studiesDegree,
                    this.sentSpeciality = data.Speciality,
                    this.sentNumberOfSemester = data.numberOfSemester,
                    this.sentAverageGrade = data.averageGrade
            }
        },
        mounted() {
            console.log('mounted');
            this.updateData(this.userData)
        }
    }
    ;
</script>

