import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Question } from '../types/quiz';
import { questions as allQuestions } from './questions';

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const playerName: Writable<string> = writable('');
export const score: Writable<number> = writable(0);
export const currentQuestionIndex: Writable<number> = writable(0);
export const questions: Writable<Question[]> = writable(shuffleArray([...allQuestions]));

export function resetQuiz(): void {
  playerName.set('');
  score.set(0);
  currentQuestionIndex.set(0);
  questions.set(shuffleArray([...allQuestions]));
}

