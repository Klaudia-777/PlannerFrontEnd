<template src="./ChangeLimits.html"></template>
<style src="./ChangeLimits.css"></style>
<script>
    import FieldOfStudyView from "../FieldOfStudyViewAdmin/FieldOfStudyView";

    export default {

        name: 'ChangeLimits',
        components: {
            FieldOfStudyView
        },
        props: ['subjectsJson', 'fieldOfStudy'],
        data() {
            return {
                info: " ",
                ChangeLimits: {}
            }
        },
        methods: {
            changeLimit: function (limit, subjectId) {
                let index = subjectsJson.findIndex(x => (x.subjectId === subjectId));
                subjectsJson[index].limit = limit;
            },
            saveOnDB: function () {
                console.log(this.subjectsJson)
                alert("Zapisano.")
            }
        }
    };
</script>

