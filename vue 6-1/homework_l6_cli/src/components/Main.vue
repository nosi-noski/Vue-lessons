<template>
    <div class="wrapper">
        <app-form v-if="!formSubmited"></app-form>
        <app-result v-else></app-result>
    </div>
</template>

<script>

    import AppForm from './Form.vue';
    import AppResult from './Result.vue';
    import {mapGetters} from 'vuex';
export default {
    components: {
        AppForm: AppForm,
        AppResult: AppResult
    },
    computed: mapGetters([
        'formSubmited'
    ])
}

</script>

<style>
</style>
