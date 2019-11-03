<template>
    <div>
        <div>Count: {{cnt}}</div>
        <div>Total: {{total}}</div>
    {{ cnt }}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: mapGetters([
            'cnt',
            'total'
        ])
    }
</script>
<style>
</style>