<template>
    <div>
        <form action="#">
            <div class="filter-box">
                <i class="fa fa-search"></i>
                <input v-model="searchData" @click="sendData" v-on:prevent.stop type="text" placeholder="Search for a country..." class="filter-form" />
            </div>
        </form>
    </div>
</template>

<script>

import { EventBus } from '../main.js';

export default {
    data() {
        return {
            searchData: ''
        }
    },

    created() {
        EventBus.$emit('searchData', this.searchData);
    },

    computed: {
        sendData: function() {
            return EventBus.$emit('searchData', this.searchData);
        }
    }
}
</script>


<style lang="scss" scoped>
    .filter {

        &-box {
            padding: 1.5rem 2.2rem;
            background-color: var(--white);
            width: 45rem;
            border-radius: .5rem;
            box-shadow: 0 0 .2rem var(--form-input);

            & i {
                font-size: 1.8rem;
                color: var(--text-color);
            }
        }

        &-form {
            margin-left: 1.6rem;
            outline: none;
            border: none;
            padding: .2rem;
            font-size: 1.3rem;
            background-color: transparent;
            color: var(--text-color);
            font-family: 'Nunito Sans';
            font-weight: 600;
            width: 90%;
        }
    }
</style>