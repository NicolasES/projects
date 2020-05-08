<template>
    <div id="app" class="container">
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Main,
        Footer
    }
};
</script>

<style>
#app {
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "h"
        "m"
        "f";
}

html,
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #bfd0e0;
    font-family: "Roboto", sans-serif;
}

</style>
