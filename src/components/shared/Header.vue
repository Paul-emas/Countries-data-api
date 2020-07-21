<template>
    <div>
        <header class="header">
            <div class="container-fluid">
                <h1>Where in the world?</h1>
                <button @click="toggleDark" ref="toggle" class="dark-md"><span class="lnr lnr-moon"></span>
                    {{ toggleText }}
                    mode</button>


            </div>
        </header>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                toggleSwitch: true,
                toggleText: ''
            }
        },

        created() {
            const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;


            if (currentTheme) {
                document.documentElement.setAttribute('data-theme', currentTheme);

                this.toggleText = 'Dark';

                if (currentTheme === 'light') {
                    this.toggleSwitch = true;
                }
            }
        },

        methods: {

            toggleDark() {
                if (this.toggleSwitch) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                    this.toggleSwitch = false;
                    this.toggleText = 'Light';
                } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    this.toggleSwitch = true;
                    this.toggleText = 'Dark';
                }
            }
        }
    }
</script>


<style lang="scss">
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

    .header {
        position: fixed;
        height: 7rem;
        width: 100%;
        box-shadow: 0 .1rem .5rem var(--form-input);
        left: 0;
        top: 0;
        background-color: var(--white);
        z-index: 10;


        & .container {
            position: relative;
        }

        & h1 {
            margin-top: 2rem;
            font-weight: 700;
            color: var(--text-color);

            @include respond(tab-port) {
                font-size: 1.8rem;
                margin-top: 2.5rem;
            }
        }

        & .dark-md {
            text-transform: capitalize;
            border: none;
            padding: 1rem 2rem;
            font-size: 1.6rem;
            float: right;
            right: 3rem;
            top: 1.2rem;
            position: absolute;
            font-weight: 600;
            outline: none;
            background-color: transparent;
            transition-delay: .2s;
            color: var(--text-color);
            transition: all .5s;

            @include respond(tab-port) {
                font-size: 1.5rem;
                right: 0;
            }

            & span {
                position: relative;
                top: .15rem;
                font-weight: 700;
                margin-right: .2rem;
            }
        }
    }
</style>