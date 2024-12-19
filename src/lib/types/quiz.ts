export interface Question {
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

export interface QuizStore {
  playerName: string;
  score: number;
  currentQuestionIndex: number;
  questions: Question[];
}

