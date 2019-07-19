<template>
  <div class="form-group"> 
    <h2>{{title}}</h2>
    <hr>
    <div v-for="(item, index) in testanswers">
        <input
            :type="type"
            :name="'question' + questionid"
            @input='checkinput(index, $event, questionid)'
        > {{ item.name }}
    </div>
  </div> 
</template>

<script>
    export default {
        props: ['type', 'title', 'testanswers', 'questionid'],
        data(){ 
            return {} 
        },
        methods: {
            checkinput(e, event, questionid){

                this.$emit('componentcheckinput', {
                    questionid: questionid,
                    answerid: e
                });
            }
        }
    }
</script>

<style scoped>

</style>
