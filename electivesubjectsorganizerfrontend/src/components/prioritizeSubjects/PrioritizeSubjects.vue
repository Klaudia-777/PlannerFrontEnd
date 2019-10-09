<template src="./PrioritizeSubjects.html"></template>
<style src="./PrioritizeSubjects.css"></style>
<script>

    import StudentPersonal from "../login/showPersonalData/studentData/StudentPersonal";
    import axios from 'axios';
    import {State} from "../../albumNumber";

    export default {

        name: 'PrioritizeSubjects',
        components: {
            StudentPersonal
        },
        // props: [albumNumber],
        data() {
            return {
                subjects: [],
            }
        },
        methods: {
            print() {
                axios.get(`http://localhost:8081/api/subjectPool/${State.albumNumber}`).then(response => {
                    this.subjects = response.data;
                    console.log(response.data);
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });
            }
        }
    };


</script>

