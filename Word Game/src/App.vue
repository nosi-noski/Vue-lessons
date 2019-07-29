<template>
  <div class="wrapper">
    <div class="left-panel col-lg-5">
      <wordgame 
        :title="'Моё слово'"
        :myword="my.target.split('')" 
        :trywords="opponent.attempt"
        @componentinputnewownword="inputTargetWord( 'i try', $event)"
        @componentinputnewenemyword="inputAttemptWord( 'opponent try', $event)">
      </wordgame>
      </div>
    <div class="right-panel col-lg-5">
      <wordgame
        :title="'Слово оппонента'" 
        :myword="opponent.target.split('')" 
        :trywords="my.attempt" 
        @componentinputnewownword="inputTargetWord( 'opponent try', $event)"
        @componentinputnewenemyword="inputAttemptWord( 'i try', $event)">
      </wordgame>
    </div>
 	<div class="alphabeth-panel col-lg-2">
		<table border="1" width="auto">
		<tr>
			<td v-for="(elem, index) in alphabeth" v-if="index <= 9">
			{{elem}}
			</td>
		</tr>
		<tr>
			<td v-for="(elem, index) in alphabeth" v-if="index > 9 && index <= 19">
			{{elem}}
			</td>
		</tr>
		<tr>
			<td v-for="(elem, index) in alphabeth" v-if="index > 19 && index <= 29">
			{{elem}}
			</td>
		</tr>
		<tr>
			<td v-for="(elem, index) in alphabeth" v-if="index > 29 && index <= 32">
			{{elem}}
			</td>
		</tr>
		</table>
	</div>

    <!--button class="btn btn-primary" @click="showLog">showLog</button --> 
	<table class="table table-bordered">
	<tr>
		<td class="table-bordered"><b>my word: </b> {{this.my.target}}</td>
		<td class="table-bordered">opponent attempt:
			<ul class="list-group">
				<li class="list-group-item" v-for="elem in opponent.attempt">{{elem.value}}</li>
			</ul>
		</td>		
	</tr>
	<tr>
		<td class="table-bordered"><b>opponent word: </b> {{this.opponent.target}}</td>
		<td class="table-bordered">my attempt:
			<ul class="list-group">
				<li class="list-group-item" v-for="elem in my.attempt">{{elem.value}}</li>
			</ul>
		</td>
	</tr>
	</table>
  </div>
</template>

<script>
import WordGame from './components/WordGame.vue';

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      my:{
        target:'     ',
        attempt:[
          {
            value:'     ', 
            wordMatch:[], 
            positionWordMatch: []
          }
        ]
      },
      opponent:{
        target:'     ',
        attempt:[
          {
            value:'     ', 
            wordMatch:[], 
            positionWordMatch: []
          }
        ]
      },
	  alphabeth:'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    }
  },
  methods: {
    showLog(){
      console.log(this)
    },

    // Получаем от компонента событие и дату и обновляем свою data.myWord
    inputTargetWord(mode, d){
		let currentObj;
		mode && mode === 'i try' ? currentObj = this.my : 
			mode && mode === 'opponent try' ? currentObj = this.opponent : false;
		// Задаём введёную букву угадываемого слова
		currentObj.target = d.word;
    },

    inputAttemptWord(mode, d){
		// Получаем от компонента событие и data и обновляем свою data.opponent.attempt
		let currAttempt = this.opponent.attempt[d.index];
		currAttempt.value = d.word;

		// Обнуление массивов для повторного пересчёта совпадений в слове
		
		this.matchLetters(d.word, this.my.target, currAttempt);
      
    },

	matchLetters(attemptWord, targetWord, attemptObj){
		
		attemptObj.wordMatch = [];
		attemptObj.positionWordMatch = [];
		
		let attemptWordArr = attemptWord.split('');
		let targetWordArr = targetWord.split('');

        for (let i = 0; i < attemptWordArr.length; i++){
			let letterIndex = targetWordArr.indexOf(attemptWordArr[i]);
			letterIndex > 0 ? attemptObj.wordMatch[i] = i : false;
			letterIndex == i ? attemptObj.positionWordMatch[i] = i : false;
        }
	}
  },
  components: {
    'wordgame': WordGame
  }   
}
</script>

<style scoped>
.wrapper {
	align: center;
    max-width: max-content;
    margin: 10px auto;
}
</style>
