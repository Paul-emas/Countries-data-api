<template>
    <div class="country">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" @click="emitCountry(countryData)" v-for="countryData in filteredList" :key="countryData.alpha2Code">
                <router-link to="/pages" tag="div" class="country-card" exact>
                    <figure class="country-50">
                        <span v-show="loading" class="glassy"></span>
                        <img v-bind:src="countryData.flag" alt="country-img" />
                    </figure>

                    <div class="country-card-details country-50">
                        <h2 class="name"><span v-show="loading" class="glassy glassy-text"></span>
                            {{ countryData.name }}</h2>
                        <p class="text"><span v-show="loading" class="glassy glassy-text"></span> Popultation:
                            <span class="detail">{{ countryData.population }}</span></p>
                        <p class="text"><span v-show="loading" class="glassy glassy-text"></span> Region: <span
                                class="detail">{{ countryData.region }}</span></p>
                        <p class="text"><span v-show="loading" class="glassy glassy-text"></span> Capital: <span
                                class="detail">{{ countryData.capital }}</span></p>
                    </div>
                </router-link>
            </div>
        </div>

    </div>
</template>


<script>
    import axios from 'axios';

    import {
        EventBus
    } from "../../main.js";

    export default {
        data() {
            return {
                data: [],
                loading: true,
                search: '',
            }
        },

        beforeCreate() {
            EventBus.$on('searchData', (searchData) => {
                this.search = searchData;
            });
        },

        created() {
            axios.get('https://restcountries.eu/rest/v2/all').then(response => {
                    this.data = response.data;
                    console.log(this.data);
                })
                .catch(err => {
                    console.log(err);
                })
            setTimeout(() => this.loading = false, 1500)
            EventBus.$emit('region', this.RegionData);
        },

        mounted() {
             EventBus.$on('region', (filteredRegion) => {
                this.data = filteredRegion;
                console.log(this.data)
            });
        },

        methods: {
            emitCountry(selectedCountry) {
                EventBus.$emit('country-data', selectedCountry);
            }
        },

        computed: {
            filteredList() {
                return this.data.filter(country => {
                    return country.name.toLowerCase().includes(this.search.toLowerCase());
                })
            }
        }


    }
</script>

<style lang="scss" scoped>
    
     @mixin respond($breakpoint) {
    @if $breakpoint==phone {
        @media only screen and (max-width: 37.5em) {
            @content
        }

        ; //600px
    }

    @if $breakpoint==tab-port {
        @media only screen and (max-width: 56.25em) {
            @content
        }

        ; //900px
    }

    @if $breakpoint==tab-land {
        @media only screen and (max-width: 75em) {
            @content
        }

        ; //1200px
    }

    @if $breakpoint==big-desktop {
        @media only screen and (max-width: 112.5em) {
            @content
        }

        ; //1800
    }
}
    .country {

        & .row {

            & .col-lg-4 {
                margin-bottom: 5rem;
            }

            & .glassy {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: var(--glass);
                z-index: 2;
                left: 0;
                top: 0;
                transition: all .5s;

                &::before {
                    position: absolute;
                }

                &-text {
                    border-radius: .3rem;
                }
            }

            &:first-child {
                margin-top: 20rem;

                @include respond(tab-port) {
                    margin-top: 14rem;
                }
            }
        }

        &-50 {
            width: 100%;
            height: 50%;
        }

        &-card {
            width: 85%;
            height: 38rem;
            overflow: hidden;
            border-radius: .6rem;
            background-color: var(--white);
            box-shadow: 0 .5rem 1rem var(--form-input); 
            color: var(--text-color);
            cursor: pointer;
            transition: all .3s;

            @include respond(tab-land) {
                width: 100%;
            }

            @include respond(tab-port) {
                width: 100%;
                height: auto;
            }

             @include respond(phone) {
                    margin: 0 auto;
                }

            &:active {
                transform: scale(.8);
            }

            &:hover {

                & img {
                    transform: scale(1.8);
                }
            }

            &-details {
                height: 100%;
                padding: 2rem 2.5rem;

                & .name,
                .text {
                    overflow: hidden;
                    position: relative;
                }

                & .name {
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                }

                & .text {
                    line-height: 1.2;
                    margin-bottom: .8rem;
                    font-size: 1.4rem;
                    font-weight: 700;
                    text-transform: capitalize;

                    & .detail {
                        font-weight: 500;
                    }
                }
            }

            & figure {
                width: 100%;
                position: relative;
                overflow: hidden;


                & img {
                    width: 100%;
                    height: 98%;
                    transition: all .3s;
                    transform: scale(1.38);
                }
            }
        }
    }

</style>