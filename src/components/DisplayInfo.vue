<template>
    <div class="display-info box">
        <div class="columns">
            <div class="column">
                Number of positive cases: <strong>{{info.testedPositive}}</strong>
            </div>            
        </div>
        <div class="columns">
            <div class="column">
                Number of patient recovered: <strong>{{info.recovered}}</strong>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                Patient treated in ICU: <strong>{{info.inICU}}</strong>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                Death toll: <strong>{{info.deceased}}</strong>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                Last Updated: <strong>{{info.lastUpdatedAtApify | moment("dddd, Do MMMM YYYY, h:mm a")}}</strong>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                Source: <a :href="info.sourceUrl" target="_blank">COVID-19 (Maklumat Terkini)</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DisplayInfo',
    data() {
        return {
            info: {},
        }
    },
    methods: {
        callApi() {
            axios.get('https://api.apify.com/v2/key-value-stores/6t65lJVfs3d8s6aKc/records/LATEST?disableRedirect=true')
                .then(response => {
                    console.log(response.data)
                    this.info = response.data;
                })
                .catch(err =>{
                    console.log(err.data)
                })
        }
    },

    created() {
        this.callApi();
    }
    
}
</script>

<style scoped>

</style>