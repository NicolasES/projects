<template>
    <div id="div-project">
        <form id="form-project">
            <input type="text" name="name" placeholder="Nome" />
            <textarea name="description" cols="30" rows="5" placeholder="Descrição"></textarea>
        </form>

        <hr />

        <div class="annotation">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div class="annotation-date">
                27/04/2020
            </div>
        </div>

         <div class="annotation">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div class="annotation-date">
                27/04/2020
            </div>
        </div>

         <div class="annotation">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div class="annotation-date">
                27/04/2020
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 1000px) {
    #div-project {
        width: 95% !important;
    }
}

#div-project {
    width: 1000px;
}

#form-project {
    display: flex;
    flex-direction: column;
}

#form-project input,
#form-project textarea {
    margin: 5px 0px;
    border-radius: 5px;
    border: solid 1px #999;
    padding: 0 10px;
}

#form-project input {
    height: 30px;
}

#form-project textarea {
    resize: none;
}

.annotation {
    border: solid 1px;
    margin: 15px 0px;
    padding: 10px;
    border-radius: 5px;
    background: #ddd;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
    -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
    -moz-box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
}

.annotation p {
    word-break: break-all;
}

.annotation-date {
    text-align: end;
    font-weight: bold;
}
</style>