<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { playerName, resetQuiz } from '$lib/stores/quizStore';
	import SplashScreen from '$lib/components/SplashScreen.svelte';

	let name: string = '';
	let showSplash: boolean = true;

	onMount(() => {
		setTimeout(() => {
			showSplash = false;
		}, 5000); // Show splash screen for 5 seconds
		resetQuiz(); // Reset the quiz when the main page loads
	});

	function startQuiz(): void {
		if (name.trim()) {
			$playerName = name;
			goto('/quiz');
		}
	}
</script>

{#if showSplash}
	<SplashScreen />
{:else}
	<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
		<h2 class="mb-4 text-2xl font-bold">Enter Your Name</h2>
		<input
			bind:value={name}
			class="mb-4 w-full rounded border border-gray-300 p-2"
			placeholder="Your name"
		/>
		<button
			on:click={startQuiz}
			class="w-full rounded bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
		>
			Start Quiz
		</button>
	</div>
{/if}
