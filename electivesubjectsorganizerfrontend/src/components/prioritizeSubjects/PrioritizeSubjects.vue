<template src="./PrioritizeSubjects.html"></template>
<style src="./PrioritizeSubjects.css"></style>
<script>

    import EventBus from '../../eventBus'
    import StudentPersonal from "../login/showPersonalData/studentData/StudentPersonal";

    export default {

        name: 'PrioritizeSubjects',
        components: {
            StudentPersonal
        },
        data() {
            return {
                items: [
                    {
                        name: 'Math',
                        priority: ''
                    }, {
                        name: 'Physics',
                        priority: ''
                    }, {
                        name: 'English',
                        priority: ''
                    }
                ],
                isSaved: false
            }
        },

        methods: {
            save: function () {
                this.isSaved = true;
                // console.log(dataToSend);
                EventBus.$emit('CHOICE_SAVED', this.isSaved);
            }
        }
    }
    ;


</script>

