<template>
    <div>
        <button type="button" class="btn btn-default" @click="counter++">+</button>
        {{ counter }}
        <button type="button" class="btn btn-default" @click="counter--">-</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data () {
        return {
            counter: 0
        };
    }
}
</script>