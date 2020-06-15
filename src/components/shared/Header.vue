<template>
    <div>
        <header class="header">
            <div class="container">
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

                this.toggleText = currentTheme;

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
                    this.toggleText = 'Dark';
                } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    this.toggleSwitch = true;
                    this.toggleText = 'Light';
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    .header {
        position: fixed;
        height: 7rem;
        width: 100%;
        border-bottom: 3px solid rgb(209, 209, 209);
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
        }

        & .dark-md {
            text-transform: capitalize;
            border: none;
            padding: 1rem 2rem;
            font-size: 1.6rem;
            float: right;
            right: 0;
            top: -.5rem;
            position: absolute;
            font-weight: 600;
            outline: none;
            background-color: transparent;
            transition-delay: .2s;
            color: var(--text-color);
            transition: all .5s;

            & span {
                position: relative;
                top: .15rem;
                font-weight: 700;
                margin-right: .2rem;
            }
        }
    }
</style>