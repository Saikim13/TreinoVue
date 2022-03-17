<template>
    <v-container class="app-top-bar">
        <v-app-bar
      color="indigo lighten-2"
      app
      dark
        >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Treinamento</v-toolbar-title>

        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >

            <v-list
                nav
                dense
            >

                <v-list-item-group
                    v-model="group"
                    active-class="indigo lighten-1"
                >
                    <router-link to="/">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Início</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/classificacao">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-soccer</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Classificação</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/login">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-login</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Login</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/cadastro">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account-plus</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Cadastro</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/form">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-form-select</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Formulário</v-list-item-title>
                        </v-list-item>
                    </router-link>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>

</template>

<script>
export default {
    name: 'AppTopBar',

    data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>

<style scoped>
    .app-top-bar a{
        text-decoration: none;
    }
</style>