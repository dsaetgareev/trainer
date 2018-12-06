<template>
    <StackLayout class="alert alert-secondary">
        <Label :text="this.question_1"/>
        <Label :text="this.question_2"/>
        <Button text="Начинай!" @tap="$emit('onStart')" class="btn btn-primary m-t-20" />
    </StackLayout>
</template>

<script>
    export default {
        data() {
            return {
                question_1: 'Попробуй решить примеры.',
                question_2: 'Камилла, ты готова?'
            }
        },

        methods: {}
    }

</script>

<style scoped>
    .alert {
        text-align: center;
    }

    Label {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
