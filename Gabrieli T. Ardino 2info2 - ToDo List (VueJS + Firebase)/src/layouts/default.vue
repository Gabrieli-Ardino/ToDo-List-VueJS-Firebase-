<template>
    <div class="container" v-bind:class="{containerclose: side}">
        <div class="top"></div>
        <div class="side" v-bind:class="{sideclose: side}">
            <div class="side-top">
                <button class="side-top-btn" @click="side = !side"><font-awesome-icon icon="bars" /></button>
                <div class="item-title">To Do List</div>
            </div>
            <router-link class="side-item" v-for="item of itens" :key="item.title" :to="item.to">
                <div class="item-icon"><font-awesome-icon :icon="item.icon" /></div>
                <div class="item-title">{{ item.title }}</div>
            </router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="bottom"><span>To Do List - Gabrieli T. Ardino - 2info2</span></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            side: false,
            itens: [
                {title: "Home", icon: "home", to: "/home"},
                {title: "Perfil", icon: "user", to: "/profile"},
                {title: "Sair", icon: "sign-out-alt", to: "/login"},
            ],
        };
    },
};
</script>

<style>
/* APP */
body {
    margin: 0;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
}

input {
    border: solid 0;
    border-bottom: solid 1px;
    outline: none;
}

/* CONTAINER */
.container {
    display: grid;
    grid-template-areas:
        "side top top "
        "side content content"
        "bottom bottom bottom";
    grid-template-columns: 260px auto auto;
    grid-template-rows: 10vh 85vh 5vh;
}
.containerclose {
    display: grid;
    grid-template-areas:
        "side top top "
        "side content content"
        "bottom bottom bottom";
    grid-template-columns: 55px auto auto;
    grid-template-rows: 10vh 85vh 5vh;
}

.containerclose .item-title {
    display: none;
}

/* CABEÇALHO */
.top {
    grid-area: top;

    background-color: rgb(0, 115, 223);
    box-shadow: 0px 1px 5px 0px #0000008a;
}

/* SIDEBAR */

.side {
    grid-area: side;
    border-right: rgba(128, 128, 128, 0.2) solid 1px;

    display: flex;
    flex-direction: column;
}
.side-top {
    background-color: rgb(0, 115, 223);
    border-right: solid rgb(0, 115, 223);
    color: rgb(255, 255, 255);

    display: flex;
    align-items: center;

    color: grey;
    text-decoration: none;
    text-align: left;
    width: 100%;
    height: 10vh;
}
.side-top .item-title {
    color: white;
}

.side-top-btn {
    margin-left: 2px;
    background-color: inherit;
    font-size: 25px;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.side-top-btn:hover {
    background-color: rgb(1, 105, 202);
}

.side-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    color: grey;
    text-decoration: none;
    text-align: left;
    width: 100%;
    height: 55px;
}
.side-item:hover {
    background-color: rgba(0, 0, 0, 0.03);
}
.side-item:focus {
    background-color: rgba(0, 115, 223, 0.13);
    color: rgb(0, 115, 223);
}

.item-icon {
    padding: 15px;
    font-size: 20px;
}

/* CONTEUDO */

.content {
    grid-area: content;

    padding: 30px;
    padding-top: 20px;
}

/* RODAPE */
.bottom {
    grid-area: bottom;

    background-color: rgb(235, 235, 235);
    padding: 10px;
}
</style>
