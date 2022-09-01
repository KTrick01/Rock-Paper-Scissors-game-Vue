<script setup>
import { onMounted, ref } from 'vue';
const rules = ref(null)

function open() {
    rules.value.showModal()

}
function close() {
    rules.value.close()

}

</script>
<template>
    <dialog class="Rules" ref="rules">
        <div class="Rules-con">
            <div class="Rules__header">
                <h2>RULES</h2>
                <button class="close-btn" ref="close" @click="close">
                    <img src="../images/icon-close.svg" alt="">
                </button>
            </div>

            <picture class="Rules__img">
                <img src="../images/image-rules-bonus.svg" alt="">
            </picture>
            <button class="close-btn mobile" ref="close" @click="close">
                <img src="../images/icon-close.svg" alt="">
            </button>
        </div>

    </dialog>
    <div class="button-area">
        <button class="btn-rules" @click="open">RULES</button>
    </div>

</template>
<style scoped lang="scss">
.Rules {
    border: none;
    position: absolute;
    inset: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    padding: 2rem;
    width: 90%;
    max-width: 500px;

    &::backdrop {
        background-color: black;
        opacity: .7;
    }

    &__header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__img {
        margin-top: 1rem;

        & img {
            width: 100%;
        }
    }

    &-con {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
    }
}

.button-area {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
}

.close-btn {
    cursor: pointer;
    background-color: transparent;
    border: none;
    max-width: 20px;
    height: 20px;
}

.btn-rules {
    background-color: transparent;
    background-color: white;
    font-family: inherit;
    padding: .5rem 2rem;
    border-radius: .5rem;
    border: none;
    cursor: pointer;
    color: #14163a;
    font-size: 1.2rem;
    letter-spacing: 2px;
    transition: .3s;

    &:hover {
        color: white;
        background-color: transparent;
        outline: 2px solid white;
        transform: scale(1.1);
    }
}
.mobile {
    display: none;
}

@media (max-width:600px) {
    .button-area {
        justify-content: center;
    }
    .close-btn {
        display: none;
    }
    .close-btn.mobile {
        display: block;
        margin: 0 auto;
        max-width: 40px;
        height: 40px;
    }
    .Rules {
        width: 100%;
        height: 100%;
        &-con {
            justify-content: space-around;
        }
        &__img img {
            height: auto;
        }
        &__header {
            justify-content: center;
            font-size: 1.5rem;
        }
    }
}
</style>