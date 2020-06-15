<template>
    <div>
        <ul class="drop-container">
            <h2 @click="displayToggle()"> {{ filterCaption }} <i class="fa fa-angle-down"></i></h2>
            <ul v-show="display" class="dropdown-box">
                <label v-for="(country, index) in countries" :key="index">
                    {{ country }}
                    <input v-on:click="getRegion" v-model="selectedData" :value="country" type="radio" checked="checked"
                        name="radio">
                </label>
            </ul>
        </ul>
    </div>
</template>

<script>
    import {
        EventBus
    } from '../main.js';

    import axios from 'axios';

    export default {
        data() {
            return {
                selectedData: '',
                filterCaption: 'Filter by Region',
                display: false,
                RegionData: '',
                countries: [
                    'All',
                    'Africa',
                    'Americas',
                    'Asia',
                    'Europe',
                    'Oceania'
                ]
            }
        },


        methods: {
            displayToggle() {
                if (this.display === false) {
                    this.display = true;
                } else {
                    this.display = false;
                }
            },

            getRegion() {
                this.displayToggle();
            },

        },

        watch: {
            selectedData(newVal) {
                console.log(newVal);
                this.filterCaption = newVal;
                axios.get(`https://restcountries.eu/rest/v2/region/${ newVal}`).then(response => {
                        this.RegionData = response.data;
                        EventBus.$emit('region', this.RegionData);
                        console.log(this.RegionData, "watchers");
                    })
                    .catch(err => {
                        console.log(err);
                    })

                if (newVal === 'All') {
                    this.filterCaption = 'Filter by Region';
                    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
                            this.RegionData = response.data;
                             EventBus.$emit('region', this.RegionData);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .drop-container {
        float: right;
        right: 0;
        padding-right: 3rem;
        position: relative;


        & h2 {
            background-color: var(--white);
            box-shadow: 0 0 .3rem var(--form-input);
            font-size: 1.5rem;
            padding: 1.5rem 2.2rem;
            cursor: pointer;
            border-radius: .5rem;
            color: var(--text-color);


            & i {
                margin-left: 1rem;
            }
        }



        & ul {
            background-color: var(--white);
            box-shadow: 0 0 .3rem var(--form-input);
            padding: 1.5rem 0;
            border-radius: .5rem;
            margin-top: .7rem;
            transition: all .3s;
            z-index: 5;
            position: absolute;
            width: 17.2rem;


            & label {
                font-size: 1.6rem;
                list-style: none;
                padding: .3rem 2rem;
                color: var(--text-color);
                cursor: pointer;
                width: 100%;

                & input {
                    visibility: hidden;
                }

                &:hover {
                    background-color: var(--primary-color-light);
                }
            }
        }
    }
</style>