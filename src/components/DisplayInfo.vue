<template>
    <div class="display-info box">        
        <h1 class="title">{{title}}</h1>

        <div class="tags is-rounded has-addons is-centered">
            <span class="tag">Last updated</span>
            <span class="tag is-info">{{info.lastUpdatedAtApify | moment("dddd, Do MMMM YYYY, h:mm a")}}</span>
        </div>
        
        <div class="columns is-mobile is-centered">
            <div class="column box is-rounded is-one-quarter has-background-primary">
                <span class="content is-large">Total of positive cases:</span><br>
                <strong>{{info.testedPositive}}</strong>
            </div>            
        </div><br>

        <div class="columns is-mobile is-centered">
            <div class="column box is-rounded is-one-quarter has-background-success">
                <span class="content is-large">Total patients recovered:</span><br>
                <strong>{{info.recovered}}</strong>
            </div>
        </div><br>

        <div class="columns is-mobile is-centered">
            <div class="column box is-rounded is-one-quarter has-background-warning">
                <span class="content is-large">Patients treated in ICU:</span><br>
                <strong>{{info.inICU}}</strong>
            </div>
        </div><br>

        <div class="columns is-mobile is-centered">
            <div class="column box is-rounded is-one-quarter has-background-danger">
                <span class="content is-large">Deaths:</span><br>
                <strong>{{info.deceased}}</strong>
            </div>
        </div><br>

        <div class="columns is-mobile is-centered">
            <div class="column box is-rounded is-one-quarter has-background-link">
                <span class="content has-text-white">Source:</span> <a :href="info.sourceUrl" target="_blank" class="has-text-white">COVID-19 (Maklumat Terkini)</a>
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
            title: "Current COVID-19 Information in Malaysia"
        }
    },
    methods: {
        callApi() {
            axios.get('https://api.apify.com/v2/key-value-stores/6t65lJVfs3d8s6aKc/records/LATEST?disableRedirect=true')
                .then(response => {
                    this.info = response.data;
                })
        }
    },

    created() {
        this.callApi();
    }
    
}
</script>

<style scoped>
    a {
        text-decoration: underline;
    }
</style>