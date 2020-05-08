<template>
    <footer>
        <ul>
            <li>
                <!-- <span class="mdi mdi-card-plus"></span> -->
                <CardPlus />
            </li>
            <li>
                <!-- <span class="mdi mdi-account-circle"></span> -->
                <AccountCircle />
            </li>
        </ul>
    </footer>
</template>

<script>
import CardPlus from "vue-material-design-icons/CardPlus.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";

export default {
    components: {
        CardPlus,
        AccountCircle
    }
};
</script>

<style>
footer {
    background: #fff;
    position: fixed;
    bottom: 0;
    border-top: solid 1px;
    width: 100%;
    display: none;
    grid-area: f;
}

footer > ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-grow: 1;
    list-style: none;
    align-items: center;
    text-align: center;
    font-size: 35px;
    color: #00456d;
}

footer > ul > li {
    flex: 1;
}

@media (max-width: 700px) {
    footer {
        display: flex !important;
    }
}
</style>
