<template src="./StudentPersonal.html"></template>
<style src="./StudentPersonal.css"></style>
<script>

    export default {
        name: 'StudentPersonal',
        // props: [
        //     'sentAlbumNumber',
        //     'sentName',
        //     'sentSurname',
        //     'sentFieldOfStudy',
        //     'sentStudiesDegree',
        //     'sentSpeciality',
        //     'sentNumberOfSemester',
        //     'sentAverageGrade'
        // ],
        data() {
            return {
                sentAlbumNumber: '',
                sentName:'',
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
                this.confirmation = true
            }
            // ,
            // callingParentComponentMethod() {
            //     // emit the event and call the parent component
            //     this.$emit("setParentComponentDetails");
            // }
        }
    }
    ;
</script>

