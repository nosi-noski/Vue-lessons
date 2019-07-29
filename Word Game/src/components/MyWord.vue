<template>
  <div class="sas">
    <table class="table">
		<header>
		{{title}}
			<th>
				<td v-for="(elem, index) in checkemptyownword">
					<div><input class="letter" @input="checkinputownword(index, $event)"></div>
				</td>
			</th>
		</header>
		<body>
		<tr v-for="(word, index) in trywords">
			<td v-for="(letter, position) in word.value">      
				<div>
					<input maxlength="1" v-bind:class="highlight(index, position)" class="enemy-letter" @input="checkinputenemyword(index, position, $event)">
				</div>
			</td>

			<td><div><input maxlength="1" class="enemy-count-match" 
						disabled="disabled" 
						:value="calcWordMatch(index)">
			</div></td>

			<td><div><input maxlength="1" class="enemy-count-position-match" 
						disabled="disabled" 
						:value="calcPositionWordMatch(index)">
			</div></td>
		</tr>
		<tr>
			<td colspan="2"><button class="btn btn-primary" @click="addEnemyWord">Add</button></td>
		</tr>
		</body>
    </table> 
  </div>
</template>

<script>

export default {
  props:["myword", "trywords", "title"],
  data () {
    return {
		targetWord:'',
		attemptWords:[]
    }
  },
  methods:{
    checkinputownword(i, e){
	  let data = this.$data;
      let wordArr = data.targetWord.split('');
	  wordArr[i] = e.target.value.toLowerCase();
	  data.targetWord = wordArr.join('');
	  if(data.targetWord.length == 5){
		this.$emit('componentinputnewownword', {
			word: data.targetWord
      	})
	  }  
    },
    checkinputenemyword(i, pos, e){
		let data = this.$data;
		let word = data.attemptWords[i] ? data.attemptWords[i] : '' ;
	 	let wordArr = word.split('');
	  	wordArr[pos] = e.target.value.toLowerCase();
		data.attemptWords[i] = wordArr.join('');
		if(data.attemptWords[i].length == 5){
			this.$emit('componentinputnewenemyword', {
				index: i,
				word: data.attemptWords[i]
			})
		}
    },
    addEnemyWord(){
      this.trywords.push({value:'     ', wordMatch:[], positionWordMatch: []});
    },

    calcWordMatch(ind){
      return Object.keys(this.trywords[ind].wordMatch).length;
    },

    calcPositionWordMatch(ind){
      return Object.keys(this.trywords[ind].positionWordMatch).length;
    },

    highlight(ind, pos){
		
		let elemClass = '';
		let word = this.trywords[ind];
			elemClass = !isNaN( +word.wordMatch[pos] )  ? 'match' : elemClass;
			elemClass = !isNaN( +word.positionWordMatch[pos] ) ? 'position-match' : elemClass;
      return elemClass;
    }
  },
  computed: {
    checkemptyownword(){
      return this.myword.length == 0 ? this.myword = '     ': this.myword;
    }
  }
}
</script>
<style scoped>
	.letter,
	.enemy-letter,
	.enemy-count-match,
	.enemy-count-position-match {
		width: 50px;
		text-align: center;
		border: 1px solid black;
		padding: 10px;
		font: 2em bold;
		background-color: #d7d2d2;
		margin: 3px 2px
	}

	.enemy-letter,
	.enemy-count-match,
	.enemy-count-position-match {
		background-color: #fff;
	}

	.enemy-count-match {
		/* border-left: 5px solid; */
	}

	.btn.btn-primary{
		margin-top: 10px
	}

	.match{
		background-color: #FFDC00;

	}

	.position-match{
		background-color: #2ECC40;  
	}
</style>
