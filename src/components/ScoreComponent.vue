<script setup>
import { onMounted, onUpdated, ref, watch } from 'vue';

import { useCounterStore } from '@/stores/counter.js'
const Score = useCounterStore()
const scoreContainer = ref(null)
const scoreComponent = ref(null)

function scoreAnimation() {
    scoreContainer.value.classList.add('rotate-vert-center')
    scoreContainer.value.addEventListener('animationend', function () {
        scoreContainer.value.classList.remove('rotate-vert-center')

    })

}

watch(Score, () => {
    scoreAnimation()
})
onMounted(() => {
    scoreComponent.value.classList.add('initAnimation')
})

</script>

<template>
    <div class="score__area" ref="scoreComponent">
        <picture>

            <a href="https://ktrick01.github.io/Rock-Paper-Scissors-game-Vue/">
                <img src="../images/logo-bonus.svg" alt="">

            </a>
        </picture>

        <div class="score__points" ref="scoreContainer">
            <p class="score__word">score</p>
            <p class="score__num">{{ Score.score }}</p>
        </div>
    </div>

</template>

<style scoped lang="scss">
$Dark-Text: hsl(229, 25%, 31%);
$Score-Text: hsl(229, 64%, 46%);
$Header-Outline: hsl(217, 16%, 45%);

.initAnimation {
    animation: vanishUp .3s 1s forwards;
}

@keyframes vanishUp {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }

    100% {
        transform: translate(0);
        opacity: 1;
    }
}

.rotate-vert-center {
    animation: rotate-vert-center 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@keyframes rotate-vert-center {
    0% {
        transform: rotateY(0);
    }

    100% {
        transform: rotateY(360deg);
    }
}

.score {
    &__points {
        text-align: center;
        background-color: white;
        padding: .5rem clamp(1rem, 3vw, 3rem);
        border-radius: 1vmax;
    }

    &__word {
        font-size: clamp(1rem, 4vw, 1.2rem);
        color: $Score-Text;
        text-transform: uppercase;
    }

    &__num {
        font-size: clamp(3rem, 10vw, 4rem);
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
        opacity: 0;
    }
}

@media (max-width: 440px) {
    .score__area {
        padding: 1rem;
    }
}
</style>