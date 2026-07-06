<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <v-responsive>
    <v-app>
      <v-layout>
        <v-app-bar>
          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title>Application Bar</v-app-bar-title>
        </v-app-bar>

        <v-navigation-drawer>
          <v-list nav>
            <v-list-item link>
              <RouterLink to="/">Home</RouterLink>
            </v-list-item>
            <v-list-item link>
              <RouterLink to="/about">About</RouterLink>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <RouterView />
      </v-layout>
    </v-app>
  </v-responsive>
</template>

<style scoped></style>
