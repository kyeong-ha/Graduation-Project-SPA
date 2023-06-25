<template>
  <div id="app">
    <h1>MBTI App</h1>
    <input type="text" v-model="id" placeholder="answer num" />
    <input type="text" v-model="answer" placeholder="answer context" />
    <button v-on:click="createInput">Create Answer</button>


    <div v-for="item in questions" :key="item.id">
      <h3>{{ item.id }}</h3>
      <p>{{ item.question }}</p>
    </div>

  </div>
</template>

<script>
  import { API } from 'aws-amplify';
  import { createInput } from './graphql/mutations'; // write the GraphQL data
  import { listInputs } from './graphql/queries'; // read the GraphQL data
  
  export default {
    name: 'app',
    data() {
      return {
        id: 1,
        question: 'question',
        answer: ''
      };
    },
    methods: {
      async createInput() {
        const { id, question, answer } = this;
        if (!id || !question || !answer) return;
        // const result = { id, question, answer };
        await API.graphql({
          query: createInput,
          variables: { input: this }
        });
        this.id++;
      },
      async getQuestion() {
        const questions = await API.graphql({
          query: listInputs
        });
        this.questions = questions.data.listInputs.items;
      }
    }
  }
</script>

<!-- <script setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>
<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template> -->