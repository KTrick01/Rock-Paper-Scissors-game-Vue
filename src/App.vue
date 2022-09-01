<script setup>
import { onMounted, ref } from 'vue'
import ScoreComponent from './components/ScoreComponent.vue';
import RulesComponent from './components/RulesComponent.vue';
import {useCounterStore} from '@/stores/counter.js'
const Score = useCounterStore()
Score.score = window.localStorage.getItem('score')
if (Score.score === null || Score.score < 0) {
  Score.score = 0;
  
}

defineProps({
    "type": String
})


</script>

<template>
  
  <ScoreComponent class="scores"></ScoreComponent>
  <div class="Main">
    <RouterView></RouterView>
  </div>
  
  
  <RulesComponent/>


</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');




$Dark-Text: hsl(229, 25%, 31%);
$Score-Text: hsl(229, 64%, 46%);
$Radial-Gradient: hsl(214, 47%, 23%), hsl(237, 49%, 15%);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  color: $Dark-Text;

}


.Main {
  width: 100%;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#app {
  padding: 1rem;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  width: 100%;
}

body,
html {
  min-height: 100vh;
  font-family: 'Barlow Semi Condensed', sans-serif;

}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient($Radial-Gradient);
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
