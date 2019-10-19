<template src="./Saved.html"></template>
<style src="./Saved.css"></style>
<script>

    import PrioritizeSubjects from "../prioritizeSubjects/PrioritizeSubjects";
    import {State} from "../../albumNumber";
    import axios from 'axios';

    export default {
        name: 'Saved',
        props: ['savedSubjects', 'albumNum'],
        components: {
            PrioritizeSubjects
        },
        data() {
            return {
                dataToCompute: [],
                dataToShow: [],
            }
        },
        mounted() {
            this.albumNum = State.albumNumber;
            axios.get(`http://localhost:8090/api/students/${State.albumNumber}/choices`).then(response => {
                this.dataToCompute = response.data;
                console.log(response.data);
                for (let i = 0; i < this.savedSubjects.length; i++) {
                    let dataRow = {
                        subjectName: this.savedSubjects[i].name,
                        tutor: this.savedSubjects[i].tutor,
                        priority: undefined
                    };
                    let subjId = this.savedSubjects[i].id;
                    console.log(subjId);

                    for (let j = 0; j < this.dataToCompute.length; j++) {
                        if (this.dataToCompute[j].subjectId === subjId) {
                            console.log(this.dataToCompute[j].priority);
                            console.log(this.dataToCompute[j].subjectId);
                            console.log(subjId);
                            dataRow.priority = this.dataToCompute[j].priority;
                            console.log(dataRow.priority);

                        }
                    }
                    this.dataToShow.push(dataRow);
                }
                return this.dataToShow;
            })
                .catch(err => {
                    console.log('FAILURE!!');
                    console.log(err.response);
                });
        },
        updated: {}

    }

</script>

