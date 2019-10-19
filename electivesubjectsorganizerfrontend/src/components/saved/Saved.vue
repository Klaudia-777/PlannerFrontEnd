<template src="./Saved.html"></template>
<style src="./Saved.css"></style>
<script>

    import PrioritizeSubjects from "../prioritizeSubjects/PrioritizeSubjects";
    import {State} from "../../albumNumber";
    import axios from 'axios';

    export default {
        name: 'Saved',
        props: ['subjects','albumNr'],
        components: {
            PrioritizeSubjects
        },
        data() {
            return {
                dataToCompute: [],
                dataToShow: [],
                savedSubjects:[],
                albumNum:''
            }
        },

        mounted () {
               this.albumNum = State.albumNumber;
                axios.post(`http://localhost:8090/api/students/${State.albumNumber}/choices`).then(response => {
                    this.dataToCompute = response.data;
                    console.log(response.data);
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });

                for (let i = 0; i < this.savedSubjects.length; i++) {
                    let dataRow = {
                        subjectName: this.savedSubjects[i].name,
                        tutor: this.savedSubjects[i].tutor,
                        priority: undefined
                    };
                    let subjId = this.savedSubjects[i].id;

                    for (let j = 0; j < this.dataToCompute.length; j++) {
                        if (this.dataToCompute.studentId === subjId) {
                            dataRow.priority = this.dataToCompute[i].priority;
                        }
                    }
                    this.dataToShow.push(dataRow);
                }
                return this.dataToShow;
            },
        updated: {

        }

    }

</script>

