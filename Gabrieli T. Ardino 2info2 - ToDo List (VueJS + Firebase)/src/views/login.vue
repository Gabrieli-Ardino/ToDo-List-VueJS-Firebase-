<template>
    <section class="app">
        <div class="form-container">
            <h2>Entre / Se registre</h2>
            <div class="input-group">
                <input class="login-input" type="email" placeholder="Email" v-model="user.email" />
                <input class="login-input" type="password" placeholder="Senha" v-model="user.password" />
            </div>
            <div class="btn-group">
                <button @click="login" class="button primary">ENTRAR</button>
                <button @click="reset" class="button warning">CANCELAR</button>
            </div>
        </div>

        <div class="alert" v-if="errorLogin">
            <span> Email ou senha incorreto(s)</span>
            <button class="mini" @click="errorLogin = false">x</button>
        </div>

        <div class="alert2" v-if="novaConta">
            <span> Conta não existente. Deseja criar uma nova?</span>

            <div class="btn-group">
                <button class="mini-btn primary" @click="criarNovaConta">Sim</button>
                <button class="mini-btn no" @click="novaConta = false">Não</button>
            </div>
        </div>
    </section>
</template>

<script>
import * as fb from "@/firebase";
export default {
    data() {
        return {
            user: {},
            errorLogin: false,
            novaConta: false,
        };
    },
    methods: {
        reset() {
            this.user = {};
        },
        async login() {
            try {
                await fb.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
                this.$router.push({name: "home"});
            } catch (error) {
                console.log("erro");
                const errorCode = error.code;
                switch (errorCode) {
                    case "auth/wrong-password":
                        this.errorLogin = true;
                        break;
                    case "auth/invalid-email":
                        this.errorLogin = true;
                        break;
                    case "auth/user-not-found":
                        this.novaConta = true;
                        break;
                    default:
                        this.errorLogin = true;
                        break;
                }
            }
        },
        async criarNovaConta() {
            this.novaConta = false;
            await fb.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
            this.login();
        },
    },
};
</script>

<style scoped>
.app {
    margin: auto;
    margin-top: 100px;
    width: 600px;
    height: 90vh;
}

.form-container {
    display: flex;
    margin: auto;
    flex-direction: column;
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0px 1px 5px 0px #0000008a;
}
.input-group {
    display: flex;
    flex-direction: column;
    margin: 10px;
}
.login-input {
    width: 500px;
    font-size: 1.2rem;
    margin: 10px;
}
.btn-group {
    display: flex;
    justify-content: center;
    margin: 10px;
}
.primary {
    background-color: rgb(0, 115, 223);
    color: white;
}
.warning {
    background-color: rgb(223, 126, 0);
    color: white;
    width: 100px;
}
.no {
    background-color: rgb(223, 7, 0);
    color: white;
    width: 100px;
}

.mini {
    background-color: inherit;
    border: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    color: white;
}

.mini-btn {
    width: 80px;
    padding: 10px;
    margin: 10px;
    border: solid 0;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 0px #0000008a;
}

.alert {
    margin: auto;
    margin-top: 20px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(223, 126, 0);
    color: white;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 1px 5px 0px #0000008a;
}
.alert2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    background-color: rgb(223, 126, 0);
    color: white;
    border-radius: 5px;
    padding: 10px;
    padding-top: 20px;
    box-shadow: 0px 1px 5px 0px #0000008a;
}
</style>
