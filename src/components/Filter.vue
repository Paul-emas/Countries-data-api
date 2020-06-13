<template>
    <div>
        <ul class="drop-container" :bind="selectedData">
            <h2 @click="displayToggle()">Filter by Region <i class="fa fa-angle-down"></i></h2>
            <ul v-show="display" class="dropdown-box">
                <li @click="!displayToggle()" v-for="(country, index) in countries" :key="index">
                    {{ country }}
                </li>
            </ul>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedData: '',
                display: false,
                countries: [
                    'Africa',
                    'America',
                    'Angola',
                    'Asia'
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


            & li {
                font-size: 1.6rem;
                list-style: none;
                padding: .3rem 2rem;
                color: var(--text-color);
                cursor: pointer;

                &:hover {
                    background-color: var(--primary-color-light);
                }
            }
        }
    }
</style>