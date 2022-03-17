<template>
    <v-container>
        <v-footer
            class="app-footer"
            color="indigo lighten-2"
            padless
        >
            <v-row
            justify="center"
            no-gutters
            >
                <router-link to="/">
                    <v-btn
                        color="white"
                        text
                        rounded
                        class="my-2"
                    >
                        HOME
                    </v-btn>
                </router-link>

                <router-link to="/user">
                    <v-btn
                        color="white"
                        text
                        rounded
                        class="my-2"
                    >
                        USER
                    </v-btn>
                </router-link>
                
                <router-link to="/sobre">
                    <v-btn
                        color="white"
                        text
                        rounded
                        class="my-2"
                    >
                        ABOUT US
                    </v-btn>
                </router-link>

                <v-col
                    class="indigo lighten-3 py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>Iteris</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-container>
</template>

<script>
export default {
    name: 'AppFooter',
   
}
</script>

<style scoped>

</style>