<template src="./FieldOfStudyView.html"></template>
<style src="./FieldOfStudyView.css"></style>
<script>
    import EventBus from '../../../../eventBus'
    import axios from 'axios';
    import MainView from "../mainView/MainView";
    import ChangeLimits from "../changeLimits/ChangeLimits";
    import {url} from "../../../../constants";

    export default {

        name: 'FieldOfStudyView',
        components: {
            MainView,
            ChangeLimits
        },
        props: ['fieldOfStudy', 'students', 'noSem', 'stDegree'],
        data() {
            return {
                info: " ",
                FieldOfStudyView: {
                    file: '',
                    fileStudents: '',
                    fileSubjects: '',
                    uploadStudents: false,
                    uploadSubjects: false,
                    changeNoPlaces: false,
                    subjectsJson: [],
                    displaySubjectsTable: false,
                    date: ''
                }
            }
        },
        methods: {
            handleFileUpload(e) {
                this.FieldOfStudyView.file = e.target.files || e.dataTransfer.files;
                console.log(this.FieldOfStudyView.file)
            },
            submitFile() {
                let formData = new FormData();
                formData.append('file', this.FieldOfStudyView.file[0]);
                axios.post(`${url}api/students`, formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(response => {
                    console.log('SUCCESS!!');
                    this.FieldOfStudyView.uploadStudents = response;
                    EventBus.$emit('STUDENTS_UPLOADED', response);
                })
                    .catch(err => {
                        console.log('FAILURE!!');
                        console.log(err.response);
                    });
            },
            setDate: function (data) {
                if (data !== undefined) {
                    console.log(data);
                    axios.post(`${url}api/admin/${this.fieldOfStudy}/${this.noSem}/${this.stDegree}/date`, data).then(response => {
                        this.FieldOfStudyView.date=data;
                        console.log(response);
                    }).catch(err => {
                        console.log(err.response);
                    });
                    alert("Pomyślnie ustawiono termin zakończenia zapisów.")
                }
            },
            startAlgorithm: function () {
                console.log(`${url}api/admin/${this.fieldOfStudy}/${this.noSem}/${this.stDegree}/start`);
                axios.post(`${url}api/admin/${this.fieldOfStudy}/${this.noSem}/${this.stDegree}/start`).then(response => {
                    console.log(response);
                    this.anotherData.confirmation = response;
                    EventBus.$emit('LOGIN_CONFIRMED', response);
                }).catch(err => {
                    console.log(err.response);
                });
            },
            generateResults: function () {
                axios.get(`${url}api/admin/${this.fieldOfStudy}/${this.noSem}/${this.stDegree}/download`).then(response => {
                    console.log(this.info);
                    this.info = `${url}api/admin/${this.fieldOfStudy}/${this.noSem}/${this.stDegree}/download`;
                    console.log(this.info);
                    alert("Wygenerowano plik.")
                }).catch(err => {
                    console.log(err.response);
                });
            },
            changeLimits: function () {
                axios.get(`${url}api/admin/${this.fieldOfStudy}/${this.noSem}/${this.stDegree}/changeLimits`).then(response => {
                    this.FieldOfStudyView.subjectsJson = response.data;
                    this.FieldOfStudyView.displaySubjectsTable = true;
                    // this.MainView.visibleFOSView = false;
                    // this.MainView.visibleLimitsView = true;
                    console.log(this.FieldOfStudyView.subjectsJson);
                    console.log(this.FieldOfStudyView.displaySubjectsTable);
                    // EventBus.$emit('CHANGE_LIMITS');

                }).catch(err => {
                    console.log(err.response);
                });
            }
        },
        mounted() {
            axios.get(`${url}api/admin/${this.fieldOfStudy}/${this.noSem}/${this.stDegree}/getDate`).then(response => {
                this.FieldOfStudyView.date = new Date(response.data).toLocaleDateString();
                console.log(this.FieldOfStudyView.date)
            }).catch(err => {
                console.log(err.response);
            });
        }
    };
</script>

