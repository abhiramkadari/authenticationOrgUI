<template>
  <component v-bind:is="layout">
	  <router-view />
	</component>
</template>

<style>

</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	computed: {
		layout() {
			return this.$route.meta.layout;
		},
	}
});
</script>
