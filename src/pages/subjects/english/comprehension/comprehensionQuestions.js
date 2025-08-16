const questions = [
  {
    id: 1,
    text: "What is the main idea of the passage?",
    passage: "At the University of Ilorin, students prepare for post-UTME exams in the bustling library. The air is filled with the sound of flipping pages and whispered discussions. Despite the intense study sessions, students remain motivated, aiming for admission into Unilorin's competitive programs.",
    options: [
      { id: 'a', text: "The history of Unilorin" },
      { id: 'b', text: "The intense preparation for Unilorin's post-UTME", correct: true },
      { id: 'c', text: "The architecture of Unilorin's library" },
      { id: 'd', text: "The social life at Unilorin" }
    ],
    correctAnswer: "The intense preparation for Unilorin's post-UTME",
    explanation: "The passage focuses on students' dedicated preparation for Unilorin's post-UTME in the library, highlighting their motivation and study environment.",
    hint: "Focus on what the students are doing in the library."
  },
  {
    id: 2,
    text: "What does 'bustling' mean in the context of Unilorin's library?",
    passage: "At the University of Ilorin, students prepare for post-UTME exams in the bustling library. The air is filled with the sound of flipping pages and whispered discussions. Despite the intense study sessions, students remain motivated, aiming for admission into Unilorin's competitive programs.",
    options: [
      { id: 'a', text: "Quiet and empty" },
      { id: 'b', text: "Busy and lively", correct: true },
      { id: 'c', text: "Dark and gloomy" },
      { id: 'd', text: "Cold and silent" }
    ],
    correctAnswer: "Busy and lively",
    explanation: "In the library context, 'bustling' refers to a lively and busy atmosphere, supported by sounds of pages and discussions.",
    hint: "Think about the sounds described in the library."
  },
  {
    id: 3,
    text: "Why do students remain motivated in Unilorin's library?",
    passage: "At the University of Ilorin, students prepare for post-UTME exams in the bustling library. The air is filled with the sound of flipping pages and whispered discussions. Despite the intense study sessions, students remain motivated, aiming for admission into Unilorin's competitive programs.",
    options: [
      { id: 'a', text: "They enjoy the library's silence" },
      { id: 'b', text: "They aim for admission into competitive programs", correct: true },
      { id: 'c', text: "They have free food" },
      { id: 'd', text: "They study short hours" }
    ],
    correctAnswer: "They aim for admission into competitive programs",
    explanation: "The passage states that students are motivated because they aim for admission into Unilorin's competitive programs.",
    hint: "Look for the reason given for students' motivation."
  },
  {
    id: 4,
    text: "What can be inferred about Unilorin's post-UTME programs?",
    passage: "At the University of Ilorin, students prepare for post-UTME exams in the bustling library. The air is filled with the sound of flipping pages and whispered discussions. Despite the intense study sessions, students remain motivated, aiming for admission into Unilorin's competitive programs.",
    options: [
      { id: 'a', text: "They are easy to get into" },
      { id: 'b', text: "They are highly competitive", correct: true },
      { id: 'c', text: "They require no preparation" },
      { id: 'd', text: "They are only for local students" }
    ],
    correctAnswer: "They are highly competitive",
    explanation: "The passage describes Unilorin's programs as 'competitive,' implying they are challenging to gain admission into.",
    hint: "Focus on the adjective used to describe Unilorin's programs."
  },
  {
    id: 5,
    text: "What is a key detail about Mama Bola's canteen?",
    passage: "Mama Bola's canteen near Unilorin's main gate serves hot amala and egusi stew to students. Her warm smile and generous portions make it a favorite spot. Despite long queues, students enjoy the lively chatter while waiting.",
    options: [
      { id: 'a', text: "It serves only jollof rice" },
      { id: 'b', text: "It offers hot amala and egusi stew", correct: true },
      { id: 'c', text: "It is located in Lagos" },
      { id: 'd', text: "It has no queues" }
    ],
    correctAnswer: "It offers hot amala and egusi stew",
    explanation: "The passage specifies that Mama Bola's canteen serves hot amala and egusi stew.",
    hint: "Look for the food mentioned in the canteen description."
  },
  {
    id: 6,
    text: "What does 'generous' mean in the context of Mama Bola's portions?",
    passage: "Mama Bola's canteen near Unilorin's main gate serves hot amala and egusi stew to students. Her warm smile and generous portions make it a favorite spot. Despite long queues, students enjoy the lively chatter while waiting.",
    options: [
      { id: 'a', text: "Small and limited" },
      { id: 'b', text: "Large and plentiful", correct: true },
      { id: 'c', text: "Expensive and rare" },
      { id: 'd', text: "Tasteless and plain" }
    ],
    correctAnswer: "Large and plentiful",
    explanation: "In the context of food portions, 'generous' means serving large and plentiful amounts, making the canteen popular.",
    hint: "Think about why students like Mama Bola's food."
  },
  {
    id: 7,
    text: "Why is Mama Bola's canteen a favorite spot for Unilorin students?",
    passage: "Mama Bola's canteen near Unilorin's main gate serves hot amala and egusi stew to students. Her warm smile and generous portions make it a favorite spot. Despite long queues, students enjoy the lively chatter while waiting.",
    options: [
      { id: 'a', text: "It has no queues" },
      { id: 'b', text: "Her warm smile and generous portions", correct: true },
      { id: 'c', text: "It is far from Unilorin" },
      { id: 'd', text: "It serves free food" }
    ],
    correctAnswer: "Her warm smile and generous portions",
    explanation: "The passage explicitly states that her warm smile and generous portions make the canteen a favorite spot.",
    hint: "Look for what makes the canteen popular with students."
  },
  {
    id: 8,
    text: "What can be inferred about the atmosphere at Mama Bola's canteen?",
    passage: "Mama Bola's canteen near Unilorin's main gate serves hot amala and egusi stew to students. Her warm smile and generous portions make it a favorite spot. Despite long queues, students enjoy the lively chatter while waiting.",
    options: [
      { id: 'a', text: "It is quiet and boring" },
      { id: 'b', text: "It is lively and social" },
      { id: 'c', text: "It is stressful and chaotic" },
      { id: 'd', text: "It is cold and unwelcoming" }
    ],
    correctAnswer: "It is lively and social",
    explanation: "The passage mentions 'lively chatter' and Mama Bola's warm smile, suggesting a social and lively atmosphere.",
    hint: "Consider how students behave while waiting at the canteen."
  },
  {
    id: 9,
    text: "What is the main idea of the passage?",
    passage: "In Ilorin’s Oja-Oba market, traders sell fresh tomatoes and peppers under colorful canopies. The market buzzes with activity as buyers negotiate prices. Many Unilorin students visit to buy ingredients for their meals.",
    options: [
      { id: 'a', text: "The history of Ilorin markets" },
      { id: 'b', text: "The lively trade at Oja-Oba market" },
      { id: 'c', text: "The farming of tomatoes in Ilorin" },
      { id: 'd', text: "The challenges of market trading" }
    ],
    correctAnswer: "The lively trade at Oja-Oba market",
    explanation: "The passage focuses on the vibrant trading activity at Oja-Oba market, mentioning traders, buyers, and Unilorin students.",
    hint: "Focus on the main activity described in the market."
  },
  {
    id: 10,
    text: "What does 'buzzes' mean in the context of Oja-Oba market?",
    passage: "In Ilorin’s Oja-Oba market, traders sell fresh tomatoes and peppers under colorful canopies. The market buzzes with activity as buyers negotiate prices. Many Unilorin students visit to buy ingredients for their meals.",
    options: [
      { id: 'a', text: "Is silent and calm" },
      { id: 'b', text: "Is full of energy and activity" },
      { id: 'c', text: "Is empty and quiet" },
      { id: 'd', text: "Is dark and gloomy" }
    ],
    correctAnswer: "Is full of energy and activity",
    explanation: "In the market context, 'buzzes' refers to a lively and energetic atmosphere, supported by the description of trading and negotiations.",
    hint: "Think about the activity level in the market."
  },
  {
    id: 11,
    text: "Why do Unilorin students visit Oja-Oba market?",
    passage: "In Ilorin’s Oja-Oba market, traders sell fresh tomatoes and peppers under colorful canopies. The market buzzes with activity as buyers negotiate prices. Many Unilorin students visit to buy ingredients for their meals.",
    options: [
      { id: 'a', text: "To sell tomatoes" },
      { id: 'b', text: "To buy ingredients for meals" },
      { id: 'c', text: "To meet traders" },
      { id: 'd', text: "To negotiate canopies" }
    ],
    correctAnswer: "To buy ingredients for meals",
    explanation: "The passage states that Unilorin students visit the market to buy ingredients for their meals.",
    hint: "Look for the reason students go to the market."
  },
  {
    id: 12,
    text: "What can be inferred about the goods sold at Oja-Oba market?",
    passage: "In Ilorin’s Oja-Oba market, traders sell fresh tomatoes and peppers under colorful canopies. The market buzzes with activity as buyers negotiate prices. Many Unilorin students visit to buy ingredients for their meals.",
    options: [
      { id: 'a', text: "They are mostly imported" },
      { id: 'b', text: "They are fresh and local" },
      { id: 'c', text: "They are expensive and rare" },
      { id: 'd', text: "They are only for traders" }
    ],
    correctAnswer: "They are fresh and local",
    explanation: "The passage mentions 'fresh tomatoes and peppers,' suggesting local and fresh produce.",
    hint: "Focus on the description of the market’s goods."
  },
  {
    id: 13,
    text: "What is a key detail about Unilorin's lecture halls?",
    passage: "Unilorin's lecture halls are packed with students during exam season. Lecturers use projectors to display notes, making lessons engaging. Despite the large classes, students focus intensely, hoping to excel in their post-UTME.",
    options: [
      { id: 'a', text: "They are empty during exam season" },
      { id: 'b', text: "Lecturers use projectors for notes" },
      { id: 'c', text: "They are small and quiet" },
      { id: 'd', text: "They lack modern equipment" }
    ],
    correctAnswer: "Lecturers use projectors for notes",
    explanation: "The passage specifies that lecturers use projectors to display notes in Unilorin's lecture halls.",
    hint: "Look for how lecturers teach in the halls."
  },
  {
    id: 14,
    text: "What does 'engaging' mean in the context of Unilorin's lectures?",
    passage: "Unilorin's lecture halls are packed with students during exam season. Lecturers use projectors to display notes, making lessons engaging. Despite the large classes, students focus intensely, hoping to excel in their post-UTME.",
    options: [
      { id: 'a', text: "Boring and dull" },
      { id: 'b', text: "Interesting and interactive" },
      { id: 'c', text: "Confusing and complex" },
      { id: 'd', text: "Quiet and serious" }
    ],
    correctAnswer: "Interesting and interactive",
    explanation: "In the context of using projectors, 'engaging' means lessons are interesting and interactive for students.",
    hint: "Think about how projectors affect the lessons."
  },
  {
    id: 15,
    text: "Why do students focus intensely in Unilorin's lecture halls?",
    passage: "Unilorin's lecture halls are packed with students during exam season. Lecturers use projectors to display notes, making lessons engaging. Despite the large classes, students focus intensely, hoping to excel in their post-UTME.",
    options: [
      { id: 'a', text: "They enjoy large classes" },
      { id: 'b', text: "They hope to excel in their post-UTME" },
      { id: 'c', text: "They like the projectors" },
      { id: 'd', text: "They have small classes" }
    ],
    correctAnswer: "They hope to excel in their post-UTME",
    explanation: "The passage states that students focus intensely because they hope to excel in their post-UTME.",
    hint: "Look for the reason students are focused."
  },
  {
    id: 16,
    text: "What can be inferred about the size of Unilorin's lecture classes?",
    passage: "Unilorin's lecture halls are packed with students during exam season. Lecturers use projectors to display notes, making lessons engaging. Despite the large classes, students focus intensely, hoping to excel in their post-UTME.",
    options: [
      { id: 'a', text: "They are small and intimate" },
      { id: 'b', text: "They are large and crowded" },
      { id: 'c', text: "They are online only" },
      { id: 'd', text: "They are held outdoors" }
    ],
    correctAnswer: "They are large and crowded",
    explanation: "The passage mentions 'large classes' and halls being 'packed,' indicating crowded lecture settings.",
    hint: "Focus on the description of class size."
  },
  {
    id: 17,
    text: "What is the main idea of the passage?",
    passage: "In Ilorin, the annual Sallah festival brings joy with colorful durbar parades. Horsemen in vibrant attire gallop through the streets, cheered by crowds. Unilorin students often attend, capturing the event for their social media.",
    options: [
      { id: 'a', text: "The history of Sallah in Ilorin" },
      { id: 'b', text: "The vibrant Sallah festival in Ilorin" },
      { id: 'c', text: "The training of horsemen" },
      { id: 'd', text: "The challenges of parades" }
    ],
    correctAnswer: "The vibrant Sallah festival in Ilorin",
    explanation: "The passage focuses on the lively Sallah festival, describing parades, horsemen, and Unilorin students’ participation.",
    hint: "Focus on the main event described in Ilorin."
  },
  {
    id: 18,
    text: "What does 'gallop' mean in the context of the Sallah festival?",
    passage: "In Ilorin, the annual Sallah festival brings joy with colorful durbar parades. Horsemen in vibrant attire gallop through the streets, cheered by crowds. Unilorin students often attend, capturing the event for their social media.",
    options: [
      { id: 'a', text: "Walk slowly" },
      { id: 'b', text: "Run quickly on horseback" },
      { id: 'c', text: "Dance gracefully" },
      { id: 'd', text: "Stand still" }
    ],
    correctAnswer: "Run quickly on horseback",
    explanation: "In the context of horsemen, 'gallop' refers to a fast run on horseback during the parade.",
    hint: "Think about how horsemen move in the parade."
  },
  {
    id: 19,
    text: "Why do Unilorin students attend the Sallah festival?",
    passage: "In Ilorin, the annual Sallah festival brings joy with colorful durbar parades. Horsemen in vibrant attire gallop through the streets, cheered by crowds. Unilorin students often attend, capturing the event for their social media.",
    options: [
      { id: 'a', text: "To ride horses" },
      { id: 'b', text: "To capture the event for social media" },
      { id: 'c', text: "To sell vibrant attire" },
      { id: 'd', text: "To organize the parade" }
    ],
    correctAnswer: "To capture the event for social media",
    explanation: "The passage states that Unilorin students attend to capture the festival for their social media.",
    hint: "Look for what students do at the festival."
  },
  {
    id: 20,
    text: "What can be inferred about the Sallah festival’s atmosphere?",
    passage: "In Ilorin, the annual Sallah festival brings joy with colorful durbar parades. Horsemen in vibrant attire gallop through the streets, cheered by crowds. Unilorin students often attend, capturing the event for their social media.",
    options: [
      { id: 'a', text: "It is dull and quiet" },
      { id: 'b', text: "It is joyful and vibrant" },
      { id: 'c', text: "It is stressful and chaotic" },
      { id: 'd', text: "It is private and exclusive" }
    ],
    correctAnswer: "It is joyful and vibrant",
    explanation: "Words like 'joy,' 'colorful,' and 'cheered by crowds' suggest a vibrant and joyful festival atmosphere.",
    hint: "Consider the descriptive words for the festival."
  },
  {
    id: 21,
    text: "What is a key detail about Chinedu's bookshop?",
    passage: "Chinedu's bookshop near Unilorin sells affordable JAMB and post-UTME textbooks. His small store is always crowded with students seeking study materials. Despite the limited space, Chinedu organizes books neatly, making it easy to find titles.",
    options: [
      { id: 'a', text: "It sells food items" },
      { id: 'b', text: "It sells affordable JAMB textbooks", correct: true },
      { id: 'c', text: "It is located in Kano" },
      { id: 'd', text: "It has plenty of space" }
    ],
    correctAnswer: "It sells affordable JAMB textbooks",
    explanation: "The passage specifies that Chinedu's bookshop sells affordable JAMB and post-UTME textbooks.",
    hint: "Look for what Chinedu's bookshop sells."
  },
  {
    id: 22,
    text: "What does 'affordable' mean in the context of Chinedu's bookshop?",
    passage: "Chinedu's bookshop near Unilorin sells affordable JAMB and post-UTME textbooks. His small store is always crowded with students seeking study materials. Despite the limited space, Chinedu organizes books neatly, making it easy to find titles.",
    options: [
      { id: 'a', text: "Very expensive" },
      { id: 'b', text: "Reasonably priced", correct: true },
      { id: 'c', text: "Hard to find" },
      { id: 'd', text: "Poorly organized" }
    ],
    correctAnswer: "Reasonably priced",
    explanation: "In the context of textbooks, 'affordable' means reasonably priced, attracting students to the shop.",
    hint: "Think about why students buy from Chinedu's shop."
  },
  {
    id: 23,
    text: "Why is Chinedu's bookshop always crowded?",
    passage: "Chinedu's bookshop near Unilorin sells affordable JAMB and post-UTME textbooks. His small store is always crowded with students seeking study materials. Despite the limited space, Chinedu organizes books neatly, making it easy to find titles.",
    options: [
      { id: 'a', text: "It has a large space" },
      { id: 'b', text: "Students seek affordable study materials", correct: true },
      { id: 'c', text: "It sells food items" },
      { id: 'd', text: "It is far from Unilorin" }
    ],
    correctAnswer: "Students seek affordable study materials",
    explanation: "The passage implies the shop is crowded because students seek affordable JAMB and post-UTME materials.",
    hint: "Consider why students visit Chinedu's shop."
  },
  {
    id: 24,
    text: "What can be inferred about the organization of Chinedu's bookshop?",
    passage: "Chinedu's bookshop near Unilorin sells affordable JAMB and post-UTME textbooks. His small store is always crowded with students seeking study materials. Despite the limited space, Chinedu organizes books neatly, making it easy to find titles.",
    options: [
      { id: 'a', text: "It is disorganized and messy" },
      { id: 'b', text: "It is neatly organized" },
      { id: 'c', text: "It is spacious and empty" },
      { id: 'd', text: "It is closed most times" }
    ],
    correctAnswer: "It is neatly organized",
    explanation: "The passage states that Chinedu organizes books neatly, making titles easy to find despite limited space.",
    hint: "Focus on how books are arranged in the shop."
  },
  {
    id: 25,
    text: "What is the main idea of the passage?",
    passage: "In Ilorin, the Emir’s palace hosts cultural events that attract Unilorin students. Performers in traditional attire sing Hausa songs, and the aroma of tuwo shinkafa fills the air. The events foster a sense of community pride.",
    options: [
      { id: 'a', text: "The history of the Emir’s palace" },
      { id: 'b', text: "The cultural events at the Emir’s palace" },
      { id: 'c', text: "The preparation of tuwo shinkafa" },
      { id: 'd', text: "The challenges of hosting events" }
    ],
    correctAnswer: "The cultural events at the Emir’s palace",
    explanation: "The passage focuses on the cultural events at the Emir’s palace, mentioning performers, songs, and Unilorin students’ attendance.",
    hint: "Focus on the main activity at the Emir’s palace."
  },
  {
    id: 26,
    text: "What does 'foster' mean in the context of the passage?",
    passage: "In Ilorin, the Emir’s palace hosts cultural events that attract Unilorin students. Performers in traditional attire sing Hausa songs, and the aroma of tuwo shinkafa fills the air. The events foster a sense of community pride.",
    options: [
      { id: 'a', text: "Reduce significantly" },
      { id: 'b', text: "Encourage and promote", correct: true },
      { id: 'c', text: "Prevent completely" },
      { id: 'd', text: "Ignore entirely" }
    ],
    correctAnswer: "Encourage and promote",
    explanation: "In the context of cultural events, 'foster' means to encourage and promote community pride.",
    hint: "Think about the effect of the events on the community."
  },
  {
    id: 27,
    text: "What is a key detail about the Emir’s palace events?",
    passage: "In Ilorin, the Emir’s palace hosts cultural events that attract Unilorin students. Performers in traditional attire sing Hausa songs, and the aroma of tuwo shinkafa fills the air. The events foster a sense of community pride.",
    options: [
      { id: 'a', text: "They feature modern music" },
      { id: 'b', text: "Performers sing Hausa songs", correct: true },
      { id: 'c', text: "They are held in Lagos" },
      { id: 'd', text: "They exclude students" }
    ],
    correctAnswer: "Performers sing Hausa songs",
    explanation: "The passage specifies that performers sing Hausa songs during the cultural events.",
    hint: "Look for what performers do at the events."
  },
  {
    id: 28,
    text: "What can be inferred about the role of Unilorin students at the Emir’s palace events?",
    passage: "In Ilorin, the Emir’s palace hosts cultural events that attract Unilorin students. Performers in traditional attire sing Hausa songs, and the aroma of tuwo shinkafa fills the air. The events foster a sense of community pride.",
    options: [
      { id: 'a', text: "They perform Hausa songs" },
      { id: 'b', text: "They attend as participants", correct: true },
      { id: 'c', text: "They organize the events" },
      { id: 'd', text: "They sell tuwo shinkafa" }
    ],
    correctAnswer: "They attend as participants",
    explanation: "The passage states that the events 'attract Unilorin students,' implying they attend as participants.",
    hint: "Consider what students do at the palace events."
  },
  {
    id: 29,
    text: "What does the passage suggest about Amina's study habits?",
    passage: "Amina, a Unilorin aspirant, studies under a lantern in her village near Ilorin. Her dedication to passing the post-UTME drives her to review past questions daily. Her family supports her, believing she will succeed.",
    options: [
      { id: 'a', text: "She studies only in the morning" },
      { id: 'b', text: "She is dedicated and reviews daily", correct: true },
      { id: 'c', text: "She avoids past questions" },
      { id: 'd', text: "She studies in a library" }
    ],
    correctAnswer: "She is dedicated and reviews daily",
    explanation: "The passage highlights Amina's dedication and daily review of past questions for the post-UTME.",
    hint: "Look for how Amina prepares for her exams."
  },
  {
    id: 30,
    text: "What can be inferred about Amina's study environment?",
    passage: "Amina, a Unilorin aspirant, studies under a lantern in her village near Ilorin. Her dedication to passing the post-UTME drives her to review past questions daily. Her family supports her, believing she will succeed.",
    options: [
      { id: 'a', text: "It has reliable electricity" },
      { id: 'b', text: "It lacks electricity", correct: true },
      { id: 'c', text: "It is noisy and crowded" },
      { id: 'd', text: "It is at Unilorin's library" }
    ],
    correctAnswer: "It lacks electricity",
    explanation: "Amina's use of a lantern for studying suggests a lack of reliable electricity in her village.",
    hint: "Consider why Amina uses a lantern to study."
  }
];

export default questions;