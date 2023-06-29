<template>
    <div>
        <div> <Nav /></div> 
        <div><Category /></div>
        <div><Product /></div>
        <div><Pagination /></div>
        <div><Footter /></div>
        
        <!-- <button><router-link to="/login">Login</router-link></button> -->
        
       
        
        <!-- <div><login/></div> -->
        <!-- <div><pagination/></div> -->
        
    </div>
</template>

<script>
import Login from '../components/login.vue';
import Pagination from '../components/pagination.vue';
import Nav from '../components/nav.vue';
import Category from '../components/category.vue';
import Product from '../components/product.vue';
import Footter from '../components/Footter.vue'

export default {
    data() {
        return{
            
        }
    },
    components: {
    Login,
    Pagination,
    Nav,
    Category,
    Product,
    Pagination,
    Footter,
}
}
</script>

<style  scoped>

</style>