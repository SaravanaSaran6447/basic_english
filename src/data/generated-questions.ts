export interface QuizQuestion {
  id: number;
  topic: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  type: 'mcq' | 'yn';
  q: string;
  options: string[];
  ans: number;
  explanation: string;
}

export const questionBank: QuizQuestion[] = [
  {
    "id": 1,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(1/100) Identify the noun in this sentence: \"The child is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 2,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(2/100) Is \"courage\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 3,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(3/100) Identify the abstract noun: \"Her city is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 4,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(4/100) Identify the noun in this sentence: \"The city is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 5,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(5/100) Is \"flock\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 6,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(6/100) Identify the abstract noun: \"Her information is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 7,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(7/100) What is the plural of \"idea\"?",
    "options": [
      "idea",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 8,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(8/100) Choose the correct collective noun: A city of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 9,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(9/100) Identify the abstract noun: \"Her idea is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 10,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(10/100) Identify the noun in this sentence: \"The wisdom is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 11,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(11/100) Is \"mouse\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 12,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(12/100) Identify the abstract noun: \"Her city is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 13,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(13/100) What is the plural of \"wisdom\"?",
    "options": [
      "wisdom",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 14,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(14/100) Is \"idea\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 15,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(15/100) Identify the abstract noun: \"Her information is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 16,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(16/100) Identify the noun in this sentence: \"The city is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 17,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(17/100) Is \"courage\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 18,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(18/100) Identify the abstract noun: \"Her wisdom is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 19,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(19/100) What is the plural of \"courage\"?",
    "options": [
      "courage",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 20,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(20/100) Choose the correct collective noun: A child of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 21,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(21/100) Identify the abstract noun: \"Her idea is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 22,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(22/100) What is the plural of \"city\"?",
    "options": [
      "city/cities",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 23,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(23/100) Choose the correct collective noun: A idea of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 24,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(24/100) Identify the abstract noun: \"Her courage is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 25,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(25/100) What is the plural of \"flock\"?",
    "options": [
      "flock",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 26,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(26/100) Is \"city\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 27,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(27/100) Identify the abstract noun: \"Her courage is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 28,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(28/100) What is the plural of \"courage\"?",
    "options": [
      "courage",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 29,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(29/100) Is \"child\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 30,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(30/100) Identify the abstract noun: \"Her idea is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 31,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(31/100) Identify the noun in this sentence: \"The idea is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 32,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(32/100) Choose the correct collective noun: A idea of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 33,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(33/100) Identify the abstract noun: \"Her mouse is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 34,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(34/100) Identify the noun in this sentence: \"The information is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 35,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(35/100) Choose the correct collective noun: A flock of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 36,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(36/100) Identify the abstract noun: \"Her child is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 37,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(37/100) What is the plural of \"flock\"?",
    "options": [
      "flock",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 38,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(38/100) Choose the correct collective noun: A information of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 39,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(39/100) Identify the abstract noun: \"Her courage is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 40,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(40/100) What is the plural of \"courage\"?",
    "options": [
      "courage",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 41,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(41/100) Is \"flock\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 42,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(42/100) Identify the abstract noun: \"Her information is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 43,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(43/100) Identify the noun in this sentence: \"The child is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 44,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(44/100) Is \"wisdom\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 45,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(45/100) Identify the abstract noun: \"Her mouse is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 46,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(46/100) Identify the noun in this sentence: \"The child is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 47,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(47/100) Is \"information\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 48,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(48/100) Identify the abstract noun: \"Her flock is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 49,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(49/100) Identify the noun in this sentence: \"The wisdom is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 50,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(50/100) Is \"city\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 51,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(51/100) Identify the abstract noun: \"Her flock is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 52,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(52/100) Identify the noun in this sentence: \"The flock is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 53,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(53/100) Choose the correct collective noun: A mouse of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 54,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(54/100) Identify the abstract noun: \"Her child is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 55,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(55/100) What is the plural of \"information\"?",
    "options": [
      "information",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 56,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(56/100) Choose the correct collective noun: A wisdom of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 57,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(57/100) Identify the abstract noun: \"Her child is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 58,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(58/100) What is the plural of \"flock\"?",
    "options": [
      "flock",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 59,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(59/100) Is \"courage\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 60,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(60/100) Identify the abstract noun: \"Her idea is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 61,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(61/100) Identify the noun in this sentence: \"The flock is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 62,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(62/100) Choose the correct collective noun: A courage of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 63,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(63/100) Identify the abstract noun: \"Her idea is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 64,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(64/100) Identify the noun in this sentence: \"The flock is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 65,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(65/100) Choose the correct collective noun: A courage of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 66,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(66/100) Identify the abstract noun: \"Her wisdom is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 67,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(67/100) Identify the noun in this sentence: \"The idea is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 68,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(68/100) Choose the correct collective noun: A information of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 69,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(69/100) Identify the abstract noun: \"Her wisdom is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 70,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(70/100) What is the plural of \"mouse\"?",
    "options": [
      "mouse/mice",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 71,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(71/100) Choose the correct collective noun: A idea of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 72,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(72/100) Identify the abstract noun: \"Her courage is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 73,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(73/100) Identify the noun in this sentence: \"The child is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 74,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(74/100) Is \"city\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 75,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(75/100) Identify the abstract noun: \"Her mouse is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 76,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(76/100) What is the plural of \"courage\"?",
    "options": [
      "courage",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 77,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(77/100) Is \"wisdom\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 78,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(78/100) Identify the abstract noun: \"Her city is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 79,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(79/100) Identify the noun in this sentence: \"The wisdom is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 80,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(80/100) Is \"child\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 81,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(81/100) Identify the abstract noun: \"Her flock is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 82,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(82/100) Identify the noun in this sentence: \"The courage is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 83,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(83/100) Choose the correct collective noun: A courage of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 84,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(84/100) Identify the abstract noun: \"Her city is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 85,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(85/100) Identify the noun in this sentence: \"The mouse is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 86,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(86/100) Choose the correct collective noun: A information of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 87,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(87/100) Identify the abstract noun: \"Her wisdom is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 88,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(88/100) What is the plural of \"mouse\"?",
    "options": [
      "mouse/mice",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 89,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(89/100) Is \"information\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 90,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(90/100) Identify the abstract noun: \"Her child is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 91,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(91/100) What is the plural of \"information\"?",
    "options": [
      "information",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 92,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(92/100) Choose the correct collective noun: A city of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 93,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(93/100) Identify the abstract noun: \"Her wisdom is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 94,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(94/100) Identify the noun in this sentence: \"The mouse is blue.\"",
    "options": [
      "The",
      "is",
      "blue",
      "child"
    ],
    "ans": 3,
    "explanation": "A noun is a person, place, or thing."
  },
  {
    "id": 95,
    "topic": "nouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(95/100) Choose the correct collective noun: A wisdom of birds.",
    "options": [
      "pack",
      "flock",
      "herd",
      "school"
    ],
    "ans": 1,
    "explanation": "A group of birds is called a flock."
  },
  {
    "id": 96,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(96/100) Identify the abstract noun: \"Her mouse is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 97,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(97/100) What is the plural of \"mouse\"?",
    "options": [
      "mouse/mice",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 98,
    "topic": "nouns",
    "level": "intermediate",
    "type": "yn",
    "q": "(98/100) Is \"idea\" a countable or uncountable noun?",
    "options": [
      "Countable",
      "Uncountable"
    ],
    "ans": 1,
    "explanation": "courage cannot be counted directly."
  },
  {
    "id": 99,
    "topic": "nouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(99/100) Identify the abstract noun: \"Her flock is inspiring.\"",
    "options": [
      "Her",
      "is",
      "inspiring",
      "city"
    ],
    "ans": 3,
    "explanation": "An abstract noun represents a feeling or idea."
  },
  {
    "id": 100,
    "topic": "nouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(100/100) What is the plural of \"mouse\"?",
    "options": [
      "mouse/mice",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 1,
    "explanation": "The plural of idea is ideas."
  },
  {
    "id": 101,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(1/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 102,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(2/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "whom",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 103,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(3/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 104,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(4/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 105,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(5/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "she",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 106,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(6/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 107,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(7/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 108,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(8/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "mine",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 109,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(9/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 110,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(10/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 111,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(11/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "mine",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 112,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(12/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 113,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(13/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 114,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(14/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "whose",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 115,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(15/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 116,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(16/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 117,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(17/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "he",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 118,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(18/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 119,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(19/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 120,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(20/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "whom",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 121,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(21/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 122,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(22/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 123,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(23/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "whose",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 124,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(24/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 125,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(25/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 126,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(26/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "he",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 127,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(27/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 128,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(28/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 129,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(29/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "she",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 130,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(30/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 131,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(31/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 132,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(32/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "yours",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 133,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(33/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 134,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(34/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 135,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(35/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "she",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 136,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(36/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 137,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(37/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 138,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(38/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "they",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 139,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(39/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 140,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(40/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 141,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(41/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "whom",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 142,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(42/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 143,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(43/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 144,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(44/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "himself",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 145,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(45/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 146,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(46/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 147,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(47/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "he",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 148,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(48/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 149,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(49/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 150,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(50/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "whose",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 151,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(51/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 152,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(52/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 153,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(53/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "they",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 154,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(54/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 155,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(55/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 156,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(56/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "yours",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 157,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(57/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 158,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(58/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 159,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(59/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "whose",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 160,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(60/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 161,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(61/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 162,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(62/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "they",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 163,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(63/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 164,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(64/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 165,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(65/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "whom",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 166,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(66/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 167,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(67/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 168,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(68/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "mine",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 169,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(69/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 170,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(70/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 171,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(71/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "they",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 172,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(72/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 173,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(73/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 174,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(74/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "she",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 175,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(75/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 176,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(76/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 177,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(77/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "whom",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 178,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(78/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 179,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(79/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 180,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(80/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "he",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 181,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(81/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 182,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(82/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 183,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(83/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "mine",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 184,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(84/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 185,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(85/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 186,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(86/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "himself",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 187,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(87/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 188,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(88/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 189,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(89/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "she",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 190,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(90/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 191,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(91/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 192,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(92/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "mine",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 193,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(93/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 194,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(94/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 195,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(95/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "whose",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 196,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(96/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 197,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(97/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 198,
    "topic": "pronouns",
    "level": "intermediate",
    "type": "mcq",
    "q": "(98/100) Fill in the blank with a pronouns: She ___ yesterday.",
    "options": [
      "he",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 199,
    "topic": "pronouns",
    "level": "advanced",
    "type": "mcq",
    "q": "(99/100) Identify the advanced pronouns error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 200,
    "topic": "pronouns",
    "level": "beginner",
    "type": "mcq",
    "q": "(100/100) Which word is related to pronouns?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 201,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(1/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 202,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(2/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "wooden",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 203,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(3/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 204,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(4/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 205,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(5/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "ancient",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 206,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(6/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 207,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(7/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 208,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(8/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "best",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 209,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(9/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 210,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(10/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 211,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(11/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "ancient",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 212,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(12/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 213,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(13/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 214,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(14/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "tall",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 215,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(15/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 216,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(16/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 217,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(17/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "magnificent",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 218,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(18/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 219,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(19/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 220,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(20/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "best",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 221,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(21/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 222,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(22/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 223,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(23/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "wooden",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 224,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(24/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 225,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(25/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 226,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(26/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "better",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 227,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(27/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 228,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(28/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 229,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(29/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "magnificent",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 230,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(30/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 231,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(31/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 232,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(32/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "better",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 233,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(33/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 234,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(34/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 235,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(35/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "wooden",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 236,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(36/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 237,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(37/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 238,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(38/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "beautiful",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 239,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(39/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 240,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(40/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 241,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(41/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "wooden",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 242,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(42/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 243,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(43/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 244,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(44/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "tall",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 245,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(45/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 246,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(46/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 247,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(47/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "wooden",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 248,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(48/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 249,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(49/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 250,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(50/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "best",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 251,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(51/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 252,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(52/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 253,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(53/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "best",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 254,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(54/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 255,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(55/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 256,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(56/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "wooden",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 257,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(57/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 258,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(58/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 259,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(59/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "ancient",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 260,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(60/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 261,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(61/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 262,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(62/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "beautiful",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 263,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(63/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 264,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(64/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 265,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(65/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "wooden",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 266,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(66/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 267,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(67/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 268,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(68/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "best",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 269,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(69/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 270,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(70/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 271,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(71/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "tall",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 272,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(72/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 273,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(73/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 274,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(74/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "red",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 275,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(75/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 276,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(76/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 277,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(77/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "better",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 278,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(78/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 279,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(79/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 280,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(80/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "tall",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 281,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(81/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 282,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(82/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 283,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(83/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "wooden",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 284,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(84/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 285,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(85/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 286,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(86/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "ancient",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 287,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(87/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 288,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(88/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 289,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(89/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "magnificent",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 290,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(90/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 291,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(91/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 292,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(92/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "best",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 293,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(93/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 294,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(94/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 295,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(95/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "best",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 296,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(96/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 297,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(97/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 298,
    "topic": "adjectives",
    "level": "intermediate",
    "type": "mcq",
    "q": "(98/100) Fill in the blank with a adjectives: She ___ yesterday.",
    "options": [
      "wooden",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 299,
    "topic": "adjectives",
    "level": "advanced",
    "type": "mcq",
    "q": "(99/100) Identify the advanced adjectives error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 300,
    "topic": "adjectives",
    "level": "beginner",
    "type": "mcq",
    "q": "(100/100) Which word is related to adjectives?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 301,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(1/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 302,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(2/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 303,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(3/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 304,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(4/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 305,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(5/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 306,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(6/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 307,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(7/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 308,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(8/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 309,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(9/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 310,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(10/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 311,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(11/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 312,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(12/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 313,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(13/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 314,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(14/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "an",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 315,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(15/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 316,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(16/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 317,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(17/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 318,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(18/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 319,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(19/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 320,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(20/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "an",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 321,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(21/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 322,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(22/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 323,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(23/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 324,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(24/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 325,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(25/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 326,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(26/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "an",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 327,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(27/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 328,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(28/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 329,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(29/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 330,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(30/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 331,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(31/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 332,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(32/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 333,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(33/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 334,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(34/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 335,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(35/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "an",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 336,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(36/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 337,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(37/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 338,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(38/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "an",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 339,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(39/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 340,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(40/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 341,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(41/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "an",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 342,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(42/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 343,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(43/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 344,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(44/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 345,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(45/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 346,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(46/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 347,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(47/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 348,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(48/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 349,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(49/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 350,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(50/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "an",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 351,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(51/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 352,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(52/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 353,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(53/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 354,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(54/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 355,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(55/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 356,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(56/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 357,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(57/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 358,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(58/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 359,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(59/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 360,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(60/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 361,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(61/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 362,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(62/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 363,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(63/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 364,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(64/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 365,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(65/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "an",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 366,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(66/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 367,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(67/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 368,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(68/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 369,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(69/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 370,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(70/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 371,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(71/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 372,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(72/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 373,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(73/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 374,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(74/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 375,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(75/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 376,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(76/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 377,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(77/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 378,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(78/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 379,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(79/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 380,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(80/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 381,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(81/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 382,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(82/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 383,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(83/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 384,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(84/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 385,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(85/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 386,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(86/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 387,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(87/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 388,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(88/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 389,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(89/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "an",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 390,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(90/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 391,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(91/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 392,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(92/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 393,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(93/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 394,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(94/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 395,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(95/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "the",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 396,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(96/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 397,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(97/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 398,
    "topic": "articles",
    "level": "intermediate",
    "type": "mcq",
    "q": "(98/100) Fill in the blank with a articles: She ___ yesterday.",
    "options": [
      "a",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 399,
    "topic": "articles",
    "level": "advanced",
    "type": "mcq",
    "q": "(99/100) Identify the advanced articles error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 400,
    "topic": "articles",
    "level": "beginner",
    "type": "mcq",
    "q": "(100/100) Which word is related to articles?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 401,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(1/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 402,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(2/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "run",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 403,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(3/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 404,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(4/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 405,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(5/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "had eaten",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 406,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(6/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 407,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(7/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 408,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(8/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "run",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 409,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(9/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 410,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(10/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 411,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(11/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "is",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 412,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(12/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 413,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(13/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 414,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(14/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "are",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 415,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(15/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 416,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(16/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 417,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(17/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "had eaten",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 418,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(18/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 419,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(19/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 420,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(20/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "are",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 421,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(21/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 422,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(22/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 423,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(23/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "will go",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 424,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(24/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 425,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(25/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 426,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(26/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "run",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 427,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(27/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 428,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(28/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 429,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(29/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "run",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 430,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(30/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 431,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(31/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 432,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(32/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "run",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 433,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(33/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 434,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(34/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 435,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(35/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "graduated",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 436,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(36/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 437,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(37/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 438,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(38/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "sleeping",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 439,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(39/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 440,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(40/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 441,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(41/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "sleeping",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 442,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(42/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 443,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(43/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 444,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(44/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "sleeping",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 445,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(45/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 446,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(46/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 447,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(47/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "is",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 448,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(48/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 449,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(49/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 450,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(50/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "sleeping",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 451,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(51/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 452,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(52/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 453,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(53/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "is",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 454,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(54/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 455,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(55/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 456,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(56/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "jump",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 457,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(57/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 458,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(58/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 459,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(59/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "jump",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 460,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(60/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 461,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(61/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 462,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(62/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "are",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 463,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(63/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 464,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(64/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 465,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(65/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "jump",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 466,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(66/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 467,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(67/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 468,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(68/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "will go",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 469,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(69/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 470,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(70/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 471,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(71/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "are",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 472,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(72/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 473,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(73/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 474,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(74/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "jump",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 475,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(75/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 476,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(76/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 477,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(77/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "is",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 478,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(78/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 479,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(79/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 480,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(80/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "sleeping",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 481,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(81/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 482,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(82/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 483,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(83/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "are",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 484,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(84/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 485,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(85/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 486,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(86/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "had eaten",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 487,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(87/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 488,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(88/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 489,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(89/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "jump",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 490,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(90/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 491,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(91/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 492,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(92/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "run",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 493,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(93/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 494,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(94/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 495,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(95/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "run",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 496,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(96/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 497,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(97/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 498,
    "topic": "verbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(98/100) Fill in the blank with a verbs: She ___ yesterday.",
    "options": [
      "will go",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 499,
    "topic": "verbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(99/100) Identify the advanced verbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 500,
    "topic": "verbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(100/100) Which word is related to verbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 501,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(1/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 502,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(2/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "yesterday",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 503,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(3/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 504,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(4/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 505,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(5/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "yesterday",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 506,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(6/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 507,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(7/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 508,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(8/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "well",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 509,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(9/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 510,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(10/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 511,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(11/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "very",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 512,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(12/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 513,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(13/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 514,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(14/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "yesterday",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 515,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(15/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 516,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(16/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 517,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(17/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "always",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 518,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(18/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 519,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(19/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 520,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(20/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "always",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 521,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(21/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 522,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(22/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 523,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(23/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "never",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 524,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(24/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 525,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(25/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 526,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(26/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "well",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 527,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(27/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 528,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(28/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 529,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(29/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "always",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 530,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(30/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 531,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(31/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 532,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(32/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "always",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 533,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(33/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 534,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(34/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 535,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(35/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "well",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 536,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(36/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 537,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(37/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 538,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(38/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "very",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 539,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(39/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 540,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(40/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 541,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(41/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "very",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 542,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(42/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 543,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(43/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 544,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(44/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "extremely",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 545,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(45/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 546,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(46/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 547,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(47/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "extremely",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 548,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(48/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 549,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(49/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 550,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(50/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "never",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 551,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(51/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 552,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(52/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 553,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(53/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "yesterday",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 554,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(54/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 555,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(55/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 556,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(56/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "always",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 557,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(57/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 558,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(58/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 559,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(59/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "yesterday",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 560,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(60/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 561,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(61/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 562,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(62/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "well",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 563,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(63/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 564,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(64/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 565,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(65/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "well",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 566,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(66/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 567,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(67/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 568,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(68/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "well",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 569,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(69/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 570,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(70/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 571,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(71/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "quickly",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 572,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(72/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 573,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(73/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 574,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(74/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "never",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 575,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(75/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 576,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(76/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 577,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(77/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "always",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 578,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(78/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 579,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(79/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 580,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(80/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "almost",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 581,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(81/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 582,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(82/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 583,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(83/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "yesterday",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 584,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(84/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 585,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(85/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 586,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(86/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "well",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 587,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(87/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 588,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(88/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 589,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(89/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "quickly",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 590,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(90/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 591,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(91/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 592,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(92/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "yesterday",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 593,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(93/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 594,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(94/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 595,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(95/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "almost",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 596,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(96/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 597,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(97/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 598,
    "topic": "adverbs",
    "level": "intermediate",
    "type": "mcq",
    "q": "(98/100) Fill in the blank with a adverbs: She ___ yesterday.",
    "options": [
      "extremely",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 599,
    "topic": "adverbs",
    "level": "advanced",
    "type": "mcq",
    "q": "(99/100) Identify the advanced adverbs error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 600,
    "topic": "adverbs",
    "level": "beginner",
    "type": "mcq",
    "q": "(100/100) Which word is related to adverbs?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 601,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(1/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 602,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(2/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "into",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 603,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(3/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 604,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(4/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 605,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(5/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "across",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 606,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(6/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 607,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(7/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 608,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(8/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "across",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 609,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(9/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 610,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(10/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 611,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(11/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "at",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 612,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(12/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 613,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(13/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 614,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(14/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "in",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 615,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(15/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 616,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(16/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 617,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(17/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "into",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 618,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(18/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 619,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(19/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 620,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(20/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "under",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 621,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(21/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 622,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(22/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 623,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(23/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "into",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 624,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(24/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 625,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(25/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 626,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(26/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "through",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 627,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(27/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 628,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(28/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 629,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(29/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "across",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 630,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(30/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 631,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(31/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 632,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(32/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "under",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 633,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(33/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 634,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(34/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 635,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(35/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "across",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 636,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(36/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 637,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(37/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 638,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(38/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "at",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 639,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(39/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 640,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(40/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 641,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(41/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "on",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 642,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(42/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 643,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(43/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 644,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(44/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "across",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 645,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(45/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 646,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(46/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 647,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(47/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "in",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 648,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(48/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 649,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(49/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 650,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(50/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "at",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 651,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(51/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 652,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(52/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 653,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(53/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "at",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 654,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(54/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 655,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(55/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 656,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(56/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "between",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 657,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(57/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 658,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(58/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 659,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(59/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "at",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 660,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(60/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 661,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(61/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 662,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(62/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "between",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 663,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(63/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 664,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(64/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 665,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(65/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "in",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 666,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(66/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 667,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(67/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 668,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(68/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "across",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 669,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(69/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 670,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(70/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 671,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(71/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "under",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 672,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(72/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 673,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(73/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 674,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(74/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "through",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 675,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(75/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 676,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(76/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 677,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(77/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "in",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 678,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(78/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 679,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(79/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 680,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(80/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "across",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 681,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(81/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 682,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(82/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 683,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(83/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "between",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 684,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(84/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 685,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(85/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 686,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(86/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "under",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 687,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(87/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 688,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(88/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 689,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(89/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "into",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 690,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(90/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 691,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(91/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 692,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(92/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "at",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 693,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(93/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 694,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(94/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 695,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(95/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "into",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 696,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(96/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 697,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(97/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 698,
    "topic": "prepositions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(98/100) Fill in the blank with a prepositions: She ___ yesterday.",
    "options": [
      "across",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 699,
    "topic": "prepositions",
    "level": "advanced",
    "type": "mcq",
    "q": "(99/100) Identify the advanced prepositions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 700,
    "topic": "prepositions",
    "level": "beginner",
    "type": "mcq",
    "q": "(100/100) Which word is related to prepositions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 701,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(1/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 702,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(2/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "will",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 703,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(3/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 704,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(4/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 705,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(5/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "should",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 706,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(6/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 707,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(7/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 708,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(8/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "must",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 709,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(9/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 710,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(10/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 711,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(11/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "could",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 712,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(12/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 713,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(13/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 714,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(14/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "would",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 715,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(15/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 716,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(16/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 717,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(17/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "might",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 718,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(18/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 719,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(19/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 720,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(20/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "would",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 721,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(21/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 722,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(22/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 723,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(23/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "could",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 724,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(24/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 725,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(25/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 726,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(26/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "should",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 727,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(27/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 728,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(28/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 729,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(29/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "must",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 730,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(30/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 731,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(31/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 732,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(32/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "can",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 733,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(33/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 734,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(34/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 735,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(35/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "could",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 736,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(36/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 737,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(37/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 738,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(38/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "must",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 739,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(39/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 740,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(40/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 741,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(41/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "might",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 742,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(42/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 743,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(43/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 744,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(44/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "could",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 745,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(45/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 746,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(46/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 747,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(47/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "might",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 748,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(48/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 749,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(49/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 750,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(50/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "should",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 751,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(51/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 752,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(52/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 753,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(53/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "might",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 754,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(54/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 755,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(55/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 756,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(56/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "must",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 757,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(57/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 758,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(58/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 759,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(59/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "should",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 760,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(60/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 761,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(61/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 762,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(62/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "should",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 763,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(63/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 764,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(64/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 765,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(65/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "may",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 766,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(66/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 767,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(67/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 768,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(68/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "will",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 769,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(69/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 770,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(70/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 771,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(71/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "can",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 772,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(72/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 773,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(73/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 774,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(74/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "can",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 775,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(75/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 776,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(76/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 777,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(77/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "should",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 778,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(78/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 779,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(79/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 780,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(80/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "can",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 781,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(81/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 782,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(82/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 783,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(83/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "could",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 784,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(84/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 785,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(85/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 786,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(86/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "should",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 787,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(87/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 788,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(88/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 789,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(89/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "must",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 790,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(90/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 791,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(91/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 792,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(92/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "could",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 793,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(93/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 794,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(94/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 795,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(95/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "can",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 796,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(96/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 797,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(97/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 798,
    "topic": "modals",
    "level": "intermediate",
    "type": "mcq",
    "q": "(98/100) Fill in the blank with a modals: She ___ yesterday.",
    "options": [
      "can",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 799,
    "topic": "modals",
    "level": "advanced",
    "type": "mcq",
    "q": "(99/100) Identify the advanced modals error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 800,
    "topic": "modals",
    "level": "beginner",
    "type": "mcq",
    "q": "(100/100) Which word is related to modals?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 801,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(1/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 802,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(2/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "so",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 803,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(3/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 804,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(4/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 805,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(5/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "and",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 806,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(6/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 807,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(7/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 808,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(8/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "and",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 809,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(9/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 810,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(10/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 811,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(11/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "so",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 812,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(12/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 813,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(13/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 814,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(14/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "and",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 815,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(15/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 816,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(16/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 817,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(17/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "although",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 818,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(18/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 819,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(19/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 820,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(20/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "unless",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 821,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(21/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 822,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(22/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 823,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(23/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "and",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 824,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(24/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 825,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(25/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 826,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(26/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "because",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 827,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(27/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 828,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(28/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 829,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(29/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "unless",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 830,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(30/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 831,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(31/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 832,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(32/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "unless",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 833,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(33/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 834,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(34/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 835,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(35/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "but",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 836,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(36/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 837,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(37/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 838,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(38/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "unless",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 839,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(39/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 840,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(40/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 841,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(41/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "unless",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 842,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(42/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 843,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(43/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 844,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(44/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "and",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 845,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(45/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 846,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(46/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 847,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(47/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "so",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 848,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(48/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 849,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(49/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 850,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(50/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "and",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 851,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(51/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 852,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(52/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 853,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(53/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "so",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 854,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(54/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 855,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(55/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 856,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(56/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "although",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 857,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(57/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 858,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(58/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 859,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(59/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "and",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 860,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(60/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 861,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(61/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 862,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(62/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "but",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 863,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(63/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 864,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(64/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 865,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(65/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "unless",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 866,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(66/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 867,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(67/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 868,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(68/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "unless",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 869,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(69/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 870,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(70/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 871,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(71/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "or",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 872,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(72/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 873,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(73/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 874,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(74/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "since",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 875,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(75/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 876,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(76/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 877,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(77/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "because",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 878,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(78/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 879,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(79/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 880,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(80/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "so",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 881,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(81/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 882,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(82/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 883,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(83/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "so",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 884,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(84/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 885,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(85/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 886,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(86/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "unless",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 887,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(87/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 888,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(88/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 889,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(89/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "but",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 890,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(90/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 891,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(91/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 892,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(92/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "unless",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 893,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(93/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 894,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(94/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 895,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(95/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "so",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 896,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(96/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 897,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(97/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 898,
    "topic": "conjunctions",
    "level": "intermediate",
    "type": "mcq",
    "q": "(98/100) Fill in the blank with a conjunctions: She ___ yesterday.",
    "options": [
      "or",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 899,
    "topic": "conjunctions",
    "level": "advanced",
    "type": "mcq",
    "q": "(99/100) Identify the advanced conjunctions error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 900,
    "topic": "conjunctions",
    "level": "beginner",
    "type": "mcq",
    "q": "(100/100) Which word is related to conjunctions?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 901,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(1/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 902,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(2/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "context clues",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 903,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(3/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 904,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(4/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 905,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(5/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "skimming",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 906,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(6/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 907,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(7/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 908,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(8/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "summary",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 909,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(9/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 910,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(10/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 911,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(11/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "main idea",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 912,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(12/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 913,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(13/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 914,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(14/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "author intent",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 915,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(15/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 916,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(16/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 917,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(17/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "skimming",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 918,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(18/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 919,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(19/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 920,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(20/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "vocabulary",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 921,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(21/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 922,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(22/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 923,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(23/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "summary",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 924,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(24/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 925,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(25/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 926,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(26/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "vocabulary",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 927,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(27/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 928,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(28/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 929,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(29/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "context clues",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 930,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(30/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 931,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(31/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 932,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(32/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "author intent",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 933,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(33/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 934,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(34/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 935,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(35/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "context clues",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 936,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(36/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 937,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(37/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 938,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(38/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "context clues",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 939,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(39/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 940,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(40/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 941,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(41/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "summary",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 942,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(42/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 943,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(43/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 944,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(44/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "summary",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 945,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(45/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 946,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(46/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 947,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(47/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "skimming",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 948,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(48/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 949,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(49/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 950,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(50/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "summary",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 951,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(51/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 952,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(52/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 953,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(53/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "scanning",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 954,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(54/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 955,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(55/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 956,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(56/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "vocabulary",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 957,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(57/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 958,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(58/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 959,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(59/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "skimming",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 960,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(60/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 961,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(61/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 962,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(62/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "author intent",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 963,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(63/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 964,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(64/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 965,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(65/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "scanning",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 966,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(66/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 967,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(67/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 968,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(68/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "context clues",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 969,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(69/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 970,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(70/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 971,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(71/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "main idea",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 972,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(72/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 973,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(73/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 974,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(74/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "scanning",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 975,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(75/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 976,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(76/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 977,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(77/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "author intent",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 978,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(78/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 979,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(79/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 980,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(80/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "author intent",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 981,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(81/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 982,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(82/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 983,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(83/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "skimming",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 984,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(84/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 985,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(85/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 986,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(86/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "summary",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 987,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(87/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 988,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(88/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 989,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(89/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "context clues",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 990,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(90/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 991,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(91/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 992,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(92/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "inferencing",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 993,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(93/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 994,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(94/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 995,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(95/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "context clues",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 996,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(96/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 997,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(97/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  },
  {
    "id": 998,
    "topic": "reading",
    "level": "intermediate",
    "type": "mcq",
    "q": "(98/100) Fill in the blank with a reading: She ___ yesterday.",
    "options": [
      "author intent",
      "alternative1",
      "alternative2",
      "alternative3"
    ],
    "ans": 0,
    "explanation": "Proper usage of {topic} is required."
  },
  {
    "id": 999,
    "topic": "reading",
    "level": "advanced",
    "type": "mcq",
    "q": "(99/100) Identify the advanced reading error in this sentence.",
    "options": [
      "Error A",
      "Error B",
      "Error C",
      "Error D"
    ],
    "ans": 2,
    "explanation": "Advanced rules of {topic} apply here."
  },
  {
    "id": 1000,
    "topic": "reading",
    "level": "beginner",
    "type": "mcq",
    "q": "(100/100) Which word is related to reading?",
    "options": [
      "apple",
      "whose",
      "run",
      "blue"
    ],
    "ans": 1,
    "explanation": "{keyword} is a basic example."
  }
];
