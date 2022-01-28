<template>
    <div>
        <h2>Home</h2>
        <input class="task-input" type="text" v-model="novaTarefa" placeholder="Tarefa" />
        <button class="task-btn" @click="adicionar"><font-awesome-icon icon="plus" /></button>

        <hr />

        <div class="task" v-for="tarefa of tarefas" :key="tarefa.id">
            {{ tarefa.titulo }}
        </div>
    </div>
</template>

<script>
import * as fb from "@/firebase";
export default {
    data() {
        return {
            uid: "",
            novaTarefa: "",
            tarefas: [],
        };
    },
    mounted() {
        this.uid = fb.auth.currentUser.uid;
        this.buscarTarefasDoServidor();
    },
    methods: {
        async buscarTarefasDoServidor() {
            this.tarefas = [];
            const logTasks = await fb.tasksCollection.where("owner", "==", this.uid).get();
            for (const doc of logTasks.docs) {
                this.tarefas.push({
                    id: doc.id,
                    titulo: doc.data().titulo,
                });
            }
        },
        async adicionar() {
            await fb.tasksCollection.add({
                titulo: this.novaTarefa,
                data: new Date().toISOString().slice(0, 10),
                owner: this.uid,
            });
            this.tarefas.push({titulo: this.novaTarefa});
            console.log(this.tarefas);
            this.novaTarefa = "";
            this.buscarTarefasDoServidor();
        },
    },
};
</script>

<style>
.task-input {
    width: 90%;
    font-size: 1.2rem;
    margin: 10px;
}
.task-btn {
    background-color: inherit;
    font-size: 25px;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition-duration: 0.2s;
}
.task-btn:hover {
    background-color: rgba(128, 128, 128, 0.1);
}

.task {
    padding: 15px;
    transition-duration: 0.2s;
}
.task:hover {
    background-color: rgba(128, 128, 128, 0.1);
}
</style>
