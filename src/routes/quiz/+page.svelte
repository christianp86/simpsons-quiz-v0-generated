<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { playerName, score, currentQuestionIndex, questions } from '$lib/stores/quizStore';
	import type { Question } from '$lib/types/quiz';

	let currentQuestion: Question | undefined;
	let options: string[] = [];
	let fiftyFiftyUsed: boolean = false;
	let correctAnswerUsed: boolean = false;

	onMount(() => {
		if (!$playerName) {
			goto('/');
		}
		updateQuestion();
	});

	function updateQuestion(): void {
		if ($currentQuestionIndex >= $questions.length) {
			goto('/results');
			return;
		}
		currentQuestion = $questions[$currentQuestionIndex];
		options = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer];
		shuffleArray(options);
	}

	function shuffleArray<T>(array: T[]): void {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	function handleAnswer(answer: string): void {
		if (answer === currentQuestion?.correctAnswer) {
			$score += 10;
			$currentQuestionIndex++;
			updateQuestion();
		} else {
			if (fiftyFiftyUsed && correctAnswerUsed) {
				goto('/game-over');
			} else {
				// Wrong answer, but jokers available
				alert('Wrong answer! Try using a joker or guess again.');
			}
		}
	}

	function useFiftyFifty(): void {
		if (!fiftyFiftyUsed && currentQuestion) {
			const incorrectAnswers = options.filter(
				(option) => option !== currentQuestion?.correctAnswer
			);
			const shuffledIncorrect = [...incorrectAnswers].sort(() => Math.random() - 0.5);
			const removeCount = Math.min(2, shuffledIncorrect.length);
			for (let i = 0; i < removeCount; i++) {
				const index = options.indexOf(shuffledIncorrect[i]);
				if (index > -1) {
					options.splice(index, 1);
				}
			}
			fiftyFiftyUsed = true;
			options = [...options]; // Trigger reactivity
		}
	}

	function useCorrectAnswer(): void {
		if (!correctAnswerUsed && currentQuestion) {
			options = [currentQuestion.correctAnswer];
			correctAnswerUsed = true;
		}
	}
</script>

<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
	<h2 class="mb-4 text-2xl font-bold">Question {$currentQuestionIndex + 1}</h2>
	<p class="mb-2 text-sm font-semibold text-gray-500">Category: {currentQuestion?.category}</p>
	<p class="mb-2 text-lg font-bold text-blue-600">Current Score: {$score} points</p>
	<p class="mb-4">{currentQuestion?.question}</p>
	<div class="mb-4 space-y-2">
		{#each options as option}
			<button
				on:click={() => handleAnswer(option)}
				class="w-full rounded bg-yellow-400 p-2 text-gray-800 transition-colors hover:bg-yellow-500"
			>
				{option}
			</button>
		{/each}
	</div>
	<div class="flex justify-between">
		<button
			on:click={useFiftyFifty}
			disabled={fiftyFiftyUsed}
			class="rounded bg-green-500 p-2 text-white transition-colors hover:bg-green-600 disabled:opacity-50"
		>
			50/50
		</button>
		<button
			on:click={useCorrectAnswer}
			disabled={correctAnswerUsed}
			class="rounded bg-red-500 p-2 text-white transition-colors hover:bg-red-600 disabled:opacity-50"
		>
			Correct Answer
		</button>
	</div>
</div>
