const questions = [
  {
    id: 1,
    text: "According to the text, what is the primary purpose of political parties?",
    options: [
      { id: 'a', text: "To create a national holiday" },
      { id: 'b', text: "To win elections and form the government", correct: true },
      { id: 'c', text: "To provide social services" },
      { id: 'd', text: "To run charity organizations" }
    ],
    correctAnswer: "To win elections and form the government",
    explanation: "The text states that political parties aim 'to win and form the government.'",
    hint: "Think about the goal of any team competing for power."
  },
  {
    id: 2,
    text: "Which of the following is described as a key function of a political party in a democracy?",
    options: [
      { id: 'a', text: "Organizing sporting events" },
      { id: 'b', text: "Running a business enterprise" },
      { id: 'c', text: "Mobilizing voters", correct: true },
      { id: 'd', text: "Writing academic papers" }
    ],
    correctAnswer: "Mobilizing voters",
    explanation: "The text lists 'Mobilizing Voters' as a function, which involves encouraging people to register and vote.",
    hint: "This function helps to increase participation in the democratic process."
  },
  {
    id: 3,
    text: "In the First Republic (1960-1966), which political party was led by Obafemi Awolowo?",
    options: [
      { id: 'a', text: "National Council of Nigeria and the Cameroons (NCNC)" },
      { id: 'b', text: "Northern People’s Congress (NPC)" },
      { id: 'c', text: "Action Group (AG)", correct: true },
      { id: 'd', text: "National Party of Nigeria (NPN)" }
    ],
    correctAnswer: "Action Group (AG)",
    explanation: "The historical section specifies that the Action Group (AG) was led by Obafemi Awolowo during the First Republic.",
    hint: "This party was one of the major players during Nigeria's early post-independence era."
  },
  {
    id: 4,
    text: "The text likens political parties to 'football clubs in the EPL.' What is the 'trophy' they are playing for?",
    options: [
      { id: 'a', text: "The House of Representatives" },
      { id: 'b', text: "The Senate" },
      { id: 'c', text: "Aso Rock", correct: true },
      { id: 'd', text: "The National Assembly" }
    ],
    correctAnswer: "Aso Rock",
    explanation: "The Pro Tip compares parties to football clubs playing for 'Aso Rock,' which represents the presidential office.",
    hint: "This is a colloquial name for the seat of the Nigerian presidency."
  },
  {
    id: 5,
    text: "What is a key function of the losing political party, according to the document?",
    options: [
      { id: 'a', text: "They get disbanded" },
      { id: 'b', text: "They provide opposition and keep the ruling party in check", correct: true },
      { id: 'c', text: "They form a coalition government" },
      { id: 'd', text: "They are absorbed by the winning party" }
    ],
    correctAnswer: "They provide opposition and keep the ruling party in check",
    explanation: "The text states that a key function is 'Providing Opposition,' where the losing party 'keeps the ruling party in check.'",
    hint: "This role is often referred to as the 'shadow government.'"
  },
  {
    id: 6,
    text: "Which of the following is a function of a political party related to developing plans and ideas for government?",
    options: [
      { id: 'a', text: "Providing Opposition" },
      { id: 'b', text: "Mobilizing Voters" },
      { id: 'c', text: "Formulating Policies", correct: true },
      { id: 'd', text: "Recruiting Candidates" }
    ],
    correctAnswer: "Formulating Policies",
    explanation: "The text describes 'Formulating Policies' as developing 'plans and ideas for how to run the government.'",
    hint: "This is a key intellectual function of the party."
  },
  {
    id: 7,
    text: "In the Second Republic (1979-1983), who was the leader of the National Party of Nigeria (NPN)?",
    options: [
      { id: 'a', text: "Nnamdi Azikiwe" },
      { id: 'b', text: "Tafawa Balewa" },
      { id: 'c', text: "Obafemi Awolowo" },
      { id: 'd', text: "Shehu Shagari", correct: true }
    ],
    correctAnswer: "Shehu Shagari",
    explanation: "The historical section lists the NPN as being led by Shehu Shagari.",
    hint: "This individual was a key leader during the Second Republic."
  },
  {
    id: 8,
    text: "Which party ruled Nigeria for 16 years in the Fourth Republic (1999 - Present)?",
    options: [
      { id: 'a', text: "All Progressives Congress (APC)" },
      { id: 'b', text: "National Party of Nigeria (NPN)" },
      { id: 'c', text: "Peoples Democratic Party (PDP)", correct: true },
      { id: 'd', text: "Action Group (AG)" }
    ],
    correctAnswer: "Peoples Democratic Party (PDP)",
    explanation: "The text states that the PDP 'Ruled for 16 years' in the Fourth Republic.",
    hint: "This party was in power for a significant period after the return to democracy."
  },
  {
    id: 9,
    text: "What is the name of the current ruling party in Nigeria's Fourth Republic?",
    options: [
      { id: 'a', text: "Peoples Democratic Party (PDP)" },
      { id: 'b', text: "National Party of Nigeria (NPN)" },
      { id: 'c', text: "All Progressives Congress (APC)", correct: true },
      { id: 'd', text: "Action Group (AG)" }
    ],
    correctAnswer: "All Progressives Congress (APC)",
    explanation: "The text identifies the APC as 'The current ruling party.'",
    hint: "This party came to power after the 16-year rule of its predecessor."
  },
  {
    id: 10,
    text: "What is a major characteristic of Nigeria's multi-party system?",
    options: [
      { id: 'a', text: "Only two parties dominate politics" },
      { id: 'b', text: "It offers less choice for voters" },
      { id: 'c', text: "It can make it hard to get a clear majority", correct: true },
      { id: 'd', text: "Only one party is allowed to exist" }
    ],
    correctAnswer: "It can make it hard to get a clear majority",
    explanation: "The text notes that a multi-party system 'can sometimes make it hard to get a clear majority.'",
    hint: "This is a potential disadvantage of having multiple competing parties."
  },
  {
    id: 11,
    text: "Who led the Northern People’s Congress (NPC) during the First Republic?",
    options: [
      { id: 'a', text: "Nnamdi Azikiwe" },
      { id: 'b', text: "Tafawa Balewa", correct: true },
      { id: 'c', text: "Obafemi Awolowo" },
      { id: 'd', text: "Shehu Shagari" }
    ],
    correctAnswer: "Tafawa Balewa",
    explanation: "The text identifies Tafawa Balewa as the leader of the NPC in the First Republic.",
    hint: "This leader was a prominent figure from the northern part of Nigeria."
  },
  {
    id: 12,
    text: "What type of party system is characterized by the dominance of only two major parties?",
    options: [
      { id: 'a', text: "One-Party System" },
      { id: 'b', text: "Two-Party System", correct: true },
      { id: 'c', text: "Multi-Party System" },
      { id: 'd', text: "Zero-Party System" }
    ],
    correctAnswer: "Two-Party System",
    explanation: "The text states that in a two-party system, 'Only two major parties dominate politics.'",
    hint: "Think of the number of dominant parties in this system."
  },
  {
    id: 13,
    text: "The function of political parties to find and prepare people to run for office is known as:",
    options: [
      { id: 'a', text: "Providing Opposition" },
      { id: 'b', text: "Public Education" },
      { id: 'c', text: "Formulating Policies" },
      { id: 'd', text: "Recruiting and Training Candidates", correct: true }
    ],
    correctAnswer: "Recruiting and Training Candidates",
    explanation: "The text defines this function as finding and preparing people 'to run for office.'",
    hint: "This is the initial step for a party to field its representatives."
  },
  {
    id: 14,
    text: "Who led the National Council of Nigeria and the Cameroons (NCNC) in the First Republic?",
    options: [
      { id: 'a', text: "Tafawa Balewa" },
      { id: 'b', text: "Obafemi Awolowo" },
      { id: 'c', text: "Nnamdi Azikiwe", correct: true },
      { id: 'd', text: "Shehu Shagari" }
    ],
    correctAnswer: "Nnamdi Azikiwe",
    explanation: "The text mentions Nnamdi Azikiwe as the leader of the NCNC.",
    hint: "This leader was a key figure in Nigeria's independence movement."
  },
  {
    id: 15,
    text: "Which party system is what Nigeria currently has?",
    options: [
      { id: 'a', text: "A two-party system" },
      { id: 'b', text: "A one-party system" },
      { id: 'c', text: "A multi-party system", correct: true },
      { id: 'd', text: "A no-party system" }
    ],
    correctAnswer: "A multi-party system",
    explanation: "The text states, 'This is what Nigeria has! 🌍 Multiple parties exist and compete for power.'",
    hint: "Think about the number of prominent parties in Nigeria."
  },
  {
    id: 16,
    text: "The function of a political party to inform citizens about their policies is called:",
    options: [
      { id: 'a', text: "Public Education", correct: true },
      { id: 'b', text: "Unity & Mobilization" },
      { id: 'c', text: "Providing Opposition" },
      { id: 'd', text: "Recruiting Candidates" }
    ],
    correctAnswer: "Public Education",
    explanation: "The text defines this as 'inform citizens about their policies.'",
    hint: "This function helps the public understand the party's platform."
  },
  {
    id: 17,
    text: "Which of the following is NOT a function of political parties mentioned in the document?",
    options: [
      { id: 'a', text: "Recruiting and training candidates" },
      { id: 'b', text: "Formulating policies" },
      { id: 'c', text: "Appointing judges to the Supreme Court", correct: true },
      { id: 'd', text: "Mobilizing voters" }
    ],
    correctAnswer: "Appointing judges to the Supreme Court",
    explanation: "The text lists recruiting candidates, formulating policies, and mobilizing voters as functions, but not appointing judges.",
    hint: "This function is typically handled by a different branch of government."
  },
  {
    id: 18,
    text: "What does the text mean when it says a political party provides 'unity and mobilization'?",
    options: [
      { id: 'a', text: "They bring people together for a common goal", correct: true },
      { id: 'b', text: "They split into smaller groups" },
      { id: 'c', text: "They create divisions among citizens" },
      { id: 'd', text: "They focus only on a single region" }
    ],
    correctAnswer: "They bring people together for a common goal",
    explanation: "The text states this function involves bringing 'people together for a common goal.'",
    hint: "The description mentions 'Strength in numbers!'"
  },
  {
    id: 19,
    text: "Which of the following parties was NOT a key player in the First Republic (1960-1966)?",
    options: [
      { id: 'a', text: "National Council of Nigeria and the Cameroons (NCNC)" },
      { id: 'b', text: "Northern People’s Congress (NPC)" },
      { id: 'c', text: "Action Group (AG)" },
      { id: 'd', text: "National Party of Nigeria (NPN)", correct: true }
    ],
    correctAnswer: "National Party of Nigeria (NPN)",
    explanation: "The text lists NPC, NCNC, and AG as key parties in the First Republic. The NPN was a key party in the Second Republic.",
    hint: "Check the dates associated with each republic in the provided text."
  },
  {
    id: 20,
    text: "In which Republic did the National Party of Nigeria (NPN) and the Unity Party of Nigeria (UPN) play prominent roles?",
    options: [
      { id: 'a', text: "First Republic" },
      { id: 'b', text: "Second Republic", correct: true },
      { id: 'c', text: "Third Republic" },
      { id: 'd', text: "Fourth Republic" }
    ],
    correctAnswer: "Second Republic",
    explanation: "The text places the NPN and UPN under the heading 'Second Republic (1979-1983).'",
    hint: "Match the parties with their corresponding time period."
  },
  {
    id: 21,
    text: "Which of the following is a disadvantage of a multi-party system, according to the document?",
    options: [
      { id: 'a', text: "It offers less choice for voters" },
      { id: 'b', text: "It makes voting simpler" },
      { id: 'c', text: "It can make it difficult to form a clear majority", correct: true },
      { id: 'd', text: "It reduces competition" }
    ],
    correctAnswer: "It can make it difficult to form a clear majority",
    explanation: "The text states that in a multi-party system, it 'can sometimes make it hard to get a clear majority.'",
    hint: "This is a consequence of having multiple parties vying for power."
  },
  {
    id: 22,
    text: "The party that keeps the ruling party in check is referred to as the:",
    options: [
      { id: 'a', text: "Ruling government" },
      { id: 'b', text: "Federal government" },
      { id: 'c', text: "Shadow government", correct: true },
      { id: 'd', text: "Local government" }
    ],
    correctAnswer: "Shadow government",
    explanation: "The text refers to the opposition party as the 'shadow government' that keeps the ruling party in check.",
    hint: "This term describes a group that watches and critiques the party in power."
  },
  {
    id: 23,
    text: "Who was the leader of the Unity Party of Nigeria (UPN) in the Second Republic?",
    options: [
      { id: 'a', text: "Shehu Shagari" },
      { id: 'b', text: "Tafawa Balewa" },
      { id: 'c', text: "Obafemi Awolowo", correct: true },
      { id: 'd', text: "Nnamdi Azikiwe" }
    ],
    correctAnswer: "Obafemi Awolowo",
    explanation: "The text lists Obafemi Awolowo as the leader of the UPN during the Second Republic.",
    hint: "He also led a prominent party in the First Republic."
  },
  {
    id: 24,
    text: "The text defines political parties as groups of people with similar ideas about:",
    options: [
      { id: 'a', text: "Running a business" },
      { id: 'b', text: "Governing the country", correct: true },
      { id: 'c', text: "Playing football" },
      { id: 'd', text: "Creating a museum" }
    ],
    correctAnswer: "Governing the country",
    explanation: "The text says political parties are 'groups of people with similar ideas about how to govern.'",
    hint: "This is the core belief that unites members of a party."
  },
  {
    id: 25,
    text: "How does the document describe the political party's role in 'Public Education'?",
    options: [
      { id: 'a', text: "They teach citizens how to read and write" },
      { id: 'b', text: "They inform citizens about their policies", correct: true },
      { id: 'c', text: "They provide free education for children" },
      { id: 'd', text: "They build schools" }
    ],
    correctAnswer: "They inform citizens about their policies",
    explanation: "The text states this function is 'Telling their story' and informing citizens 'about their policies.'",
    hint: "This is how a party shares its platform with the public."
  },
  {
    id: 26,
    text: "Which of the following is a function of a political party related to encouraging people to register and vote?",
    options: [
      { id: 'a', text: "Formulating Policies" },
      { id: 'b', text: "Mobilizing Voters", correct: true },
      { id: 'c', text: "Providing Opposition" },
      { id: 'd', text: "Public Education" }
    ],
    correctAnswer: "Mobilizing Voters",
    explanation: "The text describes this function as encouraging people 'to register and vote.'",
    hint: "This is a key grassroots activity for any political party."
  },
  {
    id: 27,
    text: "What is a major advantage of a multi-party system mentioned in the text?",
    options: [
      { id: 'a', text: "It simplifies the voting process" },
      { id: 'b', text: "It ensures a clear majority" },
      { id: 'c', text: "It gives voters more options", correct: true },
      { id: 'd', text: "It is easier to form a government" }
    ],
    correctAnswer: "It gives voters more options",
    explanation: "The text says a multi-party system 'gives voters more options.'",
    hint: "Think about the benefits of having many choices."
  },
  {
    id: 28,
    text: "In the context of political parties, what does 'Recruiting and Training Candidates' entail?",
    options: [
      { id: 'a', text: "Creating a new political party" },
      { id: 'b', text: "Finding and preparing people to run for office", correct: true },
      { id: 'c', text: "Regulating other political parties" },
      { id: 'd', text: "Organizing protests and rallies" }
    ],
    correctAnswer: "Finding and preparing people to run for office",
    explanation: "The text describes this function as finding and preparing people 'to run for office.'",
    hint: "This is the process of selecting the people who will represent the party."
  },
  {
    id: 29,
    text: "Which of the following pairs of political parties dominated the political landscape in recent times, as mentioned in the text?",
    options: [
      { id: 'a', text: "AG and NCNC" },
      { id: 'b', text: "NPN and UPN" },
      { id: 'c', text: "APC and PDP", correct: true },
      { id: 'd', text: "NPC and AG" }
    ],
    correctAnswer: "APC and PDP",
    explanation: "The 'Did you know?' section mentions the 'APC and PDP in recent times.'",
    hint: "These are the two most prominent parties of the Fourth Republic."
  },
  {
    id: 30,
    text: "Which of the following is a key characteristic of a Two-Party system?",
    options: [
      { id: 'a', text: "There is always a coalition government" },
      { id: 'b', text: "It offers less choice but simpler voting", correct: true },
      { id: 'c', text: "Multiple parties compete for power" },
      { id: 'd', text: "Only one party is in control" }
    ],
    correctAnswer: "It offers less choice but simpler voting",
    explanation: "The text states that a two-party system 'makes voting simpler but offers less choice.'",
    hint: "This is a trade-off that comes with having a smaller number of major parties."
  }
];

export default questions;