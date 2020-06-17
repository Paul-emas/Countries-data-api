<template>
    <div>
        <div class="container">
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'The Page Details page',
            user: ''
        }
    },

    created() {
        window.console.log(this.name);
    }
}
</script>



<style lang="scss" scoped>

    .container {
        background: #000;
        width: 500rem;
        height: 400rem;
    }

    h1 {
        font-size: 30rem;
    }
</style>

