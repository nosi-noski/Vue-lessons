<template>
    <div class="container my-16 w-full  mx-auto">
        <h1 class=" text-3xl text-center text-orange-400 ">Register</h1>
      <div class="max-w-xs mx-auto h-12 bg-white">
            
            <div class="w-full shadow mt-5 rounded-sm bg-white p-8">
                <text-input
                    placeholder="Enter your name">
                </text-input>
                <text-input
                    placeholder="Enter your email">
                </text-input>
                <text-input
                    placeholder="Enter your password">
                </text-input> 
                <!-- <input type="text" 
                    class="w-full bg-gray-200 focus:outline-none text-gray-600 p-3 text-sm mb-3"
                    placeholder="Enter your name">             -->
                <!-- <input type="text" 
                    class="w-full bg-gray-200 focus:outline-none text-gray-600 p-3 text-sm mb-3"
                    placeholder="Enter your email">
                <input type="text" 
                    class="w-full bg-gray-200 focus:outline-none text-gray-600 p-3 text-sm mb-3"
                    placeholder="Enter your password"> -->
                <button class="w-full mt-3 py-4 bg-gray-600 text-white rounded-sm focus:outline-none hover:bg-gray-700">Sign Up</button>  
            </div>
      </div>

    </div>
        
</template>
<script>
export default {
    data : () => {
        model: {
            name: '',
            email: '',
            password: '',
        }
    }
}
</script>