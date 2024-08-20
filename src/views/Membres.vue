<template>
    <div class="container">
        <div>
            <h1>Membres</h1>

            <!-- Formulaire pour ajouter un membre -->
            <div class="mb-4">
                <h2>Ajouter un Nouveau Membre</h2>
                <form @submit.prevent="addMember">
                    <div class="form-group mb-3">
                        <label for="name">Nom</label>
                        <input type="text" id="name" v-model="newMember.name" class="form-control" required />
                    </div>
                    <div class="form-group mb-3">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="newMember.email" class="form-control" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Ajouter</button>
                </form>
            </div>

            <!-- Liste des membres -->
            <div>
                <h2>Liste des Membres</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in members" :key="member.id">
                            <td>{{ member.name }}</td>
                            <td>{{ member.email }}</td>
                            <td>
                                <button class="btn btn-info btn-sm" @click="viewDetails(member)">Voir</button>
                                <button class="btn btn-warning btn-sm" @click="editMember(member)">Éditer</button>
                                <button class="btn btn-danger btn-sm"
                                    @click="deleteMember(member.id)">Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Modal pour voir les détails d'un membre -->
            <div v-if="selectedMember" class="modal fade show d-block" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Détails du Membre</h5>
                            <button type="button" class="close" aria-label="Close" @click="selectedMember = null">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p><strong>Nom:</strong> {{ selectedMember.name }}</p>
                            <p><strong>Email:</strong> {{ selectedMember.email }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                @click="selectedMember = null">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Formulaire pour éditer un membre -->
            <div v-if="editingMember" class="mt-4">
                <h2>Éditer le Membre</h2>
                <form @submit.prevent="updateMember">
                    <div class="form-group mb-3">
                        <label for="editName">Nom</label>
                        <input type="text" id="editName" v-model="editingMember.name" class="form-control" required />
                    </div>
                    <div class="form-group mb-3">
                        <label for="editEmail">Email</label>
                        <input type="email" id="editEmail" v-model="editingMember.email" class="form-control"
                            required />
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
const members = ref([
    { id: 1, name: 'Membre 1', email: 'membre1@example.com' },
    { id: 2, name: 'Membre 2', email: 'membre2@example.com' }
]);

const newMember = ref({ name: '', email: '' });
const selectedMember = ref(null);
const editingMember = ref(null);

// Fonction pour ajouter un membre
function addMember() {
    const id = members.value.length ? Math.max(members.value.map(m => m.id)) + 1 : 1;
    members.value.push({ ...newMember.value, id });
    newMember.value = { name: '', email: '' };
}

// Fonction pour voir les détails d'un membre
function viewDetails(member) {
    selectedMember.value = member;
}

// Fonction pour éditer un membre
function editMember(member) {
    editingMember.value = { ...member };
}

// Fonction pour mettre à jour un membre
function updateMember() {
    const index = members.value.findIndex(m => m.id === editingMember.value.id);
    if (index !== -1) {
        members.value[index] = { ...editingMember.value };
        editingMember.value = null;
    }
}

// Fonction pour supprimer un membre
function deleteMember(id) {
    members.value = members.value.filter(m => m.id !== id);
}
</script>

<style scoped>
.modal {
    display: block;
}
</style>