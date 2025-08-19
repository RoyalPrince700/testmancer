const questions = [
  {
    id: 1,
    text: "Which ancient Nigerian civilization was famous for its terracotta sculptures, dating back to 500 BC?",
    options: [
      { id: 'a', text: "The Yoruba Kingdom" },
      { id: 'b', text: "The Benin Kingdom" },
      { id: 'c', text: "The Nok Civilization", correct: true },
      { id: 'd', text: "The Igbo Communities" }
    ],
    correctAnswer: "The Nok Civilization",
    explanation: "The Nok civilization is noted for its early terracotta art, which are considered some of the oldest sculptural works in Africa.",
    hint: "This civilization is described as Nigeria's 'first art influencers'."
  },
  {
    id: 2,
    text: "In the pre-colonial era, which group of communities in the Southeast practiced a decentralized political system without a single king or ruler?",
    options: [
      { id: 'a', text: "The Hausa-Fulani States" },
      { id: 'b', text: "The Yoruba Kingdoms" },
      { id: 'c', text: "The Igbo Communities", correct: true },
      { id: 'd', text: "The Benin Kingdom" }
    ],
    correctAnswer: "The Igbo Communities",
    explanation: "The Igbo political system was decentralized, with power shared among councils of elders, Ozo title holders, and age grades.",
    hint: "This group's governance is compared to a 'group chat democracy'."
  },
  {
    id: 3,
    text: "The pre-colonial Oyo and Ife were powerful kingdoms in which Nigerian region?",
    options: [
      { id: 'a', text: "The North" },
      { id: 'b', text: "The Southeast" },
      { id: 'c', text: "The Southwest", correct: true },
      { id: 'd', text: "The Middle Belt" }
    ],
    correctAnswer: "The Southwest",
    explanation: "The Yoruba Kingdoms of Oyo and Ife were located in the southwestern part of Nigeria.",
    hint: "These kingdoms were described as the 'Lagos of their time'."
  },
  {
    id: 4,
    text: "What was the main economic hustle for pre-colonial Nigerian communities?",
    options: [
      { id: 'a', text: "Mining of precious metals" },
      { id: 'b', text: "Manufacturing of textiles" },
      { id: 'c', text: "Agriculture", correct: true },
      { id: 'd', text: "Large-scale fishing" }
    ],
    correctAnswer: "Agriculture",
    explanation: "Agriculture was the primary economic activity, with crops like yams, millet, and palm oil being the 'cash crops'.",
    hint: "The text mentions this as the 'main hustle'."
  },
  {
    id: 5,
    text: "Which of the following was a key feature of the centralized political systems in the North and Southwest?",
    options: [
      { id: 'a', text: "Power shared among all families" },
      { id: 'b', text: "Absence of a single ruler" },
      { id: 'c', text: "Rule by Emirs, Obas, or Alaafins", correct: true },
      { id: 'd', text: "Decisions made by age grades" }
    ],
    correctAnswer: "Rule by Emirs, Obas, or Alaafins",
    explanation: "The centralized states were characterized by powerful rulers like Emirs in the North and Obas/Alaafins in the Southwest.",
    hint: "Think about the 'ultimate CEO vibes' of these states."
  },
  {
    id: 6,
    text: "The Benin Kingdom was particularly renowned for its:",
    options: [
      { id: 'a', text: "Complex textile weaving" },
      { id: 'b', text: "Terracotta sculptures" },
      { id: 'c', text: "Bronze art and craftsmanship", correct: true },
      { id: 'd', text: "Sophisticated pottery" }
    ],
    correctAnswer: "Bronze art and craftsmanship",
    explanation: "The Benin Kingdom was famous for its exquisite bronze plaques and sculptures, which often depicted royalty and historical events.",
    hint: "The text states their 'bronze art screamed royalty'."
  },
  {
    id: 7,
    text: "What council in the Oyo Empire had the power to check the Alaafin’s authority, acting like a 'board of directors'?",
    options: [
      { id: 'a', text: "The Council of Chiefs" },
      { id: 'b', text: "The Emirs" },
      { id: 'c', text: "The Oyo Mesi", correct: true },
      { id: 'd', text: "The Ozo title holders" }
    ],
    correctAnswer: "The Oyo Mesi",
    explanation: "The Oyo Mesi was a powerful council of chiefs that had the authority to serve as a check on the Alaafin's power.",
    hint: "This council had 'veto power' over the Alaafin."
  },
  {
    id: 8,
    text: "Which region's political system is best described as being ahead of its time for its 'pure democratic vibes'?",
    options: [
      { id: 'a', text: "The North" },
      { id: 'b', text: "The Southwest" },
      { id: 'c', text: "The Southeast", correct: true },
      { id: 'd', text: "The Niger Delta" }
    ],
    correctAnswer: "The Southeast",
    explanation: "The Igbo communities in the Southeast operated a decentralized system where decisions were made collectively, which is compared to 'pure democratic vibes'.",
    hint: "This region's motto was 'No king, no stress!'"
  },
  {
    id: 9,
    text: "In the pre-colonial North, what was the title of the rulers who led the states?",
    options: [
      { id: 'a', text: "Obas" },
      { id: 'b', text: "Alaafins" },
      { id: 'c', text: "Emirs", correct: true },
      { id: 'd', text: "Obas" }
    ],
    correctAnswer: "Emirs",
    explanation: "The Hausa-Fulani states in the North were led by Emirs, who were powerful Islamic rulers.",
    hint: "The text refers to them as having 'ultimate CEO vibes'."
  },
  {
    id: 10,
    text: "Which of the following was NOT a trade item that coastal cities like Benin and Calabar traded with European merchants?",
    options: [
      { id: 'a', text: "Pepper" },
      { id: 'b', text: "Ivory" },
      { id: 'c', text: "Gold", correct: true },
      { id: 'd', text: "Enslaved people" }
    ],
    correctAnswer: "Gold",
    explanation: "The text mentions pepper, ivory, and enslaved people as trade items, but does not mention gold.",
    hint: "Reread the section on 'Local Markets to Global Glow-Up!' carefully."
  },
  {
    id: 11,
    text: "In pre-colonial Yoruba religion, who was the supreme being?",
    options: [
      { id: 'a', text: "Chukwu" },
      { id: 'b', text: "Sango" },
      { id: 'c', text: "Olodumare", correct: true },
      { id: 'd', text: "Ogun" }
    ],
    correctAnswer: "Olodumare",
    explanation: "Olodumare is the supreme deity in the traditional Yoruba religion.",
    hint: "This name is mentioned in the 'Culture Scene' section of the text."
  },
  {
    id: 12,
    text: "The political structure of the Hausa-Fulani states can be described as:",
    options: [
      { id: 'a', text: "Decentralized with no single leader" },
      { id: 'b', text: "Centralized with a powerful ruler", correct: true },
      { id: 'c', text: "A group democracy with shared power" },
      { id: 'd', text: "A loose confederation of villages" }
    ],
    correctAnswer: "Centralized with a powerful ruler",
    explanation: "The Hausa-Fulani states were centralized, led by Emirs who ran 'tight ships' and collected tribute.",
    hint: "Think of them as having 'CEO vibes'."
  },
  {
    id: 13,
    text: "Which of the following describes the trade network of the Northern Nigerian states?",
    options: [
      { id: 'a', text: "Primarily with European coastal traders" },
      { id: 'b', text: "Limited to local markets" },
      { id: 'c', text: "Linked to trans-Saharan trade routes", correct: true },
      { id: 'd', text: "Non-existent due to geographical barriers" }
    ],
    correctAnswer: "Linked to trans-Saharan trade routes",
    explanation: "The Northern states were a key part of the trans-Saharan trade, which connected them to North Africa and the wider world.",
    hint: "The text describes this as a 'highway of the day' for the North."
  },
  {
    id: 14,
    text: "In Igbo communities, what role did the Ozo title holders play?",
    options: [
      { id: 'a', text: "They were military generals" },
      { id: 'b', text: "They were the supreme rulers" },
      { id: 'c', text: "They were part of the shared power system", correct: true },
      { id: 'd', text: "They were traders with Europeans" }
    ],
    correctAnswer: "They were part of the shared power system",
    explanation: "Ozo title holders were one of the groups, along with councils of elders and age grades, that shared power in the decentralized Igbo system.",
    hint: "The text mentions them as part of the 'group project' governance."
  },
  {
    id: 15,
    text: "What was the dominant religion in the pre-colonial Hausa-Fulani states from the 10th century?",
    options: [
      { id: 'a', text: "Christianity" },
      { id: 'b', text: "Traditional Yoruba religion" },
      { id: 'c', text: "Buddhism" },
      { id: 'd', text: "Islam", correct: true }
    ],
    correctAnswer: "Islam",
    explanation: "The Hausa-Fulani states in the North were known for their 'Islamic vibes', which had been present since the 10th century.",
    hint: "Look for the religion mentioned in the 'Culture Scene' section of the text for the North."
  },
  {
    id: 16,
    text: "What type of political system did the Yoruba kingdoms have?",
    options: [
      { id: 'a', text: "Decentralized with no central authority" },
      { id: 'b', text: "Centralized with a supreme ruler", correct: true },
      { id: 'c', text: "A pure democracy" },
      { id: 'd', text: "A matriarchy" }
    ],
    correctAnswer: "Centralized with a supreme ruler",
    explanation: "The Yoruba kingdoms were centralized states led by Obas and Alaafins.",
    hint: "They are included in the 'Centralized States' section of the text."
  },
  {
    id: 17,
    text: "Which of these pre-colonial kingdoms was famous for its 'bronze art that screamed royalty'?",
    options: [
      { id: 'a', text: "The Oyo Empire" },
      { id: 'b', text: "The Benin Kingdom", correct: true },
      { id: 'c', text: "The Sokoto Caliphate" },
      { id: 'd', text: "The Nupe Kingdom" }
    ],
    correctAnswer: "The Benin Kingdom",
    explanation: "The Benin Kingdom is historically famous for its detailed bronze sculptures and plaques, which are highly valued as art.",
    hint: "The text uses a powerful metaphor to describe their art."
  },
  {
    id: 18,
    text: "The decentralized political system of the Igbo communities relied on the collective decision-making of all of these EXCEPT:",
    options: [
      { id: 'a', text: "Councils of elders" },
      { id: 'b', text: "Ozo title holders" },
      { id: 'c', text: "The Alaafin", correct: true },
      { id: 'd', text: "Age grades" }
    ],
    correctAnswer: "The Alaafin",
    explanation: "The Alaafin was a ruler in the Yoruba kingdom, a centralized system, and had no role in the decentralized Igbo governance.",
    hint: "The Alaafin belonged to a different political system described in the text."
  },
  {
    id: 19,
    text: "What was a significant negative consequence of the trade with European traders mentioned in the text?",
    options: [
      { id: 'a', text: "It led to a decrease in local crafts" },
      { id: 'b', text: "It caused an increase in food prices" },
      { id: 'c', text: "It introduced the trade of enslaved people", correct: true },
      { id: 'd', text: "It created political instability" }
    ],
    correctAnswer: "It introduced the trade of enslaved people",
    explanation: "The text explicitly mentions that coastal cities traded with Europeans for 'pepper, ivory, and later, sadly, enslaved people.'",
    hint: "Look for the part of the text that mentions a 'sadly' aspect of trade."
  },
  {
    id: 20,
    text: "Which of these crops was a primary part of the pre-colonial Nigerian agricultural economy?",
    options: [
      { id: 'a', text: "Cotton" },
      { id: 'b', text: "Millet", correct: true },
      { id: 'c', text: "Cocoa" },
      { id: 'd', text: "Coffee" }
    ],
    correctAnswer: "Millet",
    explanation: "The text lists millet, yams, and palm oil as the main 'cash crops' of the time.",
    hint: "The answer is one of the three crops listed as the 'main hustle'."
  },
  {
    id: 21,
    text: "What does the text refer to when it says the Nok civilization were 'Nigeria’s first art influencers'?",
    options: [
      { id: 'a', text: "Their paintings" },
      { id: 'b', text: "Their pottery" },
      { id: 'c', text: "Their famous terracotta sculptures", correct: true },
      { id: 'd', text: "Their wooden carvings" }
    ],
    correctAnswer: "Their famous terracotta sculptures",
    explanation: "The text highlights the Nok civilization's fire terracotta sculptures as their major artistic contribution.",
    hint: "The 'Fun Fact Alert' section holds the key."
  },
  {
    id: 22,
    text: "The 'group chat democracy' analogy is used to describe the political system of which group?",
    options: [
      { id: 'a', text: "The Yoruba" },
      { id: 'b', text: "The Hausa-Fulani" },
      { id: 'c', text: "The Igbo", correct: true },
      { id: 'd', text: "The Benin" }
    ],
    correctAnswer: "The Igbo",
    explanation: "The decentralized system of the Igbo communities, where power was shared among different groups, is compared to a 'group chat where everyone gets a say'.",
    hint: "This group said, 'No king, no stress!'"
  },
  {
    id: 23,
    text: "What was the role of Emirs and Alaafins in their respective political systems?",
    options: [
      { id: 'a', text: "They were spiritual leaders" },
      { id: 'b', text: "They were elected officials" },
      { id: 'c', text: "They were central rulers and powerful figures", correct: true },
      { id: 'd', text: "They were military advisors" }
    ],
    correctAnswer: "They were central rulers and powerful figures",
    explanation: "Emirs and Alaafins were the 'ultimate CEO' figures in their centralized states, running a 'tight ship'.",
    hint: "They are the leaders of the 'Centralized States'."
  },
  {
    id: 24,
    text: "The pre-colonial Igbo communities practiced a system where decisions were made together by:",
    options: [
      { id: 'a', text: "A single king and his cabinet" },
      { id: 'b', text: "A powerful council of Emirs" },
      { id: 'c', text: "Councils of elders, Ozo title holders, and age grades", correct: true },
      { id: 'd', text: "Obas and their chiefs" }
    ],
    correctAnswer: "Councils of elders, Ozo title holders, and age grades",
    explanation: "In the decentralized Igbo system, power was shared collectively among these three groups.",
    hint: "The text says 'Power was shared like a group project'."
  },
  {
    id: 25,
    text: "Which pre-colonial group had a system where the ruler was checked by a council with veto power?",
    options: [
      { id: 'a', text: "The Hausa-Fulani States" },
      { id: 'b', text: "The Oyo Empire", correct: true },
      { id: 'c', text: "The Igbo Communities" },
      { id: 'd', text: "The Benin Kingdom" }
    ],
    correctAnswer: "The Oyo Empire",
    explanation: "The Alaafin of the Oyo Empire had his power checked by the Oyo Mesi council, which had veto power.",
    hint: "This is an example of a check and balance system within a centralized state."
  },
  {
    id: 26,
    text: "What was the purpose of the trans-Saharan trade routes for the Northern states?",
    options: [
      { id: 'a', text: "To trade with coastal communities only" },
      { id: 'b', text: "To connect with North Africa and other parts of the world", correct: true },
      { id: 'c', text: "To export crops to Europe" },
      { id: 'd', text: "To facilitate internal trade only" }
    ],
    correctAnswer: "To connect with North Africa and other parts of the world",
    explanation: "The text mentions the North's connection to 'trans-Saharan trade' as a way to link them to a wider global network.",
    hint: "Think of these routes as the 'highways of the day'."
  },
  {
    id: 27,
    text: "The main form of social organization and support system in pre-colonial Nigeria was based on:",
    options: [
      { id: 'a', text: "Individualism" },
      { id: 'b', text: "Nuclear families" },
      { id: 'c', text: "The extended family system", correct: true },
      { id: 'd', text: "Isolated communities" }
    ],
    correctAnswer: "The extended family system",
    explanation: "The text states that 'extended families were the ultimate support system' in pre-colonial Nigeria.",
    hint: "Look at the 'Culture Scene' section for this answer."
  },
  {
    id: 28,
    text: "What was the name of the supreme deity for the Igbo people?",
    options: [
      { id: 'a', text: "Olodumare" },
      { id: 'b', text: "Chukwu", correct: true },
      { id: 'c', text: "Ogun" },
      { id: 'd', text: "Sango" }
    ],
    correctAnswer: "Chukwu",
    explanation: "The text mentions 'Igbo had Chukwu' as part of the section on religion.",
    hint: "This name is mentioned in the 'Culture Scene' section of the text."
  },
  {
    id: 29,
    text: "Which pre-colonial group is described as having 'Islamic vibes with epic trade game'?",
    options: [
      { id: 'a', text: "The Benin Kingdom" },
      { id: 'b', text: "The Yoruba Kingdoms" },
      { id: 'c', text: "The Hausa-Fulani States", correct: true },
      { id: 'd', text: "The Igbo Communities" }
    ],
    correctAnswer: "The Hausa-Fulani States",
    explanation: "The text links the Hausa-Fulani states to their Islamic culture and strong trade activities.",
    hint: "This group was located in the North."
  },
  {
    id: 30,
    text: "The political systems in pre-colonial Nigeria can be broadly categorized as:",
    options: [
      { id: 'a', text: "Military and civilian" },
      { id: 'b', text: "Centralized and decentralized", correct: true },
      { id: 'c', text: "Monarchical and republican" },
      { id: 'd', text: "Dictatorial and democratic" }
    ],
    correctAnswer: "Centralized and decentralized",
    explanation: "The text describes two main types of political systems: centralized states (North and Southwest) and decentralized systems (Southeast).",
    hint: "The text compares these systems to choosing between a solo DJ and a full band."
  }
];

export default questions;