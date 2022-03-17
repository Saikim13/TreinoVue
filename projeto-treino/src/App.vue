<template>
  <v-app>
    <AppTopBar/>
    <v-main>
        <router-view/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue'
import AppFooter from './components/shared/AppFooter.vue'

export default {
  name: 'App',

  components: {
    AppTopBar,
    AppFooter
  },

  data: () => ({

  }),
};
</script>
