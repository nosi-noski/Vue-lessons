<template>
  <div class="form-group" >
      <label>{{ name }}</label>
      <span class="fa" :class="calcClass" v-if="activated"></span>
      <input 
          type="text" 
          class="form-control" 
          :value="value" 
          @input="changevalue"
      >
  </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import {mapMutations} from 'vuex';

  export default {

    computed: mapGetters([
        'info',
        'done',
        'formSubmited',
        'disabledButton',
        'calcProgress'
    ]),
    props: {
      'name': {
        type: String
      }, 
      'value': {
        type: String,
        required: true
      }, 
      'pattern':{}
    },
    data() {
        return {
            activated: this.value != ''
        }
    },
    computed: {
        calcClass() {
            return this.pattern.test(this.value) ? 
							'fa-check-circle text-success' :
							'fa-exclamation-circle text-danger';
        }

    },
    methods: {
      changevalue(e) {

          this.activated = true;
          this.$emit('componenteventchange', {
              value: e.target.value,
              valid: this.pattern.test(e.target.value)
          });
      }
    }
  }
</script>