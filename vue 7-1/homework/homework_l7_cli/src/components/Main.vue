<template>
    <div class="wrapper">
        <app-form></app-form>
        <!-- <app-result></app-result> -->
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
