<template>
    <div>
        <input type="text" name="" id="" placeholder="Pesquisar" />

        <section>
            <div id="card-new-project">Novo projeto</div>

            <div class="project-card" v-for="n in 7" :key="n">
                <h2 class="project-card-title">Nome do Projeto</h2>
                <img :src="require('../../assets/no-image.jpg')" alt="" class="img-project-card" />
                <div class="project-card-info">
                    <span> <b>03/10/1992</b> </span>
                    <span><AccountCircle :size="48" />3</span>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
import AccountCircle from 'vue-material-design-icons/AccountCircle.vue'
import ApiService from '../../services/ApiService'

export default {
    components: {
        AccountCircle
    },

    beforeMount() {
        ApiService.getProjects(projects => {
            console.log('projects:', projects)
        })
    },

    data() {
        return {
           
        }
    }
}
</script>

<style scoped>
section {
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 30px;
    align-content: flex-start;
    justify-items: center;
    justify-content: center;
}

@media(max-width: 992px) {
    section {
        grid-template-columns: repeat(2, auto);
    }
}

@media(max-width: 700px) {
    section {
        grid-template-columns: auto;
    }

    #card-new-project {
        display: none;
    }
}

input {
    width: 100%;
    height: 30px;
    border-radius: 22px;
    border: solid 1px;
    text-indent: 15px;
}

#card-new-project {
    background: none;
    border-style: dashed;
    box-shadow: none;
    font-size: 30px;
}

section > div {
    height: 230px;
    width: 350px;
    border: solid 1px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
    -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
    -moz-box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
    border-radius: 10px;
    cursor: pointer;
}

section > div:hover {
    transform: scale(1.03);
    webkit-transform: scale(1.03);
}

@media(max-width: 1100px) {
    section > div {
        width: 300px;
    }
}

.project-card-title {
    margin: auto;
}

.img-project-card {
    max-width: 100%;
    height: 140px;
}

.project-card-info {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin: auto;
}

.project-card-info > span:last-child {
    font-size: 20px;
}
</style>
