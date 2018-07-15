<template>
    <div>
        <h2>App Two</h2>
        <counter />
    </div>
</template>

<script>
import Counter from './components/counter.vue';

export default {
    name: 'AppTwo',
    components: {
        Counter
    }
}
</script>