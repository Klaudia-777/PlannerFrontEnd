<template src="./FileUpload.html"></template>
<style src="./FileUpload.css"></style>
<script>
    import EventBus from '../../../../eventBus'
    import axios from 'axios';
    import MainView from "../mainView/MainView";
    import {url} from "../../../../constants";

    export default {

        name: 'FileUpload',
        components: {
            MainView
        },
        props: ['fieldOfStudy', 'students'],
        data() {
            return {
                FileUpload: {
                    file: ''
                }
            }
        },
        methods: {
            handleFileUpload(e) {
                this.FileUpload.file = e.target.files || e.dataTransfer.files;
                console.log(this.FileUpload.file)
            },
            submitStudentsFile() {
                let formData = new FormData();
                formData.append('file', this.FileUpload.file[0]);
                axios.post(`${url}api/students`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(response => {
                    console.log('SUCCESS!!');
                    EventBus.$emit('STUDENTS_UPLOADED', response);
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });
            },
            submitSubjectsFile() {
                let formData = new FormData();
                formData.append('file', this.FileUpload.file[0]);
                axios.post(`${url}api/subjects`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(response => {
                    console.log('SUCCESS!!');
                    EventBus.$emit('STUDENTS_UPLOADED', response);
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });
            }
        },
        updated: {}
    };
</script>

