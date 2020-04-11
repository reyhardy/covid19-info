<template>
    <div class="display-info box">        
        <h1 class="title">{{title}}</h1>

        <div class="tags has-addons is-centered">
            <span class="tag">Last updated</span>
            <span class="tag is-info">{{info.lastUpdatedAtApify | moment("dddd, Do MMMM YYYY, h:mm a")}}</span>
        </div>
        
        <div class="columns is-mobile is-centered">
            <div class="column is-one-quarter has-background-primary">
                Total of positive cases:<br>
                <strong>{{info.testedPositive}}</strong>
            </div>            
        </div><br>

        <div class="columns is-mobile is-centered">
            <div class="column is-one-quarter has-background-success">
                Total patients recovered:<br>
                <strong>{{info.recovered}}</strong>
            </div>
        </div><br>

        <div class="columns is-mobile is-centered">
            <div class="column is-one-quarter has-background-warning">
                Patients treated in ICU:<br>
                <strong>{{info.inICU}}</strong>
            </div>
        </div><br>

        <div class="columns is-mobile is-centered">
            <div class="column is-one-quarter has-background-danger">
                Deaths:<br>
                <strong>{{info.deceased}}</strong>
            </div>
        </div><br>

        <div class="columns is-mobile is-centered">
            <div class="column is-one-quarter has-background-info">
                Source:<br>
                <a :href="info.sourceUrl" target="_blank" class="has-text-black">COVID-19 (Maklumat Terkini)</a>
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