<template>
 <div id="app">
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">IGNITOR APP</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <router-link class="nav-link" to="/" exact>Home</router-link>
        <router-link class="nav-link" to="/posts">Post</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
  <b-container> <router-view /> </b-container>
</div>
</template>
