import type { Question } from '$lib/types/quiz';
import { charactersQuestions } from '$lib/data/characters';
import { catchphrasesQuestions } from '$lib/data/catchphrases';
import { episodesQuestions } from '$lib/data/episodes';
import { locationsQuestions } from '$lib/data/locations';
import { triviaQuestions } from '$lib/data/trivia';
// Import other category questions here

export const questions: Question[] = [
  ...charactersQuestions,
  ...catchphrasesQuestions,
  ...episodesQuestions,
  ...locationsQuestions,
  ...triviaQuestions
  // Spread other category questions here
];

