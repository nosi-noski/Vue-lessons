<template>
    <div class="container my-16 w-full  mx-auto">
        <h1 class=" text-3xl text-center text-orange-400 ">Register</h1>
        <div class="max-w-xs mx-auto h-12 bg-white">
        <div class="w-full shadow mt-5 rounded-sm bg-white p-8">
            <text-input
                name="name"
                v-bind:value="model.name"
                v-model="model.name"
                v-validate="'required'"
                :error="errors.first('name')"
                placeholder="Enter your name">
            </text-input>
            <text-input
                name="email"
                v-bind:value="model.email"
                v-model="model.email"
                v-validate="'required|email'"
                :error="errors.first('email')"
                placeholder="Enter your email">
            </text-input>
            <text-input
                name="password"
                v-bind:value="model.password"
                v-model="model.password"
                v-validate="'required|min:6'"
                :error="errors.first('password')"
                placeholder="Enter your password">
            </text-input> 
            <button 
                @click="register"
                class="w-full mt-3 py-4 bg-gray-600 text-white rounded-sm focus:outline-none hover:bg-gray-700">Sign Up</button>  
        </div>
      </div>

    </div>
        
</template>
<script>

import { POST_REGISTER } from '@store/auth/actions'

export default {
    data: () => ({
        model: {
            name: '',
            email: '',
            password: ''
        }
    }),
    methods:{
        register(){
            this.$validator.validate().then(isValid => {
                if(!isValid){
                    return
                }
                
                this.$store.dispatch(POST_REGISTER, this.model)
            })
        }
    }
}
</script>