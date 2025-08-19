const questions = [
  {
    id: 1,
    text: "Who was the first and only Prime Minister of Nigeria?",
    options: [
      { id: 'a', text: "Dr. Nnamdi Azikiwe" },
      { id: 'b', text: "Chief Obafemi Awolowo" },
      { id: 'c', text: "Sir Abubakar Tafawa Balewa", correct: true },
      { id: 'd', text: "General Olusegun Obasanjo" }
    ],
    correctAnswer: "Sir Abubakar Tafawa Balewa",
    explanation: "Sir Abubakar Tafawa Balewa held the position of Prime Minister during the First Republic.",
    hint: "He was known as the 'Golden Voice of the North'."
  },
  {
    id: 2,
    text: "What was Dr. Nnamdi Azikiwe's title during the First Republic?",
    options: [
      { id: 'a', text: "Prime Minister" },
      { id: 'b', text: "Premier of the Western Region" },
      { id: 'c', text: "First President of Nigeria", correct: true },
      { id: 'd', text: "Head of State" }
    ],
    correctAnswer: "First President of Nigeria",
    explanation: "Dr. Nnamdi Azikiwe served as the ceremonial President, while Sir Abubakar Tafawa Balewa was the Prime Minister.",
    hint: "His nickname was 'Zik of Africa'."
  },
  {
    id: 3,
    text: "Chief Obafemi Awolowo was a key figure who advocated for which of the following?",
    options: [
      { id: 'a', text: "Abolishing the federation" },
      { id: 'b', text: "Pan-African unity" },
      { id: 'c', text: "Free education and welfare", correct: true },
      { id: 'd', text: "A military government" }
    ],
    correctAnswer: "Free education and welfare",
    explanation: "Awolowo was known for his visionary ideas, including the implementation of free education in the Western Region.",
    hint: "He was the Premier of the Western Region."
  },
  {
    id: 4,
    text: "Which military Head of State introduced a 'War Against Indiscipline'?",
    options: [
      { id: 'a', text: "General Sani Abacha" },
      { id: 'b', text: "General Ibrahim Babangida" },
      { id: 'c', text: "General Olusegun Obasanjo" },
      { id: 'd', text: "General Muhammadu Buhari", correct: true }
    ],
    correctAnswer: "General Muhammadu Buhari",
    explanation: "General Buhari's reign from 1983-1985 was characterized by a strict campaign to fight corruption and indiscipline.",
    hint: "He later returned as a civilian president."
  },
  {
    id: 5,
    text: "The military leader who reunited Nigeria after the Civil War with the policy 'No Victor, No Vanquished' was:",
    options: [
      { id: 'a', text: "General Murtala Muhammed" },
      { id: 'b', text: "General Yakubu Gowon", correct: true },
      { id: 'c', text: "General Aguiyi-Ironsi" },
      { id: 'd', text: "General Abdulsalami Abubakar" }
    ],
    correctAnswer: "General Yakubu Gowon",
    explanation: "General Gowon was the Head of State during the Civil War and initiated the policy of reconciliation afterward.",
    hint: "His era also saw the creation of 12 new states."
  },
  {
    id: 6,
    text: "Which Head of State had a massive anti-corruption campaign but was assassinated shortly after?",
    options: [
      { id: 'a', text: "General Sani Abacha" },
      { id: 'b', text: "General Yakubu Gowon" },
      { id: 'c', text: "General Murtala Muhammed", correct: true },
      { id: 'd', text: "General Aguiyi-Ironsi" }
    ],
    correctAnswer: "General Murtala Muhammed",
    explanation: "Murtala Muhammed's short but impactful reign was marked by a strong anti-corruption drive, and he was tragically killed in a coup attempt.",
    hint: "He is often remembered as a legend for his reforms."
  },
  {
    id: 7,
    text: "General Olusegun Obasanjo first came to power as a military Head of State and is remembered for what key action?",
    options: [
      { id: 'a', text: "Annulled the 1993 elections" },
      { id: 'b', text: "Initiated the 'War Against Indiscipline'" },
      { id: 'c', text: "Handed over power to a civilian government", correct: true },
      { id: 'd', text: "Created 12 new states" }
    ],
    correctAnswer: "Handed over power to a civilian government",
    explanation: "Obasanjo was the first military leader to voluntarily hand over power to an elected civilian administration in 1979.",
    hint: "He would later return to power as a civilian president."
  },
  {
    id: 8,
    text: "The annulment of the 1993 presidential elections is associated with which military leader?",
    options: [
      { id: 'a', text: "General Abdulsalami Abubakar" },
      { id: 'b', text: "General Ibrahim Babangida", correct: true },
      { id: 'c', text: "General Sani Abacha" },
      { id: 'd', text: "General Yakubu Gowon" }
    ],
    correctAnswer: "General Ibrahim Babangida",
    explanation: "General Babangida, nicknamed 'Maradona', is known for his political dribbles, including the controversial annulment of the June 12, 1993 election.",
    hint: "His economic reform program was known as SAP."
  },
  {
    id: 9,
    text: "Which of the following Presidents of the Fourth Republic is known for wiping out Nigeria's foreign debt and establishing the EFCC?",
    options: [
      { id: 'a', text: "Alhaji Umaru Musa Yar’Adua" },
      { id: 'b', text: "Dr. Goodluck Ebele Jonathan" },
      { id: 'c', text: "Chief Olusegun Obasanjo", correct: true },
      { id: 'd', text: "Muhammadu Buhari" }
    ],
    correctAnswer: "Chief Olusegun Obasanjo",
    explanation: "As President from 1999-2007, Obasanjo secured debt relief for Nigeria and established key anti-graft agencies.",
    hint: "He served two terms as a civilian president."
  },
  {
    id: 10,
    text: "General Abdulsalami Abubakar's short reign is significant because he:",
    options: [
      { id: 'a', text: "Introduced a unitary system of government" },
      { id: 'b', text: "Executed Ken Saro-Wiwa" },
      { id: 'c', text: "Implemented the Structural Adjustment Programme" },
      { id: 'd', text: "Returned the country to democracy", correct: true }
    ],
    correctAnswer: "Returned the country to democracy",
    explanation: "Abdulsalami Abubakar took over after Abacha's death and quickly set up a transition program that restored civilian rule.",
    hint: "He is seen as a key figure in the return to democracy in 1999."
  },
  {
    id: 11,
    text: "Which President of the Fourth Republic is credited with a peaceful handover of power in 2015, which was a major milestone for Nigeria's democracy?",
    options: [
      { id: 'a', text: "Chief Olusegun Obasanjo" },
      { id: 'b', text: "Muhammadu Buhari" },
      { id: 'c', text: "Dr. Goodluck Ebele Jonathan", correct: true },
      { id: 'd', text: "Alhaji Umaru Musa Yar’Adua" }
    ],
    correctAnswer: "Dr. Goodluck Ebele Jonathan",
    explanation: "Jonathan's decision to concede the election and peacefully hand over power was hailed as a significant democratic achievement.",
    hint: "He also initiated an amnesty program for Niger Delta militants."
  },
  {
    id: 12,
    text: "The military head of state known for his iron-fisted rule and human rights abuses, including the execution of Ken Saro-Wiwa, was:",
    options: [
      { id: 'a', text: "General Murtala Muhammed" },
      { id: 'b', text: "General Aguiyi-Ironsi" },
      { id: 'c', text: "General Sani Abacha", correct: true },
      { id: 'd', text: "General Ibrahim Babangida" }
    ],
    correctAnswer: "General Sani Abacha",
    explanation: "Abacha's regime from 1993-1998 was widely condemned for its suppression of political opposition and human rights violations.",
    hint: "His death paved the way for a return to democracy."
  },
  {
    id: 13,
    text: "Which leader was the first military Head of State after the first coup in 1966?",
    options: [
      { id: 'a', text: "General Yakubu Gowon" },
      { id: 'b', text: "General Aguiyi-Ironsi", correct: true },
      { id: 'c', text: "General Murtala Muhammed" },
      { id: 'd', text: "General Olusegun Obasanjo" }
    ],
    correctAnswer: "General Aguiyi-Ironsi",
    explanation: "Ironsi took power after the January 1966 coup, but his attempt to switch to a unitary system was met with resistance.",
    hint: "His reign was short-lived, lasting only a few months."
  },
  {
    id: 14,
    text: "Alhaji Umaru Musa Yar’Adua is remembered for his 7-point agenda that focused on areas like:",
    options: [
      { id: 'a', text: "Privatization of all public enterprises" },
      { id: 'b', text: "Infrastructure, education, and energy", correct: true },
      { id: 'c', text: "A strict anti-corruption campaign only" },
      { id: 'd', text: "Creating more states" }
    ],
    correctAnswer: "Infrastructure, education, and energy",
    explanation: "Yar'Adua's 7-point agenda was a development plan aimed at improving critical sectors of the Nigerian economy.",
    hint: "He was known for his humble approach to leadership."
  },
  {
    id: 15,
    text: "The 'Golden Voice of the North' is a nickname for which Nigerian leader?",
    options: [
      { id: 'a', text: "Dr. Nnamdi Azikiwe" },
      { id: 'b', text: "Sir Abubakar Tafawa Balewa", correct: true },
      { id: 'c', text: "Chief Obafemi Awolowo" },
      { id: 'd', text: "Alhaji Umaru Musa Yar’Adua" }
    ],
    correctAnswer: "Sir Abubakar Tafawa Balewa",
    explanation: "Sir Abubakar Tafawa Balewa was given this nickname due to his excellent oratorical skills and calm demeanor.",
    hint: "He was Nigeria's first and only Prime Minister."
  },
  {
    id: 16,
    text: "General Aguiyi-Ironsi's attempt to unify the country by switching to a unitary system was met with backlash primarily from which region?",
    options: [
      { id: 'a', text: "The South" },
      { id: 'b', text: "The West" },
      { id: 'c', text: "The North", correct: true },
      { id: 'd', text: "The East" }
    ],
    correctAnswer: "The North",
    explanation: "His Decree 34, which aimed to establish a unitary system, was poorly received in the North and contributed to the counter-coup.",
    hint: "This action backfired and led to a counter-coup."
  },
  {
    id: 17,
    text: "Which leader's era saw a significant oil boom and the creation of 12 new states?",
    options: [
      { id: 'a', text: "General Sani Abacha" },
      { id: 'b', text: "General Ibrahim Babangida" },
      { id: 'c', text: "General Yakubu Gowon", correct: true },
      { id: 'd', text: "General Olusegun Obasanjo" }
    ],
    correctAnswer: "General Yakubu Gowon",
    explanation: "During Gowon's time as Head of State, Nigeria experienced an oil boom and he restructured the country into 12 states.",
    hint: "He famously said, 'No Victor, No Vanquished'."
  },
  {
    id: 18,
    text: "Which of the following was a key policy of Chief Obafemi Awolowo as Premier of the Western Region?",
    options: [
      { id: 'a', text: "Nationalization of all industries" },
      { id: 'b', text: "Free healthcare for all citizens" },
      { id: 'c', text: "Compulsory military service" },
      { id: 'd', text: "Free primary education", correct: true }
    ],
    correctAnswer: "Free primary education",
    explanation: "Awolowo is widely celebrated for pioneering free primary education in the Western Region.",
    hint: "His legacy is often associated with social welfare."
  },
  {
    id: 19,
    text: "The establishment of the EFCC (Economic and Financial Crimes Commission) is a major legacy of which President?",
    options: [
      { id: 'a', text: "Alhaji Umaru Musa Yar’Adua" },
      { id: 'b', text: "Dr. Goodluck Ebele Jonathan" },
      { id: 'c', text: "Chief Olusegun Obasanjo", correct: true },
      { id: 'd', text: "Muhammadu Buhari" }
    ],
    correctAnswer: "Chief Olusegun Obasanjo",
    explanation: "Obasanjo established the EFCC and the ICPC to combat corruption during his civilian presidency.",
    hint: "He also secured debt relief for Nigeria."
  },
  {
    id: 20,
    text: "Who was nicknamed 'Maradona' for his political maneuvers and controversial policies?",
    options: [
      { id: 'a', text: "General Sani Abacha" },
      { id: 'b', text: "General Ibrahim Babangida", correct: true },
      { id: 'c', text: "General Murtala Muhammed" },
      { id: 'd', text: "General Yakubu Gowon" }
    ],
    correctAnswer: "General Ibrahim Babangida",
    explanation: "General Babangida earned the nickname 'Maradona' due to his perceived dribbling and unpredictable political actions.",
    hint: "He was Head of State from 1985 to 1993."
  },
  {
    id: 21,
    text: "The peaceful handover of power from one democratically elected president to another first occurred in Nigeria in 2015 between which two leaders?",
    options: [
      { id: 'a', text: "Obasanjo and Yar’Adua" },
      { id: 'b', text: "Buhari and Tinubu" },
      { id: 'c', text: "Jonathan and Buhari", correct: true },
      { id: 'd', text: "Babangida and Shonekan" }
    ],
    correctAnswer: "Jonathan and Buhari",
    explanation: "Dr. Goodluck Jonathan conceded defeat and peacefully handed over power to Muhammadu Buhari, a landmark event in Nigeria's democratic history.",
    hint: "This event happened during the Fourth Republic."
  },
  {
    id: 22,
    text: "Which leader is associated with the policy of 'Renewed Hope' and the removal of fuel subsidies?",
    options: [
      { id: 'a', text: "Muhammadu Buhari" },
      { id: 'b', text: "Dr. Goodluck Ebele Jonathan" },
      { id: 'c', text: "Bola Ahmed Tinubu", correct: true },
      { id: 'd', text: "Chief Olusegun Obasanjo" }
    ],
    correctAnswer: "Bola Ahmed Tinubu",
    explanation: "Tinubu’s presidency began with bold economic decisions, including the removal of fuel subsidies, under his 'Renewed Hope' agenda.",
    hint: "He is Nigeria's current president."
  },
  {
    id: 23,
    text: "The Head of State who planned for a return to democracy and created new states before his assassination was:",
    options: [
      { id: 'a', text: "General Aguiyi-Ironsi" },
      { id: 'b', text: "General Yakubu Gowon" },
      { id: 'c', text: "General Murtala Muhammed", correct: true },
      { id: 'd', text: "General Abdulsalami Abubakar" }
    ],
    correctAnswer: "General Murtala Muhammed",
    explanation: "Murtala's reign, though short, was highly impactful. He initiated a plan for a transition to civilian rule, which was completed by his successor.",
    hint: "He was seen as a hero for his reforms."
  },
  {
    id: 24,
    text: "What was a significant challenge faced by Sir Abubakar Tafawa Balewa's government that led to the first coup?",
    options: [
      { id: 'a', text: "An oil boom" },
      { id: 'b', text: "A peaceful transition to democracy" },
      { id: 'c', text: "Inter-regional political tensions and rivalries", correct: true },
      { id: 'd', text: "A successful 'War Against Indiscipline'" }
    ],
    correctAnswer: "Inter-regional political tensions and rivalries",
    explanation: "The First Republic was plagued by political beef and drama among the regional leaders and parties, which led to the coup.",
    hint: "He was the Prime Minister who tried to unite the shaky federation."
  },
  {
    id: 25,
    text: "The military leader who took over from Sani Abacha and quickly freed political prisoners was:",
    options: [
      { id: 'a', text: "General Ibrahim Babangida" },
      { id: 'b', text: "General Abdulsalami Abubakar", correct: true },
      { id: 'c', text: "General Muhammadu Buhari" },
      { id: 'd', text: "General Olusegun Obasanjo" }
    ],
    correctAnswer: "General Abdulsalami Abubakar",
    explanation: "Abdulsalami Abubakar's short term was marked by a series of actions aimed at transitioning the country back to democracy, including the release of political detainees.",
    hint: "His rule was a quick resolution after a dark period."
  },
  {
    id: 26,
    text: "As a civilian President, Muhammadu Buhari is credited with which of the following achievements?",
    options: [
      { id: 'a', text: "Ending the Nigerian Civil War" },
      { id: 'b', text: "Building the 2nd Niger Bridge and other infrastructure projects", correct: true },
      { id: 'c', text: "Introducing free primary education nationwide" },
      { id: 'd', text: "Implementing the Structural Adjustment Programme" }
    ],
    correctAnswer: "Building the 2nd Niger Bridge and other infrastructure projects",
    explanation: "Buhari's democratic administration focused on infrastructure development, including completing projects like the 2nd Niger Bridge.",
    hint: "His presidency was marked by a focus on fighting insecurity and corruption."
  },
  {
    id: 27,
    text: "What was a major issue that led to the ousting of General Muhammadu Buhari in his first time as a Head of State?",
    options: [
      { id: 'a', text: "His failure to win the war against indiscipline" },
      { id: 'b', text: "His success in stabilizing the economy" },
      { id: 'c', text: "Struggles with the economy despite his tough policies", correct: true },
      { id: 'd', text: "A peaceful protest" }
    ],
    correctAnswer: "Struggles with the economy despite his tough policies",
    explanation: "Despite his anti-indiscipline campaign, the economy faced tough challenges which contributed to his overthrow.",
    hint: "He was seen as a strict leader."
  },
  {
    id: 28,
    text: "Who was the Head of State who implemented the controversial Structural Adjustment Programme (SAP)?",
    options: [
      { id: 'a', text: "General Sani Abacha" },
      { id: 'b', text: "General Ibrahim Babangida", correct: true },
      { id: 'c', text: "General Yakubu Gowon" },
      { id: 'd', text: "General Olusegun Obasanjo" }
    ],
    correctAnswer: "General Ibrahim Babangida",
    explanation: "General Babangida introduced the SAP to address economic challenges, though it had mixed results.",
    hint: "His nickname was 'Maradona'."
  },
  {
    id: 29,
    text: "Which of the following describes Dr. Nnamdi Azikiwe's role as President of Nigeria?",
    options: [
      { id: 'a', text: "He was the chief executive with full powers." },
      { id: 'b', text: "He had limited, ceremonial powers.", correct: true },
      { id: 'c', text: "He served as a military Head of State." },
      { id: 'd', text: "He was both the Prime Minister and President." }
    ],
    correctAnswer: "He had limited, ceremonial powers.",
    explanation: "As the first President, Zik’s role was largely ceremonial, while the Prime Minister held the executive power.",
    hint: "He was the ultimate hype man for pan-African vibes."
  },
  {
    id: 30,
    text: "The 'Zik of Africa' is a famous nickname for which Nigerian leader?",
    options: [
      { id: 'a', text: "Chief Obafemi Awolowo" },
      { id: 'b', text: "Sir Abubakar Tafawa Balewa" },
      { id: 'c', text: "Dr. Nnamdi Azikiwe", correct: true },
      { id: 'd', text: "General Olusegun Obasanjo" }
    ],
    correctAnswer: "Dr. Nnamdi Azikiwe",
    explanation: "Dr. Nnamdi Azikiwe was famously known as the 'Zik of Africa' for his pan-Africanist ideals and influence.",
    hint: "He was Nigeria's first President."
  }
];

export default questions;