<template>
    <v-container>
        <h2 class="text-h6 text-center">Internacional</h2>

        <span>
            <v-img
                class="inicio-imagem mg-4"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/1280px-Escudo_do_Sport_Club_Internacional.svg.png"
            ></v-img>
        </span>

        <v-simple-table dark>
            <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-center">
                        Vitórias
                    </th>
                    <th class="text-right">
                        Pontos
                    </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th class="text-left">
                            Internacional
                        </th>
                        <th class="text-center">
                            {{ vitorias }}
                        </th>
                        <th class="text-right">
                            {{ contador }}
                        </th>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <span>
            <v-btn
            elevation="2"
            v-on:click="botaoVitoria"
            >
                Vitória
            </v-btn>

            <v-btn
            elevation="2"
            v-on:click="botaoEmpate"
            >
                Empate
            </v-btn>
        </span>
    </v-container>
</template>

<script>
export default {
    name: "LoginUser",

    data(){
        return {
            contador: 0,
            vitorias: 0
        }
    },
    methods: {
        botaoVitoria() {
            this.contador = this.contador +3;
            this.vitorias++
        },
        botaoEmpate() {
            this.contador++;
        }
    }
}
</script>

<style scoped>
    span {
        margin-top: 10px;
        display: flex;
        justify-content: center
    }
    .inicio-imagem {
        max-width: 50%;
        max-height: 50%;
        border-radius: 3px;
        }
    p {
        display: flex;
        justify-content: center;
    }

</style>