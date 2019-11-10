<template>
  <div id="result">

    <table class="table table-bordered">
        <tr v-for="elem in info" v-bind:key="elem.name">
            <td>{{ elem.name }}</td>
            <td>{{ elem.value }}</td>
        </tr>
    </table>
      
  </div>
</template>

<script>   
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import {mapMutations} from 'vuex';

    export default {
        
          computed: mapGetters([
            'info'
        ])
    }
</script>

<style>

</style>
