<template>
    <div id="form">
        <form @submit.prevent="toggleForm">
            <div class="progress">
                <div class="progress-bar" 
                      role="progressbar" 
                      aria-valuemin="0" 
                      aria-valuemax="100" 
                      v-bind:style="'width:' + calcProgress +'%'" 
                      v-bind:aria-valuenow="calcProgress">
                    {{calcProgress}}
                </div>
            </div>
            <div>
                <app-input-component 
                    v-for="(elem, index) in info" 
                    :name="elem.name" 
                    :value="elem.value" 
                    :pattern="elem.pattern" 
                    :key="index" 
                    @componenteventchange="checkValue(elem, $event, index)">
                </app-input-component>
            </div>
            <button class="btn btn-primary" v-bind:disabled="disabledButton" @click="changeName">
      {{getButtonName}}
    </button>
        </form>
    </div>
</template>

<script>
    import AppInputComponent from './Input.vue'
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import {mapMutations} from 'vuex';

export default {
    data(){
            return {
                isButtonClicked: false
            };
        },components: {
        AppInputComponent: AppInputComponent
    },
    computed: { 
        ...mapGetters([
            'info',
            'done',
            'formSubmited',
            'disabledButton',
            'calcProgress',
            'buttonName'
        ]), 
        
        disabledButton (){
            return this.calcProgress !== 100 ? true : false;
         
        },
        
        getButtonName(){
            return !this.isButtonClicked ?'Send Data' : 'Sending...'
        }
        
       
    },
    methods: {
        checkValue(elem, data, index){
            this.$store.commit( 'checkValue', {elem: elem, data: data, index: index} );
        },
        
        toggleForm() {
            this.$store.dispatch('toggleForm');
        },

        changeName(){
            return this.isButtonClicked = !this.isButtonClicked;
        }
    }
}
</script>

<style>

</style>
