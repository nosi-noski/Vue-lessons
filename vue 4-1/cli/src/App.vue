<template>
  <div class="wrapper">
    <div class="sample">
        <form v-if="!formSubmited" @submit.prevent="toggleForm">
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
            <button class="btn btn-primary" v-bind:disabled="disabledButton">
      Send Data
    </button>
        </form>
        <div v-else="formSubmited">
            <table class="table table-bordered">
                <tr v-for="elem in info">
                    <td>{{ elem.name }}</td>
                    <td>{{ elem.value }}</td>
                </tr>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
  import MyInput from './components/Input.vue';
  //Vue.component('my-input', MyInput)

  export default {
    data() {
      return {
        info: [{
            name: 'Name',
            value: '',
            pattern: /^[a-zA-Z ]{2,30}$/

        }, {
            name: 'Phone',
            value: '',
            pattern: /^[0-9]{7,14}$/

        }, {
            name: 'Email',
            value: '',
            pattern: /.+/
        }, {
            name: 'Some Field 1',
            value: '',
            pattern: /.+/

        }, {
            name: 'Some Field 2',
            value: '',
            pattern: /.+/

        }],
        statuses: {
            error: 'fa fa-check-circle',
            info: 'fa fa-info-circle'
        },
        check: {},
        progress: 0,
        fieldFulled: 0,
        formSubmited: false
      }
    },
    methods: {
        checkValue(elem, data, index) {
            this.info[index].value = data.value;
            let elemChecked = data.valid ? this.statuses.error : this.statuses.info;
            this.check[elem.name] = elemChecked;
            this.fieldFulled = 0;
            for (let a in this.check) {
                this.check[a] === this.statuses.error ? this.fieldFulled++ : 'no'
            }

        },
        toggleForm() {
            this.formSubmited = !this.formSubmited;
        }

    },
    computed: {

        calcProgress() {
            return 100 / this.info.length * this.fieldFulled;
        },
        disabledButton() {
            return this.calcProgress !== 100 ? true : false;
        }
    },
    components: {
      'app-input-component': MyInput
    }   
  }     
</script>
<style scoped>
  .wrapper {
    max-width: 600px;
    margin: 20px auto;
  }
</style> 