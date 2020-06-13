<template>
    <div class="country">
        <div class="row">
            <div class="col-lg-3" v-for="(countryData, index) in data" :key="index">
                <div class="country-card">
                    <figure class="country-50">
                        <span v-if="loading" class="glassy"></span>
                        <img v-bind:src="countryData.flag" alt="country-img" />
                    </figure>

                    <div class="country-card-details country-50">
                        <h2 class="name"><span v-if="loading" class="glassy glassy-text"></span> {{ countryData.name }}</h2>
                        <p class="text"><span v-if="loading" class="glassy glassy-text"></span> Popultation:
                            <span class="detail">{{ countryData.population }}</span></p>
                        <p class="text"><span v-if="loading" class="glassy glassy-text"></span> Region: <span
                                class="detail">{{ countryData.region }}</span></p>
                        <p class="text"><span v-if="loading" class="glassy glassy-text"></span> Capital: <span
                                class="detail">{{ countryData.capital }}</span></p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>


<script>
import axios from 'axios';

    export default {
        data() {
            return {
                data: [],
                loading: true
            }
        },

        created() {
            axios.get('https://restcountries.eu/rest/v2/all').then(response => {
                    this.data = response.data;
                    console.log(this.data);
                })
                .catch(err => {
                    console.log(err);
                })
                this.loading = false;
        },

    }
</script>

<style lang="scss" scoped>
    .country {

        & .row {

            & .col-lg-3 {
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

                &::before {
                    position: absolute;
                }

                &-text {
                    border-radius: .3rem;
                }
            }

            &:first-child {
                margin-top: 20rem;
            }
        }

        &-50 {
            width: 100%;
            height: 50%;
        }

        &-card {
            width: 90%;
            height: 32rem;
            overflow: hidden;
            border-radius: .7rem;
            background-color: var(--white);
            box-shadow: 0 0 .3rem var(--form-input);
            color: var(--text-color);
            cursor: pointer;
            transition: all .3s;

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
                padding: 1rem 1.5rem;

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
                    font-size: 1.3rem;
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