<template>
    <div class="snowMask">
    </div>  
</template>
<script>
    export default {
    
    }
</script>
<style lang="scss" scoped>
 .snowMask{
            position: fixed;
            left: 0;
            top: 0;
            width:100%;
            height:100%;
            background: url(/static/images/effect/snow/snow1.png),url(/static/images/effect/snow/snow2.png);
            animation: snow 10s linear  infinite ;
             pointer-events: none;
}   
@keyframes snow{
    0%{
            background-position: 0 0,0 0;
    }   
    100%{
            background-position: 500px 500px , 1000px 500px;
    }

}
</style>
