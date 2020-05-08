<template>
     <header>
        <h1>
            Projetos
        </h1>
    </header>
</template>

<script>
export default {

}
</script>

<style>
header {
    display: flex;
    background: #026AA7;
    grid-area: h;
    justify-content: center;
    align-items: center;
    color: #FFF;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
    -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
    -moz-box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
    position: sticky;
    top: 0;
    height: 50px;
    width: 100%;
    z-index: 100;
}

header > h1 {
    margin: 0;
}
</style>
