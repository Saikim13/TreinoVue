<template>
    <v-container>
        <h2 class="text-h6 text-center">
            Sugestões
        </h2> 
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nome"
                required
            ></v-text-field>

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>

            <v-textarea
              name="input-7-1"
              label="Sugestão"
            ></v-textarea>

            <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'Você deve concordar para continuar!']"
                label="Você concorda com os termos de uso?"
                required
            ></v-checkbox>

            <div class="botoes">

              <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                  
              >
                  Enviar
              </v-btn>

              <v-btn
                  color="error"
                  class="mr-4"
                  @click="reset"
              >
                  Limpar
              </v-btn>
            </div>

            </v-form>
    </v-container>
</template>

<script>
export default {
    name: "FormularioView",
    
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'É necessário colocar um nome',
        v => (v && v.length <= 10) || 'O nome deve possuir menos de 10 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'É necessário colocar um e-mail',
        v => /.+@.+\..+/.test(v) || 'Email deve ser válido',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
}
</script>

<style scoped>
    .botoes {
    display: flex;
    justify-content: space-evenly;
    margin-top: 8px;
  }
</style>