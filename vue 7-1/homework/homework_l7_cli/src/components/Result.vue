<template>
  <div id="result">

    <table class="table table-bordered">
        <tbody>
            <tr v-for="elem in info" v-bind:key="elem.name">
                <td>{{ elem.name }}</td>
                <td>{{ elem.value }}</td>
            </tr>
        </tbody>
    </table>

    <button class="btn btn-success" v-on:click="moveBack"> Back</button>
   
      
  </div>
</template>

<script>   
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import {mapMutations} from 'vuex';

    export default {
        
        computed:{
            ...mapGetters([
            'info'
            ])
        },
        methods: {
            moveBack(){
                this.$router.push('/main');
            }
        }
    }
</script>

<style>

</style>
