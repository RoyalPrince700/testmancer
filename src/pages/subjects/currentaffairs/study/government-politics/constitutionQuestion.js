const questions = [
  {
    id: 1,
    text: "According to the provided text, what is the ultimate rulebook for the country of Nigeria?",
    options: [
      { id: 'a', text: "The National Assembly Act" },
      { id: 'b', text: "The President's Decree" },
      { id: 'c', text: "The Nigerian Constitution", correct: true },
      { id: 'd', text: "The Common Law" }
    ],
    correctAnswer: "The Nigerian Constitution",
    explanation: "The text defines the Nigerian Constitution as the 'supreme law that tells everyone…what they can and can't do.'",
    hint: "Think about the document that acts as the 'supreme law'."
  },
  {
    id: 2,
    text: "What is the name of Nigeria's current constitution, according to the document?",
    options: [
      { id: 'a', text: "The 1960 Independence Constitution" },
      { id: 'b', text: "The 1979 Federal Constitution" },
      { id: 'c', text: "The 1999 Constitution of the Federal Republic of Nigeria", correct: true },
      { id: 'd', text: "The 1963 Republican Constitution" }
    ],
    correctAnswer: "The 1999 Constitution of the Federal Republic of Nigeria",
    explanation: "The 'Did you know?' section specifically names the 1999 Constitution as the current one.",
    hint: "The answer is bolded in a fun fact section."
  },
  {
    id: 3,
    text: "The principle that 'No other law can override it' makes the Nigerian Constitution the:",
    options: [
      { id: 'a', text: "Judiciary's blueprint" },
      { id: 'b', text: "Federal law" },
      { id: 'c', text: "Supreme law", correct: true },
      { id: 'd', text: "Legislative act" }
    ],
    correctAnswer: "Supreme law",
    explanation: "The text describes the Constitution's status as the 'Boss of all laws' and that no other law can override it, which is the definition of a supreme law.",
    hint: "This is one of the key skills mentioned in the first section."
  },
  {
    id: 4,
    text: "Which of the following is an example of a fundamental human right listed in the document?",
    options: [
      { id: 'a', text: "Right to vote" },
      { id: 'b', text: "Right to own property" },
      { id: 'c', text: "Right to Fair Hearing", correct: true },
      { id: 'd', text: "Right to education" }
    ],
    correctAnswer: "Right to Fair Hearing",
    explanation: "The 'Your Rights as a Citizen' section lists the Right to Fair Hearing as one of the guaranteed rights, explaining it as a right to a fair trial.",
    hint: "This right protects you if you are ever accused of something."
  },
  {
    id: 5,
    text: "What is the primary role of the Executive arm of the government?",
    options: [
      { id: 'a', text: "To make laws" },
      { id: 'b', text: "To interpret and enforce laws" },
      { id: 'c', text: "To carry out the laws", correct: true },
      { id: 'd', text: "To protect citizens' rights" }
    ],
    correctAnswer: "To carry out the laws",
    explanation: "The text states the Executive's role is to 'Carries out the laws' and gives the President as an example.",
    hint: "Think about the branch of government responsible for implementing laws."
  },
  {
    id: 6,
    text: "A person whose parents or grandparents are Nigerian citizens is a Nigerian citizen by:",
    options: [
      { id: 'a', text: "Registration" },
      { id: 'b', text: "Naturalization" },
      { id: 'c', text: "Birth", correct: true },
      { id: 'd', text: "Law" }
    ],
    correctAnswer: "Birth",
    explanation: "The 'By Birth' section on citizenship explicitly states this condition.",
    hint: "This is the most common way to acquire citizenship."
  },
  {
    id: 7,
    text: "The principle of 'Separation of Powers' is compared to having three different teams in government, each with its own job. This is to prevent:",
    options: [
      { id: 'a', text: "Political corruption" },
      { id: 'b', text: "The abuse of power by the military" },
      { id: 'c', text: "One team from becoming too powerful", correct: true },
      { id: 'd', text: "Misunderstanding of the laws" }
    ],
    correctAnswer: "One team from becoming too powerful",
    explanation: "The text states the purpose of the separation of powers is so that 'one team doesn't become too powerful.'",
    hint: "The answer is related to why these teams have different jobs."
  },
  {
    id: 8,
    text: "A foreign woman who marries a Nigerian man can become a citizen by what means?",
    options: [
      { id: 'a', text: "By Birth" },
      { id: 'b', text: "By Registration", correct: true },
      { id: 'c', text: "By Naturalization" },
      { id: 'd', text: "By Marriage" }
    ],
    correctAnswer: "By Registration",
    explanation: "The 'By Registration' section lists a foreign woman married to a Nigerian man as an example of citizenship by this method.",
    hint: "This is one of the three methods of obtaining citizenship."
  },
  {
    id: 9,
    text: "Which arm of government is responsible for making laws?",
    options: [
      { id: 'a', text: "The Judiciary" },
      { id: 'b', text: "The Executive" },
      { id: 'c', text: "The Legislature", correct: true },
      { id: 'd', text: "The Electoral Commission" }
    ],
    correctAnswer: "The Legislature",
    explanation: "The text states the Legislature's role is to 'Makes the laws' and gives the National Assembly as an example.",
    hint: "This branch is represented by the National Assembly."
  },
  {
    id: 10,
    text: "The Right to Freedom of Movement allows you to:",
    options: [
      { id: 'a', text: "Speak freely without consequences" },
      { id: 'b', text: "Join any political party you choose" },
      { id: 'c', text: "Travel anywhere within Nigeria", correct: true },
      { id: 'd', text: "Live in any country you wish" }
    ],
    correctAnswer: "Travel anywhere within Nigeria",
    explanation: "The 'Fundamental Human Rights' section defines the Right to Freedom of Movement as the right to 'travel anywhere within Nigeria.'",
    hint: "This right is about your ability to travel."
  },
  {
    id: 11,
    text: "A non-Nigerian who has lived in Nigeria for a long time and met certain conditions can become a citizen by:",
    options: [
      { id: 'a', text: "Naturalization", correct: true },
      { id: 'b', text: "Registration" },
      { id: 'c', text: "Birth" },
      { id: 'd', text: "Residency" }
    ],
    correctAnswer: "Naturalization",
    explanation: "The 'By Naturalization' section states this is how a non-Nigerian can become a citizen after meeting specific conditions.",
    hint: "This method is for a long-term non-Nigerian resident."
  },
  {
    id: 12,
    text: "Which of the following is an example of the Judiciary arm of government?",
    options: [
      { id: 'a', text: "The President" },
      { id: 'b', text: "The National Assembly" },
      { id: 'c', text: "The Supreme Court", correct: true },
      { id: 'd', text: "The Minister of Justice" }
    ],
    correctAnswer: "The Supreme Court",
    explanation: "The text lists the Supreme Court as an example of the Judiciary, which 'interprets and enforces the laws.'",
    hint: "This is the highest court in the country."
  },
  {
    id: 13,
    text: "The 'Right to Life' is described in the text as:",
    options: [
      { id: 'a', text: "A right to a long life" },
      { id: 'b', text: "A right to live anywhere" },
      { id: 'c', text: "A right to live", correct: true },
      { id: 'd', text: "A right to a free life" }
    ],
    correctAnswer: "A right to live",
    explanation: "The text describes the Right to Life as 'The most basic right. Everyone has a right to live.'",
    hint: "This is considered the most fundamental human right."
  },
  {
    id: 14,
    text: "The function of the Judiciary is to:",
    options: [
      { id: 'a', text: "Make the laws" },
      { id: 'b', text: "Carry out the laws" },
      { id: 'c', text: "Interpret and enforce the laws", correct: true },
      { id: 'd', text: "Enforce the will of the President" }
    ],
    correctAnswer: "Interpret and enforce the laws",
    explanation: "The text explicitly states the Judiciary's role is to 'Interprets and enforces the laws.'",
    hint: "This branch is in charge of upholding the law."
  },
  {
    id: 15,
    text: "What is the primary role of the National Assembly?",
    options: [
      { id: 'a', text: "To interpret laws" },
      { id: 'b', text: "To carry out laws" },
      { id: 'c', text: "To make laws", correct: true },
      { id: 'd', text: "To enforce laws" }
    ],
    correctAnswer: "To make laws",
    explanation: "The text identifies the National Assembly as an example of the Legislature, which is the arm that 'Makes the laws.'",
    hint: "The National Assembly is part of the legislative arm of government."
  },
  {
    id: 16,
    text: "The Right to Freedom of Expression is a fundamental human right that allows you to:",
    options: [
      { id: 'a', text: "Say anything you want without restriction" },
      { id: 'b', text: "Share your thoughts freely", correct: true },
      { id: 'c', text: "Write fake news" },
      { id: 'd', text: "Only express popular opinions" }
    ],
    correctAnswer: "Share your thoughts freely",
    explanation: "The text defines this right as being able to 'share your thoughts freely (but no fake news!).'",
    hint: "This right is about sharing your thoughts and opinions."
  },
  {
    id: 17,
    text: "Which of the following is NOT one of the three arms of government mentioned in the text?",
    options: [
      { id: 'a', text: "Legislature" },
      { id: 'b', text: "Executive" },
      { id: 'c', text: "Judiciary" },
      { id: 'd', text: "Military", correct: true }
    ],
    correctAnswer: "Military",
    explanation: "The text only lists the Legislature, Executive, and Judiciary as the three arms of government.",
    hint: "Check the section on 'Separation of Powers'."
  },
  {
    id: 18,
    text: "What is the function of the Executive arm of government?",
    options: [
      { id: 'a', text: "Interpreting laws" },
      { id: 'b', text: "Making new laws" },
      { id: 'c', text: "Carrying out laws", correct: true },
      { id: 'd', text: "Advising the Supreme Court" }
    ],
    correctAnswer: "Carrying out laws",
    explanation: "The text explicitly states the role of the Executive is to 'Carries out the laws' with the President as an example.",
    hint: "The head of this branch is the President."
  },
  {
    id: 19,
    text: "Citizenship by 'Naturalization' is a method for:",
    options: [
      { id: 'a', text: "A Nigerian citizen to reclaim their citizenship" },
      { id: 'b', text: "A foreign woman to become a citizen" },
      { id: 'c', text: "A non-Nigerian to become a citizen after living in the country for a long time", correct: true },
      { id: 'd', text: "Anyone who has Nigerian ancestors" }
    ],
    correctAnswer: "A non-Nigerian to become a citizen after living in the country for a long time",
    explanation: "The 'By Naturalization' section states this method is for a 'non-Nigerian who has met certain conditions, like living in Nigeria for a long time.'",
    hint: "This method is for a non-Nigerian to become a citizen."
  },
  {
    id: 20,
    text: "The constitution is a 'personal shield' because it:",
    options: [
      { id: 'a', text: "Gives you special powers" },
      { id: 'b', text: "Protects your fundamental human rights", correct: true },
      { id: 'c', text: "Shields you from taxes" },
      { id: 'd', text: "Prevents you from being arrested" }
    ],
    correctAnswer: "Protects your fundamental human rights",
    explanation: "The text equates the constitution as a 'personal shield' that 'Guarantees your fundamental human rights.'",
    hint: "The term 'personal shield' is used in the 'What is the Nigerian Constitution?' section."
  },
  {
    id: 21,
    text: "The main idea behind the 'separation of powers' is to:",
    options: [
      { id: 'a', text: "Speed up government decisions" },
      { id: 'b', text: "Ensure one branch does not get too powerful", correct: true },
      { id: 'c', text: "Consolidate all power in one branch" },
      { id: 'd', text: "Simplify the law-making process" }
    ],
    correctAnswer: "Ensure one branch does not get too powerful",
    explanation: "The text states that the separation of powers is 'so one team doesn't become too powerful.'",
    hint: "Think about the purpose of dividing government into three branches."
  },
  {
    id: 22,
    text: "A person accused of a crime has the right to a fair trial. This is an example of which fundamental human right?",
    options: [
      { id: 'a', text: "Right to Life" },
      { id: 'b', text: "Right to Freedom of Movement" },
      { id: 'c', text: "Right to Fair Hearing", correct: true },
      { id: 'd', text: "Right to Freedom of Expression" }
    ],
    correctAnswer: "Right to Fair Hearing",
    explanation: "The text defines the Right to Fair Hearing as having 'a right to a fair trial if you are accused of something.'",
    hint: "This right is related to court proceedings."
  },
  {
    id: 23,
    text: "What is the primary role of the Supreme Court?",
    options: [
      { id: 'a', text: "To write new laws" },
      { id: 'b', text: "To carry out executive orders" },
      { id: 'c', text: "To interpret and enforce laws", correct: true },
      { id: 'd', text: "To oversee the National Assembly" }
    ],
    correctAnswer: "To interpret and enforce laws",
    explanation: "The text identifies the Supreme Court as an example of the Judiciary, which 'interprets and enforces the laws.'",
    hint: "The Supreme Court is part of the Judiciary arm of government."
  },
  {
    id: 24,
    text: "Which arm of government is the National Assembly a part of?",
    options: [
      { id: 'a', text: "The Executive" },
      { id: 'b', text: "The Judiciary" },
      { id: 'c', text: "The Legislature", correct: true },
      { id: 'd', text: "The Federal Council" }
    ],
    correctAnswer: "The Legislature",
    explanation: "The text lists the National Assembly as an example of the Legislature.",
    hint: "This arm of government makes laws."
  },
  {
    id: 25,
    text: "The Nigerian Constitution is considered the 'supreme law' because it is:",
    options: [
      { id: 'a', text: "The most expensive law to acquire" },
      { id: 'b', text: "The first law ever written in Nigeria" },
      { id: 'c', text: "A law that cannot be overruled by any other law", correct: true },
      { id: 'd', text: "A law written by the most powerful people" }
    ],
    correctAnswer: "A law that cannot be overruled by any other law",
    explanation: "The text states that the constitution is the supreme law because 'No other law can override it.'",
    hint: "The term 'supreme' refers to its authority over all other laws."
  },
  {
    id: 26,
    text: "What is the major function of the Legislature?",
    options: [
      { id: 'a', text: "To execute laws" },
      { id: 'b', text: "To judge lawbreakers" },
      { id: 'c', text: "To make new laws", correct: true },
      { id: 'd', text: "To advise the President" }
    ],
    correctAnswer: "To make new laws",
    explanation: "The text clearly defines the role of the Legislature as making laws.",
    hint: "This arm of government is the law-making body."
  },
  {
    id: 27,
    text: "What is the term for the method of citizenship for a person who has lived in Nigeria for over 15 years and has met the required conditions?",
    options: [
      { id: 'a', text: "By Birth" },
      { id: 'b', text: "By Registration" },
      { id: 'c', text: "By Naturalization", correct: true },
      { id: 'd', text: "By Residency" }
    ],
    correctAnswer: "By Naturalization",
    explanation: "The 'By Naturalization' section mentions this is a method for non-Nigerians who have lived in the country for a long time.",
    hint: "This method is for a long-term non-citizen resident."
  },
  {
    id: 28,
    text: "The 'separation of powers' ensures that:",
    options: [
      { id: 'a', text: "Laws are passed quickly" },
      { id: 'b', text: "The government has full control" },
      { id: 'c', text: "Power is balanced among three branches", correct: true },
      { id: 'd', text: "The President is the most powerful person" }
    ],
    correctAnswer: "Power is balanced among three branches",
    explanation: "The text states the separation of powers is to ensure 'one team doesn't become too powerful,' implying a balance of power.",
    hint: "This principle is about balancing authority."
  },
  {
    id: 29,
    text: "The 'Right to Fair Hearing' means you have a right to:",
    options: [
      { id: 'a', text: "Hear all the court proceedings" },
      { id: 'b', text: "A fair trial if you are accused of something", correct: true },
      { id: 'c', text: "Be heard by the government" },
      { id: 'd', text: "A private court hearing" }
    ],
    correctAnswer: "A fair trial if you are accused of something",
    explanation: "The 'Fundamental Human Rights' section explicitly states this as the meaning of a fair hearing.",
    hint: "This right is related to legal and judicial processes."
  },
  {
    id: 30,
    text: "Who is an example of a figure in the Executive arm of government?",
    options: [
      { id: 'a', text: "A Supreme Court judge" },
      { id: 'b', text: "A National Assembly member" },
      { id: 'c', text: "The President", correct: true },
      { id: 'd', text: "A state governor" }
    ],
    correctAnswer: "The President",
    explanation: "The text uses 'The President' as an example of the Executive arm of government.",
    hint: "This person is the head of the country."
  }
];

export default questions;