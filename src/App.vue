<template>
  <div id="app">
    <h1>TEST App</h1>
    <!-- <input type="text" v-model="id" placeholder="answer num" /> -->
    
    <div v-for="item in test" :key="item.id">
      <p>{{ item.question }}</p>
    </div>
    <input type="text" v-model="answer" placeholder="answer context" />
    <button v-on:click="createInput">Create Answer</button>

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
        question: [],
        answer: [],
        test: []
      };
    },
    methods: {
      async createInput() {
        const { question, answer } = this;
        if (!question || !answer) return;
        try{
          await API.graphql({
            query: createInput,
            variables: { input: { question: this.question, answer: this.answer } }
          });
          this.id++;
          console.log('New contact created!');
        } catch (err) {
          console.log({ err });
        }
      },
      async listInputs() {
        const test = await API.graphql({
          query: listInputs
        });
        console.log(this.test);
        this.test = test.data.listInputs.items;
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