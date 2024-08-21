# Application de Gestion de Bibliothèque

Cette application est un système de gestion de bibliothèque simple construit avec Vue.js. Elle permet de gérer les livres, les membres et les prêts.
Fonctionnalités
1. Gestion des Livres

    Ajouter un Livre : Formulaire pour ajouter un nouveau livre à la collection. Les champs incluent le titre, l'auteur, et l'année de publication.
    Voir les Détails : Affichage des détails d'un livre sélectionné.
    Éditer un Livre : Modifier les informations d'un livre existant.
    Supprimer un Livre : Retirer un livre de la collection.

## Code :

vue

<template>
    <!-- Vue.js code for managing books -->
</template>

<script setup>
import { ref } from 'vue';

// Functionality code for adding, editing, viewing, and deleting books
</script>

<style scoped>
/* Styling for book management */
</style>

2. Gestion des Membres

    Ajouter un Membre : Formulaire pour ajouter un nouveau membre avec un nom et un email.
    Voir les Détails : Affichage des informations d'un membre.
    Éditer un Membre : Modifier les informations d'un membre existant.
    Supprimer un Membre : Retirer un membre de la liste.

## Code :

vue

<template>
    <!-- Vue.js code for managing members -->
</template>

<script setup>
import { ref } from 'vue';

// Functionality code for adding, editing, viewing, and deleting members
</script>

<style scoped>
/* Styling for member management */
</style>

3. Gestion des Prêts

    Enregistrer un Prêt : Formulaire pour enregistrer un prêt avec l'ID du livre, l'ID du membre et la date de prêt.
    Voir les Détails : Affichage des informations sur un prêt.
    Éditer un Prêt : Modifier les détails d'un prêt existant.
    Supprimer un Prêt : Retirer un prêt de la liste.

## Code :

vue

<template>
    <!-- Vue.js code for managing loans -->
</template>

<script setup>
import { ref } from 'vue';

// Functionality code for adding, editing, viewing, and deleting loans
</script>

<style scoped>
/* Styling for loan management */
</style>

Structure du Projet

    App.vue : Le composant principal qui inclut la navigation et les vues des différentes sections.
    main.js : Point d'entrée de l'application Vue, où le routeur est monté.
    index.js : Fichier de configuration du routeur qui gère les différentes routes de l'application.
    Navbar.vue : Composant de navigation en haut de l'application, permettant d'accéder aux sections Livres, Membres et Prêts.

## Installation et Lancement

    Clonez le dépôt.
    Installez les dépendances avec npm install.
    Démarrez l'application avec npm run dev.