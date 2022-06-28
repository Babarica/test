<template>
<div class="auth">
    <h2 class="auth-title">Lead head</h2>
    <form class="form" @submit.prevent="checkForm">
        <input class="form-input" v-model="this.idSite" type="text">
        <button class="form-btn">Войти</button>
    </form>
    <div class="error" v-show="errMes">
        Ошибка
    </div>
</div>

</template>
<script>
import store from '@/store'
import axios from 'axios'
export default {
    data(){
        return {
            idSite: '',
            errMes: false,

        }
    },
    methods: {
        checkForm: function(){
            if(this.idSite.length == 24){
                this.fetchDat()
            }
            else {
                this.errMes = true
                console.log(this.idSite.length)
                this.idSite = ''
                
            }
        },
        fetchDat: async function(){
            try {
                const apiKey = this.idSite
                const response = await axios({
                    method: 'get',
                    url: 'https://track-api.leadhit.io/client/test_auth',
                    headers: { 
                       'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo', 
                        'Leadhit-Site-Id': apiKey
                    },
                })
            if(response.data.message){
                localStorage.setItem('leadhit-site-id','5f8475902b0be670555f1bb3')
                store.state.post.isLoggedIn = '5f8475902b0be670555f1bb3'
                this.$router.push('/analitics')
            }
 
            } catch(e){
                console.log(e.response)
                alert('ошибка')
            }
        }
    },
    watch: {
        idSite(newValue){
            if(newValue.length > 0){
                this.errMes = false;
            }
        }
    }
}
</script>
<style scoped>

.auth-title {
    text-align: center;
    color: #fff;
    font-size: 32px;
}
.form {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.form-input {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 15px;
    max-width: 300px;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #333
}

.form-btn {
    padding: 10px 15px;
    width: 100px;
    border: 1px solid white;
    color: #fff;
    background: none;
    cursor: pointer;
    
}
.error {
    text-align: center;
    margin-top: 20px;
    font-weight: 700;
}

.auth {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 21px;
    background-color: rgb(56, 54, 54);
    min-height: 100vh;
    padding: 20px 0px;
}
.error {
    color: #fff;
}
</style>

