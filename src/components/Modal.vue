<template>
  <div class="flex fixed justify-center items-center h-screen w-full z-[100]">
    <div class="max-w-[400px] text-white rounded-[20px] pt-[48px] pb-[48px] pr-[32px] pl-[32px] bg-[#252945]">
      <p class="text-md text-center">Are you sure you want to exit? Your changes will not be saved?</p>
      <div class="flex mt-[24px]">
        <button @click="closeModal" class="btn-buja-event bg-green-500 flex-1">Return</button>
        <button @click="closeForm" class="btn-buja-event bg-red-500 flex-1">Close</button>
      </div>
    </div> 
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "modal",
  methods: {
    ...mapMutations(["TOGGLE_MODAL", "WRAP_MODAl"]),

    closeModal() {
      this.TOGGLE_MODAL();
    },

    closeForm() {
      this.TOGGLE_MODAL();
      this.WRAP_MODAl();

    },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>

</style>
