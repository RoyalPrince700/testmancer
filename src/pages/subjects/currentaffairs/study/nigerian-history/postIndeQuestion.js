const questions = [
  {
    id: 1,
    text: "On what date did Nigeria gain its independence from Britain?",
    options: [
      { id: 'a', text: "September 1, 1960" },
      { id: 'b', text: "October 1, 1960", correct: true },
      { id: 'c', text: "October 1, 1963" },
      { id: 'd', text: "January 1, 1960" }
    ],
    correctAnswer: "October 1, 1960",
    explanation: "Nigeria's independence was officially declared on October 1, 1960.",
    hint: "Think about the day the green-white-green flag was raised."
  },
  {
    id: 2,
    text: "What type of government did Nigeria adopt at independence?",
    options: [
      { id: 'a', text: "A unitary system" },
      { id: 'b', text: "A monarchy" },
      { id: 'c', text: "A presidential democracy" },
      { id: 'd', text: "A parliamentary democracy", correct: true }
    ],
    correctAnswer: "A parliamentary democracy",
    explanation: "Nigeria started as a parliamentary democracy, with a Prime Minister as the head of government.",
    hint: "This system is characterized by a Prime Minister and a ceremonial Head of State."
  },
  {
    id: 3,
    text: "Who was Nigeria’s first Prime Minister?",
    options: [
      { id: 'a', text: "Dr. Nnamdi Azikiwe" },
      { id: 'b', text: "Ahmadu Bello" },
      { id: 'c', text: "Sir Abubakar Tafawa Balewa", correct: true },
      { id: 'd', text: "Chief Obafemi Awolowo" }
    ],
    correctAnswer: "Sir Abubakar Tafawa Balewa",
    explanation: "Sir Abubakar Tafawa Balewa was the first and only Prime Minister of Nigeria during the First Republic.",
    hint: "He was known as the 'Golden Voice of the North'."
  },
  {
    id: 4,
    text: "Who was the first ceremonial Head of State (Governor-General, then President) of independent Nigeria?",
    options: [
      { id: 'a', text: "Chief Obafemi Awolowo" },
      { id: 'b', text: "Sir Abubakar Tafawa Balewa" },
      { id: 'c', text: "Dr. Nnamdi Azikiwe", correct: true },
      { id: 'd', text: "Ahmadu Bello" }
    ],
    correctAnswer: "Dr. Nnamdi Azikiwe",
    explanation: "Dr. Nnamdi Azikiwe served as the Governor-General at independence and later as the first President.",
    hint: "His nickname was 'Zik of Africa'."
  },
  {
    id: 5,
    text: "The first military coup in Nigeria occurred on what date?",
    options: [
      { id: 'a', text: "October 1, 1960" },
      { id: 'b', text: "January 15, 1966", correct: true },
      { id: 'c', text: "May 29, 1999" },
      { id: 'd', text: "July 29, 1966" }
    ],
    correctAnswer: "January 15, 1966",
    explanation: "The first military coup, led by young majors, ended the First Republic on January 15, 1966.",
    hint: "This event marked the end of the first civilian government."
  },
  {
    id: 6,
    text: "Which of these leaders was NOT killed in the first military coup?",
    options: [
      { id: 'a', text: "Sir Abubakar Tafawa Balewa" },
      { id: 'b', text: "Dr. Nnamdi Azikiwe", correct: true },
      { id: 'c', text: "Ahmadu Bello" },
      { id: 'd', text: "Samuel Akintola" }
    ],
    correctAnswer: "Dr. Nnamdi Azikiwe",
    explanation: "While Sir Abubakar Tafawa Balewa and Ahmadu Bello were killed, Dr. Nnamdi Azikiwe was not a victim of the coup.",
    hint: "He was the ceremonial president at the time."
  },
  {
    id: 7,
    text: "The Nigerian Civil War was fought between Nigeria and which secessionist state?",
    options: [
      { id: 'a', text: "The Niger Delta Republic" },
      { id: 'b', text: "The Biafra Republic", correct: true },
      { id: 'c', text: "The Yoruba Republic" },
      { id: 'd', text: "The Republic of Benin" }
    ],
    correctAnswer: "The Biafra Republic",
    explanation: "The Eastern Region seceded and declared itself the Republic of Biafra, leading to the Civil War.",
    hint: "This state was led by Chukwuemeka Ojukwu."
  },
  {
    id: 8,
    text: "What was the famous peace policy declared by General Yakubu Gowon at the end of the Civil War?",
    options: [
      { id: 'a', text: "Peace and Unity" },
      { id: 'b', text: "Amnesty for all" },
      { id: 'c', text: "Total Reconciliation" },
      { id: 'd', text: "No Victor, No Vanquished", correct: true }
    ],
    correctAnswer: "No Victor, No Vanquished",
    explanation: "Gowon’s policy was aimed at national reconciliation and reconstruction after the war, promoting unity.",
    hint: "This phrase was meant to promote healing and forgiveness."
  },
  {
    id: 9,
    text: "Which military Head of State is credited with voluntarily handing over power to a civilian government in 1979?",
    options: [
      { id: 'a', text: "General Ibrahim Babangida" },
      { id: 'b', text: "General Murtala Muhammed" },
      { id: 'c', text: "General Olusegun Obasanjo", correct: true },
      { id: 'd', text: "General Yakubu Gowon" }
    ],
    correctAnswer: "General Olusegun Obasanjo",
    explanation: "Obasanjo handed over power to the newly elected civilian government, marking the beginning of the Second Republic.",
    hint: "He later came back as a civilian president."
  },
  {
    id: 10,
    text: "Which of these military leaders had a short but impactful reign known for his anti-corruption efforts?",
    options: [
      { id: 'a', text: "General Yakubu Gowon" },
      { id: 'b', text: "General Ibrahim Babangida" },
      { id: 'c', text: "General Aguiyi-Ironsi" },
      { id: 'd', text: "General Murtala Muhammed", correct: true }
    ],
    correctAnswer: "General Murtala Muhammed",
    explanation: "Murtala Muhammed’s reign was short but he initiated a series of bold reforms and a strong anti-corruption campaign.",
    hint: "He was seen as a hero who wanted to 'get it done'."
  },
  {
    id: 11,
    text: "The military leader known for his 'political dribbles' and annulling the 1993 presidential elections was:",
    options: [
      { id: 'a', text: "General Olusegun Obasanjo" },
      { id: 'b', text: "General Sani Abacha" },
      { id: 'c', text: "General Ibrahim Babangida", correct: true },
      { id: 'd', text: "General Abdulsalami Abubakar" }
    ],
    correctAnswer: "General Ibrahim Babangida",
    explanation: "Babangida, nicknamed 'Maradona', is most remembered for his controversial decision to annul the 1993 elections.",
    hint: "He ruled from 1985 to 1993."
  },
  {
    id: 12,
    text: "On what date did Nigeria return to democratic rule, marking the beginning of the Fourth Republic?",
    options: [
      { id: 'a', text: "October 1, 1960" },
      { id: 'b', text: "January 1, 1970" },
      { id: 'c', text: "May 29, 1999", correct: true },
      { id: 'd', text: "October 1, 1979" }
    ],
    correctAnswer: "May 29, 1999",
    explanation: "Democracy Day, now celebrated on June 12, was originally on May 29 to mark the return to civilian rule in 1999.",
    hint: "This date is often referred to as the start of the longest democratic era in Nigeria."
  },
  {
    id: 13,
    text: "Who was the first President of the Fourth Republic in 1999?",
    options: [
      { id: 'a', text: "General Abdulsalami Abubakar" },
      { id: 'b', text: "Dr. Goodluck Ebele Jonathan" },
      { id: 'c', text: "Chief Olusegun Obasanjo", correct: true },
      { id: 'd', text: "Muhammadu Buhari" }
    ],
    correctAnswer: "Chief Olusegun Obasanjo",
    explanation: "Chief Olusegun Obasanjo was the first democratically elected president after a long period of military rule.",
    hint: "He was also a former military Head of State."
  },
  {
    id: 14,
    text: "The Eastern Region seceded and declared itself Biafra under the leadership of whom?",
    options: [
      { id: 'a', text: "General Yakubu Gowon" },
      { id: 'b', text: "Ahmadu Bello" },
      { id: 'c', text: "Chief Obafemi Awolowo" },
      { id: 'd', text: "Chukwuemeka Ojukwu", correct: true }
    ],
    correctAnswer: "Chukwuemeka Ojukwu",
    explanation: "Chukwuemeka Ojukwu was the leader of the Eastern Region and declared its secession from Nigeria.",
    hint: "He was a military officer from the Eastern part of the country."
  },
  {
    id: 15,
    text: "Which of the following describes Nigeria's structure at independence?",
    options: [
      { id: 'a', text: "A centralized federal republic" },
      { id: 'b', text: "A federation of two regions" },
      { id: 'c', text: "A federation of three regions", correct: true },
      { id: 'd', text: "A unitary state" }
    ],
    correctAnswer: "A federation of three regions",
    explanation: "At independence, Nigeria was a federation composed of the Northern, Western, and Eastern regions.",
    hint: "The three regions were the 'different flavors' of the squad."
  },
  {
    id: 16,
    text: "Who was the Premier of the Western Region and a prominent opposition figure during the First Republic?",
    options: [
      { id: 'a', text: "Ahmadu Bello" },
      { id: 'b', text: "Dr. Nnamdi Azikiwe" },
      { id: 'c', text: "Chief Obafemi Awolowo", correct: true },
      { id: 'd', text: "Sir Abubakar Tafawa Balewa" }
    ],
    correctAnswer: "Chief Obafemi Awolowo",
    explanation: "Awolowo was the Premier of the Western Region and a key political figure advocating for his region.",
    hint: "He was known for his advocacy for free education."
  },
  {
    id: 17,
    text: "Which military Head of State implemented the Structural Adjustment Programme (SAP)?",
    options: [
      { id: 'a', text: "General Murtala Muhammed" },
      { id: 'b', text: "General Ibrahim Babangida", correct: true },
      { id: 'c', text: "General Sani Abacha" },
      { id: 'd', text: "General Yakubu Gowon" }
    ],
    correctAnswer: "General Ibrahim Babangida",
    explanation: "The SAP was a major economic reform policy introduced by General Babangida in the mid-1980s.",
    hint: "This leader was known for his 'political dribbles'."
  },
  {
    id: 18,
    text: "The 'get it done' military boss who was assassinated after only a few months in office was:",
    options: [
      { id: 'a', text: "General Olusegun Obasanjo" },
      { id: 'b', text: "General Sani Abacha" },
      { id: 'c', text: "General Murtala Muhammed", correct: true },
      { id: 'd', text: "General Aguiyi-Ironsi" }
    ],
    correctAnswer: "General Murtala Muhammed",
    explanation: "Murtala's reign was short-lived as he was killed in a coup attempt in 1976.",
    hint: "His successor completed his plan for a return to civilian rule."
  },
  {
    id: 19,
    text: "Who was the Premier of the Northern Region during the First Republic?",
    options: [
      { id: 'a', text: "Sir Abubakar Tafawa Balewa" },
      { id: 'b', text: "Chief Obafemi Awolowo" },
      { id: 'c', text: "Ahmadu Bello", correct: true },
      { id: 'd', text: "Dr. Nnamdi Azikiwe" }
    ],
    correctAnswer: "Ahmadu Bello",
    explanation: "Ahmadu Bello was the powerful Premier of the Northern Region and a key figure in the politics of that era.",
    hint: "He was a powerhouse in the North and a major political figure."
  },
  {
    id: 20,
    text: "What was the initial reaction of the Northern Region to General Aguiyi-Ironsi's attempt to switch to a unitary system?",
    options: [
      { id: 'a', text: "It was strongly supported." },
      { id: 'b', text: "It was met with strong opposition and backfired.", correct: true },
      { id: 'c', text: "It led to a successful counter-coup immediately." },
      { id: 'd', text: "It caused an oil boom." }
    ],
    correctAnswer: "It was met with strong opposition and backfired.",
    explanation: "Ironsi's move was perceived as an attempt to centralize power and was a major factor in the July 1966 counter-coup.",
    hint: "This decision was like merging all group chats into one, which some did not like."
  },
  {
    id: 21,
    text: "The Second Republic, which followed the first military rule, was launched in what year?",
    options: [
      { id: 'a', text: "1966" },
      { id: 'b', text: "1970" },
      { id: 'c', text: "1979", correct: true },
      { id: 'd', text: "1983" }
    ],
    correctAnswer: "1979",
    explanation: "General Olusegun Obasanjo handed over power to the civilian government in 1979, ushering in the Second Republic.",
    hint: "This was the first time a military leader voluntarily gave up power."
  },
  {
    id: 22,
    text: "Who was the military leader who took over after the death of General Murtala Muhammed and completed the transition to civilian rule?",
    options: [
      { id: 'a', text: "General Ibrahim Babangida" },
      { id: 'b', text: "General Sani Abacha" },
      { id: 'c', text: "General Olusegun Obasanjo", correct: true },
      { id: 'd', text: "General Yakubu Gowon" }
    ],
    correctAnswer: "General Olusegun Obasanjo",
    explanation: "After Murtala Muhammed's death, his deputy, Obasanjo, took over and successfully completed the planned transition to democracy.",
    hint: "He was a key figure in both the military and democratic eras."
  },
  {
    id: 23,
    text: "The Civil War began in what year?",
    options: [
      { id: 'a', text: "1960" },
      { id: 'b', text: "1966" },
      { id: 'c', text: "1967", correct: true },
      { id: 'd', text: "1970" }
    ],
    correctAnswer: "1967",
    explanation: "The war started in 1967 after the Eastern Region declared its secession.",
    hint: "This was a year after the second military coup."
  },
  {
    id: 24,
    text: "The 'drama and plot twists' that led to the First Coup were primarily caused by:",
    options: [
      { id: 'a', text: "A peaceful protest" },
      { id: 'b', text: "Economic prosperity and oil wealth" },
      { id: 'c', text: "Ethnic and political drama stirred by colonial decisions", correct: true },
      { id: 'd', text: "A successful 'War Against Indiscipline'" }
    ],
    correctAnswer: "Ethnic and political drama stirred by colonial decisions",
    explanation: "The First Republic faced significant instability due to deep-seated ethnic and political tensions that were a legacy of the colonial era.",
    hint: "The text says these issues 'turned the group chat toxic'."
  },
  {
    id: 25,
    text: "The first military Head of State after the coup of January 15, 1966 was:",
    options: [
      { id: 'a', text: "General Yakubu Gowon" },
      { id: 'b', text: "General Aguiyi-Ironsi", correct: true },
      { id: 'c', text: "General Olusegun Obasanjo" },
      { id: 'd', text: "General Murtala Muhammed" }
    ],
    correctAnswer: "General Aguiyi-Ironsi",
    explanation: "General Aguiyi-Ironsi took over power following the January 1966 coup, though his rule was short-lived.",
    hint: "He was later overthrown in a counter-coup."
  },
  {
    id: 26,
    text: "The Civil War ended in which year?",
    options: [
      { id: 'a', text: "1966" },
      { id: 'b', text: "1967" },
      { id: 'c', text: "1969" },
      { id: 'd', text: "1970", correct: true }
    ],
    correctAnswer: "1970",
    explanation: "The war concluded in 1970 with the surrender of Biafra.",
    hint: "This was the year Gowon gave his famous 'No Victor, No Vanquished' speech."
  },
  {
    id: 27,
    text: "Who led the Northern Region as Premier and was a powerhouse in the politics of that time?",
    options: [
      { id: 'a', text: "Sir Abubakar Tafawa Balewa" },
      { id: 'b', text: "Chief Obafemi Awolowo" },
      { id: 'c', text: "Ahmadu Bello", correct: true },
      { id: 'd', text: "Dr. Nnamdi Azikiwe" }
    ],
    correctAnswer: "Ahmadu Bello",
    explanation: "Ahmadu Bello was the Premier of the Northern Region and a very influential political figure before the coup.",
    hint: "He was a prominent leader from the North who was killed in the 1966 coup."
  },
  {
    id: 28,
    text: "The military leader whose rule was known for 'drama bomb' and annulling an election was:",
    options: [
      { id: 'a', text: "General Yakubu Gowon" },
      { id: 'b', text: "General Murtala Muhammed" },
      { id: 'c', text: "General Ibrahim Babangida", correct: true },
      { id: 'd', text: "General Sani Abacha" }
    ],
    correctAnswer: "General Ibrahim Babangida",
    explanation: "Babangida's reign was characterized by political uncertainty, including the annulment of the June 12, 1993, election.",
    hint: "His political style earned him a famous nickname."
  },
  {
    id: 29,
    text: "The Nigerian Civil War lasted for how many years?",
    options: [
      { id: 'a', text: "Two years" },
      { id: 'b', text: "Three years", correct: true },
      { id: 'c', text: "Four years" },
      { id: 'd', text: "One year" }
    ],
    correctAnswer: "Three years",
    explanation: "The war started in 1967 and ended in 1970, lasting for a brutal three-year period.",
    hint: "Think about the duration from its start to end date."
  },
  {
    id: 30,
    text: "What was the initial structure of Nigeria's government at independence?",
    options: [
      { id: 'a', text: "A unitary state" },
      { id: 'b', text: "A military dictatorship" },
      { id: 'c', text: "A federal republic", correct: true },
      { id: 'd', text: "A monarchy" }
    ],
    correctAnswer: "A federal republic",
    explanation: "Nigeria was formed as a federal republic with a parliamentary system, consisting of three federating regions.",
    hint: "Remember the three 'flavors' that made up the squad."
  }
];

export default questions;