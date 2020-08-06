<template>
    <div class="mb-3">
        <input  
            type="text"
            :placeholder="placeholder"
            :value="value"
            :name="name"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
            @input="$emit('input', $event.target.value)"
            @change="$emit('input', $event.target.value)"
            class="w-full bg-gray-200 focus:outline-none text-gray-600 p-3 text-sm">
        <span 
            v-if="error" 
            class="text-red-400 text-xs">{{error}}</span>
    </div>
</template>

<script>
export default {
    props:{
        placeholder:{
             type: String,
             required: true
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        value: {
            type: String,
            required: false,
            default: ''
        },
        name: {
            type: String,
            required: true
        },
        error: {
            type: String,
            required: false
        }
    },
}
</script>  