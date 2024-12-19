<script lang="ts">
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<SvelteToast />

<div class="flex min-h-screen flex-col items-center justify-center bg-blue-400 p-4">
	<slot />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');

	:global(body) {
		font-family: 'Comic Neue', cursive;
	}

	:global(.svelte-toast) {
		font-family: 'Comic Neue', cursive;
	}
</style>
