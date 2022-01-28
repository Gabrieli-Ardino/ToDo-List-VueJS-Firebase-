<template>
    <div>
        <h2>Perfil</h2>
        <div class="form">
            <input class="profile-input" type="text" placeholder="Nome" v-model="nome" />
            <input class="profile-input" type="text" placeholder="Sobrenome" v-model="sobrenome" />
            <button class="profile-btn" @click="salvarPerfil">SALVAR</button>
        </div>
    </div>
</template>

<script>
import * as fb from "@/firebase";
export default {
    data() {
        return {
            nome: "",
            sobrenome: "",
            uid: "",
            temPerfil: false,
        };
    },
    async mounted() {
        console.log("uid:" + fb.auth.currentUser.uid);
        this.uid = fb.auth.currentUser.uid;
        const userProfile = await fb.profileCollection.where("uid", "==", this.uid).get();
        if (userProfile.docs.length > 0) {
            this.temPerfil = true;
            const perfil = userProfile.docs[0];
            this.profileId = perfil.id;
            this.nome = perfil.data().nome;
            this.sobrenome = perfil.data().sobrenome;
        }
    },
    methods: {
        async salvarPerfil() {
            if (this.temPerfil) {
                await fb.profileCollection.doc(this.profileId).update({
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                });
            } else {
                await fb.profileCollection.add({
                    uid: this.uid,
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                });
            }
        },
    },
};
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
}
.profile-input {
    width: 100%;
    font-size: 1.2rem;
    margin: 10px;
}
.profile-btn {
    width: 80px;
    padding: 10px;
    margin: 10px;
    background-color: rgb(0, 115, 223);
    color: white;
    border: solid 0;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 0px #0000008a;
}
</style>
