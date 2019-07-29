<template>
	<div class="hello">
		<items/>
	</div>
</template>

<script>
	import items from '@/components/items/ItemList.vue'

	export default {
		name: 'Home',
		components: {
			items
		},
		props: {
			msg: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
