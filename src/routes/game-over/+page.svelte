<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { playerName, score, resetQuiz } from '$lib/stores/quizStore';

	onMount(() => {
		if (!$playerName) {
			goto('/');
		}
	});

	function restartGame(): void {
		resetQuiz();
		goto('/');
	}
</script>

<div class="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
	<h2 class="mb-4 text-2xl font-bold">Game Over</h2>
	<p class="mb-4">Nice try, {$playerName}!</p>
	<p class="mb-8 text-3xl font-bold">Your Final Score: {$score} points</p>
	<button
		on:click={restartGame}
		class="w-full rounded bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600"
	>
		Restart Game
	</button>
</div>
