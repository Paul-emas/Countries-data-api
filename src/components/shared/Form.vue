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
    .form {
        &-container {
            position: relative;
            top: 15rem;
        }
    }
</style>

