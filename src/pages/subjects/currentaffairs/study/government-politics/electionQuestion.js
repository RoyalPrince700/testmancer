const questions = [
  {
    id: 1,
    text: "What is the major way for Nigerian citizens to choose their leaders, as described in the text?",
    options: [
      { id: 'a', text: "Referendums" },
      { id: 'b', text: "Protests" },
      { id: 'c', text: "Elections", correct: true },
      { id: 'd', text: "Appointments" }
    ],
    correctAnswer: "Elections",
    explanation: "The text states that 'Elections in Nigeria are the major way citizens choose their leaders...'",
    hint: "This process is the backbone of democracy."
  },
  {
    id: 2,
    text: "What is a key benefit of elections, which allows citizens to remove poor-performing leaders from office?",
    options: [
      { id: 'a', text: "Legitimacy" },
      { id: 'b', text: "Accountability", correct: true },
      { id: 'c', text: "Voter education" },
      { id: 'd', text: "Party regulation" }
    ],
    correctAnswer: "Accountability",
    explanation: "The text defines accountability as allowing 'citizens to vote out bad leaders.'",
    hint: "This concept holds leaders responsible for their actions."
  },
  {
    id: 3,
    text: "According to the text, since the return to democracy in 1999, how often have general elections been held in Nigeria?",
    options: [
      { id: 'a', text: "Every year" },
      { id: 'b', text: "Every two years" },
      { id: 'c', text: "Every four years", correct: true },
      { id: 'd', text: "Every five years" }
    ],
    correctAnswer: "Every four years",
    explanation: "The 'Did you know?' section states that Nigeria has held general elections every four years since 1999.",
    hint: "Think about the duration of a presidential term."
  },
  {
    id: 4,
    text: "Which type of election involves parties choosing their candidates internally?",
    options: [
      { id: 'a', text: "General Elections" },
      { id: 'b', text: "Supplementary Elections" },
      { id: 'c', text: "Primary Elections", correct: true },
      { id: 'd', text: "Run-off Elections" }
    ],
    correctAnswer: "Primary Elections",
    explanation: "The text defines primary elections as when 'Parties choose their candidates internally before the general election.'",
    hint: "This type of election is the first step in the electoral process for a political party."
  },
  {
    id: 5,
    text: "What is the purpose of a run-off election?",
    options: [
      { id: 'a', text: "To decide a winner if the first election was canceled" },
      { id: 'b', text: "To vote for local government officials" },
      { id: 'c', text: "To hold a second election if no candidate meets the winning criteria in the first round", correct: true },
      { id: 'd', text: "To elect party executives" }
    ],
    correctAnswer: "To hold a second election if no candidate meets the winning criteria in the first round",
    explanation: "The text defines a run-off election as 'A second election held if no candidate meets the winning criteria in the first round.'",
    hint: "This poll is typically a tie-breaker."
  },
  {
    id: 6,
    text: "What does the acronym INEC stand for?",
    options: [
      { id: 'a', text: "Independent Nigerian Election Commission" },
      { id: 'b', text: "Inland National Electoral Committee" },
      { id: 'c', text: "Independent National Electoral Commission", correct: true },
      { id: 'd', text: "International National Election Council" }
    ],
    correctAnswer: "Independent National Electoral Commission",
    explanation: "The text identifies INEC as the 'Independent National Electoral Commission'.",
    hint: "This is the body that organizes elections."
  },
  {
    id: 7,
    text: "Which of the following is a function of INEC?",
    options: [
      { id: 'a', text: "Running the government" },
      { id: 'b', text: "Organizing protests" },
      { id: 'c', text: "Conducting elections", correct: true },
      { id: 'd', text: "Making laws" }
    ],
    correctAnswer: "Conducting elections",
    explanation: "The text lists 'Conducting Elections' as one of the functions of INEC.",
    hint: "INEC acts as the 'referee' of the electoral game."
  },
  {
    id: 8,
    text: "Which year was a landmark election because a sitting Nigerian president lost for the first time?",
    options: [
      { id: 'a', text: "1999" },
      { id: 'b', text: "2007" },
      { id: 'c', text: "2015", correct: true },
      { id: 'd', text: "2023" }
    ],
    correctAnswer: "2015",
    explanation: "The 'Did you know?' section highlights the 2015 election as the first time a sitting president lost.",
    hint: "This year is mentioned as a historical milestone."
  },
  {
    id: 9,
    text: "During the 'Post-election Activities' phase, where can losing candidates challenge the results?",
    options: [
      { id: 'a', text: "In the National Assembly" },
      { id: 'b', text: "In a tribunal or court", correct: true },
      { id: 'c', text: "With the President" },
      { id: 'd', text: "At the INEC headquarters" }
    ],
    correctAnswer: "In a tribunal or court",
    explanation: "The text states that in the post-election phase, 'Losers can challenge the results in a tribunal or court.'",
    hint: "This is a formal, legal process."
  },
  {
    id: 10,
    text: "What is the purpose of 'Re-run & Supplementary Elections'?",
    options: [
      { id: 'a', text: "To vote for new candidates" },
      { id: 'b', text: "To fix issues like violence or over-voting in specific polling units", correct: true },
      { id: 'c', text: "To elect a new leader after a sudden vacancy" },
      { id: 'd', text: "To allow citizens to re-vote for their preferred candidate" }
    ],
    correctAnswer: "To fix issues like violence or over-voting in specific polling units",
    explanation: "The text defines this type of election as being 'Held in specific polling units where results were canceled due to issues like violence or over-voting.'",
    hint: "This poll is used to correct specific problems."
  },
  {
    id: 11,
    text: "Which of the following is NOT a function of INEC mentioned in the provided text?",
    options: [
      { id: 'a', text: "Voter Registration" },
      { id: 'b', text: "Party Regulation" },
      { id: 'c', text: "Conducting an inauguration", correct: true },
      { id: 'd', text: "Voter Education" }
    ],
    correctAnswer: "Conducting an inauguration",
    explanation: "The text lists Voter Registration, Party Regulation, Conducting Elections, and Voter Education as INEC's functions, but not conducting an inauguration.",
    hint: "INEC's role ends after the results are announced and legal challenges are resolved."
  },
  {
    id: 12,
    text: "The electoral process is compared to a 'recipe for a democratic government.' This analogy is used to explain that it follows a:",
    options: [
      { id: 'a', text: "Long, difficult path" },
      { id: 'b', text: "Spontaneous, unpredictable method" },
      { id: 'c', text: "Clear set of steps as laid out by the law", correct: true },
      { id: 'd', text: "Complex, secretive procedure" }
    ],
    correctAnswer: "Clear set of steps as laid out by the law",
    explanation: "The text states that the electoral process 'follows a clear set of steps as laid out by the law.'",
    hint: "Think about why a recipe is used as an analogy."
  },
  {
    id: 13,
    text: "What is a key activity that takes place during the 'Pre-election Activities' phase?",
    options: [
      { id: 'a', text: "Declaration of the winner" },
      { id: 'b', text: "Vote counting" },
      { id: 'c', text: "Voter registration", correct: true },
      { id: 'd', text: "Election tribunal" }
    ],
    correctAnswer: "Voter registration",
    explanation: "The text lists 'voter registration, party primaries, and campaigns' as part of the pre-election phase.",
    hint: "This is one of the very first steps before the actual election day."
  },
  {
    id: 14,
    text: "What does the term 'Legitimacy' mean in the context of elections?",
    options: [
      { id: 'a', text: "Elections are fair and just" },
      { id: 'b', text: "Leaders are given the right to rule by the people", correct: true },
      { id: 'c', text: "The government is accountable to the people" },
      { id: 'd', text: "The electoral process is lawful" }
    ],
    correctAnswer: "Leaders are given the right to rule by the people",
    explanation: "The text defines Legitimacy as giving 'leaders the right to rule.'",
    hint: "This concept gives the elected leader their mandate."
  },
  {
    id: 15,
    text: "What is the main election where citizens vote for their leaders like the President and Governors?",
    options: [
      { id: 'a', text: "Primary Election" },
      { id: 'b', text: "General Election", correct: true },
      { id: 'c', text: "Run-off Election" },
      { id: 'd', text: "Supplementary Election" }
    ],
    correctAnswer: "General Election",
    explanation: "The text describes a general election as 'The main election where citizens vote for their leaders (President, Governors, etc.).'",
    hint: "This is the main competition in the electoral process analogy."
  },
  {
    id: 16,
    text: "During Election Day, what device is often used for voter accreditation?",
    options: [
      { id: 'a', text: "A biometric fingerprint scanner (BFS)" },
      { id: 'b', text: "A voter identification card (VIC)" },
      { id: 'c', text: "The BVAS device", correct: true },
      { id: 'd', text: "An electronic voting machine (EVM)" }
    ],
    correctAnswer: "The BVAS device",
    explanation: "The text mentions that on Election Day, voters get accredited 'often with the BVAS device.'",
    hint: "The name of this device is specifically mentioned in the 'Electoral Process' section."
  },
  {
    id: 17,
    text: "What is the primary role of INEC?",
    options: [
      { id: 'a', text: "To advise the government" },
      { id: 'b', text: "To organize and conduct elections", correct: true },
      { id: 'c', text: "To fund political parties" },
      { id: 'd', text: "To manage the country's economy" }
    ],
    correctAnswer: "To organize and conduct elections",
    explanation: "The text states that INEC is the body 'responsible for organizing and conducting elections in Nigeria.'",
    hint: "This is the main responsibility of the electoral commission."
  },
  {
    id: 18,
    text: "According to the document, what is the role of political parties in Primary Elections?",
    options: [
      { id: 'a', text: "They run for office against other parties" },
      { id: 'b', text: "They choose their own candidates internally", correct: true },
      { id: 'c', text: "They educate voters on how to vote" },
      { id: 'd', text: "They challenge the results of the general election" }
    ],
    correctAnswer: "They choose their own candidates internally",
    explanation: "The text states that in primary elections, 'Parties choose their candidates internally.'",
    hint: "This process happens before the main election."
  },
  {
    id: 19,
    text: "What is the first phase of the Nigerian electoral process?",
    options: [
      { id: 'a', text: "Election Day" },
      { id: 'b', text: "Post-election Activities" },
      { id: 'c', text: "Voter Accreditation" },
      { id: 'd', text: "Pre-election Activities", correct: true }
    ],
    correctAnswer: "Pre-election Activities",
    explanation: "The text lists 'Pre-election Activities' as the first step in the electoral process.",
    hint: "This phase includes campaigns and voter registration."
  },
  {
    id: 20,
    text: "The 'Post-election Activities' phase includes which of the following?",
    options: [
      { id: 'a', text: "Voter registration" },
      { id: 'b', text: "Campaigns" },
      { id: 'c', text: "Announcement of results", correct: true },
      { id: 'd', text: "Party primaries" }
    ],
    correctAnswer: "Announcement of results",
    explanation: "The text lists 'Votes are counted, results are announced, and a winner is declared' as part of the post-election phase.",
    hint: "This happens after voting has occurred."
  },
  {
    id: 21,
    text: "Why is voter education an important function of INEC?",
    options: [
      { id: 'a', text: "To tell people who to vote for" },
      { id: 'b', text: "To register eligible voters" },
      { id: 'c', text: "To inform the public on the voting process and their rights", correct: true },
      { id: 'd', text: "To monitor political parties" }
    ],
    correctAnswer: "To inform the public on the voting process and their rights",
    explanation: "The text states that voter education is to 'educate the public on the voting process and their rights.'",
    hint: "This function helps citizens understand their role in the election."
  },
  {
    id: 22,
    text: "A second election held for a presidential poll because no candidate met the winning criteria is known as a:",
    options: [
      { id: 'a', text: "General election" },
      { id: 'b', text: "Supplementary election" },
      { id: 'c', text: "Run-off election", correct: true },
      { id: 'd', text: "Primary election" }
    ],
    correctAnswer: "Run-off election",
    explanation: "The text defines a run-off election as 'A second election held if no candidate meets the winning criteria in the first round.'",
    hint: "The word 'run-off' suggests a continuation of the race."
  },
  {
    id: 23,
    text: "According to the document, what is the role of political parties in the electoral process?",
    options: [
      { id: 'a', text: "They announce the results" },
      { id: 'b', text: "They register voters" },
      { id: 'c', text: "They choose their candidates internally", correct: true },
      { id: 'd', text: "They supervise the election" }
    ],
    correctAnswer: "They choose their candidates internally",
    explanation: "The text mentions 'party primaries' as a pre-election activity where parties choose their candidates.",
    hint: "Think about what happens during a primary election."
  },
  {
    id: 24,
    text: "Which of the following is an example of an issue that can lead to a 'Re-run & Supplementary Election'?",
    options: [
      { id: 'a', text: "Candidate withdrawal" },
      { id: 'b', text: "Low voter turnout" },
      { id: 'c', text: "Violence or over-voting", correct: true },
      { id: 'd', text: "Lack of a clear winner" }
    ],
    correctAnswer: "Violence or over-voting",
    explanation: "The text specifies that these elections are held when results are canceled due to 'violence or over-voting.'",
    hint: "This type of election is used to correct specific problems at the polling unit level."
  },
  {
    id: 25,
    text: "What is the main reason elections are considered the 'backbone of Nigeria's democracy'?",
    options: [
      { id: 'a', text: "They are the only way to get a job in government" },
      { id: 'b', text: "They give power to the people", correct: true },
      { id: 'c', text: "They are a major source of revenue for the government" },
      { id: 'd', text: "They are a popular national holiday" }
    ],
    correctAnswer: "They give power to the people",
    explanation: "The text states that elections are the backbone of democracy, 'giving power to the people.'",
    hint: "This phrase highlights the transfer of authority."
  },
  {
    id: 26,
    text: "The process of voters getting accredited at polling units is a key activity on:",
    options: [
      { id: 'a', text: "Party primary day" },
      { id: 'b', text: "Voter registration day" },
      { id: 'c', text: "Election Day", correct: true },
      { id: 'd', text: "Campaign launch day" }
    ],
    correctAnswer: "Election Day",
    explanation: "The text explicitly mentions that accreditation and voting happen on 'Election Day'.",
    hint: "This is the day when the actual voting takes place."
  },
  {
    id: 27,
    text: "The term 'legitimacy' in the context of elections means that leaders gain the right to rule through what process?",
    options: [
      { id: 'a', text: "Inheritance" },
      { id: 'b', text: "Force" },
      { id: 'c', text: "A popular vote by citizens", correct: true },
      { id: 'd', text: "An appointment by the elite" }
    ],
    correctAnswer: "A popular vote by citizens",
    explanation: "The text defines legitimacy as giving leaders 'the right to rule,' which is achieved through elections, where citizens vote.",
    hint: "This refers to the people's 'mandate' as mentioned in the text."
  },
  {
    id: 28,
    text: "What is a major activity that occurs during the 'Pre-election Activities' phase?",
    options: [
      { id: 'a', text: "Losers challenging results" },
      { id: 'b', text: "Vote counting" },
      { id: 'c', text: "Campaigns", correct: true },
      { id: 'd', text: "Supplementary elections" }
    ],
    correctAnswer: "Campaigns",
    explanation: "The text includes campaigns as part of the 'Pre-election Activities' when candidates 'woo voters.'",
    hint: "This is when candidates present their manifestos to the public."
  },
  {
    id: 29,
    text: "What does the text imply by calling INEC the 'referee of the game'?",
    options: [
      { id: 'a', text: "They play an active role in politics" },
      { id: 'b', text: "They are an impartial body that supervises the election", correct: true },
      { id: 'c', text: "They are an aggressive body" },
      { id: 'd', text: "They decide who wins the election before the votes are cast" }
    ],
    correctAnswer: "They are an impartial body that supervises the election",
    explanation: "A referee's job is to be impartial and supervise a game, which is the analogy used for INEC.",
    hint: "Think about the role of a referee in sports."
  },
  {
    id: 30,
    text: "Which of the following describes the purpose of 'General Elections'?",
    options: [
      { id: 'a', text: "They are only for presidential candidates" },
      { id: 'b', text: "They are the main poll where citizens vote for their leaders", correct: true },
      { id: 'c', text: "They are for party candidates only" },
      { id: 'd', text: "They are used to fill vacant seats in government" }
    ],
    correctAnswer: "They are the main poll where citizens vote for their leaders",
    explanation: "The text states that general elections are 'The main election where citizens vote for their leaders.'",
    hint: "This is the primary event of the electoral calendar for most voters."
  }
];

export default questions;