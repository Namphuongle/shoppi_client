<template>
    <div>
        <div class="ad-main">
            <div class="ad-main__box">user</div>
            <div class="ad-main__box">san pham</div>
            <div class="ad-main__box">gia</div>
           
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.ad-main {
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin-top: 1rem;
    // background-color: red;
    .ad-main__box {
        width: 10rem;
        height: 10rem;
        border: 1px solid red;
      
    }
}
</style>