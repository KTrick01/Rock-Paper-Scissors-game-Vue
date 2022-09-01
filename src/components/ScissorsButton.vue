<script setup></script>
<template>

    <div class="scissors border-color">
        <div class="middle-color middle-scissors">
            <img src="../images/icon-scissors.svg" alt="" class="game-icon">
        </div>
    </div>

</template>
<style lang="scss" scoped>
$Scissors-Gradient: hsl(39, 89%, 49%), hsl(40, 84%, 53%);

.border-color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10%;
    aspect-ratio: 1;
    background-image: linear-gradient($Scissors-Gradient);
    border-radius: 50%;
    box-shadow: 2px -5px 0px 0px inset rgba(0, 0, 0, 0.171);
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