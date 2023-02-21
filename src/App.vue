<template>
	<div class="app">
		<!-- Sidebar -->
		<Modal v-if="isModalActive"/>
		<Sidebar/>
		<!-- Content -->
		<router-view />
		<Transition name="wrapModal">
			<wrapMod v-if="wrapModal"/>
		</Transition>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Sidebar from './components/Sidebar.vue'
import wrapMod from './components/wrapModal.vue'
import Modal from './components/Modal.vue';

export default {
	 data() {
		 return {
			 
		}
	},
	methods:{
		
	},
	components:{Sidebar,wrapMod,Modal},
	computed:{
		...mapState(['wrapModal','isModalActive'])
	},
}
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;	
		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}

// animated modal

.wrapModal-enter-active,
.wrapModal-leave-active {
  transition: 0.8s ease all;
}

.wrapModal-enter-from,
.wrapModal-leave-to {
  transform: translateX(700px);
}
</style>