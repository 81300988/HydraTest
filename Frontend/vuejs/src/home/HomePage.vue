<template>
<div class="home">
  <form>
        <input type="text" v-model="input">
        <button type="button" v-on:click="submit">
            Submit From Vue Property
        </button>
    </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      input: '44',

    };
  },
  methods: {
    submit() {
      // eslint-disable-next-line quotes
      axios({
        method: 'post',
        url: '/',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        timeout: 180000, // Let's say you want to wait at least 180 seconds
        data: {
          id: '1234',
        },
      })
        .then((response) => {
          this.input = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    text-align: center;
  }
  .robot{
    height: 300px;
  }
</style>
