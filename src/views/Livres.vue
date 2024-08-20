<template>
    <div class="container">
        <div>
            <h1>Livres</h1>

            <!-- Formulaire pour ajouter un livre -->
            <div class="mb-4">
                <h2>Ajouter un Nouveau Livre</h2>
                <form @submit.prevent="addBook">
                    <div class="form-group mb-3">
                        <label for="title">Titre</label>
                        <input type="text" id="title" v-model="newBook.title" class="form-control" required />
                    </div>
                    <div class="form-group mb-3">
                        <label for="author">Auteur</label>
                        <input type="text" id="author" v-model="newBook.author" class="form-control" required />
                    </div>
                    <div class="form-group mb-3">
                        <label for="year">Année</label>
                        <input type="number" id="year" v-model="newBook.year" class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Ajouter</button>
                </form>
            </div>

            <!-- Liste des livres -->
            <div>
                <h2>Liste des Livres</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Année</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books" :key="book.id">
                            <td>{{ book.title }}</td>
                            <td>{{ book.author }}</td>
                            <td>{{ book.year }}</td>
                            <td>
                                <button class="btn btn-info btn-sm" @click="viewDetails(book)">Voir</button>
                                <button class="btn btn-warning btn-sm" @click="editBook(book)">Éditer</button>
                                <button class="btn btn-danger btn-sm" @click="deleteBook(book.id)">Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Modal pour voir les détails d'un livre -->
            <div v-if="selectedBook" class="modal fade show d-block" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Détails du Livre</h5>
                            <button type="button" class="close" aria-label="Close" @click="selectedBook = null">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p><strong>Titre:</strong> {{ selectedBook.title }}</p>
                            <p><strong>Auteur:</strong> {{ selectedBook.author }}</p>
                            <p><strong>Année:</strong> {{ selectedBook.year }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="selectedBook = null">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Formulaire pour éditer un livre -->
            <div v-if="editingBook" class="mt-4">
                <h2>Éditer le Livre</h2>
                <form @submit.prevent="updateBook">
                    <div class="form-group mb-3">
                        <label for="editTitle">Titre</label>
                        <input type="text" id="editTitle" v-model="editingBook.title" class="form-control" required />
                    </div>
                    <div class="form-group mb-3">
                        <label for="editAuthor">Auteur</label>
                        <input type="text" id="editAuthor" v-model="editingBook.author" class="form-control" required />
                    </div>
                    <div class="form-group mb-3">
                        <label for="editYear">Année</label>
                        <input type="number" id="editYear" v-model="editingBook.year" class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Mettre à Jour</button>
                </form>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

// Données initiales
const books = ref([
    { id: 1, title: 'Livre 1', author: 'Auteur 1', year: 2021 },
    { id: 2, title: 'Livre 2', author: 'Auteur 2', year: 2022 }
]);

const newBook = ref({ title: '', author: '', year: '' });
const selectedBook = ref(null);
const editingBook = ref(null);

// Fonction pour ajouter un livre
function addBook() {
    const id = books.value.length ? Math.max(books.value.map(b => b.id)) + 1 : 1;
    books.value.push({ ...newBook.value, id });
    newBook.value = { title: '', author: '', year: '' };
}

// Fonction pour voir les détails d'un livre
function viewDetails(book) {
    selectedBook.value = book;
}

// Fonction pour éditer un livre
function editBook(book) {
    editingBook.value = { ...book };
}

// Fonction pour mettre à jour un livre
function updateBook() {
    const index = books.value.findIndex(b => b.id === editingBook.value.id);
    if (index !== -1) {
        books.value[index] = { ...editingBook.value };
        editingBook.value = null;
    }
}

// Fonction pour supprimer un livre
function deleteBook(id) {
    books.value = books.value.filter(b => b.id !== id);
}
</script>

<style scoped>
.modal {
    display: block;
}
</style>