<template>
    <div>
        <div class="ad-main">
            <div class="ad-main__box">
                <h4 class="title">user</h4>
                <div class="total">100</div>
            </div>
            <div class="ad-main__box">
                <h4 class="title">Sản phẩm</h4>
                <div class="total">100</div>
            </div>
            <div class="ad-main__box">
                <h4 class="title">Tổng tiền</h4>
                <div class="total">100</div>
            </div>
           
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
        border-radius: 5px;
        .title {
            background-color: #968787;
            padding: 6px;
        }
        .total {
            margin-top: 2rem;
            font-size: 2rem;
            
        }
      
    }
}
</style>