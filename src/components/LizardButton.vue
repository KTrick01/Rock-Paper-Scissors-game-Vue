<script setup></script>
<template>

    <div class="lizard border-color">
        <div class="middle-color">
            <img src="../images/icon-lizard.svg" alt="" class="game-icon">
        </div>
    </div>

</template>
<style lang="scss" scoped>
$Lizard-Gradient: hsl(261, 73%, 60%), hsl(261, 72%, 63%);


.border-color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10%;
    aspect-ratio: 1;
    background-image: linear-gradient($Lizard-Gradient);
    border-radius: 50%;
    box-shadow: 2px -5px 0px 0px inset rgba(0, 0, 0, 0.171);
    transition: .3s;
    &:hover {
        transform: scale(1.1);
    }
}

.middle-color {
    border-radius: 50%;
    padding: 20%;
    height: 100%;
    width: 100%;
    background-color: white;
    box-shadow: 2px 8px 0px 0px inset rgba(128, 128, 128, 0.274);
}

.game-icon {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
</style>