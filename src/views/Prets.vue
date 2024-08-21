<template>
    <div class="container">
      <div>
        <h1>Prêts</h1>
  
        <!-- Formulaire pour enregistrer un prêt -->
        <div class="mb-4" v-if="!editingLoan && !selectedLoan">
          <h2>Enregistrer un Nouveau Prêt</h2>
          <form @submit.prevent="addLoan">
            <div class="form-group mb-3">
              <label for="newBookId">ID du Livre</label>
              <input type="number" id="newBookId" v-model="newLoan.bookId" class="form-control" required />
            </div>
            <div class="form-group mb-3">
              <label for="newMemberId">ID du Membre</label>
              <input type="number" id="newMemberId" v-model="newLoan.memberId" class="form-control" required />
            </div>
            <div class="form-group mb-3">
              <label for="newLoanDate">Date de Prêt</label>
              <input type="date" id="newLoanDate" v-model="newLoan.date" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary">Enregistrer</button>
          </form>
        </div>
  
        <!-- Liste des prêts -->
        <div>
          <h2>Liste des Prêts</h2>
          <table class="table">
            <thead>
              <tr>
                <th>ID du Livre</th>
                <th>ID du Membre</th>
                <th>Date de Prêt</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="loan in loans" :key="loan.id">
                <td>{{ loan.bookId }}</td>
                <td>{{ loan.memberId }}</td>
                <td>{{ loan.date }}</td>
                <td>
                  <button class="btn btn-info btn-sm" @click="viewDetails(loan)">Voir</button>
                  <button class="btn btn-warning btn-sm" @click="editLoan(loan)">Éditer</button>
                  <button class="btn btn-danger btn-sm" @click="deleteLoan(loan.id)">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Modal pour voir les détails d'un prêt -->
        <div v-if="selectedLoan" class="modal fade show d-block mt-4" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Détails du Prêt</h5>
                <button type="button" class="close" aria-label="Close" @click="selectedLoan = null">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p><strong>ID du Livre:</strong> {{ selectedLoan.bookId }}</p>
                <p><strong>ID du Membre:</strong> {{ selectedLoan.memberId }}</p>
                <p><strong>Date de Prêt:</strong> {{ selectedLoan.date }}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="selectedLoan = null">Fermer</button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Formulaire pour éditer un prêt -->
        <div v-if="editingLoan" class="mt-4">
          <h2>Éditer le Prêt</h2>
          <form @submit.prevent="updateLoan">
            <div class="form-group mb-3">
              <label for="editBookId">ID du Livre</label>
              <input type="number" id="editBookId" v-model="editingLoan.bookId" class="form-control" required />
            </div>
            <div class="form-group mb-3">
              <label for="editMemberId">ID du Membre</label>
              <input type="number" id="editMemberId" v-model="editingLoan.memberId" class="form-control" required />
            </div>
            <div class="form-group mb-3">
              <label for="editLoanDate">Date de Prêt</label>
              <input type="date" id="editLoanDate" v-model="editingLoan.date" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary">Mettre à Jour</button>
            <button type="button" class="btn btn-secondary mt-2" @click="editingLoan = null">Annuler</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Données initiales
  const loans = ref([
    { id: 1, bookId: 1, memberId: 1, date: '2024-08-01' },
    { id: 2, bookId: 2, memberId: 2, date: '2024-08-15' }
  ]);
  
  const newLoan = ref({ bookId: '', memberId: '', date: '' });
  const selectedLoan = ref(null);
  const editingLoan = ref(null);
  
  // Fonction pour vérifier si un ID est unique
  function isUniqueId(id) {
    return !loans.value.some(loan => loan.id === id);
  }
  
  // Fonction pour générer un ID unique et positif
  function generateUniqueId() {
    let id = loans.value.length ? Math.max(...loans.value.map(l => l.id)) + 1 : 1;
    while (!isUniqueId(id)) {
      id++;
    }
    return id;
  }
  
  // Fonction pour enregistrer un prêt
  function addLoan() {
    const id = generateUniqueId();
    if (id > 0) {
      loans.value.push({ ...newLoan.value, id });
      newLoan.value = { bookId: '', memberId: '', date: '' };
    } else {
      alert("L'ID du prêt doit être un nombre positif et unique.");
    }
  }
  
  // Fonction pour voir les détails d'un prêt
  function viewDetails(loan) {
    selectedLoan.value = loan;
  }
  
  // Fonction pour éditer un prêt
  function editLoan(loan) {
    editingLoan.value = { ...loan };
  }
  
  // Fonction pour mettre à jour un prêt
  function updateLoan() {
    const index = loans.value.findIndex(l => l.id === editingLoan.value.id);
    if (index !== -1) {
      loans.value[index] = { ...editingLoan.value };
      editingLoan.value = null;
    }
  }
  
  // Fonction pour supprimer un prêt
  function deleteLoan(id) {
    loans.value = loans.value.filter(l => l.id !== id);
  }
  </script>
  
  <style scoped>
  .modal {
    display: block;
  }
  </style>
  