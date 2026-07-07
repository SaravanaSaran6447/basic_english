export const grammarData: Record<string, any> = {
  nouns: {
    id: "nouns",
    title: "Nouns",
    description: "A noun is a word that represents a person, place, thing, or idea. It is one of the foundational building blocks of English grammar.",
    sections: [
      {
        title: "Common and Proper Nouns",
        content: "Nouns are broadly classified into two categories based on specificity: Common and Proper.\n\n1. Common Nouns: These are general, non-specific words used to name a class of people, places, or things (e.g., 'city', 'dog', 'river'). They are not capitalized unless they start a sentence.\n2. Proper Nouns: These name a specific, one-of-a-kind individual, place, or entity (e.g., 'London', 'Snoopy', 'Amazon'). Proper nouns must ALWAYS begin with a capital letter, no matter where they appear in a sentence.",
        table: {
          headers: ["Type", "Definition", "Examples"],
          rows: [
            ["Common Noun", "General, non-specific people, places, things", "city, dog, writer, planet"],
            ["Proper Noun", "Specific, unique people, places, things", "London, Snoopy, Shakespeare, Mars"]
          ]
        },
        examples: [
          {
            sentence: "The boy crossed the river to get to London.",
            highlight: "boy, river, London",
            explanation: "'boy' and 'river' are common nouns. 'London' is a proper noun."
          },
          {
            sentence: "My favorite author is Jane Austen.",
            highlight: "author, Jane Austen",
            explanation: "'author' is a common noun, while 'Jane Austen' is a specific proper noun."
          }
        ],
        warning: "Always capitalize Proper Nouns regardless of where they appear in a sentence."
      },
      {
        title: "Singular and Plural Nouns",
        content: "Nouns change their form to indicate quantity.\n\n1. Singular Nouns: Refer to exactly one person, place, or thing (e.g., 'cat', 'bus').\n2. Plural Nouns: Refer to more than one. While most nouns become plural by simply adding '-s', many have special rules depending on their ending. Some nouns are completely irregular and change their spelling entirely (e.g., 'child' becomes 'children').",
        table: {
          headers: ["Rule", "Singular Example", "Plural Example"],
          rows: [
            ["Add -s to most nouns", "cat, book", "cats, books"],
            ["Add -es to nouns ending in s, x, z, ch, sh", "box, bus", "boxes, buses"],
            ["Change y to i and add -es", "city, baby", "cities, babies"],
            ["Irregular plurals", "child, mouse", "children, mice"]
          ]
        },
        examples: [
          {
            sentence: "The children were chasing the mice.",
            highlight: "children, mice",
            explanation: "Both are irregular plural nouns (singular: child, mouse)."
          },
          {
            sentence: "I bought three boxes of apples.",
            highlight: "boxes, apples",
            explanation: "'boxes' follows the '-es' rule for words ending in 'x'. 'apples' just takes an '-s'."
          }
        ]
      },
      {
        title: "Possessive Form of Nouns",
        content: "Possessive nouns show ownership or a direct relationship. This is typically indicated by an apostrophe.\n\n1. Singular Nouns: Add an apostrophe followed by an 's' ('s), even if the noun already ends in 's' (e.g., 'the boy\'s dog', 'James\'s car').\n2. Plural Nouns ending in 's': Add only an apostrophe after the 's' (e.g., 'the students\' books').\n3. Irregular Plural Nouns: If the plural doesn\'t end in 's', add an apostrophe and an 's' (e.g., 'the children\'s toys').",
        table: {
          headers: ["Noun Type", "Rule", "Example"],
          rows: [
            ["Singular Noun", "Add 's", "The boy's dog, Sarah's book"],
            ["Plural Noun (ends in s)", "Add only an apostrophe (')", "The dogs' bones, the teachers' lounge"],
            ["Irregular Plural Noun", "Add 's", "The children's toys, the men's room"]
          ]
        },
        examples: [
          {
            sentence: "James's car is parked outside the students' hostel.",
            highlight: "James's, students'",
            explanation: "'James' is singular so it takes 's. 'students' is plural ending in s, so it just takes an apostrophe."
          },
          {
            sentence: "We visited the women's clothing department.",
            highlight: "women's",
            explanation: "'women' is an irregular plural not ending in 's', so it takes an 's."
          }
        ]
      },
      {
        title: "Countable and Uncountable Nouns",
        content: "Nouns are also categorized by whether they can be quantified with numbers.\n\n1. Countable Nouns: Things you can physically count. They have both singular and plural forms, and you can use articles like 'a' or 'an' with them (e.g., 'one apple', 'three cars').\n2. Uncountable Nouns: Abstract concepts, liquids, or masses that cannot be counted individually. They do NOT have a plural form, and you cannot use 'a' or 'an' with them. Instead, you use quantifiers like 'some' or 'much' (e.g., 'water', 'information', 'advice').",
        table: {
          headers: ["Type", "Characteristics", "Examples"],
          rows: [
            ["Countable", "Can use a/an, has plural form", "apple/apples, car/cars"],
            ["Uncountable", "Cannot use a/an, no plural form", "water, information, furniture, advice"]
          ]
        },
        examples: [
          {
            sentence: "I need some information about the two cars.",
            highlight: "information, cars",
            explanation: "'information' is uncountable (no 's'). 'cars' is countable."
          },
          {
            sentence: "She bought a lot of new furniture.",
            highlight: "furniture",
            explanation: "Furniture is an uncountable mass noun in English, so we never say 'furnitures'."
          }
        ],
        warning: "Never say 'informations', 'furnitures', or 'advices'. These are strictly uncountable."
      }
    ]
  },
  pronouns: {
    id: "pronouns",
    title: "Pronouns",
    description: "Pronouns are words used in place of nouns to avoid repetition. They make sentences less clunky and more natural.",
    sections: [
      {
        title: "Subject and Object Pronouns",
        content: "Personal pronouns change form depending on whether they are doing the action or receiving it.\n\n1. Subject Pronouns: These perform the action of the sentence. They are the 'doers' (I, you, he, she, it, we, they).\n2. Object Pronouns: These receive the action of the sentence. They are the 'receivers' (me, you, him, her, it, us, them).",
        table: {
          headers: ["Person", "Subject Pronoun", "Object Pronoun"],
          rows: [
            ["1st Person Singular", "I", "me"],
            ["2nd Person", "you", "you"],
            ["3rd Person Singular", "he, she, it", "him, her, it"],
            ["1st Person Plural", "we", "us"],
            ["3rd Person Plural", "they", "them"]
          ]
        },
        examples: [
          {
            sentence: "She gave the book to him.",
            highlight: "She, him",
            explanation: "'She' is the subject performing the action. 'him' is the object receiving the book."
          },
          {
            sentence: "They invited us to dinner.",
            highlight: "They, us",
            explanation: "'They' is the subject doing the inviting, 'us' is the object being invited."
          }
        ]
      },
      {
        title: "Reflexive Pronouns (self)",
        content: "Reflexive pronouns are used when the subject and the object of the verb are the same entity. They reflect the action back onto the subject.\n\nThey always end in '-self' (singular) or '-selves' (plural). Never use them as subjects of a sentence.",
        table: {
          headers: ["Subject", "Reflexive Pronoun"],
          rows: [
            ["I / You", "myself / yourself"],
            ["He / She / It", "himself / herself / itself"],
            ["We / You (plural) / They", "ourselves / yourselves / themselves"]
          ]
        },
        examples: [
          {
            sentence: "I accidentally cut myself with the knife.",
            highlight: "myself",
            explanation: "The subject 'I' and the object 'myself' are the same person."
          },
          {
            sentence: "They taught themselves how to code.",
            highlight: "themselves",
            explanation: "The subject 'They' performed the action upon 'themselves'."
          }
        ]
      },
      {
        title: "Demonstrative Pronouns",
        content: "Demonstrative pronouns are used to point out specific people or things, indicating their physical or abstract distance from the speaker.\n\n1. Near (Here): Use 'this' for singular items and 'these' for plural items.\n2. Far (There): Use 'that' for singular items and 'those' for plural items.",
        table: {
          headers: ["Distance", "Singular", "Plural"],
          rows: [
            ["Near (Here)", "this", "these"],
            ["Far (There)", "that", "those"]
          ]
        },
        examples: [
          {
            sentence: "These are my shoes, and those are yours.",
            highlight: "These, those",
            explanation: "'These' points to shoes nearby. 'Those' points to shoes further away."
          },
          {
            sentence: "This is a great idea!",
            highlight: "This",
            explanation: "Refers to a singular, immediate abstract concept."
          }
        ]
      },
      {
        title: "Possessive Pronouns",
        content: "Possessive pronouns show ownership. Unlike possessive adjectives (like 'my' or 'your'), possessive pronouns stand alone and replace the noun entirely.\n\nThe possessive pronouns are: mine, yours, his, hers, ours, theirs. Note that there are NO apostrophes in possessive pronouns.",
        examples: [
          {
            sentence: "This laptop is mine, not yours.",
            highlight: "mine, yours",
            explanation: "Replaces the phrases 'my laptop' and 'your laptop'."
          },
          {
            sentence: "The victory is completely ours.",
            highlight: "ours",
            explanation: "Replaces 'our victory' and stands alone at the end of the clause."
          }
        ],
        warning: "Never use an apostrophe in 'yours', 'hers', 'ours', or 'theirs'."
      },
      {
        title: "Interrogative Pronouns",
        content: "Interrogative pronouns are used specifically to ask questions.\n\n1. Who / Whom: Used for asking about people.\n2. Whose: Used for asking about ownership.\n3. What: Used for asking about things.\n4. Which: Used for asking about a choice from a specific set.",
        examples: [
          {
            sentence: "Whose jacket is this?",
            highlight: "Whose",
            explanation: "An interrogative pronoun asking about ownership."
          },
          {
            sentence: "Which of these routes is the fastest?",
            highlight: "Which",
            explanation: "Asking to select one option from a known set of routes."
          }
        ]
      }
    ]
  },
  adjectives: {
    id: "adjectives",
    title: "Adjectives",
    description: "Adjectives are words that describe or modify another person or thing in the sentence, providing more color and detail.",
    sections: [
      {
        title: "What are Adjectives?",
        content: "Adjectives are descriptive words. They provide more detail about a noun, answering questions like: What kind? Which one? How many?\n\nThey can describe size, shape, age, color, origin, or material. In English, adjectives almost always come BEFORE the noun they modify, or AFTER a linking verb (like 'is' or 'seems').",
        examples: [
          {
            sentence: "The tall man drove a red car.",
            highlight: "tall, red",
            explanation: "'tall' describes the man, and 'red' describes the car."
          },
          {
            sentence: "The weather became extremely cold.",
            highlight: "cold",
            explanation: "'cold' modifies the noun 'weather', connected by the linking verb 'became'."
          }
        ]
      },
      {
        title: "Degrees of Comparison",
        content: "Adjectives change their form to compare two or more things. There are three degrees of comparison: Positive, Comparative, and Superlative. \n\n1. Positive Degree: The base form of the adjective. It is used when no comparison is made, simply describing the existence of a quality (e.g., 'tall').\n2. Comparative Degree: Used to compare exactly two things. It shows a higher degree of the quality than the positive. It is formed by adding '-er' to short adjectives or 'more' before long adjectives (e.g., 'taller', 'more beautiful'). It is usually followed by the word 'than'.\n3. Superlative Degree: Used to compare three or more things. It shows the highest degree of the quality. It is formed by adding '-est' to short adjectives or 'most' before long adjectives (e.g., 'tallest', 'most beautiful'). It is usually preceded by the word 'the'.\n\nNote that some adjectives are irregular and change their spelling completely (e.g., 'good' -> 'better' -> 'best').",
        table: {
          headers: ["Degree", "Usage", "Examples"],
          rows: [
            ["Positive", "Base form", "tall, beautiful, good"],
            ["Comparative", "Comparing two things", "taller, more beautiful, better"],
            ["Superlative", "Comparing three or more", "tallest, most beautiful, best"]
          ]
        },
        examples: [
          {
            sentence: "She is a smart student.",
            highlight: "smart",
            explanation: "Positive degree, simply describing the student without comparison."
          },
          {
            sentence: "She is smarter than her brother.",
            highlight: "smarter",
            explanation: "Comparative degree comparing two people (she and her brother)."
          },
          {
            sentence: "She is the smartest student in the class.",
            highlight: "smartest",
            explanation: "Superlative degree comparing one to the whole class."
          }
        ],
        warning: "Do not use double comparatives (e.g., 'more taller')."
      }
    ]
  },
  articles: {
    id: "articles",
    title: "Articles",
    description: "Articles are special modifiers that appear before nouns to clarify their specificity.",
    sections: [
      {
        title: "What is an Article?",
        content: "Articles define whether a noun is specific or unspecific. There are two types in English:\n\n1. Indefinite Articles (a/an): Used for non-specific things, or when mentioning something for the first time. Use 'a' before words starting with a consonant sound. Use 'an' before words starting with a vowel sound.\n2. Definite Article (the): Used for specific, known, or unique things. You use 'the' when both the speaker and listener know exactly which item is being referred to.",
        table: {
          headers: ["Type", "Words", "When to use"],
          rows: [
            ["Indefinite", "a, an", "General nouns. 'a' before consonant sounds, 'an' before vowel sounds."],
            ["Definite", "the", "Specific, known, or unique nouns."]
          ]
        },
        examples: [
          {
            sentence: "I saw an elephant at the zoo.",
            highlight: "an, the",
            explanation: "'an' is used because 'elephant' starts with a vowel sound. 'the' is used because they are referring to a specific zoo."
          },
          {
            sentence: "Could you pass me a pen? Any pen will do.",
            highlight: "a",
            explanation: "Indefinite article used because the specific pen doesn't matter."
          }
        ]
      }
    ]
  },
  verbs: {
    id: "verbs",
    title: "Verbs & Tenses",
    description: "Verbs are the engine of a sentence. They express actions, states of being, or occurrences.",
    sections: [
      {
        title: "Auxiliary Verbs (be form, have form, do form)",
        content: "Auxiliary verbs (also known as helping verbs) are used together with a main verb to show the verb's tense or to form a negative or question.\n\n1. 'Be' form (am, is, are, was, were): Used to create continuous tenses.\n2. 'Have' form (have, has, had): Used to create perfect tenses.\n3. 'Do' form (do, does, did): Used to create questions, negatives, or for emphasis in simple tenses.",
        table: {
          headers: ["Form", "Present", "Past"],
          rows: [
            ["Be form", "am, is, are", "was, were"],
            ["Have form", "has, have", "had"],
            ["Do form", "do, does", "did"]
          ]
        },
        examples: [
          {
            sentence: "She is writing a letter. I do not know him.",
            highlight: "is, do",
            explanation: "'is' helps form the continuous tense. 'do' helps form the negative."
          },
          {
            sentence: "They have already eaten dinner.",
            highlight: "have",
            explanation: "'have' is used as an auxiliary to form the present perfect tense."
          }
        ]
      },
      {
        title: "Contractions",
        content: "Contractions are shortened forms of verbs, primarily used in spoken or informal English. They are created by combining a pronoun and a verb, or a verb and 'not', and replacing the missing letters with an apostrophe.",
        table: {
          headers: ["Full Form", "Contraction"],
          rows: [
            ["I am / You are", "I'm / You're"],
            ["Do not / Does not", "Don't / Doesn't"],
            ["Will not / Cannot", "Won't / Can't"]
          ]
        },
        examples: [
          {
            sentence: "I won't be able to make it to the party.",
            highlight: "won't",
            explanation: "Contraction of 'will not'."
          },
          {
            sentence: "She doesn't like spicy food.",
            highlight: "doesn't",
            explanation: "Contraction of 'does not'."
          }
        ]
      },
      {
        title: "List of Verbs & Main Verbs (Action Verbs)",
        content: "Main verbs (Action verbs) carry the core meaning of the sentence. They express physical or mental actions that a subject performs (e.g., run, think, jump, sleep, decide).\n\nUnlike auxiliary verbs, they can stand alone in a sentence.",
        examples: [
          {
            sentence: "The dog runs quickly across the field.",
            highlight: "runs",
            explanation: "A physical action performed by the dog."
          },
          {
            sentence: "I strongly believe in your potential.",
            highlight: "believe",
            explanation: "A mental action or state."
          }
        ]
      },
      {
        title: "Simple Present Tense",
        content: "The simple present tense is used to describe facts, universal truths, habits, and fixed schedules. \n\nFor third-person singular subjects (he, she, it), you must add an '-s' or '-es' to the base verb.",
        examples: [
          {
            sentence: "The sun rises in the east.",
            highlight: "rises",
            explanation: "A universal truth that happens every day."
          },
          {
            sentence: "He always drinks coffee at 8 AM.",
            highlight: "drinks",
            explanation: "A regular habit, taking an '-s' because the subject is 'He'."
          }
        ]
      },
      {
        title: "Present Continuous Tense",
        content: "The present continuous tense is used for actions that are happening right now, at this exact moment, or around the current time. \n\nIt is formed using the 'be' auxiliary (am/is/are) + the main verb ending in '-ing'.",
        examples: [
          {
            sentence: "I am studying English grammar right now.",
            highlight: "am studying",
            explanation: "An action in progress at the time of speaking."
          },
          {
            sentence: "They are building a new hospital downtown.",
            highlight: "are building",
            explanation: "A temporary ongoing action around the current time."
          }
        ]
      },
      {
        title: "Simple Past Tense",
        content: "The simple past tense is used to describe completed actions that happened at a specific time in the past.\n\nRegular verbs add '-ed' to the base form, while irregular verbs change completely (e.g., 'go' becomes 'went').",
        examples: [
          {
            sentence: "I visited Paris last year.",
            highlight: "visited",
            explanation: "A completed action at a specific past time ('last year')."
          },
          {
            sentence: "She bought a new car yesterday.",
            highlight: "bought",
            explanation: "An irregular verb ('buy' -> 'bought') indicating a completed action."
          }
        ]
      },
      {
        title: "Past Continuous Tense",
        content: "The past continuous tense is used to describe an action that was in progress at a specific moment in the past. It is often used to set the scene or to show an action that was interrupted by a shorter action.\n\nIt is formed using (was/were) + the main verb ending in '-ing'.",
        examples: [
          {
            sentence: "I was sleeping peacefully when the fire alarm rang.",
            highlight: "was sleeping",
            explanation: "An ongoing past action interrupted by another sudden past action ('rang')."
          },
          {
            sentence: "They were playing soccer all afternoon.",
            highlight: "were playing",
            explanation: "An action in progress over a period of time in the past."
          }
        ]
      },
      {
        title: "Simple Future Tense",
        content: "The simple future tense is used to express promises, predictions, spontaneous decisions, or future facts.\n\nIt is most commonly formed using 'will' + the base form of the verb.",
        examples: [
          {
            sentence: "I will call you tomorrow morning.",
            highlight: "will call",
            explanation: "A promise or intent for the future."
          },
          {
            sentence: "I think it will rain later today.",
            highlight: "will rain",
            explanation: "A prediction about the future."
          }
        ]
      }
    ]
  },
  adverbs: {
    id: "adverbs",
    title: "Adverbs",
    description: "Adverbs are words that modify verbs, adjectives, or other adverbs. They tell us how, when, where, how often, or to what degree an action occurs.",
    sections: [
      {
        title: "Adverbs of Time",
        content: "Adverbs of time tell us WHEN an action happens or happened.\n\nCommon examples include: yesterday, today, now, later, tomorrow, soon, recently.",
        examples: [
          {
            sentence: "I will finish my homework later.",
            highlight: "later",
            explanation: "Indicates when the finishing will happen."
          },
          {
            sentence: "We recently moved to a new city.",
            highlight: "recently",
            explanation: "Modifies 'moved' to indicate a timeframe."
          }
        ]
      },
      {
        title: "Adverbs of Manner",
        content: "Adverbs of manner tell us HOW an action is performed. They often end in '-ly', though there are exceptions.\n\nCommon examples include: quickly, carefully, well, slowly, loudly, silently.",
        examples: [
          {
            sentence: "She drove very carefully through the snow.",
            highlight: "carefully",
            explanation: "Describes how she drove."
          },
          {
            sentence: "He plays the piano remarkably well.",
            highlight: "well",
            explanation: "'Well' is an irregular adverb of manner (from the adjective 'good')."
          }
        ]
      },
      {
        title: "Adverbs of Place",
        content: "Adverbs of place tell us WHERE an action happens.\n\nCommon examples include: here, there, everywhere, outside, inside, nearby, away.",
        examples: [
          {
            sentence: "Please leave the package outside.",
            highlight: "outside",
            explanation: "Describes where to leave the package."
          },
          {
            sentence: "I looked everywhere for my lost keys.",
            highlight: "everywhere",
            explanation: "Describes the spatial scope of the looking."
          }
        ]
      },
      {
        title: "Adverbs of Frequency",
        content: "Adverbs of frequency tell us HOW OFTEN an action occurs. They usually sit before the main verb, but after the verb 'to be'.\n\nCommon examples include: always, never, sometimes, usually, rarely, frequently.",
        examples: [
          {
            sentence: "I usually drink coffee in the morning.",
            highlight: "usually",
            explanation: "Describes the frequency of the action, sitting before the verb 'drink'."
          },
          {
            sentence: "He is always late for meetings.",
            highlight: "always",
            explanation: "Describes frequency, sitting after the 'to be' verb 'is'."
          }
        ]
      },
      {
        title: "Adverbs of Duration",
        content: "Adverbs of duration tell us HOW LONG an action lasts or continues.\n\nCommon examples include: briefly, forever, temporarily, shortly, permanently.",
        examples: [
          {
            sentence: "We waited briefly before going in.",
            highlight: "briefly",
            explanation: "Describes the duration of the wait."
          },
          {
            sentence: "The store is temporarily closed.",
            highlight: "temporarily",
            explanation: "Describes how long the closure will last."
          }
        ]
      }
    ]
  },
  prepositions: {
    id: "prepositions",
    title: "Prepositions",
    description: "Prepositions show the relationship between a noun (or pronoun) and another word in the sentence, typically denoting location, time, or direction.",
    sections: [
      {
        title: "Prepositions of Place and Time (In, On, At, Above, Below, over, under)",
        content: "These prepositions tell us where something is located or when an event occurs.\n\n- In: Used for enclosed spaces (in a box, in a city) and longer periods of time (in 2023, in May).\n- On: Used for surfaces (on the table, on the wall) and specific days/dates (on Monday, on July 4th).\n- At: Used for specific points in space (at the door, at the station) and exact clock times (at 5 PM).\n- Above/Over: Higher than something else.\n- Below/Under: Lower than something else.",
        table: {
          headers: ["Preposition", "Usage (Time)", "Usage (Place)"],
          rows: [
            ["In", "Months, Years (In 2023)", "Enclosed spaces (In the box)"],
            ["On", "Days (On Monday)", "Surfaces (On the table)"],
            ["At", "Exact times (At 5 PM)", "Specific points (At the door)"]
          ]
        },
        examples: [
          {
            sentence: "The picture hangs above the fireplace.",
            highlight: "above",
            explanation: "Preposition of place showing vertical relationship."
          },
          {
            sentence: "Our meeting is scheduled at 3 PM on Monday.",
            highlight: "at, on",
            explanation: "'At' is used for the specific time, 'on' is used for the specific day."
          }
        ]
      },
      {
        title: "Prepositions of Direction (from, to, towards)",
        content: "Prepositions of direction indicate movement towards a goal, destination, or origin.\n\n- To: Denotes a specific destination.\n- Towards: Denotes a general direction without necessarily implying arrival.\n- From: Denotes the starting point or origin of movement.",
        examples: [
          {
            sentence: "She walked towards the park.",
            highlight: "towards",
            explanation: "Indicates the general direction of walking, but not necessarily that she arrived inside."
          },
          {
            sentence: "We drove from New York to Boston.",
            highlight: "from, to",
            explanation: "'From' shows the origin, 'to' shows the exact destination."
          }
        ]
      },
      {
        title: "Prepositions of Movement (up, down, across, between, behind, beside)",
        content: "Prepositions of movement describe motion through physical space, or a relationship in physical space.\n\n- Across: Movement from one side to the other.\n- Through: Movement entering one side and exiting another.\n- Beside/Behind/Between: Define physical relationships between objects.",
        examples: [
          {
            sentence: "The dog ran across the busy street.",
            highlight: "across",
            explanation: "Indicates movement from one side of the street to the other."
          },
          {
            sentence: "He stood between his two best friends.",
            highlight: "between",
            explanation: "Indicates position surrounded by two distinct entities."
          }
        ]
      }
    ]
  },
  modals: {
    id: "modals",
    title: "Modal Auxiliaries",
    description: "Modal verbs are a special type of auxiliary verb used to express ability, permission, obligation, necessity, or possibility. They never change form and are always followed by the base form of the main verb.",
    sections: [
      {
        title: "Can and Could",
        content: "These modals are primarily used to express ability or to ask for permission.\n\n- Can: Used for present ability or informal permission.\n- Could: Used for past ability, or for highly polite and formal requests in the present.",
        examples: [
          {
            sentence: "I can swim across the entire lake.",
            highlight: "can",
            explanation: "'Can' expresses physical ability."
          },
          {
            sentence: "Could you please pass the salt?",
            highlight: "Could",
            explanation: "'Could' is used here to make a polite, formal request."
          }
        ]
      },
      {
        title: "May and Might",
        content: "These modals are used to express possibility or permission.\n\n- May: Expresses formal permission or a strong possibility.\n- Might: Expresses a weaker, more doubtful possibility.",
        examples: [
          {
            sentence: "It may rain today, but it might just be cloudy.",
            highlight: "may, might",
            explanation: "'May' suggests it's quite likely, while 'might' suggests a smaller chance."
          },
          {
            sentence: "May I be excused from the table?",
            highlight: "May",
            explanation: "Asking for formal permission."
          }
        ]
      },
      {
        title: "Will and Would",
        content: "These modals are used to express future intent, habits, or hypothetical situations.\n\n- Will: Expresses strong future intent, promises, or certain predictions.\n- Would: Used to talk about past habits, hypothetical situations (conditionals), or extremely polite offers.",
        examples: [
          {
            sentence: "I will submit the report by tomorrow.",
            highlight: "will",
            explanation: "Expresses a promise or certain future action."
          },
          {
            sentence: "Would you like a cup of tea?",
            highlight: "Would",
            explanation: "Used to make a polite offer."
          }
        ]
      },
      {
        title: "Should and Must",
        content: "These modals express varying degrees of obligation.\n\n- Should: Used to give advice or a recommendation. It implies that something is a good idea, but not strictly mandatory.\n- Must: Expresses strong, absolute obligation, necessity, or a strict rule. It is non-negotiable.",
        examples: [
          {
            sentence: "You should get some rest before the exam.",
            highlight: "should",
            explanation: "Giving a strong recommendation or advice."
          },
          {
            sentence: "Passengers must wear their seatbelts during takeoff.",
            highlight: "must",
            explanation: "Expressing a strict rule or legal obligation."
          }
        ]
      }
    ]
  },
  conjunctions: {
    id: "conjunctions",
    title: "Conjunctions",
    description: "Conjunctions are the glue of English grammar. They link words, phrases, or entirely independent clauses together to form complex sentences.",
    sections: [
      {
        title: "And, but, or",
        content: "These are 'Coordinating Conjunctions'. They connect words, phrases, or clauses that are of equal grammatical rank.\n\n- And: Adds information together.\n- But: Shows contrast or contradiction.\n- Or: Presents alternatives or a choice.",
        examples: [
          {
            sentence: "I like tea and coffee, but I don't like soda.",
            highlight: "and, but",
            explanation: "'and' links two similar items (tea, coffee). 'but' introduces a contrast."
          },
          {
            sentence: "You can have cake or ice cream for dessert.",
            highlight: "or",
            explanation: "Presents a choice between two alternatives."
          }
        ]
      },
      {
        title: "Because, so, as",
        content: "These conjunctions are used to show the relationship of cause and effect, or reason and result.\n\n- Because/As: Introduce the cause or reason.\n- So: Introduces the effect or result.",
        examples: [
          {
            sentence: "I stayed home because it was raining heavily.",
            highlight: "because",
            explanation: "Introduces the reason for staying home."
          },
          {
            sentence: "It was raining heavily, so I stayed home.",
            highlight: "so",
            explanation: "Introduces the result of the heavy rain."
          }
        ]
      },
      {
        title: "After and before",
        content: "These conjunctions establish a sequence of events in time, clarifying what happened first.",
        examples: [
          {
            sentence: "Wash your hands before you eat, and relax after you finish.",
            highlight: "before, after",
            explanation: "Clearly establishes the timeline of events."
          }
        ]
      }
    ]
  },
  reading: {
    id: "reading",
    title: "Reading Comprehension",
    description: "Reading comprehension is the ability to read text, process it, and deeply understand its meaning, both explicit and implicit.",
    sections: [
      {
        title: "Exercises (Skimming & Scanning)",
        content: "Effective reading requires mastering different techniques depending on your goal:\n\n1. Skimming: Reading rapidly across the text to get a general overview or the 'gist' of the passage without reading every single word.\n2. Scanning: Moving your eyes quickly down the page seeking specific words, dates, facts, or figures.",
        table: {
          headers: ["Technique", "Purpose"],
          rows: [
            ["Skimming", "Reading rapidly to get a general overview."],
            ["Scanning", "Reading rapidly to find specific facts or keywords."]
          ]
        },
        examples: [
          {
            sentence: "When looking for a specific phone number in a directory, you use scanning.",
            highlight: "scanning",
            explanation: "You are hunting for specific data, not trying to understand a narrative."
          }
        ]
      },
      {
        title: "Assessment (Inferencing)",
        content: "Higher-level comprehension involves reading between the lines to understand things the author implies but does not explicitly state. This is called inferencing.",
        examples: [
          {
            sentence: "If a character walks in shaking snow off their coat, you can infer it is winter.",
            highlight: "infer",
            explanation: "The text doesn't say 'it is winter', but you deduce it using context clues."
          }
        ]
      }
    ]
  }
};
