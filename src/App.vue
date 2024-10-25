<template>
  <Navbar :logo="logo_src" :alt="descricao_logo"/>
  <router-view />
  <Footer />
</template>


<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data(){
    return {
      logo_src : "/img/logo.png",
      descricao_logo : "Imagem Hamburguer"
    }
  }
}

</script>


<style>
    * {
      font-family:  Helvetica;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .main-container{
      margin: 0px;
      min-height: 250px;
    }

    h1{
      text-align: center;
      font-size: 25px;
      margin-bottom: 30px;
      color: #222;
    }

</style>
