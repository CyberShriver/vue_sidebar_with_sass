<template>
	<main id="Home-page">
		<div class="p-5">
			<button class="p-2 bg-green-500 rounded-sm w-28" @click="toggleModal">Vue Modal</button>
			<h1>Home</h1>
			<p>This is the home page</p>

		</div>
	</main>
</template>
<script>
import { mapMutations } from 'vuex';

export default{

	methods: {

	...mapMutations(['WRAP_MODAl','SIDE_BAR']),

	toggleModal(){
		this.WRAP_MODAl();
		// this.SIDE_BAR()
	}
},

}

</script>