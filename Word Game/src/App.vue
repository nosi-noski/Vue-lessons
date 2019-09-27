<template>
  <div class="wrapper col-lg-12">
    <div class="left-panel col-lg-4">
      <myword 
        :title="'Моё слово'"
        :myword="my.target.split('')" 
        :trywords="opponent.attempt"
        @componentinputnewownword="inputTargetWord( 'i try', $event)"
        @componentinputnewenemyword="inputAttemptWord( 'opponent try', $event)">
      </myword>
      </div>
    <div class="right-panel col-lg-4">
      <opponentword
        :title="'Слово оппонента'" 
        :myword="opponent.target.split('')" 
        :trywords="my.attempt" 
        @componentinputnewownword="inputTargetWord( 'opponent try', $event)"
        @componentinputnewenemyword="inputAttemptWord( 'i try', $event)">
      </opponentword>
    </div>
 	<div class="col-lg-4">
		<div class="alphabeth-panel col-lg-12">
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
		
			<div class="bottom-left-panel col-lg-6">
				<table class="" >
					<tr class="">
						<td class=""><b>My word: </b> {{this.my.target}}</td>
					</tr>
					<tr class="">
						<td class=""><b>Opponent attempts: </b>
							<ul class="list-group">
								<li class="" v-for="elem in opponent.attempt">{{elem.value}}</li>
							</ul>
						</td>	
					</tr>
				</table>
			</div>
			<div class="bottom-right-panel col-lg-6">
				<table class="" >
					<tr class="">
						<td class=""><b>Opponent word: </b> {{this.opponent.target}}</td>	
					</tr>
					<tr class="">	
						<td class=""><b>My attempts: </b>
							<ul class="list-group">
								<li class="" v-for="elem in my.attempt">{{elem.value}}</li>
							</ul>
						</td>
					</tr>
				</table>
			</div>
		
	</div>
    <!--button class="btn btn-primary" @click="showLog">showLog</button --> 
	
	
	
  </div>
</template>

<script>
import MyWord from './components/MyWord.vue';
import OpponentWord from './components/OpponentWord.vue';

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
		console.log(currentObj.target);
    },

    inputAttemptWord(mode, d){
		// Получаем от компонента событие и data и обновляем свою data.opponent.attempt
		let currAttempt = this.opponent.attempt[d.index];
		currAttempt.value = d.word;
		console.log(currAttempt.value);
		// Обнуление массивов для повторного пересчёта совпадений в слове
		
		this.matchLetters(d.word, this.my.target, currAttempt);
      
    },

	matchLetters(attemptWord, targetWord, attemptObj){
		
		attemptObj.wordMatch = [];
		attemptObj.positionWordMatch = [];
		
		let attemptWordArr = attemptWord.split('');
		let targetWordArr = targetWord.split('');
		debugger;
        for (let i = 0; i < attemptWordArr.length; i++){
			let letterIndex = targetWordArr.indexOf(attemptWordArr[i]);
			letterIndex != -1 ? attemptObj.wordMatch[i] = i : false;
			letterIndex == i ? attemptObj.positionWordMatch[i] = i : false;
        }
		console.log(attemptObj);
	}
  },
  components: {
    'myword': MyWord,
	'opponentword': OpponentWord
  }   
}
</script>

<style scoped>
.wrapper {
	align: center;
    max-width: max-content;
    margin: 10px auto;
}

.left-panel,
.right-panel,
.bottom-left-panel,
.bottom-right-panel,
.alphabeth-panel {
	border: 1px solid black;
}
.list-group {
	 margin-left: 20px ;
}

</style>
