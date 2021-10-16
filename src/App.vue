<template>
  <div id="app">  
      <div class="container">
        <div class="meun">
            <div class="sub" @click="homeLink"><h6>홈</h6></div>
            <div class="sub" @click="chartLink"><h6>실시간 음악 차트</h6></div>
            <div class="sub"><h6>음악/비디오 다운로드</h6></div>
          </div>
        <router-view/> 
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    homeLink(){
      location.href="/#/";
    },
    chartLink(){
      location.href="/#/chart";
    }
  }
}
</script>

<style scoped>
  .container{
    width: 70%;
    height: 70vh;    
    margin: 0 auto;
    margin-top: 5%;
    display: grid;
    grid-template-columns: 1fr 5fr;
    border-radius: 30px;
    background-color: #e1d6e6;
  }

  .meun{
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .sub{
    border-radius: 30px;
    width: 75%;
    height: 75%;
    margin: 0 auto;
    margin-top: 10%;
  }

  .sub:hover{
    background-color: #dfaaf8;
  }

  .sub > h6{
    margin-top: 40%;
  }
</style>