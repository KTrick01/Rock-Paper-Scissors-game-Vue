<script setup>

import LizardButton from '../components/LizardButton.vue';
import RockButton from '../components/RockButton.vue';
import PaperButton from '../components/PaperButton.vue';
import SpockButton from '../components/SpockButton.vue';
import { useCounterStore } from '@/stores/counter.js'

import { useRoute, useRouter } from 'vue-router';
import ScissorsButton from '../components/ScissorsButton.vue';
import { onMounted, ref } from 'vue';

const Score = useCounterStore()

let election = "";
let cpuElection = '';
const msgContainer = ref(null)
const myElect = ref(null)
const cpuElect = ref(null)
let message = ref("YOU WIN")
const route = useRoute()
const router = useRouter()

function playAgain() {
    router.push("/")
}

if (route.params.type === "Scissors") {
    election = ScissorsButton
} else if (route.params.type === "Lizard") {
    election = LizardButton
} else if (route.params.type === "Rock") {
    election = RockButton
} else if (route.params.type === "Paper") {
    election = PaperButton
} else if (route.params.type === "Spock") {
    election = SpockButton
}


const random = Math.floor(Math.random() * 5)
if (random === 0) {
    cpuElection = ScissorsButton;
} else if (random === 1) {
    cpuElection = LizardButton;
} else if (random === 2) {
    cpuElection = RockButton
} else if (random === 3) {
    cpuElection = PaperButton
} else if (random === 4) {
    cpuElection = SpockButton
}




onMounted(function (params) {

    setTimeout(function () {


        if (election == ScissorsButton && cpuElection == PaperButton || election == ScissorsButton && cpuElection == LizardButton) {
            msgContainer.value.classList.add('active')

            myElect.value.classList.add('winner')
            Score.score++
            window.localStorage.setItem('score', `${Score.score}`)


        } else if (election == PaperButton && cpuElection == RockButton || election == PaperButton && cpuElection == SpockButton) {
            msgContainer.value.classList.add('active')
            Score.score++

            myElect.value.classList.add('winner')
            window.localStorage.setItem('score', `${Score.score}`)



        } else if (election == RockButton && cpuElection == ScissorsButton || election == RockButton && cpuElection == LizardButton) {
            msgContainer.value.classList.add('active')
            Score.score++

            myElect.value.classList.add('winner')
            window.localStorage.setItem('score', `${Score.score}`)



        } else if (election == SpockButton && cpuElection == ScissorsButton || election == SpockButton && cpuElection == RockButton) {
            msgContainer.value.classList.add('active')
            Score.score++

            window.localStorage.setItem('score', `${Score.score}`)



            myElect.value.classList.add('winner')
        } else if (election == LizardButton && cpuElection == SpockButton || election == LizardButton && cpuElection == PaperButton) {
            msgContainer.value.classList.add('active')
            Score.score++

            myElect.value.classList.add('winner')
            window.localStorage.setItem('score', `${Score.score}`)



        } else if (election == ScissorsButton && cpuElection == ScissorsButton) {

            msgContainer.value.classList.add('active')
            message.value = "DRAW"

        } else if (election == RockButton && cpuElection == RockButton) {

            msgContainer.value.classList.add('active')
            message.value = "DRAW"

        } else if (election == LizardButton && cpuElection == LizardButton) {

            msgContainer.value.classList.add('active')
            message.value = "DRAW"

        } else if (election == PaperButton && cpuElection == PaperButton) {

            msgContainer.value.classList.add('active')
            message.value = "DRAW"

        } else if (election == SpockButton && cpuElection == SpockButton) {

            msgContainer.value.classList.add('active')
            message.value = "DRAW"

        } else {
            msgContainer.value.classList.add('active')
            cpuElect.value.classList.add('winner')
            message.value = "YOU LOSE"
            Score.score--
            test();
            window.localStorage.setItem('score', `${Score.score}`)




        }

    }, 1500)

    function test(params) {
        if (Score.score === null || Score.score < 0) {
            Score.score = 0;

        }
    }



})



