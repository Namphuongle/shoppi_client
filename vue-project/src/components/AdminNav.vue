<template>
    <div>
        <div class="Ad-nav">
            <h3>nav</h3>
            <div>
                <ul> 
                    <li >
                        <i class="fa-solid fa-house-chimney"></i>
                        <router-link to="/admin/dashboard">dashboard</router-link>
                    </li>
                    <li>
                        <i class="fa-solid fa-house-chimney"></i>
                         <router-link to="/admin/user">user </router-link>
                    </li>
                    <li>
                        <i class="fa-solid fa-house-chimney"></i>
                        <a href="">profile admin</a>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script >
import AdminDashboard from './AdminDashboard.vue';
import AdminUser from './adminUser.vue';
export default {
    components: {
        AdminDashboard,
        AdminUser,
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;


}
body {
    font-size: 16px;

}
.Ad-nav  {
    width: 200px;
    height: 300px;
    border: 1px solid red;
    padding: 2px;
    ul li {
        
        padding: 3px 0;
        margin: 3px 0 ;
        border: 1px solid rgba(255, 255, 255, 0);
     
        &:hover {
            background-color: aquamarine;
            border: 1px solid red;
            cursor: pointer;

        }
    }
    ul li a {
        text-decoration: none;
        color: black;
        padding-left: 1rem;
    }
}
</style>