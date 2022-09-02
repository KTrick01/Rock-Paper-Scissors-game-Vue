<script setup>

import LizardButton from '../components/LizardButton.vue';
import RockButton from '../components/RockButton.vue';
import PaperButton from '../components/PaperButton.vue';
import SpockButton from '../components/SpockButton.vue';
import ScissorsButton from '../components/ScissorsButton.vue';


</script>

<template>
    <div class="main-section">
        <RouterLink to="/game/Scissors" class="scissors ">
            <ScissorsButton></ScissorsButton>
        </RouterLink>

        <RouterLink to="/game/Lizard" class="lizard">
            <LizardButton></LizardButton>
        </RouterLink>

        <RouterLink to="/game/Rock" class="rock">
            <RockButton></RockButton>
        </RouterLink>

        <RouterLink to="/game/Spock" class="spock">
            <SpockButton></SpockButton>
        </RouterLink>

        <RouterLink to="/game/Paper" class="paper">
            <PaperButton></PaperButton>
        </RouterLink>

    </div>

</template>

<style lang="scss">
@keyframes vanishDownL {
    0% {
        transform: translate(-100%, 100%);
        opacity: 0;
    }

    100% {
        transform: translate(0);
        opacity: 1;
    }
}

@keyframes vanishDownR {
    0% {
        transform: translate(100%, 100%);
        opacity: 0;
    }

    100% {
        transform: translate(0);
        opacity: 1;
    }
}

@keyframes vanishRight {
    0% {
        transform: translate(-100%, -100%);
        opacity: 0;
    }

    100% {
        transform: translate(0);
        opacity: 1;
    }
}

@keyframes vanishLeft {
    0% {
        transform: translate(100%, -100%);
        opacity: 0;
    }

    100% {
        transform: translate(0);
        opacity: 1;
    }
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

@keyframes rotate-center {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}

.main-section {
    animation: rotate-center 1s ease-out both;
    display: grid;
    width: 100%;
    max-width: 700px;
    background-image: url("../images/bg-pentagon.svg");
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-template-areas: ".......... .......... .......... .......... scissors scissors scissors .......... .......... .......... .........."
        ".......... .......... .......... .......... scissors scissors scissors .......... .......... .......... .........."
        ".......... .......... .......... .......... scissors scissors scissors .......... .......... .......... .........."
        "spock spock spock .......... .......... .......... .......... .......... paper paper paper"
        "spock spock spock .......... .......... .......... .......... .......... paper paper paper"
        "spock spock spock .......... .......... .......... .......... .......... paper paper paper"
        ".......... .......... .......... .......... .......... .......... .......... .......... .......... .......... .........."
        ".......... .......... lizard lizard lizard .......... rock rock rock .......... .........."
        ".......... .......... lizard lizard lizard .......... rock rock rock .......... .........."
        ".......... .......... lizard lizard lizard .......... rock rock rock .......... ..........";
}

.scissors {
    transform: translateY(-100%);
    animation: vanishUp .3s 1s forwards;
    opacity: 0;
    grid-area: scissors;
}

.lizard {
    animation: vanishDownL .3s .8s forwards;
    transform: translate(-100%, 100%);
    opacity: 0;
    grid-area: lizard;
}

.rock {
    animation: vanishDownR .3s .6s forwards;
    transform: translate(100%, 100%);
    opacity: 0;
    grid-area: rock;
}

.spock {
    animation: vanishRight .3s .4s forwards;
    opacity: 0;
    transform: translate(-100%, -100%);
    grid-area: spock;
}

.paper {
    animation: vanishLeft .3s .2s forwards;
    opacity: 0;
    transform: translate(100%, -100%);
    grid-area: paper;
}
</style>