</script>


<template>
    <div class="game-section">

        <div class="game-subsection">

            <div class="btn">
                <p class="game-p para">You picked</p>
                <div ref="myElect" class="chi">
                    <component :is="election" class="animationReset" />

                </div>

            </div>
            <div class="msg" ref="msgContainer">
                <h2 class="msg-title">{{ message }}</h2>
                <button class="msg-btn" @click="playAgain">Play Again</button>
            </div>

            <div class="cpu-btn">
                <p class="cpu-p para">The house picked</p>
                <div ref="cpuElect" class="cpu-background">
                    <div class="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                    <component :is="cpuElection" class="cpu-animation" />

                </div>
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss">

.animationReset {
    animation: none;
    transform: translate(0);
    opacity: 0;
    animation: anima .5s forwards;

}



.lds-ripple {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
}

.lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    4.9% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    5% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }

    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}

.winner {
    animation: shadow .3s ease-in forwards;
}

.cpu-background {
    background-color: rgba(0, 0, 0, 0.336);
    position: relative;
}

.cpu-animation {
    opacity: 0;
    animation: anima-cpu .4s 1s forwards;
}


@keyframes anima-cpu {
    0% {
        opacity: 0;
        transform: scale(5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes anima {
    0% {
        opacity: 0;
        transform: scale(2);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes shadow {
    0% {
        box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.158)
    }

    50% {
        box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.158), 0 0 0 120px rgba(255, 255, 255, 0.123)
    }

    100% {
        box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.158), 0 0 0 120px rgba(255, 255, 255, 0.123), 0 0 0 180px rgba(255, 255, 255, 0.014);
    }
}

.game-subsection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(1rem, 13vw, 3rem);
    width: 50%;
    min-width: 810px;

    & > * {
        flex-basis: 100%;
    }
}

.game-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.game-text {
    display: flex;
    justify-content: space-between;
}

.msg {
    transition: .5s;
    overflow: hidden;
    clip-path: circle(0% at 50% 50%);
    max-height: 0;
    max-width: 0;
    visibility: hidden;
    opacity: 0;
    transform: translateY(100%) scale(2);
    grid-area: msg;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: .5rem;

    &-title {
        text-align: center;
        color: white;
        font-size: 3rem;
        letter-spacing: 5px;
        width: max-content;
    }

    &-btn {
        transition: .3s;
        cursor: pointer;
        padding: 1rem;
        font-family: inherit;
        text-transform: uppercase;
        background-color: white;
        border-radius: .5rem;
        font-size: 1.2rem;
        letter-spacing: 5px;
        border: none;
        color: inherit;
        width: max-content;

        &:hover {
            color: white;
            background-color: transparent;
            outline: 2px solid white;
            transform: scale(1.1);
        }
    }
}

.para {
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-size: clamp(1rem, 2vw, 1.5rem);
    letter-spacing: 3px;
}

.btn {
    grid-area: btn;
}

.cpu-btn {
    grid-area: cpu;
}

.btn,
.cpu-btn {
    min-width: 130px;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    & > div {
        background-color: rgba(0, 0, 0, 0.192);
        border-radius: 50%;
    }
}

.active {
    visibility: visible;
    max-height: 100%;
    max-width: 100%;
    opacity: 1;
    transform: translate(0) scale(1);
    clip-path: circle(100% at 50% 50%);
}

@media (max-width: 860px) {
    .game-subsection {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "btn cpu"
            "msg msg";
        min-width: auto;
    }

    .btn,
    .cpu-btn {
        flex-direction: column-reverse;
    }

    @keyframes shadow {
        0% {
            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.158)
        }

        50% {
            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.158), 0 0 0 40px rgba(255, 255, 255, 0.123)
        }

        100% {
            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.158), 0 0 0 40px rgba(255, 255, 255, 0.123), 0 0 0 60px rgba(255, 255, 255, 0.014);
        }
    }
}
</style>