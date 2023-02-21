<template>
    <main>
    <div @click="checkClick" class="flex flex-col fixed right-0 top-0 items-end w-full h-[100vh] sm:absolute z-[99]" ref="wrapModal">
      <!-- <div class="relative p-[56px] bg-[rgb(20,22,37)] max-w-[700px] text-white h-[100vh] overflow-y-auto" ref="form-content"> -->
      <div :class="`${loading ? 'relative p-[56px] bg-[rgb(20,22,37)] max-w-[700px] text-white h-[100vh]' : 'relative p-[56px] bg-[rgb(20,22,37)] max-w-[700px] text-white h-[100vh] overflow-y-auto'}`" ref="form-content">

        <Loading v-show="loading" class="h-screen min-h-screen"/>
          <h1 class=" text-5xl flex text-center ">Add new Equipment</h1>
            <div class=" p-3">
              <input type="text" placeholder="name"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>
            <div class=" p-3">
              <input type="text" placeholder="surname"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>

            <div class=" p-3">
              <input type="text" placeholder="old"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>

            <div class=" p-3">
              <input type="text" placeholder="age"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>

            <div class=" p-3">
              <input type="text" placeholder="age"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>

            <div class=" p-3">
              <input type="text" placeholder="age"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>

            <div class=" p-3">
              <input type="text" placeholder="age"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>
            <div class=" p-3">
              <input type="text" placeholder="age"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>
            <div class=" p-3">
              <input type="text" placeholder="age"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>
            <div class=" p-3">
              <input type="text" placeholder="age"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>
            <div class=" p-3">
              <input type="text" placeholder="age"
               class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"> 
            </div>
            <div>
              <button class=" rounded-sm p-3 bg-green-300 hover:bg-green-600" @click="SaveData">save</button>
              <button @click="toggleModal" class=" rounded-sm p-3 bg-red-300 hover:bg-red-600">Cancel</button>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import { mapMutations } from 'vuex';
import Loading from './Loading.vue';

export default{
  data(){
    return{
      loading:null
    }

  },
  methods:{
    ...mapMutations(['WRAP_MODAl','TOGGLE_MODAL']),

    // check outside click on modal
    checkClick(e){
      if(e.target==this.$refs.wrapModal){
          this.TOGGLE_MODAL();
      }
    },
    toggleModal(){
        this.WRAP_MODAl();   
      },
      SaveData(){
        this.loading=true;
        // this.$refs.form-content.classList.remove('overflow-y-auto');
      }

  },
  components:{Loading}

}

</script>

<style lang="scss" scoped>
// .wrap-content{
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   overflow: scroll;
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   @media (min-width: 900px) {
//     left: 90px;
//   }
// }

// .form{
//     position: relative;
//     padding: 56px;
//     max-width: 700px;
//     width: 100%;
//     background-color: #141625;
//     color: #fff;

// }
</style>