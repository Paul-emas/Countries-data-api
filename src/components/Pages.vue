<template>
    <div>
        <div class="page-container">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-7">
                        <router-link to="/" tag="button" class="page-btn"><span class="lnr lnr-arrow-left"> </span> Back
                        </router-link>
                        <img :src="countryDetails.flag" alt="country-bg" />
                    </div>
                    <div class="col-lg-5">
                        <div class="page-detail">
                            <h2 class="page-detail-name">{{ countryDetails.name }} </h2>
                            <div class="page-detail-info">
                                <ul>
                                    <li><span>Native name :</span> {{ countryDetails.nativeName }}</li>
                                    <li><span>Population :</span> {{ countryDetails.population }}</li>
                                    <li><span>Region :</span> {{ countryDetails.region }}</li>
                                    <li><span>Sub region :</span> {{ countryDetails.subregion }}</li>
                                    <li><span>Captial :</span> {{ countryDetails.capital }}</li>
                                </ul>
                                <ul>
                                    <li v-for="levels in countryDetails.topLevelDomain" :key="levels"><span>Top
                                            level domain :</span> {{ levels }}</li>
                                    <li v-for="currencies in countryDetails.currencies" :key="currencies">
                                        <span>Currencies :</span> {{ currencies.name }}</li>
                                    <li v-for="language in countryDetails.languages" :key="language">
                                        <span>Languages :</span> {{ language.name }}</li>
                                </ul>
                            </div>
                            <div class="page-borders">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <span>Border countries:</span>
                                    </div>
                                    <div class="col-lg-8 borders">
                                        <p v-for="border in countryDetails.borders" :key="border">{{ border }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        EventBus
    } from '../main.js';

    export default {
        data() {
            return {
                countryDetails: []
            }
        },

        created() {
            EventBus.$on('country-data', (details) => {
                this.countryDetails = details;
                console.log(this.countryDetails);
            })
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

    .page {

        &-container {
            margin-top: 15rem;
            padding-bottom: 10rem;

            @include respond(tab-port) {
                margin-top: 10rem;
            }

            & img {
                margin-top: 6rem;
                width: 100%;
                height: 50rem !important;

                @include respond(tab-land) {
                    height: 42rem;
                }

                @include respond(tab-port) {
                    height: auto;
                }
            }
        }


        &-borders {
            display: flex;
            margin-top: 5rem;

            & span {
                font-size: 1.3rem;
                color: var(--text-color);
                margin-right: 1rem;
            }

            & .borders {
                margin-top: -.8rem;

                @include respond(tab-port) {
                    margin-top: 1rem;
                    display: block;
                }

                & p {
                    padding: .8rem 2rem;
                    font-size: 1.2rem;
                    background-color: var(--white);
                    border-radius: .5rem;
                    box-shadow: 0 0 .2rem var(--form-input);
                    float: left;
                    left: 0;
                    color: var(--text-color);


                    &:not(:last-child) {
                        margin-right: .7rem;
                    }
                }
            }
        }

        &-btn {
            padding: 1rem 3.5rem;
            border-radius: .5rem;
            box-shadow: 0 .2rem .5rem var(--form-input);
            font-size: 1.5rem;
            border: none;
            outline: none;
            background-color: var(--white);
            color: var(--text-color);

            @include respond(tab-port) {
                padding: 1rem 3.5rem;

            }

            & span {
                margin-right: 1rem;
                font-size: 1.3rem;
                text-transform: capitalize;
            }
        }

        &-detail {
            margin-top: 15rem;
            padding-left: 4rem;

            @include respond(tab-port) {
                padding-left: 0;
                margin-top: 5rem;
            }

            &-info {
                display: flex;

                @include respond(tab-port) {
                    display: block;
                }

                & ul {
                    margin-top: 2rem;
                    width: 48%;

                    @include respond(tab-port) {
                        width: 100%;
                    }

                    &:nth-child(2) {
                        align-self: flex-end;
                    }

                    & li {
                        font-size: 1.4rem;
                        list-style: none;
                        color: var(--text-color);

                        & span {
                            font-weight: 700;
                        }
                    }
                }
            }

            &-name {
                color: var(--text-color);
                font-size: 3rem;
                font-weight: 800;
            }
        }
    }
</style>