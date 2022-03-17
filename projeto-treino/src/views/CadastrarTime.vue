<template>
    <v-container>
        <h2 class="text-h6 text-center">Cadastro de time</h2>

        <v-form class="cadastro-time" ref="form">
                    <v-text-field v-model="nome" label="Nome do clube" required></v-text-field>

                    <v-text-field v-model="password" type="password" label="Senha" required></v-text-field>

                    <v-text-field v-model="email" label="E-mail" required>
                    </v-text-field>
        </v-form>  
        
        <div class="botoes">
            <router-link to="/user">
                <v-btn
                    class="botaoCadastrar"
                    color="green"
                    elevation="2"
                    medium
                    outlined
                    rounded
                    @click="cadastrar"
                >
                    Cadastrar
                </v-btn>
                        </router-link>
                <v-btn
                    class="botaoLimpar"
                    color="green"
                    elevation="2"
                    medium
                    outlined
                    rounded
                    @click="limpar"
                >
                    Limpar
                </v-btn>

        </div>  

    </v-container>
</template>

<script>
export default {
    name: "CadastrarTime",
    data() {
        return {
            nome: "",
            password: "",
            email: "",
        };
    },

    methods: {
        cadastrar() {},
        limpar() {
            this.nome = "";
            this.password = "";
            this.email = "";
        },
    },
}
</script>

<style scoped>
    .botoes {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

    }
</style>