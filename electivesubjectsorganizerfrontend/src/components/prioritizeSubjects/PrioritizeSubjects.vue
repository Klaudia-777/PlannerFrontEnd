<template src="./PrioritizeSubjects.html"></template>
<style src="./PrioritizeSubjects.css"></style>
<script>

    import StudentPersonal from "../login/showPersonalData/studentData/StudentPersonal";
    import axios from 'axios';
    import {State} from "../../albumNumber";
    import Saved from "../saved/Saved";

    export default {
        name: 'PrioritizeSubjects',
        components: {
            StudentPersonal,
            Saved
        },
        data() {
            return {
                subjects: [],
                albumNr: '',
                priorities: [],
                computingArray: [],
                setPriorities: [],
                allPriorities: [],
                noSubjects: 0,
                buttonTextValue: '',
                isSaved: false,
                hide: false,
                areChoicesSaved: false
            }
        },
        methods: {
            getChoicesStatus: function () {
                axios.get(`http://localhost:8098/api/students/${State.albumNumber}/areChoicesSaved`).then(response => {
                    this.areChoicesSaved = response.data;
                    console.log(response.data);
                    this.buttonTextValue = 'Pokaż zapisane';
                    this.hide=true;
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });
            },
            selected: function (prior, subjectId) {
                let index = this.priorities.findIndex(x => (x.subjectId === subjectId));
                this.priorities[index].priority = prior;
                // this.setPriorities.push(priority);
            },

            checkEnteredPriorities: function () {
                this.setPriorities = [];
                this.isSaved = false;
                console.log(this.priorities);
                // get only priorities values set in priorities objects:
                for (let i = 0; i < this.priorities.length; i++) {
                    this.setPriorities.push(this.priorities[i].priority);
                }

                let arePrioritiesCorrect = ((new Set(this.setPriorities)).size === this.setPriorities.length);
                if (this.setPriorities.includes(undefined)) {
                    arePrioritiesCorrect = false;
                }
                console.log(arePrioritiesCorrect);
                console.log(this.priorities);

                if (arePrioritiesCorrect === false) {
                    alert("Priorytety nie zostały wybrane poprawnie.\nSprawdź swoje ustawienia.");
                } else {
                    alert("Priorytety zostały ustawione poprawnie :)");

                    axios.post(`http://localhost:8098/api/students/${this.albumNr}/saveChoices`, this.priorities).then(response => {
                        console.log(this.priorities);
                        console.log(response);
                        this.isSaved = true;
                        alert("Zapisano.");
                    }).catch(err => {
                        console.log(err.response);
                    });

                }

            }
        },
        mounted() {
            axios.get(`http://localhost:8098/api/subjectPool/${State.albumNumber}`).then(response => {
                this.allPriorities = [];
                this.priorities = [];
                this.subjects = response.data;
                this.albumNr = State.albumNumber;
                this.noSubjects = this.subjects.length;

                for (let i = 0; i < this.noSubjects; i++) {
                    if (this.subjects[i].numberOfPlaces ===0 || this.subjects[i].numberOfPlaces > 150) {
                        this.subjects[i].numberOfPlaces = "brak limitu";
                    }
                    let priority = {
                        choiceId: undefined,
                        priority: undefined,
                        subjectId: this.subjects[i].id,
                        studentId: this.albumNr.toString(),
                        qualified: false
                    };
                    this.priorities.push(priority);
                    this.allPriorities.push(i + 1);
                }
                console.log(this.subjects);
                console.log(this.allPriorities);
                console.log(response.data);
                this.buttonTextValue = 'Pokaż przedmioty';
            })
                .catch(err => {
                    console.log('FAILURE!!');
                    console.log(err.response);
                });
        }
    };


</script>

