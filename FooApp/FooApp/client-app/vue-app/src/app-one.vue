<template>
    <div>
        <h2>App One</h2>
        <counter />
    </div>
</template>

<script>
import Counter from './components/counter.vue';

export default {
    name: 'AppOne',
    components: {
        Counter
    }
}
</script>