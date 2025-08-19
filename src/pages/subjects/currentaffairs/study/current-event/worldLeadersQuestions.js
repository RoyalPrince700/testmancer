const questions = [
  {
    id: 1,
    text: "According to the text, what is a primary role of a world leader?",
    options: [
      { id: 'a', text: "Shaping global events", correct: true },
      { id: 'b', text: "Creating video games" },
      { id: 'c', text: "Running local libraries" },
      { id: 'd', text: "Organizing social clubs" }
    ],
    correctAnswer: "Shaping global events",
    explanation: "The text defines world leaders as heads of states and governments who 'shape global events.'",
    hint: "This role has a broad, international impact."
  },
  {
    id: 2,
    text: "Which of the following is NOT listed as a possible title for a world leader in the provided text?",
    options: [
      { id: 'a', text: "President" },
      { id: 'b', text: "King" , correct: true},
      { id: 'c', text: "Prime Minister" },
      { id: 'd', text: "Chancellor" }
    ],
    correctAnswer: "King",
    explanation: "The text mentions President, Prime Minister, Chancellor, and Monarch, but not the specific title of 'King.'",
    hint: "Think about the specific titles given in the 'Did you know?' section."
  },
  {
    id: 3,
    text: "What is the function of a world leader described as 'keeping the world calm'?",
    options: [
      { id: 'a', text: "Economic Policy" },
      { id: 'b', text: "Diplomacy", correct: true },
      { id: 'c', text: "Managing the money" },
      { id: 'd', text: "Public speaking" }
    ],
    correctAnswer: "Diplomacy",
    explanation: "The text defines Diplomacy as negotiating with other countries to maintain peace, which is described as 'Keeping the world calm.'",
    hint: "This is a key skill for international relations."
  },
  {
    id: 4,
    text: "The head of government in the United Kingdom is the:",
    options: [
      { id: 'a', text: "Chancellor" },
      { id: 'b', text: "Monarch" },
      { id: 'c', text: "Prime Minister", correct: true },
      { id: 'd', text: "President" }
    ],
    correctAnswer: "Prime Minister",
    explanation: "The text explicitly states that the Head of Government in the UK is the Prime Minister.",
    hint: "The UK also has a Head of State, but with limited political power."
  },
  {
    id: 5,
    text: "In the United States, the President is also the:",
    options: [
      { id: 'a', text: "Minister of Finance" },
      { id: 'b', text: "Head of Judiciary" },
      { id: 'c', text: "Commander-in-Chief of the armed forces", correct: true },
      { id: 'd', text: "Head of the Senate" }
    ],
    correctAnswer: "Commander-in-Chief of the armed forces",
    explanation: "The text's fun fact for the US President is that they are also the 'Commander-in-Chief of the armed forces.'",
    hint: "This role gives the President authority over the country's military."
  },
  {
    id: 6,
    text: "What is the title for the head of government in Germany?",
    options: [
      { id: 'a', text: "President" },
      { id: 'b', text: "Prime Minister" },
      { id: 'c', text: "Chancellor", correct: true },
      { id: 'd', text: "General Secretary" }
    ],
    correctAnswer: "Chancellor",
    explanation: "The text identifies the head of government in Germany as the Chancellor.",
    hint: "This leader is considered a very powerful person in the European Union."
  },
  {
    id: 7,
    text: "Which of the following is a function of a world leader related to 'Managing the money'?",
    options: [
      { id: 'a', text: "Diplomacy" },
      { id: 'b', text: "Economic Policy", correct: true },
      { id: 'c', text: "Military Strategy" },
      { id: 'd', text: "Social Welfare" }
    ],
    correctAnswer: "Economic Policy",
    explanation: "The text defines Economic Policy as making decisions that affect their country's wealth, with the description 'Managing the money.'",
    hint: "This role focuses on the financial well-being of the country."
  },
  {
    id: 8,
    text: "The leader of China is often referred to as the:",
    options: [
      { id: 'a', text: "Prime Minister or Emperor" },
      { id: 'b', text: "President or General Secretary", correct: true },
      { id: 'c', text: "King or Chancellor" },
      { id: 'd', text: "Chairman or Governor" }
    ],
    correctAnswer: "President or General Secretary",
    explanation: "The text states that the leader of China is often referred to as the 'President or General Secretary.'",
    hint: "The titles highlight this leader's high influence in global politics."
  },
  {
    id: 9,
    text: "In the United Kingdom, what is the role of the Monarch?",
    options: [
      { id: 'a', text: "Head of Government" },
      { id: 'b', text: "Commander-in-Chief" },
      { id: 'c', text: "Head of State with limited political power", correct: true },
      { id: 'd', text: "Leader of the Opposition" }
    ],
    correctAnswer: "Head of State with limited political power",
    explanation: "The text's fun fact about the UK notes that the monarch is the 'Head of State, but with limited political power.'",
    hint: "This is a ceremonial role."
  },
  {
    id: 10,
    text: "Which country's leader is described as being 'highly influential in global politics and trade'?",
    options: [
      { id: 'a', text: "United States" },
      { id: 'b', text: "South Africa" },
      { id: 'c', text: "France" },
      { id: 'd', text: "China", correct: true }
    ],
    correctAnswer: "China",
    explanation: "The text says China's leader 'is highly influential in global politics and trade.'",
    hint: "This country is represented by the 🐉 emoji in the document."
  },
  {
    id: 11,
    text: "What is a major function of a world leader according to the document's 'Diplomacy' section?",
    options: [
      { id: 'a', text: "Managing local markets" },
      { id: 'b', text: "Negotiating with other countries to maintain peace", correct: true },
      { id: 'c', text: "Supervising public transportation" },
      { id: 'd', text: "Building residential homes" }
    ],
    correctAnswer: "Negotiating with other countries to maintain peace",
    explanation: "The text defines Diplomacy as negotiating with other countries to maintain peace.",
    hint: "This function helps to prevent conflict and build international relationships."
  },
  {
    id: 12,
    text: "A leader who makes decisions affecting their country's wealth is performing what role?",
    options: [
      { id: 'a', text: "Military Planning" },
      { id: 'b', text: "Social Reforms" },
      { id: 'c', text: "Economic Policy", correct: true },
      { id: 'd', text: "Cultural Development" }
    ],
    correctAnswer: "Economic Policy",
    explanation: "The text defines Economic Policy as making decisions that affect a country's wealth.",
    hint: "This role is tied to the financial health of a nation."
  },
  {
    id: 13,
    text: "Which country has both a President and a Prime Minister, with the President holding a lot of power?",
    options: [
      { id: 'a', text: "Germany" },
      { id: 'b', text: "United Kingdom" },
      { id: 'c', text: "France", correct: true },
      { id: 'd', text: "South Africa" }
    ],
    correctAnswer: "France",
    explanation: "The text describes France as having a President and Prime Minister, and a 'semi-presidential' system where the President 'holds a lot of power.'",
    hint: "This country's system of government is described as 'semi-presidential.'"
  },
  {
    id: 14,
    text: "The text mentions that a key reason for a Post-UTME student to know about world leaders is to show they are aware of:",
    options: [
      { id: 'a', text: "Upcoming music festivals" },
      { id: 'b', text: "The world around you", correct: true },
      { id: 'c', text: "New movie releases" },
      { id: 'd', text: "The latest fashion trends" }
    ],
    correctAnswer: "The world around you",
    explanation: "The document states that knowing about world leaders shows you're 'aware of the world around you.'",
    hint: "The question refers to a broad sense of global awareness."
  },
  {
    id: 15,
    text: "What is the head of government called in South Africa?",
    options: [
      { id: 'a', text: "Prime Minister" },
      { id: 'b', text: "President", correct: true },
      { id: 'c', text: "Chancellor" },
      { id: 'd', text: "General Secretary" }
    ],
    correctAnswer: "President",
    explanation: "The text specifies that the head of government in South Africa is the President.",
    hint: "This country is a key player in the African economy."
  },
  {
    id: 16,
    text: "According to the 'Pro Tip' section, why is it important to stay updated on world leaders?",
    options: [
      { id: 'a', text: "Their titles never change" },
      { id: 'b', text: "They are always the same people" },
      { id: 'c', text: "They stay in power for life" },
      { id: 'd', text: "Who the leaders are changes often", correct: true }
    ],
    correctAnswer: "Who the leaders are changes often",
    explanation: "The 'Pro Tip' states, 'Who the leaders are changes often, so what's true today might not be tomorrow.'",
    hint: "This is why current affairs are important for this topic."
  },
  {
    id: 17,
    text: "The text describes world leaders as heads of states and governments who shape:",
    options: [
      { id: 'a', text: "National sports teams" },
      { id: 'b', text: "Global events", correct: true },
      { id: 'c', text: "School curriculum" },
      { id: 'd', text: "Local community projects" }
    ],
    correctAnswer: "Global events",
    explanation: "The first paragraph states that world leaders 'shape global events.'",
    hint: "This is a key part of the definition of a world leader."
  },
  {
    id: 18,
    text: "Which of the following describes the leadership structure in the United States?",
    options: [
      { id: 'a', text: "A President and a Prime Minister" },
      { id: 'b', text: "A monarch with a Chancellor" },
      { id: 'c', text: "A President who is also Commander-in-Chief", correct: true },
      { id: 'd', text: "A Chancellor and a General Secretary" }
    ],
    correctAnswer: "A President who is also Commander-in-Chief",
    explanation: "The text specifies the US leader's title is President, and a fun fact notes they are also the Commander-in-Chief.",
    hint: "The structure is focused on one single leader."
  },
  {
    id: 19,
    text: "The UK has a Head of Government with a lot of political power and a Monarch with limited power. What is the title of the powerful leader?",
    options: [
      { id: 'a', text: "Chancellor" },
      { id: 'b', text: "President" },
      { id: 'c', text: "Prime Minister", correct: true },
      { id: 'd', text: "General Secretary" }
    ],
    correctAnswer: "Prime Minister",
    explanation: "The text identifies the Prime Minister as the Head of Government in the UK, holding the primary political power.",
    hint: "The UK is a parliamentary democracy."
  },
  {
    id: 20,
    text: "The 'Economic Policy' function of a world leader involves making decisions that affect their country's:",
    options: [
      { id: 'a', text: "Population size" },
      { id: 'b', text: "Climate" },
      { id: 'c', text: "Wealth", correct: true },
      { id: 'd', text: "Geographic borders" }
    ],
    correctAnswer: "Wealth",
    explanation: "The text states that the Economic Policy skill is about making decisions that affect a country's 'wealth.'",
    hint: "This function is directly related to financial matters."
  },
  {
    id: 21,
    text: "Which country is described as having its leader be 'one of the most powerful people in the European Union'?",
    options: [
      { id: 'a', text: "France" },
      { id: 'b', text: "United Kingdom" },
      { id: 'c', text: "Germany", correct: true },
      { id: 'd', text: "China" }
    ],
    correctAnswer: "Germany",
    explanation: "The fun fact for Germany states that the Chancellor is 'often considered one of the most powerful people in the European Union.'",
    hint: "This country has a Chancellor as its head of government."
  },
  {
    id: 22,
    text: "The French government system is described as:",
    options: [
      { id: 'a', text: "A monarchy" },
      { id: 'b', text: "Semi-presidential", correct: true },
      { id: 'c', text: "A parliamentary republic" },
      { id: 'd', text: "A dictatorship" }
    ],
    correctAnswer: "Semi-presidential",
    explanation: "The text refers to France having a 'semi-presidential' system.",
    hint: "This term describes a government with both a president and a prime minister."
  },
  {
    id: 23,
    text: "What is the key difference between the Head of State and Head of Government, as implied by the UK's leadership structure?",
    options: [
      { id: 'a', text: "The Head of State is always the most powerful" },
      { id: 'b', text: "The Head of Government is ceremonial, while the Head of State is political" },
      { id: 'c', text: "The Head of State has limited political power, while the Head of Government holds the main political power", correct: true },
      { id: 'd', text: "They both have equal political power" }
    ],
    correctAnswer: "The Head of State has limited political power, while the Head of Government holds the main political power",
    explanation: "The text on the UK explains that the Monarch (Head of State) has 'limited political power,' while the Prime Minister (Head of Government) leads the country.",
    hint: "Consider the distinction between a ceremonial role and an active political role."
  },
  {
    id: 24,
    text: "Based on the text, what is a commonality between the United States and South Africa regarding their leadership titles?",
    options: [
      { id: 'a', text: "Both are led by a Prime Minister" },
      { id: 'b', text: "Both have a Chancellor" },
      { id: 'c', text: "Both are led by a President", correct: true },
      { id: 'd', text: "Both are led by a monarch" }
    ],
    correctAnswer: "Both are led by a President",
    explanation: "The text states the head of government is the 'President' in both the United States and South Africa.",
    hint: "Look for the specific titles mentioned for each country."
  },
  {
    id: 25,
    text: "The text's 'Pro Tip' suggests that staying informed about world leaders is similar to following:",
    options: [
      { id: 'a', text: "A popular music album" },
      { id: 'b', text: "Your favorite TV show", correct: true },
      { id: 'c', text: "A video game tournament" },
      { id: 'd', text: "A comic book series" }
    ],
    correctAnswer: "Your favorite TV show",
    explanation: "The Pro Tip encourages students to 'Follow the news like you follow your favorite TV show!'",
    hint: "The analogy is meant to make staying informed seem more engaging."
  },
  {
    id: 26,
    text: "The leader of China is also influential in what key area besides politics?",
    options: [
      { id: 'a', text: "The arts" },
      { id: 'b', text: "Technology" },
      { id: 'c', text: "Agriculture" },
      { id: 'd', text: "Global trade", correct: true }
    ],
    correctAnswer: "Global trade",
    explanation: "The text notes that China's leader is 'highly influential in global politics and trade.'",
    hint: "This is a major economic area."
  },
  {
    id: 27,
    text: "What does the text say a Chancellor is often considered to be in the European Union?",
    options: [
      { id: 'a', text: "The most junior official" },
      { id: 'b', text: "One of the most powerful people", correct: true },
      { id: 'c', text: "The ceremonial head" },
      { id: 'd', text: "A foreign minister" }
    ],
    correctAnswer: "One of the most powerful people",
    explanation: "The fun fact for Germany states the Chancellor is 'often considered one of the most powerful people in the European Union.'",
    hint: "This highlights the importance of this specific leadership role."
  },
  {
    id: 28,
    text: "Which of the following countries has a leader with a title that is not a President, Prime Minister, or Chancellor?",
    options: [
      { id: 'a', text: "United States" },
      { id: 'b', text: "United Kingdom" },
      { id: 'c', text: "Germany" },
      { id: 'd', text: "China", correct: true }
    ],
    correctAnswer: "China",
    explanation: "The text mentions the Chinese leader is also known as the General Secretary, which is not one of the other three titles.",
    hint: "Consider the dual titles mentioned for one of the countries."
  },
  {
    id: 29,
    text: "The text implies that a student's knowledge of world leaders is important for a Post-UTME exam because it demonstrates what?",
    options: [
      { id: 'a', text: "Their ability to memorize names" },
      { id: 'b', text: "Their awareness of the world around them", correct: true },
      { id: 'c', text: "Their interest in geography" },
      { id: 'd', text: "Their knowledge of historical battles" }
    ],
    correctAnswer: "Their awareness of the world around them",
    explanation: "The first paragraph of the document highlights that this knowledge shows you're 'aware of the world around you.'",
    hint: "This is about having a broader perspective beyond just local topics."
  },
  {
    id: 30,
    text: "Which country's leadership is described as being a key player in the African economy?",
    options: [
      { id: 'a', text: "Nigeria" },
      { id: 'b', text: "South Africa", correct: true },
      { id: 'c', text: "France" },
      { id: 'd', text: "China" }
    ],
    correctAnswer: "South Africa",
    explanation: "The text explicitly states that South Africa is 'a key player in the African economy.'",
    hint: "This country is located on the African continent."
  }
];

export default questions;