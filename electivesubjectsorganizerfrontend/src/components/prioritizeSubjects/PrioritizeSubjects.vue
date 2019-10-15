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
                        studentId: '',
                        subjectId: '',
                        priority: undefined
                    }
                ],
                computingArray: [],
                setPriorities: [],
                allPriorities: [],
                noSubjects: 0,
                showSubjects: false
            }
        },
        methods: {
            print() {
                axios.get(`http://localhost:8081/api/subjectPool/${State.albumNumber}`).then(response => {
                    this.allPriorities = [];
                    this.priorities = [];
                    this.subjects = response.data;
                    this.albumNr = State.albumNumber;
                    this.noSubjects = this.subjects.length;

                    for (let i = 0; i < this.noSubjects; i++) {
                        if (this.subjects[i].numberOfPlaces === 0) {
                            this.subjects[i].numberOfPlaces = "brak limitu";
                        }
                        this.priorities.push([this.albumNr.toString(), this.subjects[i].id, undefined]);
                        this.allPriorities.push(i + 1);
                    }
                    console.log(this.priorities);
                    console.log(this.allPriorities);
                    console.log(response.data);
                    this.showSubjects = true;
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });
            },

            selected: function (prior, subjectId) {
                let index = this.priorities.findIndex(x => (x[1] === subjectId));
                this.priorities[index][2] = prior;
                // this.setPriorities.push(priority);
            },

            checkEnteredPriorities: function () {
                this.setPriorities = [];
                console.log(this.priorities);
                // get only priorities values set in priorities objects:
                for (let i = 0; i < this.priorities.length; i++) {
                    this.setPriorities.push(this.priorities[i][2]);
                }

                let arePrioritiesCorrect = ((new Set(this.setPriorities)).size === this.setPriorities.length);
                if (this.setPriorities.includes(undefined)) {
                    arePrioritiesCorrect=false;
                }
                console.log(arePrioritiesCorrect);
                console.log(this.setPriorities);
                if(arePrioritiesCorrect===false){
                    alert("Priorytety nie zostały wybrane poprawnie.\nSprawdź swoje ustawienia.");
                }else{
                    alert("Priorytety zostały ustawione poprawnie :)");
                }
            }
        }
    };


</script>

