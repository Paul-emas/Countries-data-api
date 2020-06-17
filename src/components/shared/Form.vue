<template>
    <div>
        <div class="form-container">
            <app-filter></app-filter>
            <app-search></app-search>
        </div>
    </div>
</template>

<script>
import Filter from '../Filter';
import Search from '../Search';

export default {
    components: {
        appSearch: Search,
        appFilter: Filter
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
    .form {
        &-container {
            position: relative;
            top: 15rem;

            @include respond(tab-port) {
                top: 10rem;
                display: flex;
                flex-direction: column-reverse;
            }
        }
    }
</style>

