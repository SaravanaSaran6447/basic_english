const fs = require('fs');

const topics = [
  'nouns', 'pronouns', 'adjectives', 'articles', 'verbs', 
  'adverbs', 'prepositions', 'modals', 'conjunctions', 'reading'
];

const levels = ['beginner', 'intermediate', 'advanced'];

// Templates for question generation
const templates = {
  nouns: {
    beginner: [
      { q: 'What is the plural of "{word}"?', options: ['{word}s', '{plural}', '{word}es', '{plural}s'], ans: 1, explanation: 'The plural of {word} is {plural}.' },
      { q: 'Identify the noun in this sentence: "The {word} is blue."', options: ['The', 'is', 'blue', '{word}'], ans: 3, explanation: 'A noun is a person, place, or thing.' },
    ],
    intermediate: [
      { q: 'Is "{word}" a countable or uncountable noun?', options: ['Countable', 'Uncountable'], ans: 1, explanation: '{word} cannot be counted directly.' },
      { q: 'Choose the correct collective noun: A {word} of birds.', options: ['pack', 'flock', 'herd', 'school'], ans: 1, explanation: 'A group of birds is called a flock.' }
    ],
    advanced: [
      { q: 'Identify the abstract noun: "Her {word} is inspiring."', options: ['Her', 'is', 'inspiring', '{word}'], ans: 3, explanation: 'An abstract noun represents a feeling or idea.' }
    ]
  },
  // Add fallback templates for other topics
  fallback: {
    beginner: [
      { q: 'Which word is related to {topic}?', options: ['apple', '{keyword}', 'run', 'blue'], ans: 1, explanation: '{keyword} is a basic example.' }
    ],
    intermediate: [
      { q: 'Fill in the blank with a {topic}: She ___ yesterday.', options: ['{keyword1}', '{keyword2}', '{keyword3}', '{keyword4}'], ans: 0, explanation: 'Proper usage of {topic} is required.' }
    ],
    advanced: [
      { q: 'Identify the advanced {topic} error in this sentence.', options: ['Error A', 'Error B', 'Error C', 'Error D'], ans: 2, explanation: 'Advanced rules of {topic} apply here.' }
    ]
  }
};

const keywords = {
  nouns: ['courage', 'flock', 'information', 'child/children', 'mouse/mice', 'city/cities', 'idea', 'wisdom'],
  pronouns: ['he', 'she', 'they', 'mine', 'yours', 'himself', 'whom', 'whose'],
  adjectives: ['tall', 'beautiful', 'better', 'best', 'magnificent', 'red', 'ancient', 'wooden'],
  articles: ['a', 'an', 'the'],
  verbs: ['run', 'jump', 'is', 'are', 'graduated', 'will go', 'had eaten', 'sleeping'],
  adverbs: ['quickly', 'always', 'very', 'never', 'yesterday', 'almost', 'extremely', 'well'],
  prepositions: ['in', 'on', 'at', 'under', 'between', 'through', 'across', 'into'],
  modals: ['can', 'could', 'should', 'must', 'may', 'might', 'will', 'would'],
  conjunctions: ['and', 'but', 'or', 'so', 'because', 'although', 'unless', 'since'],
  reading: ['skimming', 'scanning', 'inferencing', 'context clues', 'main idea', 'summary', 'author intent', 'vocabulary']
};

let questions = [];
let idCounter = 1;

topics.forEach(topic => {
  let topicQuestions = [];
  
  for (let i = 0; i < 100; i++) {
    const level = levels[i % 3]; // Round robin levels
    
    // Pick a template
    const topicTemplates = templates[topic] || templates.fallback;
    const levelTemplates = topicTemplates[level] || templates.fallback[level];
    const template = levelTemplates[Math.floor(Math.random() * levelTemplates.length)];
    
    // Pick a keyword
    const kws = keywords[topic];
    const kw = kws[Math.floor(Math.random() * kws.length)];
    
    let qString = template.q.replace(/\{topic\}/g, topic).replace(/\{keyword\}/g, kw);
    
    // Simple word splitting for noun plural template
    if (qString.includes('{word}')) {
      const parts = kw.split('/');
      const word = parts[0];
      const plural = parts[1] || word + 's';
      qString = qString.replace(/\{word\}/g, word);
      
      template.options = template.options.map(o => o.replace(/\{word\}/g, word).replace(/\{plural\}/g, plural));
      template.explanation = template.explanation.replace(/\{word\}/g, word).replace(/\{plural\}/g, plural);
    } else {
      qString = qString.replace(/\{keyword\}/g, kw);
      if (template.options.includes('{keyword1}')) {
        template.options = template.options.map(o => o.replace(/\{keyword[1-4]\}/g, kw));
      } else if (template.options.includes('{keyword}')) {
        template.options = template.options.map(o => o.replace(/\{keyword\}/g, kw));
      }
    }
    
    // Ensure 4 unique looking options for standard generated items if they are identical
    let finalOptions = [...template.options];
    if (finalOptions[0] === finalOptions[1]) {
      finalOptions = [kw, 'alternative1', 'alternative2', 'alternative3'];
    }

    questions.push({
      id: idCounter++,
      topic: topic,
      level: level,
      type: template.options.length === 2 ? 'yn' : 'mcq',
      q: "(" + (i+1) + "/100) " + qString,
      options: finalOptions,
      ans: template.ans,
      explanation: template.explanation
    });
  }
});

const fileContent = "export interface QuizQuestion {\n  id: number;\n  topic: string;\n  level: 'beginner' | 'intermediate' | 'advanced';\n  type: 'mcq' | 'yn';\n  q: string;\n  options: string[];\n  ans: number;\n  explanation: string;\n}\n\nexport const questionBank: QuizQuestion[] = " + JSON.stringify(questions, null, 2) + ";\n";

fs.writeFileSync('src/data/generated-questions.ts', fileContent);
console.log('Successfully generated 1000 questions in src/data/generated-questions.ts');
