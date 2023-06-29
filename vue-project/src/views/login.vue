<template>
    <div>
        <p>day la trang login</p>
        <div class="form d-flex justify-content-center">
            <form @submit="postLogin()" v-on:submit.prevent="onSubmit">
                <!-- Email input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1">User Name</label>
                    <input type="search" id="form2Example1" class="form-control" v-model="username" />
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">Password</label>
                    <input type="text" id="form2Example2" class="form-control" v-model="password" />
                </div>

                <button  type="submit" class="btn-block mb-4 ">sign in</button>
                
            </form>
        </div>

        <!-- <div>{{ edit }}</div> -->
        <!-- <button @click="editAccount">click me</button> -->
       <div><input v-model="newrole" type="text"></div>

        <div class="table-content">
        <table class="table table-borded table-responsive table-striped " id="table-list">
            <thead class="table-dark">
                <tr>
                    <td>id</td>
                    <td>username</td>
                    <td>role</td>
                    <td>edit</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(account) of edit">
                    <td>{{account._id}}</td>
                    <td>{{account.username}}</td>
                    <td>{{account.role}}</td>
                    <td><button @click="editAccount(account._id)" >edit</button></td>
                    
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Female</td>
                    <td>vccch@gmail.com</td>
                </tr>
              
            </tbody>
        </table>
        <button class="btn btn-info" id="add"><span class="glyphicon glyphicon-plus-sign"></span>Add New Members</button>
    </div>
        
    <!-- <div>{{ editAccount }}</div> -->
    <!-- <div>{{ edit }}</div> -->

    <!-- <div>{{ getAll }}</div> -->
    


    </div>
</template>

<script >
//  import
import axios, { Axios, AxiosHeaders } from 'axios';
// import Vue from 'vue';
// import { createTextVNode } from 'vue';

// Vue.$forceUpdate()
// export
export default {
    data() {
        return {
            username: '',
            password: '',
            accounts: [],
            edit:{},
            newrole: '',
            
        }
    },
    methods: {
        async reload() {
            this.$forceUpdate()
        },
        async getAll() {
            // let mya = JSON.parse(JSON.stringify(this.edit))
            const account = await axios({
                method: 'get',
                url: 'http://localhost:3005/api/user/lg',
                
            })
            // this.$forceUpdate()
            return this.edit = account.data
            
            // console.log(mya);
        },

        async editAccount(id) {
            const account = await axios({
                method: 'put',
                url: 'http://localhost:3005/api/user/lg',
                data: {
                    id: id,
                    newrole: this.newrole
                }

            })
            this.$forceUpdate()
        },
        // async editAccount() {
        //     const account = await axios({
        //         method: 'put',
        //         url: 'http://localhost:3005/api/user/lg',
        //     })

        //     return this.edit = account.data
        // },

        // async editAccount() {
        //     const account = await axios({
        //         method: 'put',
        //         url: 'http://localhost:3005/api/user/lg',
        //     })

        //     return this.edit = account.data
        // },

        async login() {
            // e.preventDefault()  => nv-on:submit.prevent="onSubmit"
            try {
                const account = await axios({
                    method: 'post',
                    url: 'http://localhost:3005/api/user/login',
                    data: {
                        username: this.username.trim(),
                        password: this.password
                    }
                });
                // set cookie   
                //ee2503c8a68617267fce19612ad6dfa9f67c0a00b1e000c9f16cc64868eb3be3f91174dbff29230b266b818f746bc5c87316af8ae4852bb0cba7cde7405acded
                if (account) {
                    this.setCookie('token', account.data.token, 1)
                }
                // delete text input
                this.username = ''
                this.password = ''

                console.log(account.data);
            } catch (error) {
                console.log('loi ', error);
            }
        },

        async postLogin() {
           
                const account = await axios({
                method: 'post',
                url: 'http://localhost:3005/api/user/lg',
                data: {
                    username: this.username.trim(),
                    password: this.password
                }
                
            });
            this.setCookie('token',account.data.token,10)
            if(account.data.checkLogin){
                this.$router('/admin')
            }
            
            
            
                  

        },
        setCookie(cname, cvalue, exdays) {

            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },
        getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    },
    // end method
    mounted() {
        this.getAll()
       
    }
}
</script>

<style  scoped>

</style>