const questions = [
  {
    id: 1,
    text: "In what year did the British first annex Lagos, officially beginning the colonial era in Nigeria?",
    options: [
      { id: 'a', text: "1897" },
      { id: 'b', text: "1900" },
      { id: 'c', text: "1861", correct: true },
      { id: 'd', text: "1914" }
    ],
    correctAnswer: "1861",
    explanation: "The British annexation of Lagos in 1861 is the event that marks the formal beginning of the colonial period in Nigeria.",
    hint: "The year is mentioned right at the beginning of the first content section."
  },
  {
    id: 2,
    text: "Who is credited with coining the name 'Nigeria'?",
    options: [
      { id: 'a', text: "Lord Lugard" },
      { id: 'b', text: "Nnamdi Azikiwe" },
      { id: 'c', text: "Flora Shaw", correct: true },
      { id: 'd', text: "Obafemi Awolowo" }
    ],
    correctAnswer: "Flora Shaw",
    explanation: "Flora Shaw, a British journalist and the wife of Lord Lugard, proposed the name 'Nigeria' in 1897, inspired by the Niger River.",
    hint: "The answer is found in the 'Tea Spill' section."
  },
  {
    id: 3,
    text: "The amalgamation of the Northern and Southern Protectorates occurred in which year?",
    options: [
      { id: 'a', text: "1861" },
      { id: 'b', text: "1900" },
      { id: 'c', text: "1897" },
      { id: 'd', text: "1914", correct: true }
    ],
    correctAnswer: "1914",
    explanation: "Lord Lugard was responsible for the amalgamation of the Northern and Southern Protectorates into a single entity, Nigeria, in 1914.",
    hint: "This is a key date mentioned under 'Major Plot Points'."
  },
  {
    id: 4,
    text: "The British implemented Indirect Rule primarily to:",
    options: [
      { id: 'a', text: "Promote local customs and traditions." },
      { id: 'b', text: "Install their own officials in every village." },
      { id: 'c', text: "Rule with limited British manpower by using local leaders.", correct: true },
      { id: 'd', text: "Prepare the country for immediate independence." }
    ],
    correctAnswer: "Rule with limited British manpower by using local leaders.",
    explanation: "Indirect Rule was a strategy to govern the vast territory with a small number of British officials by delegating authority to pre-existing local structures.",
    hint: "The text describes Indirect Rule as 'outsourcing the admin work' because the British didn't have enough people."
  },
  {
    id: 5,
    text: "What was the main reason Indirect Rule was considered successful in Northern Nigeria?",
    options: [
      { id: 'a', text: "The use of 'warrant chiefs'." },
      { id: 'b', text: "The presence of a centralized system with Emirs.", correct: true },
      { id: 'c', text: "The lack of resistance from the local population." },
      { id: 'd', text: "The abundance of natural resources." }
    ],
    correctAnswer: "The presence of a centralized system with Emirs.",
    explanation: "The British were able to effectively apply Indirect Rule in the North by working through the existing, well-established authority of the Emirs and their Islamic system.",
    hint: "The 'Indirect Rule in the North' section highlights how they worked with the Emirs."
  },
  {
    id: 6,
    text: "The Aba Women's Riot of 1929 was a direct response to which British colonial policy?",
    options: [
      { id: 'a', text: "The amalgamation of Nigeria." },
      { id: 'b', text: "The creation of 'warrant chiefs' in the South.", correct: true },
      { id: 'c', text: "The introduction of railways." },
      { id: 'd', text: "The naming of Nigeria." }
    ],
    correctAnswer: "The creation of 'warrant chiefs' in the South.",
    explanation: "The 'warrant chiefs' system was a major failure in the South, particularly Igbo land, as it lacked a basis in local tradition, leading to widespread discontent and the Aba Women's Riot.",
    hint: "The section on 'South: A Total Mess!' links the creation of 'warrant chiefs' to the Aba Women's Riot."
  },
  {
    id: 7,
    text: "A significant positive outcome of British colonial rule, as mentioned in the text, was the development of:",
    options: [
      { id: 'a', text: "A self-sufficient local economy." },
      { id: 'b', text: "Political parties." },
      { id: 'c', text: "Railways and roads.", correct: true },
      { id: 'd', text: "An independent judiciary." }
    ],
    correctAnswer: "Railways and roads.",
    explanation: "The British built railways and roads primarily to facilitate the export of raw materials like cocoa and palm oil, which is listed as a 'Cool Stuff' outcome.",
    hint: "This is one of the key points under 'The Cool Stuff (Kinda)'."
  },
  {
    id: 8,
    text: "What was the primary economic focus of British colonial rule in Nigeria?",
    options: [
      { id: 'a', text: "Developing local industries for Nigerian consumption." },
      { id: 'b', text: "Exporting raw materials for British use.", correct: true },
      { id: 'c', text: "Establishing a strong local currency." },
      { id: 'd', text: "Investing in education and healthcare." }
    ],
    correctAnswer: "Exporting raw materials for British use.",
    explanation: "The text states that the economy was 'all about Britain’s bag,' with Nigeria serving as a 'raw material plug.'",
    hint: "Check the 'Not-So-Cool Stuff' section for the economic impact."
  },
  {
    id: 9,
    text: "Which of these was a negative consequence of the amalgamation of diverse Nigerian groups?",
    options: [
      { id: 'a', text: "The introduction of modern infrastructure." },
      { id: 'b', text: "The rise of nationalist movements." },
      { id: 'c', text: "Ethnic and political tension.", correct: true },
      { id: 'd', text: "The spread of Western education." }
    ],
    correctAnswer: "Ethnic and political tension.",
    explanation: "The forced union of disparate groups in 1914 is cited as a source of ongoing 'ethnic and political drama.'",
    hint: "This consequence is explicitly mentioned under 'The Not-So-Cool Stuff'."
  },
  {
    id: 10,
    text: "Who was Lord Lugard's wife, a British journalist who named Nigeria?",
    options: [
      { id: 'a', text: "Flora Shaw", correct: true },
      { id: 'b', text: "Queen Victoria" },
      { id: 'c', text: "Margaret Thatcher" },
      { id: 'd', text: "Flora Nwapa" }
    ],
    correctAnswer: "Flora Shaw",
    explanation: "The text specifically mentions that Flora Shaw, Lord Lugard's wife, was the journalist who named the country.",
    hint: "The answer is provided in the 'Tea Spill' fact box."
  },
  {
    id: 11,
    text: "The British came to Nigeria with the initial goal of:",
    options: [
      { id: 'a', text: "Stopping the slave trade and acquiring resources.", correct: true },
      { id: 'b', text: "Bringing democracy to the local people." },
      { id: 'c', text: "Establishing a new capital city." },
      { id: 'd', text: "Introducing a new religion." }
    ],
    correctAnswer: "Stopping the slave trade and acquiring resources.",
    explanation: "The first paragraph of the text states that the British came 'to stop the slave trade, push their goods, and grab resources.'",
    hint: "This is mentioned in the very first paragraph of the content."
  },
  {
    id: 12,
    text: "Which event marked the beginning of a single, unified Nigeria?",
    options: [
      { id: 'a', text: "The annexation of Lagos in 1861." },
      { id: 'b', text: "The formation of the Northern and Southern Protectorates in 1900." },
      { id: 'c', text: "The amalgamation in 1914.", correct: true },
      { id: 'd', text: "Independence Day in 1960." }
    ],
    correctAnswer: "The amalgamation in 1914.",
    explanation: "The amalgamation was the event that 'mashed North and South into one Nigeria.'",
    hint: "Look at the 'Major Plot Points' for the year of the amalgamation."
  },
  {
    id: 13,
    text: "In Southern Nigeria, the British's attempt to use Indirect Rule failed because:",
    options: [
      { id: 'a', text: "The British did not send enough officials." },
      { id: 'b', text: "There were no existing central kings or leaders.", correct: true },
      { id: 'c', text: "The local people did not want schools or hospitals." },
      { id: 'd', text: "The climate was unsuitable for British officials." }
    ],
    correctAnswer: "There were no existing central kings or leaders.",
    explanation: "The 'South: A Total Mess!' section explains that unlike the North, the South (especially Igbo land) 'had no central kings,' leading the British to invent 'warrant chiefs' which caused problems.",
    hint: "This is a key detail in the section on Indirect Rule in the South."
  },
  {
    id: 14,
    text: "The British built infrastructure like railways and roads for what purpose?",
    options: [
      { id: 'a', text: "To connect local communities." },
      { id: 'b', text: "To improve public transportation for Nigerians." },
      { id: 'c', text: "To export raw materials.", correct: true },
      { id: 'd', text: "To attract foreign tourists." }
    ],
    correctAnswer: "To export raw materials.",
    explanation: "The content explicitly states that the railways and roads were built 'to ship out cocoa and palm oil.'",
    hint: "Find the section about the 'Cool Stuff' of colonial rule."
  },
  {
    id: 15,
    text: "What major event of resistance is mentioned as a 'clapback' to the British in the South?",
    options: [
      { id: 'a', text: "The Niger River Expedition." },
      { id: 'b', text: "The Calabar Rebellion." },
      { id: 'c', text: "The Aba Women's Riot of 1929.", correct: true },
      { id: 'd', text: "The Hausa-Fulani Revolt." }
    ],
    correctAnswer: "The Aba Women's Riot of 1929.",
    explanation: "The 'South: A Total Mess!' section identifies the Aba Women's Riot as the 'ultimate clapback' against the British policy of 'warrant chiefs.'",
    hint: "The term 'clapback' is used to describe this specific event in the text."
  },
  {
    id: 16,
    text: "Who were the legendary Nigerian nationalists mentioned in the content?",
    options: [
      { id: 'a', text: "Nelson Mandela and Kwame Nkrumah." },
      { id: 'b', text: "Wole Soyinka and Chinua Achebe." },
      { id: 'c', text: "Nnamdi Azikiwe, Obafemi Awolowo, and Ahmadu Bello.", correct: true },
      { id: 'd', text: "King Jaja of Opobo and Oba Ovonramwen." }
    ],
    correctAnswer: "Nnamdi Azikiwe, Obafemi Awolowo, and Ahmadu Bello.",
    explanation: "The 'Road to Freedom!' section names these three individuals as the 'legends' who fought for Nigeria's independence.",
    hint: "Check the final section about the road to independence."
  },
  {
    id: 17,
    text: "When did Nigeria gain independence from British rule?",
    options: [
      { id: 'a', text: "October 1, 1960", correct: true },
      { id: 'b', text: "January 1, 1914" },
      { id: 'c', text: "October 1, 1950" },
      { id: 'd', text: "January 1, 1960" }
    ],
    correctAnswer: "October 1, 1960",
    explanation: "The content proudly states, 'October 1, 1960: Naija’s Free!'",
    hint: "This is the final, celebratory date at the end of the text."
  },
  {
    id: 18,
    text: "Which of these was a 'Cool Stuff' missionary contribution mentioned in the text?",
    options: [
      { id: 'a', text: "Building railways." },
      { id: 'b', text: "Introducing Western education and medicine.", correct: true },
      { id: 'c', text: "Ending ethnic drama." },
      { id: 'd', text: "Creating a new government." }
    ],
    correctAnswer: "Introducing Western education and medicine.",
    explanation: "The text says missionaries brought 'schools and hospitals, dropping Western education and medicine.'",
    hint: "Look at the bullet points under 'The Cool Stuff (Kinda)'."
  },
  {
    id: 19,
    text: "The term 'Warrant Chiefs' refers to:",
    options: [
      { id: 'a', text: "Traditional rulers with inherited titles." },
      { id: 'b', text: "Local leaders appointed by the British in the South.", correct: true },
      { id: 'c', text: "British officials who oversaw local affairs." },
      { id: 'd', text: "Leaders of the Aba Women's Riot." }
    ],
    correctAnswer: "Local leaders appointed by the British in the South.",
    explanation: "The text says the British 'invented 'warrant chiefs'' in the South because there were no central kings.",
    hint: "This term is found in the 'South: A Total Mess!' section."
  },
  {
    id: 20,
    text: "What was the main inspiration for Flora Shaw's name 'Nigeria'?",
    options: [
      { id: 'a', text: "The Sahara Desert." },
      { id: 'b', text: "The Niger River.", correct: true },
      { id: 'c', text: "The Yoruba people." },
      { id: 'd', text: "The colonial capital of Lagos." }
    ],
    correctAnswer: "The Niger River.",
    explanation: "The 'Tea Spill!' fact box explicitly states she got her inspiration from the Niger River.",
    hint: "This information is in the first section of the text."
  },
  {
    id: 21,
    text: "The British established the Northern and Southern Protectorates in what year?",
    options: [
      { id: 'a', text: "1861" },
      { id: 'b', text: "1897" },
      { id: 'c', text: "1900", correct: true },
      { id: 'd', text: "1914" }
    ],
    correctAnswer: "1900",
    explanation: "The 'Major Plot Points' list specifies that the Northern and Southern Protectorates were formed in 1900.",
    hint: "Find the list of historical dates in the first content section."
  },
  {
    id: 22,
    text: "According to the text, what was a negative consequence of British economic policy in Nigeria?",
    options: [
      { id: 'a', text: "Increased local competition." },
      { id: 'b', text: "A focus on raw material extraction for Britain's benefit.", correct: true },
      { id: 'c', text: "The closure of local markets." },
      { id: 'd', text: "The end of the slave trade." }
    ],
    correctAnswer: "A focus on raw material extraction for Britain's benefit.",
    explanation: "The content notes that the economy was 'all about Britain’s bag,' and Nigeria was seen as a 'raw material plug,' which is a negative outcome.",
    hint: "Check the section on 'The Not-So-Cool Stuff'."
  },
  {
    id: 23,
    text: "The system of Indirect Rule in Northern Nigeria worked well primarily due to:",
    options: [
      { id: 'a', text: "The invention of new leaders." },
      { id: 'b', text: "The support of the Emirs and their existing system.", correct: true },
      { id: 'c', text: "The absence of any formal government." },
      { id: 'd', text: "The suppression of all local customs." }
    ],
    correctAnswer: "The support of the Emirs and their existing system.",
    explanation: "The text states the British 'kept the Emirs and their Islamic system' in place, which made Indirect Rule effective in the North.",
    hint: "This is highlighted in the 'Indirect Rule in the North' section."
  },
  {
    id: 24,
    text: "The main goal of the nationalist movement in Nigeria was to:",
    options: [
      { id: 'a', text: "Adopt a new religion." },
      { id: 'b', text: "Fight for freedom and independence.", correct: true },
      { id: 'c', text: "Ally with other African nations." },
      { id: 'd', text: "Develop a new economic system." }
    ],
    correctAnswer: "Fight for freedom and independence.",
    explanation: "The 'Road to Freedom!' section describes the nationalists as having 'fought for freedom,' leading to Independence Day.",
    hint: "Look at the final section of the provided content."
  },
  {
    id: 25,
    text: "What major political figure was responsible for the amalgamation of Nigeria?",
    options: [
      { id: 'a', text: "Nnamdi Azikiwe" },
      { id: 'b', text: "Obafemi Awolowo" },
      { id: 'c', text: "Lord Lugard", correct: true },
      { id: 'd', text: "Flora Shaw" }
    ],
    correctAnswer: "Lord Lugard",
    explanation: "The content explicitly mentions that 'Lord Lugard mashed North and South into one Nigeria' in 1914.",
    hint: "The name is found in the 'Major Plot Points' list."
  },
  {
    id: 26,
    text: "The British policy of 'Indirect Rule' can be best described as:",
    options: [
      { id: 'a', text: "Directly governing from London." },
      { id: 'b', text: "Ruling through local, existing power structures.", correct: true },
      { id: 'c', text: "A system of military governance." },
      { id: 'd', text: "Giving Nigerians full autonomy." }
    ],
    correctAnswer: "Ruling through local, existing power structures.",
    explanation: "Indirect Rule is described as a system where the British used existing local leaders and systems to 'outsource the admin work.'",
    hint: "The second content section explains how the British 'ran the show.'"
  },
  {
    id: 27,
    text: "The British initially arrived in Lagos to:",
    options: [
      { id: 'a', text: "Start a new colony for their citizens." },
      { id: 'b', text: "End the slave trade and gain control of resources.", correct: true },
      { id: 'c', text: "Explore the Niger River." },
      { id: 'd', text: "Negotiate a trade treaty." }
    ],
    correctAnswer: "End the slave trade and gain control of resources.",
    explanation: "The first paragraph of the content states that the British's goals were to 'stop the slave trade, push their goods, and grab resources.'",
    hint: "This is the very first detail given in the 'When the British Crashed Naija’s Party!' section."
  },
  {
    id: 28,
    text: "What kind of infrastructure did the British build to support their economic goals?",
    options: [
      { id: 'a', text: "Hospitals and schools." },
      { id: 'b', text: "Major airports." },
      { id: 'c', text: "Railways and roads.", correct: true },
      { id: 'd', text: "New cities and towns." }
    ],
    correctAnswer: "Railways and roads.",
    explanation: "The content mentions that 'Railways and roads popped up to ship out cocoa and palm oil,' which were key British economic interests.",
    hint: "This is one of the 'Cool Stuff' points in the text."
  },
  {
    id: 29,
    text: "What major challenge did the British face when applying Indirect Rule in the South?",
    options: [
      { id: 'a', text: "Lack of military support." },
      { id: 'b', text: "Strong centralized kingdoms like in the North." },
      { id: 'c', text: "Absence of traditional, centralized authority.", correct: true },
      { id: 'd', text: "Widespread poverty." }
    ],
    correctAnswer: "Absence of traditional, centralized authority.",
    explanation: "The text explains that the South, especially 'Igbo land, had no central kings,' which made implementing Indirect Rule difficult.",
    hint: "Look at the 'South: A Total Mess!' section for this specific issue."
  },
  {
    id: 30,
    text: "The final section of the text, 'Road to Freedom!', highlights the emergence of:",
    options: [
      { id: 'a', text: "Political and ethnic unity." },
      { id: 'b', text: "The Aba Women's Riot." },
      { id: 'c', text: "The Nigerian nationalist movement.", correct: true },
      { id: 'd', text: "British military power." }
    ],
    correctAnswer: "The Nigerian nationalist movement.",
    explanation: "This section discusses how 'Nigerians got tired' and how 'legends like Nnamdi Azikiwe...fought for freedom,' which describes the nationalist movement.",
    hint: "The title of the section and the content within it give the answer."
  }
];

export default questions;