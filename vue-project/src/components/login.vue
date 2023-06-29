<template>
    <div>
        <div class="form d-flex justify-content-center">
            <form @submit="login()" v-on:submit.prevent="onSubmit">
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

                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
            </form>
            <!-- Register buttons -->
            <!-- <div class="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
                <p>or sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                </button>
            </div> -->

        </div>

        <!-- <div v-for="account in accounts">{{ account.data }}</div> -->


        <!-- <button @click="getLogin()">123</button> -->


    </div>
</template>

<script >
import axios from 'axios';
import { createTextVNode } from 'vue';

export default {
    data() {
        return {
            username: '',
            password: '',
            accounts: [],
        }
    },
    methods: {
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
                if(account) {
                    this.setCookie('token',account.data.token, 1)
                }
                // delete text input
                this.username = ''
                this.password = ''

                console.log(account.data);
            } catch (error) {
                console.log('loi ', error);
            }
        },
        async getLogin() {

            // e.preventDefault(); => v-on:submit.prevent="onSubmit"
            try {
                const getAccount = await axios({
                    method: 'post',
                    url: 'http://localhost:3005/api/user/login'
                    // data: {
                    //     username: this.username,
                    //     password: this.password
                    // }
                });



            } catch (error) {
                console.log('loi  ', err);
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
}
</script>

<style  scoped>
.form {
    max-width: 500px;
    /* border: 1px solid red; */

}
</style>