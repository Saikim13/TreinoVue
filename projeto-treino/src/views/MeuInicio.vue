<template>
    <v-container>
        <h2 class="text-h6 text-center">Brasileirão Série A</h2>

        <v-img
            class="inicio-imagem mg-4"
            src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2974821:1596806515/Serie-A.png"
        ></v-img>

        <p class="desc mt-4">A Série A do Campeonato Brasileiro de Futebol de 2020, oficialmente Brasileirão Assaí – Série A 2022 por motivos de patrocínio, é a 66.ª edição da principal divisão do futebol brasileiro. A disputa tem o mesmo regulamento dos anos anteriores, quando foi implementado o sistema de pontos corridos.</p>
    </v-container>
</template>

<script>
export default {
        name: 'MeuInicio'
}
</script>


<style scoped>
    .inicio-imagem {
        border-radius: 3px;
    }

    .desc {
        text-align: justify;
        margin: 4px;
    }
</style>