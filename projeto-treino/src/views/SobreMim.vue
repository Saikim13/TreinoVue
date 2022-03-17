<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt -5">
            Sobre mim
        </h2>
        <span class="avatar">
        <v-avatar  size="120">
        <img
            src="https://lh3.googleusercontent.com/a-/AOh14Gi94tnYRpA41FeI5TOD_aslRwJE03ds4nLZh7y51g=s288-p-no"
        >
        </v-avatar>
        </span>
        <p class="descricao">
          Eu sou Kim Cordeiro Romeu, tenho 29 anos, sou natural de Pelotas no Rio Grande do Sul, sou graduando em Análise e Desenvolvimento de Sistemas pela Universidade do Vale do Rio dos Sinos (Unisinos) e Bacharel em Fisioterapia pela Universidade Católica de Pelotas (UCPel).
          Exerci minha formação como fisioterapeuta por quase 5 anos, nos quais trabalhei em clínicas de fisioterapia, auxiliando em seu gerenciamento e coordenação de estagiários, como também atuei em hospitais e clínicas médicas.
          <br/>
          Em 2019 decidi realizar um intercâmbio para Austrália. Residi em Sydney por 4 meses para estudar inglês e conhecer um pouco o mundo. Lá trabalhei com eventos, entregas e em obras. Foram meses de muito trabalho e aprendizado onde tive contato com diferentes culturas e pessoas. Foi também lá que finalmente decidi que iria ir atrás do meu sonho de trabalhar com tecnologia, uma área que me oferece flexibilidade para trabalhar de qualquer lugar do mundo.
          Quando retornei, voltei decidido a realizar uma formação e começar a trabalhar com programação. Algo que considerei por muito tempo por minha afinidade com a área, mas só tive coragem após essa experiência. Desde então venho estudando e correndo atrás desse sonho.
          <br/>
          Me interessei pela Lett por ser um empresa que possui uma história tão rica e singular, se conseguir a vaga de estágio, pretendo por em prática o conhecimento que adquiri até o momento e me aperfeiçoar ainda mais. Para que possa assim, crescer junto com a empresa.
        </p>
    </v-container>
</template>

<script>
export default {
  name: 'SobreMim'

}
</script>

<style scoped>
    .descricao {
      text-align: justify;
    }

    .avatar {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;
    }

</style>