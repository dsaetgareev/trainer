<template>
  <StackLayout>
    <Label :text="text" textWrap="true" class="label"/>
    <Button text="Сохранить" @tap="$emit('onNext')"  class="btn btn-primary m-t-20"/>
  </StackLayout>
</template>

<script>
    export default {
        props: ['type', 'text']
    }

</script>

<style>
  .label {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    padding: 10px 10px;
  }
  h2, .btn{
    margin: 20px 0;
  }
</style>
