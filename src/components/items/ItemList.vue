<template>
	<b-col>
		<section class="post-list">
			<h1>Items</h1>
			<hr />
			<div>
				<Items/>
			</div>
		</section>
	</b-col>	
</template>

<script>
	import Items from '@/components/items/Item.vue'

	export default{
		data() {
			return {
				
			};
		},
		name: 'items',
		components: {
			Items
		},

	}
</script>
