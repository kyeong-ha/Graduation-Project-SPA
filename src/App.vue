<template>
  <div id="app">
    <h1>MBTI App</h1>
    <input type="text" v-model="num" placeholder="answer numㅊㅇ" />
    <input type="text" v-model="context" placeholder="answer context" />
    <button v-on:click="createAnswer">Create Answer</button>


    <div v-for="item in questions" :key="item.id">
      <h3>{{ item.num }}</h3>
      <p>{{ item.subject }}</p>
    </div>

  </div>
</template>

<script>
  import { API } from 'aws-amplify';
  import { createAnswer } from './graphql/mutations'; // write the GraphQL data
  import { questionList } from './graphql/queries'; // read the GraphQL data
  
  export default {
    name: 'app',
    data() {
      return {
        num: '',
        context: ''
      };
    },
    methods: {
      async createAnswer() {
        const { num, context } = this;
        if (!num || !context) return;
        const answer = { num, context };
        await API.graphql({
          query: createAnswer,
          variables: { input: answer }
        });
        this.num = '';
        this.context = '';
      },
      async getQuestion() {
        const questions = await API.graphql({
          query: questionList
        });
        this.questions = questions.data.questionList.items;
      }
    }
  }
</script>
