<template>
    <div>
        
        <!-- <h3>alo</h3>
        <div><AdminMain/></div> -->
        <div class="Admin">
            <div class="AdminNav">
                <AdminNav />
            </div>
            <div class="content">
                <!-- <AdminDashboard /> -->
                 <router-view /> 
            </div>
           
        </div>


    </div>
</template>

<script >
import AdminNav from '../components/AdminNav.vue';
import AdminDashboard from '../components/AdminDashboard.vue';
export default {
    components: {
        AdminNav,
        AdminDashboard,
    }
}
</script>

<style lang="scss"  scoped>
.Admin {
    width: 1024px;
    height: 100%;
    border: 1px solid red;
    display: flex;
    // margin: 0 auto;

    .AdminNav {
        flex: 1;
        border: 1px solid red;
    }

    .content {
        flex: 3;
        border: 1px solid red;
    }
}
</style>