<template>
    <input  type="text"
            :placeholder="placeholder"
            class="w-full bg-gray-200 focus:outline-none text-gray-600 p-3 text-sm mb-3"
            >
</template>

<script>
export default {
    props:{
        placeholder: String,
        required: true
    },
    type: {
        type: String,
        required: false,
        default: 'text'
    }
}
</script>  