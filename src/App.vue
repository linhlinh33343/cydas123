<template>
    <div>
      <Header/>
      <div class="wrapper">
        <ContentVue/>

      </div>
    </div>
    
</template>

<script>
import ContentVue from './components/Content.vue'
import Header from './components/Header.vue'

import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Header,
    ContentVue,
  },
  computed:{
    ...mapState(['currentStep'])
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root{
      --heightHeader:64px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
 .wrapper{
    width:var(--widthWrapper);
    margin: auto;
    margin-top: calc(var(--heightHeader) - 1px);
    margin-bottom: 56px;

}/*
.prevStep {
    text-align: start;
    cursor: pointer;
}

.prevStep span {
    margin-left: 5px;
    font-size: 16px;
   
} */


</style>

