<template>
  <div>
    <button class="VButton">我是VButton组件!</button>
  </div>
</template>

<script>
/**
   * The only true VButton.
   * @displayName VButton
   */
export default {
    name: "VButton",
    props: {
      /**
       * 这个button的颜色.
       */
      color: {
        type: String,
        default: '#333'
      },
      /**
       * The size of the button
       * @values small, normal, large
       */
      size: {
        type: String,
        default: 'normal'
      },
      /**
       * Gets called when the user clicks on the button
       */
      onClick: {
        type: Function,
        default: event => {
          console.log('You have clicked me!', event.target)
        }
      }
    }
    /* ... */
};
</script>

<style lang="less" scoped>
.VButton {
  border: 1px solid salmon;
  font-size: 28px;
}
</style>
