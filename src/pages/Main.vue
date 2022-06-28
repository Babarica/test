<template>
<div class="main">
    <div class="container">
        <h2 class="title">Добро пожаловать</h2>
        <nav class="nav">
            <router-link class="nav-link" to="/auth">Авторизация</router-link>
            <router-link class="nav-link" to="/analitics">Аналитика</router-link>
        </nav>
    </div>
    
        
    
</div>

</template>
<script>
export default {

}
</script>
<style scoped>
    .nav-link {
        color: #fff;
        text-decoration: none;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 2px;
        transition: background-size .3s;
    }
    .nav-link:nth-child(2){
        margin-left: 20px;
    }
    .nav-link:hover {
         background-size: 100% 2px;
    }
    .main {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 21px;
        background-color: rgb(56, 54, 54);
        min-height: 100vh;
        padding: 20px 0px;
    }
    .title {
        text-align: center;
        color: #fff;
    }
    .container {
        max-width: 1230px;
        margin: 0 auto;
        padding: 0 15px;
    }
</style>