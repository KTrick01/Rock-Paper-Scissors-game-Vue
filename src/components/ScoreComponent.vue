<script setup>
import { ref } from 'vue';

import {useCounterStore} from '@/stores/counter.js'
const Score = useCounterStore()

</script>

<template>
    <div class="score__area">
        <picture>
            <img src="../images/logo-bonus.svg" alt="">
        </picture>

        <div class="score__points">
            <p class="score__word">score</p>
            <p class="score__num">{{Score.score}}</p>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
$Dark-Text: hsl(229, 25%, 31%);
$Score-Text: hsl(229, 64%, 46%);
$Header-Outline: hsl(217, 16%, 45%);


.score {

    &__points {
        text-align: center;
        background-color: white;
        padding: .5rem clamp(1rem, 3vw, 3rem);
        border-radius: 1vmax;
        

    }
    &__word {
        font-size: clamp(1rem, 4vw,1.2rem);
        color: $Score-Text;
        text-transform: uppercase;
    }
    &__num {
        font-size: clamp(3rem, 10vw,4rem);

        font-weight: bold;
        color: $Dark-Text;
    }



    &__area {
        border: 5px solid $Header-Outline;
        padding: 1rem 2rem;
        border-radius: 1vmax;
        width: 100%;
        max-width: 900px;
        gap: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

}

@media (max-width: 440px) {
    .score__area {
        padding: 1rem;
    }
}
</style>