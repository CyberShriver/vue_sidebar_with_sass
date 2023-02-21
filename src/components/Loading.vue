<template>
  <div class="flex absolute top-0 left-0 bg-[#00000080] w-full items-center justify-center loading">
    <span class=" block w-[60px] h-[60px] mx-auto border-2 border-solid border-transparent border-t-green-500 border-b-green-700"></span>
  </div>
</template>

<script>
export default {
  name: "loading",
};
</script>

<style lang="scss">
.loading {
  z-index: 101;
  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
  span {
    border-radius: 50%;
    animation: spin ease 1000ms infinite;
  }
}
</style>
