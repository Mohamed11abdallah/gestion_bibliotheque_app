<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><img src="/public/logo.jpg" alt="" height="50"></a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/Gestions">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/livres">Livres</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/membres">Membres</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/prets">Prêts</router-link>
          </li>
        </ul>
      </div>
    </nav>
    
  </div>
  

</template>

<script>
export default {
  name: 'Header'
};
</script>
