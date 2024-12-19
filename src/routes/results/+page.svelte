<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { playerName, score, resetQuiz } from '$lib/stores/quizStore';

	onMount(() => {
		if (!$playerName) {
			goto('/');
		}
	});

	function playAgain(): void {
		resetQuiz();
		goto('/');
	}
</script>

<div class="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
	<h2 class="mb-4 text-2xl font-bold">Quiz Complete!</h2>
	<p class="mb-4">Congratulations, {$playerName}!</p>
	<p class="mb-8 text-3xl font-bold">Your Score: {$score}</p>
	<button
		on:click={playAgain}
		class="w-full rounded bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
	>
		Play Again
	</button>
</div>
