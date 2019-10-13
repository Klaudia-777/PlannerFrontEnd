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
        data() {
            return {
                subjects: [],
                albumNr: '',
                priorities: [
                    {
                        subjectId: '',
                        studentId: '',
                        priority: 0
                    }
                ],
                availablePriorities: [],
                noSubjects: 0,
                showSubjects: false
            }
        },
        methods: {
            print() {
                axios.get(`http://localhost:8081/api/subjectPool/${State.albumNumber}`).then(response => {
                    this.subjects = response.data;
                    this.albumNr = State.albumNumber;
                    this.noSubjects = this.subjects.length;

                    for (let i = 0; i < this.noSubjects; i++) {
                        if (this.subjects[i].numberOfPlaces === 0) {
                            this.subjects[i].numberOfPlaces = "brak limitu";
                        }
                        this.priorities.push([this.albumNr.toString(), this.subjects[i].id, 0]);
                        this.availablePriorities.push(i+1);
                    }
                    console.log(this.priorities);
                    console.log(this.availablePriorities);
                    console.log(response.data);
                    this.showSubjects = true;
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });
            },
            checkEnteredPriorities: function () {

            }
        }
    };


</script>

