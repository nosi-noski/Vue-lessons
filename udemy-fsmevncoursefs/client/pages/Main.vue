<template>
    <div>
        <div class="h-2 w-full bg-orange-400"></div>
        <div class="w-full h-12 flex items-center justify-between px-6">
            <router-link to="/" 
                         class="text-orange-400
                                no-underline
                                hover:underline">Mevn</router-link>
            <div>
                <router-link 
                    class=" text-gray-600 
                            ml-1
                            no-underline
                            hover:underline" 
                    to="/auth/login">Sign In</router-link>
                
                <router-link 
                    class=" text-gray-600 
                            border-2 
                            rounded-full 
                            border-gray-600
                            no-underline
                            ml-2 
                            px-3
                            py-2
                            hover:text-white
                            hover:border-gray-700
                            hover:bg-gray-700" 
                    to="/auth/register">Join Now</router-link>
            </div>
        </div>
           
        <router-view></router-view>
    </div>
</template>  