<template>
    <div id="chart">
        <div class="container">
            <div class="chart-title">
                <h1>음악 TOP100</h1>
            </div>

            <div class="chart-list">
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div>
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div>
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div>
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div>
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div>
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div>
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div>
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div>
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div>
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div> 
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div> 
                <div class="lank">
                    <div class="img"><img src="../assets/logo.png" alt="l1"></div>
                    <div class="info">
                        <div class="title">던던댄스</div>
                        <div class="artist">오마이걸</div>
                    </div>
                </div> 
                <!-- <div class="lank" v-for="chart in chartList" v-bind:key="chart">
                    <div class="img"><img src="{{chart.img}}" alt="l1"></div>
                    <div class="info">
                        <div class="title">{{chart.title}}</div>
                        <div class="artist">{{chart.artist}}</div>
                    </div>
                </div> -->
            </div>
        </div>
        <!-- <div class="lank" v-for="chart in chartList" v-bind:key="chart">
        {{chart.title}}/{{chart.artist}}
      </div> -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Chart',
    data(){
        return{
            chartList:[]
        }
    },
    mounted(){
        axios.get("/chart").then(data =>{
            for(let i = 0; i < 100; i++){
                this.chartList = data.data;
            }
        });
    }
}
</script>

<style scoped>
    .container{
        height: 100%;
        text-align: center;
        display: grid;
        grid-template-rows: 1fr 4fr;
    }

    .chart-list{
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .chart-list::-webkit-scrollbar {
        display: none;
    }

    .lank{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 70%;
        margin: 0 auto; 
    }

    .img > img{
        width: 50px;
        height: 50px;
    }
</style>