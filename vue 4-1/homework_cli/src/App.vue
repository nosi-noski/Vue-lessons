<template>
  <div class="wrapper">
      <transition name="swich" mode="out-in">
        
        <div class="sample" :key="questions[questionid].name" v-if="!formSubmited">
          <keep-alive>
            <question 
              :questionid="questionid"
              :type="questions[questionid].type"
              :title="questions[questionid].title"
              :testanswers="questions[questionid].answers"
              @componentcheckinput="checkInputWasChecked($event)">
            </question>
          </keep-alive>
          <hr>
          <button class="btn btn-primary" 
                  @click="changeQuestion(questionid)"
                  v-bind:disabled="disabledButton"> 
            Next 
          </button>       
        </div v-else>

        <div key="result">
          <table class="table table-bordered">
              <tbody>
                <tr v-for="(elem, index) in questions">
                  <td>{{ elem.title }}</td>
                  <td>{{ getResult(index) }}</td>
                </tr>
              </tbody>
          </table>
        </div>

      </transition>   
  </div>
</template>

<script>
import Question from './components/Question1.vue';

export default {
  
  data(){
    return {
      questionid: 0,
      disabledButton: true,
      formSubmited: false,
      questions:[
        {
          type:'radio',
          title: 'Какой тег задаёт ссылку?',
          name:'link tag',
          answers: [
            { name:'<a>', checked: false },
            { name:'<div>', checked: false },
            { name:'<span>', checked: false },
            { name:'<img>', checked: false }
          ]
        },
        {
          type:'checkbox',
          title: 'Какие из этих тегов строчные?',
          name:'string tag',
          answers: [
            { name:'<a>', checked: false },
            { name:'<div>', checked: false },
            { name:'<span>', checked: false },
            { name:'<img>', checked: false }
          ]
        }
      ]
    }
  },
  methods:{
    checkInputWasChecked(data){

      let questionid = data.questionid;
      let answerid = data.answerid;

      if(this.questions[questionid].type === 'radio'){
        for( let i = 0; i < this.questions[questionid].answers.length; i++ ){
          i == answerid ? 
            this.questions[questionid].answers[i].checked = true 
            : this.questions[questionid].answers[i].checked = false;
        }
      } else {
        for( let i = 0; i < this.questions[questionid].answers.length; i++ ){
            i == answerid ?  this.questions[questionid].answers[i].checked = true : false;
        }
      }
      this.disabledButton = false;
    },
    changeQuestion(index){

      if(index < this.questions.length - 1){ 
        this.questionid++;
      }else{
        this.disabledButton = true;
        this.formSubmited = true;
      }
    },
    getResult(index){
      let text = '';
      for(let i = 0; i < this.questions[index].answers.length; i++){
         this.questions[index].answers[i].checked == true ? text += this.questions[index].answers[i].name: '';
      }
      return text;
    }
  },
  computed:{
  },
  components: {
    'question': Question
  }   
}
</script>

<style scoped>
.wrapper {
    max-width: 600px;
    margin: 10px auto;
}
    .swich-enter { 
        
    }

    .swich-enter-active { 
       animation: slideIn 0.5s;
    }

    .swich-enter-to { 
        
    }

    .swich-leave { 
        /* position: absolute; */

    }

    .swich-leave-active { 
       animation: slideOut 0.5s;
       
    }

    .swich-leave-to { 
        /* position: absolute; */
    }
    
    @keyframes slideIn{
        from{ transform: translateX(100vw); }
        to{ transform: translateX(0px); }
    }
    @keyframes slideOut{
        from{ transform: translateX(0px); }
        to{ transform: translateX(-100vw); }
    }
</style>
