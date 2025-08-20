const questions = [
  {
    id: 1,
    text: "At the University of Ilorin, students prepare for post-UTME exams in the bustling library. The air is filled with the sound of flipping pages and whispered discussions. Despite the intense study sessions, students remain motivated, aiming for admission into Unilorin's competitive programs. What is the main idea of the passage?",
    options: [
      { id: 'a', text: "The social life at Unilorin" },
      { id: 'b', text: "The intense preparation for Unilorin's post-UTME", correct: true },
      { id: 'c', text: "The history of Unilorin" },
      { id: 'd', text: "The architecture of Unilorin's library" }
    ],
    correctAnswer: "The intense preparation for Unilorin's post-UTME",
    explanation: "The passage focuses on students' dedicated preparation for Unilorin's post-UTME in the library, highlighting their motivation and study environment.",
    hint: "Focus on what the students are doing in the library."
  },
  {
    id: 2,
    text: "At the University of Ilorin, students prepare for post-UTME exams in the bustling library. The air is filled with the sound of flipping pages and whispered discussions. Despite the intense study sessions, students remain motivated, aiming for admission into Unilorin's competitive programs. What does 'bustling' mean in the context of Unilorin's library?",
    options: [
      { id: 'a', text: "Dark and gloomy" },
      { id: 'b', text: "Cold and silent" },
      { id: 'c', text: "Busy and lively", correct: true },
      { id: 'd', text: "Quiet and empty" }
    ],
    correctAnswer: "Busy and lively",
    explanation: "In the library context, 'bustling' refers to a lively and busy atmosphere, supported by sounds of pages and discussions.",
    hint: "Think about the sounds described in the library."
  },
  {
    id: 3,
    text: "At the University of Ilorin, students prepare for post-UTME exams in the bustling library. The air is filled with the sound of flipping pages and whispered discussions. Despite the intense study sessions, students remain motivated, aiming for admission into Unilorin's competitive programs. Why do students remain motivated in Unilorin's library?",
    options: [
      { id: 'a', text: "They aim for admission into competitive programs", correct: true },
      { id: 'b', text: "They have free food" },
      { id: 'c', text: "They enjoy the library's silence" },
      { id: 'd', text: "They study short hours" }
    ],
    correctAnswer: "They aim for admission into competitive programs",
    explanation: "The passage states that students are motivated because they aim for admission into Unilorin's competitive programs.",
    hint: "Look for the reason given for students' motivation."
  },
  {
    id: 4,
    text: "At the University of Ilorin, students prepare for post-UTME exams in the bustling library. The air is filled with the sound of flipping pages and whispered discussions. Despite the intense study sessions, students remain motivated, aiming for admission into Unilorin's competitive programs. What can be inferred about Unilorin's post-UTME programs?",
    options: [
      { id: 'a', text: "They require no preparation" },
      { id: 'b', text: "They are easy to get into" },
      { id: 'c', text: "They are only for local students" },
      { id: 'd', text: "They are highly competitive", correct: true }
    ],
    correctAnswer: "They are highly competitive",
    explanation: "The passage describes Unilorin's programs as 'competitive,' implying they are challenging to gain admission into.",
    hint: "Focus on the adjective used to describe Unilorin's programs."
  },
  {
    id: 5,
    text: "Mama Bola's canteen near Unilorin's main gate serves hot amala and egusi stew to students. Her warm smile and generous portions make it a favorite spot. Despite long queues, students enjoy the lively chatter while waiting. What is a key detail about Mama Bola's canteen?",
    options: [
      { id: 'a', text: "It has no queues" },
      { id: 'b', text: "It offers hot amala and egusi stew", correct: true },
      { id: 'c', text: "It is located in Lagos" },
      { id: 'd', text: "It serves only jollof rice" }
    ],
    correctAnswer: "It offers hot amala and egusi stew",
    explanation: "The passage specifies that Mama Bola's canteen serves hot amala and egusi stew.",
    hint: "Look for the food mentioned in the canteen description."
  },
  {
    id: 6,
    text: "Mama Bola's canteen near Unilorin's main gate serves hot amala and egusi stew to students. Her warm smile and generous portions make it a favorite spot. Despite long queues, students enjoy the lively chatter while waiting. What does 'generous' mean in the context of Mama Bola's portions?",
    options: [
      { id: 'a', text: "Tasteless and plain" },
      { id: 'b', text: "Small and limited" },
      { id: 'c', text: "Large and plentiful", correct: true },
      { id: 'd', text: "Expensive and rare" }
    ],
    correctAnswer: "Large and plentiful",
    explanation: "In the context of food portions, 'generous' means serving large and plentiful amounts, making the canteen popular.",
    hint: "Think about why students like Mama Bola's food."
  },
  {
    id: 7,
    text: "Mama Bola's canteen near Unilorin's main gate serves hot amala and egusi stew to students. Her warm smile and generous portions make it a favorite spot. Despite long queues, students enjoy the lively chatter while waiting. Why is Mama Bola's canteen a favorite spot for Unilorin students?",
    options: [
      { id: 'a', text: "It serves free food" },
      { id: 'b', text: "Her warm smile and generous portions", correct: true },
      { id: 'c', text: "It has no queues" },
      { id: 'd', text: "It is far from Unilorin" }
    ],
    correctAnswer: "Her warm smile and generous portions",
    explanation: "The passage explicitly states that her warm smile and generous portions make the canteen a favorite spot.",
    hint: "Look for what makes the canteen popular with students."
  },
  {
    id: 8,
    text: "Mama Bola's canteen near Unilorin's main gate serves hot amala and egusi stew to students. Her warm smile and generous portions make it a favorite spot. Despite long queues, students enjoy the lively chatter while waiting. What can be inferred about the atmosphere at Mama Bola's canteen?",
    options: [
      { id: 'a', text: "It is lively and social", correct: true },
      { id: 'b', text: "It is quiet and boring" },
      { id: 'c', text: "It is cold and unwelcoming" },
      { id: 'd', text: "It is stressful and chaotic" }
    ],
    correctAnswer: "It is lively and social",
    explanation: "The passage mentions 'lively chatter' and Mama Bola's warm smile, suggesting a social and lively atmosphere.",
    hint: "Consider how students behave while waiting at the canteen."
  },
  {
    id: 9,
    text: "In Ilorin's Oja-Oba market, traders sell fresh tomatoes and peppers under colorful canopies. The market buzzes with activity as buyers negotiate prices. Many Unilorin students visit to buy ingredients for their meals. What is the main idea of the passage?",
    options: [
      { id: 'a', text: "The challenges of market trading" },
      { id: 'b', text: "The farming of tomatoes in Ilorin" },
      { id: 'c', text: "The lively trade at Oja-Oba market", correct: true },
      { id: 'd', text: "The history of Ilorin markets" }
    ],
    correctAnswer: "The lively trade at Oja-Oba market",
    explanation: "The passage focuses on the vibrant trading activity at Oja-Oba market, mentioning traders, buyers, and Unilorin students.",
    hint: "Focus on the main activity described in the market."
  },
  {
    id: 10,
    text: "In Ilorin's Oja-Oba market, traders sell fresh tomatoes and peppers under colorful canopies. The market buzzes with activity as buyers negotiate prices. Many Unilorin students visit to buy ingredients for their meals. What does 'buzzes' mean in the context of Oja-Oba market?",
    options: [
      { id: 'a', text: "Is empty and quiet" },
      { id: 'b', text: "Is full of energy and activity", correct: true },
      { id: 'c', text: "Is dark and gloomy" },
      { id: 'd', text: "Is silent and calm" }
    ],
    correctAnswer: "Is full of energy and activity",
    explanation: "In the market context, 'buzzes' refers to a lively and energetic atmosphere, supported by the description of trading and negotiations.",
    hint: "Think about the activity level in the market."
  },
  {
    id: 11,
    text: "In Ilorin's Oja-Oba market, traders sell fresh tomatoes and peppers under colorful canopies. The market buzzes with activity as buyers negotiate prices. Many Unilorin students visit to buy ingredients for their meals. Why do Unilorin students visit Oja-Oba market?",
    options: [
      { id: 'a', text: "To negotiate canopies" },
      { id: 'b', text: "To sell tomatoes" },
      { id: 'c', text: "To buy ingredients for meals", correct: true },
      { id: 'd', text: "To meet traders" }
    ],
    correctAnswer: "To buy ingredients for meals",
    explanation: "The passage states that Unilorin students visit the market to buy ingredients for their meals.",
    hint: "Look for the reason students go to the market."
  },
  {
    id: 12,
    text: "In Ilorin's Oja-Oba market, traders sell fresh tomatoes and peppers under colorful canopies. The market buzzes with activity as buyers negotiate prices. Many Unilorin students visit to buy ingredients for their meals. What can be inferred about the goods sold at Oja-Oba market?",
    options: [
      { id: 'a', text: "They are fresh and local", correct: true },
      { id: 'b', text: "They are expensive and rare" },
      { id: 'c', text: "They are only for traders" },
      { id: 'd', text: "They are mostly imported" }
    ],
    correctAnswer: "They are fresh and local",
    explanation: "The passage mentions 'fresh tomatoes and peppers,' suggesting local and fresh produce.",
    hint: "Focus on the description of the market's goods."
  },
  {
    id: 13,
    text: "Unilorin's lecture halls are packed with students during exam season. Lecturers use projectors to display notes, making lessons engaging. Despite the large classes, students focus intensely, hoping to excel in their post-UTME. What is a key detail about Unilorin's lecture halls?",
    options: [
      { id: 'a', text: "They lack modern equipment" },
      { id: 'b', text: "Lecturers use projectors for notes", correct: true },
      { id: 'c', text: "They are small and quiet" },
      { id: 'd', text: "They are empty during exam season" }
    ],
    correctAnswer: "Lecturers use projectors for notes",
    explanation: "The passage specifies that lecturers use projectors to display notes in Unilorin's lecture halls.",
    hint: "Look for how lecturers teach in the halls."
  },
  {
    id: 14,
    text: "Unilorin's lecture halls are packed with students during exam season. Lecturers use projectors to display notes, making lessons engaging. Despite the large classes, students focus intensely, hoping to excel in their post-UTME. What does 'engaging' mean in the context of Unilorin's lectures?",
    options: [
      { id: 'a', text: "Quiet and serious" },
      { id: 'b', text: "Interesting and interactive", correct: true },
      { id: 'c', text: "Boring and dull" },
      { id: 'd', text: "Confusing and complex" }
    ],
    correctAnswer: "Interesting and interactive",
    explanation: "In the context of using projectors, 'engaging' means lessons are interesting and interactive for students.",
    hint: "Think about how projectors affect the lessons."
  },
  {
    id: 15,
    text: "Unilorin's lecture halls are packed with students during exam season. Lecturers use projectors to display notes, making lessons engaging. Despite the large classes, students focus intensely, hoping to excel in their post-UTME. Why do students focus intensely in Unilorin's lecture halls?",
    options: [
      { id: 'a', text: "They like the projectors" },
      { id: 'b', text: "They enjoy large classes" },
      { id: 'c', text: "They have small classes" },
      { id: 'd', text: "They hope to excel in their post-UTME", correct: true }
    ],
    correctAnswer: "They hope to excel in their post-UTME",
    explanation: "The passage states that students focus intensely because they hope to excel in their post-UTME.",
    hint: "Look for the reason students are focused."
  },
  {
    id: 16,
    text: "Unilorin's lecture halls are packed with students during exam season. Lecturers use projectors to display notes, making lessons engaging. Despite the large classes, students focus intensely, hoping to excel in their post-UTME. What can be inferred about the size of Unilorin's lecture classes?",
    options: [
      { id: 'a', text: "They are large and crowded", correct: true },
      { id: 'b', text: "They are held outdoors" },
      { id: 'c', text: "They are online only" },
      { id: 'd', text: "They are small and intimate" }
    ],
    correctAnswer: "They are large and crowded",
    explanation: "The passage mentions 'large classes' and halls being 'packed,' indicating crowded lecture settings.",
    hint: "Focus on the description of class size."
  },
  {
    id: 17,
    text: "In Ilorin, the annual Sallah festival brings joy with colorful durbar parades. Horsemen in vibrant attire gallop through the streets, cheered by crowds. Unilorin students often attend, capturing the event for their social media. What is the main idea of the passage?",
    options: [
      { id: 'a', text: "The vibrant Sallah festival in Ilorin", correct: true },
      { id: 'b', text: "The history of Sallah in Ilorin" },
      { id: 'c', text: "The challenges of parades" },
      { id: 'd', text: "The training of horsemen" }
    ],
    correctAnswer: "The vibrant Sallah festival in Ilorin",
    explanation: "The passage focuses on the lively Sallah festival, describing parades, horsemen, and Unilorin students' participation.",
    hint: "Focus on the main event described in Ilorin."
  },
  {
    id: 18,
    text: "In Ilorin, the annual Sallah festival brings joy with colorful durbar parades. Horsemen in vibrant attire gallop through the streets, cheered by crowds. Unilorin students often attend, capturing the event for their social media. What does 'gallop' mean in the context of the Sallah festival?",
    options: [
      { id: 'a', text: "Stand still" },
      { id: 'b', text: "Run quickly on horseback", correct: true },
      { id: 'c', text: "Walk slowly" },
      { id: 'd', text: "Dance gracefully" }
    ],
    correctAnswer: "Run quickly on horseback",
    explanation: "In the context of horsemen, 'gallop' refers to a fast run on horseback during the parade.",
    hint: "Think about how horsemen move in the parade."
  },
  {
    id: 19,
    text: "In Ilorin, the annual Sallah festival brings joy with colorful durbar parades. Horsemen in vibrant attire gallop through the streets, cheered by crowds. Unilorin students often attend, capturing the event for their social media. Why do Unilorin students attend the Sallah festival?",
    options: [
      { id: 'a', text: "To sell vibrant attire" },
      { id: 'b', text: "To organize the parade" },
      { id: 'c', text: "To capture the event for social media", correct: true },
      { id: 'd', text: "To ride horses" }
    ],
    correctAnswer: "To capture the event for social media",
    explanation: "The passage states that Unilorin students attend to capture the festival for their social media.",
    hint: "Look for what students do at the festival."
  },
  {
    id: 20,
    text: "In Ilorin, the annual Sallah festival brings joy with colorful durbar parades. Horsemen in vibrant attire gallop through the streets, cheered by crowds. Unilorin students often attend, capturing the event for their social media. What can be inferred about the Sallah festival's atmosphere?",
    options: [
      { id: 'a', text: "It is private and exclusive" },
      { id: 'b', text: "It is joyful and vibrant", correct: true },
      { id: 'c', text: "It is dull and quiet" },
      { id: 'd', text: "It is stressful and chaotic" }
    ],
    correctAnswer: "It is joyful and vibrant",
    explanation: "Words like 'joy,' 'colorful,' and 'cheered by crowds' suggest a vibrant and joyful festival atmosphere.",
    hint: "Consider the descriptive words for the festival."
  },
  {
    id: 21,
    text: "Chinedu's bookshop near Unilorin sells affordable JAMB and post-UTME textbooks. His small store is always crowded with students seeking study materials. Despite the limited space, Chinedu organizes books neatly, making it easy to find titles. What is a key detail about Chinedu's bookshop?",
    options: [
      { id: 'a', text: "It sells affordable JAMB textbooks", correct: true },
      { id: 'b', text: "It is located in Kano" },
      { id: 'c', text: "It sells food items" },
      { id: 'd', text: "It has plenty of space" }
    ],
    correctAnswer: "It sells affordable JAMB textbooks",
    explanation: "The passage specifies that Chinedu's bookshop sells affordable JAMB and post-UTME textbooks.",
    hint: "Look for what Chinedu's bookshop sells."
  },
  {
    id: 22,
    text: "Chinedu's bookshop near Unilorin sells affordable JAMB and post-UTME textbooks. His small store is always crowded with students seeking study materials. Despite the limited space, Chinedu organizes books neatly, making it easy to find titles. What does 'affordable' mean in the context of Chinedu's bookshop?",
    options: [
      { id: 'a', text: "Poorly organized" },
      { id: 'b', text: "Very expensive" },
      { id: 'c', text: "Reasonably priced", correct: true },
      { id: 'd', text: "Hard to find" }
    ],
    correctAnswer: "Reasonably priced",
    explanation: "In the context of textbooks, 'affordable' means reasonably priced, attracting students to the shop.",
    hint: "Think about why students buy from Chinedu's shop."
  },
  {
    id: 23,
    text: "Chinedu's bookshop near Unilorin sells affordable JAMB and post-UTME textbooks. His small store is always crowded with students seeking study materials. Despite the limited space, Chinedu organizes books neatly, making it easy to find titles. Why is Chinedu's bookshop always crowded?",
    options: [
      { id: 'a', text: "It is far from Unilorin" },
      { id: 'b', text: "It sells food items" },
      { id: 'c', text: "Students seek affordable study materials", correct: true },
      { id: 'd', text: "It has a large space" }
    ],
    correctAnswer: "Students seek affordable study materials",
    explanation: "The passage implies the shop is crowded because students seek affordable JAMB and post-UTME materials.",
    hint: "Consider why students visit Chinedu's shop."
  },
  {
    id: 24,
    text: "Chinedu's bookshop near Unilorin sells affordable JAMB and post-UTME textbooks. His small store is always crowded with students seeking study materials. Despite the limited space, Chinedu organizes books neatly, making it easy to find titles. What can be inferred about the organization of Chinedu's bookshop?",
    options: [
      { id: 'a', text: "It is closed most times" },
      { id: 'b', text: "It is neatly organized", correct: true },
      { id: 'c', text: "It is disorganized and messy" },
      { id: 'd', text: "It is spacious and empty" }
    ],
    correctAnswer: "It is neatly organized",
    explanation: "The passage states that Chinedu organizes books neatly, making titles easy to find despite limited space.",
    hint: "Focus on how books are arranged in the shop."
  },
  {
    id: 25,
    text: "In Ilorin, the Emir's palace hosts cultural events that attract Unilorin students. Performers in traditional attire sing Hausa songs, and the aroma of tuwo shinkafa fills the air. The events foster a sense of community pride. What is the main idea of the passage?",
    options: [
      { id: 'a', text: "The cultural events at the Emir's palace", correct: true },
      { id: 'b', text: "The preparation of tuwo shinkafa" },
      { id: 'c', text: "The challenges of hosting events" },
      { id: 'd', text: "The history of the Emir's palace" }
    ],
    correctAnswer: "The cultural events at the Emir's palace",
    explanation: "The passage focuses on the cultural events at the Emir's palace, mentioning performers, songs, and Unilorin students' attendance.",
    hint: "Focus on the main activity at the Emir's palace."
  },
  {
    id: 26,
    text: "In Ilorin, the Emir's palace hosts cultural events that attract Unilorin students. Performers in traditional attire sing Hausa songs, and the aroma of tuwo shinkafa fills the air. The events foster a sense of community pride. What does 'foster' mean in the context of the passage?",
    options: [
      { id: 'a', text: "Encourage and promote", correct: true },
      { id: 'b', text: "Ignore entirely" },
      { id: 'c', text: "Prevent completely" },
      { id: 'd', text: "Reduce significantly" }
    ],
    correctAnswer: "Encourage and promote",
    explanation: "In the context of cultural events, 'foster' means to encourage and promote community pride.",
    hint: "Think about the effect of the events on the community."
  },
  {
    id: 27,
    text: "In Ilorin, the Emir's palace hosts cultural events that attract Unilorin students. Performers in traditional attire sing Hausa songs, and the aroma of tuwo shinkafa fills the air. The events foster a sense of community pride. What is a key detail about the Emir's palace events?",
    options: [
      { id: 'a', text: "They exclude students" },
      { id: 'b', text: "Performers sing Hausa songs", correct: true },
      { id: 'c', text: "They feature modern music" },
      { id: 'd', text: "They are held in Lagos" }
    ],
    correctAnswer: "Performers sing Hausa songs",
    explanation: "The passage specifies that performers sing Hausa songs during the cultural events.",
    hint: "Look for what performers do at the events."
  },
  {
    id: 28,
    text: "In Ilorin, the Emir's palace hosts cultural events that attract Unilorin students. Performers in traditional attire sing Hausa songs, and the aroma of tuwo shinkafa fills the air. The events foster a sense of community pride. What can be inferred about the role of Unilorin students at the Emir's palace events?",
    options: [
      { id: 'a', text: "They organize the events" },
      { id: 'b', text: "They sell tuwo shinkafa" },
      { id: 'c', text: "They perform Hausa songs" },
      { id: 'd', text: "They attend as participants", correct: true }
    ],
    correctAnswer: "They attend as participants",
    explanation: "The passage states that the events 'attract Unilorin students,' implying they attend as participants.",
    hint: "Consider what students do at the palace events."
  },
  {
    id: 29,
    text: "Amina, a Unilorin aspirant, studies under a lantern in her village near Ilorin. Her dedication to passing the post-UTME drives her to review past questions daily. Her family supports her, believing she will succeed. What does the passage suggest about Amina's study habits?",
    options: [
      { id: 'a', text: "She studies in a library" },
      { id: 'b', text: "She is dedicated and reviews daily", correct: true },
      { id: 'c', text: "She studies only in the morning" },
      { id: 'd', text: "She avoids past questions" }
    ],
    correctAnswer: "She is dedicated and reviews daily",
    explanation: "The passage highlights Amina's dedication and daily review of past questions for the post-UTME.",
    hint: "Look for how Amina prepares for her exams."
  },
  {
    id: 30,
    text: "Amina, a Unilorin aspirant, studies under a lantern in her village near Ilorin. Her dedication to passing the post-UTME drives her to review past questions daily. Her family supports her, believing she will succeed. What can be inferred about Amina's study environment?",
    options: [
      { id: 'a', text: "It lacks electricity", correct: true },
      { id: 'b', text: "It is at Unilorin's library" },
      { id: 'c', text: "It is noisy and crowded" },
      { id: 'd', text: "It has reliable electricity" }
    ],
    correctAnswer: "It lacks electricity",
    explanation: "Amina's use of a lantern for studying suggests a lack of reliable electricity in her village.",
    hint: "Consider why Amina uses a lantern to study."
  }
];

export default questions;