<template src="./ChangeLimits.html"></template>
<style src="./ChangeLimits.css"></style>
<script>
    import FieldOfStudyView from "../FieldOfStudyViewAdmin/FieldOfStudyView";
    import axios from 'axios';
    import {url} from "../../../../constants";

    export default {

        name: 'ChangeLimits',
        components: {
            FieldOfStudyView
        },
        props: ['subjectsJson', 'fieldOfStudy', 'noSem', 'stDegree'],
        data() {
            return {
                ChangeLimits: {}
            }
        },
        methods: {
            changeLimit: function (limit, subjectId) {
                let index = this.subjectsJson.findIndex(x => (x.id === subjectId));
                this.subjectsJson[index].numberOfPlaces = limit;
            },
            saveOnDB: function () {
                console.log(this.subjectsJson);
                let subjectsMap=[];
                for (let i = 0; i < this.subjectsJson.length; i++) {
                    subjectsMap.push({
                        subjectId: this.subjectsJson[i].id,
                        limit: this.subjectsJson[i].numberOfPlaces
                    })
                }

                axios.post(`${url}api/admin/${this.fieldOfStudy}/${this.noSem}/${this.stDegree}/save-new-limits`,
                    subjectsMap).then(() => {
                    console.log("UPDATED ON DB");
                })
                    .catch(() => {
                        console.log('FAILURE!!');
                    });
                alert("Zapisano.")
            }
        }
    };
</script>

