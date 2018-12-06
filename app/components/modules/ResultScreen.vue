<template>
    <StackLayout>
        <Label :text="goodText()"/>
        <Label :text="badText()"/>
            <Button text="Повторить" @tap="$emit('repeat')"  class="btn btn-primary m-t-20"/>
            <Button text="Следующий уровень" @tap="$emit('nextLevel')"  class="btn btn-primary m-t-20"/>
    </StackLayout>
</template>

<script>
    export default {
        props: ['stats'],
        methods: {
            goodText() {
                return `Правильные ответы: ${this.stats.success}`;
            },
            badText() {
                return `Неправильные ответы: ${this.stats.error}`;
            }
        }
    }
</script>

<style scoped>

</style>