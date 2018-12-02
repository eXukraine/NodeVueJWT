<template>
    <div class="login">
        <form v-on:submit="login">
            <input type="text" name="email" placeholder="User E-Mail">
            <input type="password" name="password" placeholder="User password">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>

/* eslint-disable */

    import router from '../router/router'  
    import axios from "axios"

export default {
    name: "Login",
    data(){
        return{
            
        }
    },

    methods:{
        login: (e) => {    
            e.preventDefault()    
            let useremail = e.target.elements.email.value
            let userpassword =  e.target.elements.password.value    
            let login = () => {    
                let data = {    
                    email: useremail,    
                    password: userpassword    
                }    
                axios.post("/user/signup", data)    
                    .then((response) => {    
                            
                        router.push("/login")    
                    })    
                    .catch((errors) => {    
                        console.log("Cannot log in")    
                    })  
                      
            }    
        login() 
         },
        
    }
}
</script>

<style>

</style>
