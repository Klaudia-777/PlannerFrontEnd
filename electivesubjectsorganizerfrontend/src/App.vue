<template>
    <div id="app">
        <!--<AdminLogin></AdminLogin>-->
        <!--<StudentLogin></StudentLogin>-->
        <ChooseLoginOption></ChooseLoginOption>
    </div>
</template>
<router-view></router-view>

<script>


    // import StudentLogin from "./components/login/student/StudentLogin";
    // import AdminLogin from "./components/login/admin/AdminLogin";
    import ChooseLoginOption from "./components/login/ChooseLoginOption/ChooseLoginOption";

    export default {
        name: 'app',
        data() {
            return {
                isLogged: false
            }
        },
        components: {
            // StudentLogin,
            // AdminLogin,
            ChooseLoginOption
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    body {
        background: lightblue;
    }
</style>
