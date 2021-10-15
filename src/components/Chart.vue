<template>
    <div id="chart">
        <h1>아 이제 출발이다</h1>
        <div class="lank" v-for="chart in chartList" v-bind:key="chart">
        {chart}/{chart.artist}
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Chart',
    data(){
        return{
            titleList:[],
            artistList:[],
            imgList:[],
            cnt:0
        }
    },
    mounted(){
        axios.get("/chart").then(data =>{
            this.chartList = data.data[0].title;
            console.log(this.chartList);
        });
    }
}
</script>

<style scoped>

</style>