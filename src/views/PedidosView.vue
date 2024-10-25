<template>
  <div class="main-container">
    <h1>Gerenciar pedidos:</h1>
    <GridPedidos />
  </div>
</template>


<script>
  import GridPedidos from '../components/GridPedidos'

export default {
  name: 'Pedidos',
  components: {
    GridPedidos
  }
}

</script>
