import { QuizQuestion, questionBank as generatedQuestions } from './generated-questions';

export const syllabusData = [
  { id: 'nouns', title: 'Nouns' },
  { id: 'pronouns', title: 'Pronouns' },
  { id: 'adjectives', title: 'Adjectives' },
  { id: 'articles', title: 'Articles' },
  { id: 'verbs', title: 'Verbs' },
  { id: 'adverbs', title: 'Adverbs' },
  { id: 'prepositions', title: 'Prepositions' },
  { id: 'modals', title: 'Modal Auxiliaries' },
  { id: 'conjunctions', title: 'Conjunctions' },
  { id: 'reading', title: 'Reading Comprehension' }
];

export { generatedQuestions as questionBank };
export type { QuizQuestion };
