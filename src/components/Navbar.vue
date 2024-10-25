<template>
    <div id="nav">
        <router-link to="/home" id="logo_url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/home">Fazer pedidos</router-link>
        <router-link to="/pedidos">Pedidos</router-link>
    </div>
</template>

<script>
    export default {
        name : "Navbar",
        props:{
            logo : {
                required : true,
                type: String
            },
            alt: {
                required : true,
                type: String
            }
        }
    }

</script>

<style scoped>

    #nav{
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #nav #logo_url{
        margin: auto;
        margin-left: 0px;
    }

    #logo{
        width: 40px;
        height: 40px;
    }

    #nav a{
        color: #fcba03;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    #nav a:hover{
        color: #fff;
    }


</style>
  