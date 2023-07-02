<template>
  <!-- <authenticator> -->
    <div id="app">
      <h1>TEST App</h1>
      <!-- <input type="text" v-model="id" placeholder="answer num" /> -->
      
      <div v-for="item in test" :key="item.id">
        <p>{{ item.question }}</p>
      </div>
      <input type="text" v-model="answer" placeholder="answer context" />
      <button v-on:click="createForm()">Create Answer</button>

    </div>
<!-- </authenticator> -->
</template>

<script>

  import { API, Amplify } from 'aws-amplify';
  import amplifyConfig from "./aws-exports";
  import { createInput } from './graphql/mutations'; // write the GraphQL data
  // import { listInputs } from './graphql/queries'; // read the GraphQL data
  
    Amplify.configure(amplifyConfig);

    // Amplify.configure({
    //   Auth: {
    //     region: 'ap-northeast-2',
    //     userPoolId: 'ap-northeast-2_Tz1KjcvPB',
    //     userPoolWebClientId: '63iec76eaio6dfmaofqmbenc9m',
    //   },
    // });
    

    export default {
      data : function() {
            return {
                id: 1,
                question: '',
                answer: ''
            };
        },
      methods: {
        async createForm() {
          // await API.graphql(graphqlOperation(createInput, {input: { id: this.id, question: this.question, answer: this.answer } }));
          try {
              const newInput = await API.graphql({
              query: createInput,
              variables: { input: {
                "question": "Lorem ipsum dolor sit amet",
                "answer": this.answer
                }
              }
            });
            console.log('Create saved successfully!', newInput);
          } catch (error) {
              console.log('Error saving create', error);
          }
          }
        }
     }
      // async createInput() {
      //   const { id, question, answer } = this;
      //   if ( !id || !question || !answer) return;
      //   try{
      //     await API.graphql({
      //       query: createInput,
      //       variables: { 
      //         input: { id: this.id, question: this.question, answer: this.answer }  
      //       }
      //     });
      //     this.id++;
      //     console.log('New contact created!');
      //   } catch (err) {
      //     console.log({ err });
      //   }
      // },
    //   async function listInputs() {
    //     const test = await API.graphql({
    //       query: listInputs
    //     });
    //     console.log(this.test);
    //     this.test = test.data.listInputs.items;
    //   }
    // }
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