const questions = [
  {
    id: 1,
    text: "According to the provided text, Nigerian culture is a blend of traditions, languages, food, and social norms from how many ethnic groups?",
    options: [
      { id: 'a', text: "Over 100" },
      { id: 'b', text: "Over 500" },
      { id: 'c', text: "Over 250", correct: true },
      { id: 'd', text: "Exactly 36" }
    ],
    correctAnswer: "Over 250",
    explanation: "The first section of the document states that Nigerian culture is a blend from 'over 250 ethnic groups.'",
    hint: "The number of ethnic groups is mentioned at the very beginning of the learning module."
  },
  {
    id: 2,
    text: "Which of the following is NOT one of the major ethnic groups mentioned in the text?",
    options: [
      { id: 'a', text: "Hausa-Fulani" },
      { id: 'b', text: "Igbo" },
      { id: 'c', text: "Yoruba" },
      { id: 'd', text: "Efik", correct: true }
    ],
    correctAnswer: "Efik",
    explanation: "The document specifically lists the Hausa-Fulani, Yoruba, and Igbo as the major ethnic groups. Efik is not mentioned.",
    hint: "Check the 'Did you know?' section for the three main groups discussed."
  },
  {
    id: 3,
    text: "The traditional attire 'Babanriga' is worn by men from which ethnic group?",
    options: [
      { id: 'a', text: "Igbo" },
      { id: 'b', text: "Hausa-Fulani", correct: true },
      { id: 'c', text: "Yoruba" },
      { id: 'd', text: "Edo" }
    ],
    correctAnswer: "Hausa-Fulani",
    explanation: "The section on Hausa-Fulani culture lists 'Babanriga (for men)' as a traditional attire.",
    hint: "This attire is associated with the Northern part of Nigeria."
  },
  {
    id: 4,
    text: "Which Nigerian festival is a 'grand display of horsemanship' and is associated with the Hausa-Fulani people?",
    options: [
      { id: 'a', text: "Osun-Osogbo Festival" },
      { id: 'b', text: "Eyo Festival" },
      { id: 'c', text: "Iri Ji Festival" },
      { id: 'd', text: "Durbar Festival", correct: true }
    ],
    correctAnswer: "Durbar Festival",
    explanation: "The document explicitly names the 'Durbar Festival' as a festival for the Hausa-Fulani, describing it as a 'grand display of horsemanship.'",
    hint: "Look for a festival that involves horses."
  },
  {
    id: 5,
    text: "The Yoruba people are associated with which type of traditional artwork?",
    options: [
      { id: 'a', text: "Masquerade art" },
      { id: 'b', text: "Leatherwork" },
      { id: 'c', text: "Bronze casting (Ife art)", correct: true },
      { id: 'd', text: "Wood carving" }
    ],
    correctAnswer: "Bronze casting (Ife art)",
    explanation: "The section on Yoruba traditions mentions their art includes 'bronze casting (like the famous Ife art).'",
    hint: "The name of a famous ancient city in the Southwest is a clue."
  },
  {
    id: 6,
    text: "What is the traditional attire for Igbo men, as mentioned in the text?",
    options: [
      { id: 'a', text: "Agbada" },
      { id: 'b', text: "Isiagu", correct: true },
      { id: 'c', text: "Buba" },
      { id: 'd', text: "Abaya" }
    ],
    correctAnswer: "Isiagu",
    explanation: "The document states that 'Isiagu' is the traditional attire for Igbo men.",
    hint: "The name of this attire translates to 'lion head'."
  },
  {
    id: 7,
    text: "The 'Iri Ji' or New Yam Festival is a major harvest celebration for which ethnic group?",
    options: [
      { id: 'a', text: "Yoruba" },
      { id: 'b', text: "Hausa-Fulani" },
      { id: 'c', text: "Igbo", correct: true },
      { id: 'd', text: "Ijaw" }
    ],
    correctAnswer: "Igbo",
    explanation: "The section on Igbo traditions identifies the 'Iri Ji' (New Yam Festival) as a celebration of their harvest.",
    hint: "This festival is about a root crop that is a staple food in the region."
  },
  {
    id: 8,
    text: "Which of these traditional ceremonies involves paying a bride price and is seen as the coming together of two families?",
    options: [
      { id: 'a', text: "Naming Ceremony" },
      { id: 'b', text: "Traditional Rulers Installation" },
      { id: 'c', text: "Marriage Rites", correct: true },
      { id: 'd', text: "Harvest Festival" }
    ],
    correctAnswer: "Marriage Rites",
    explanation: "The document describes 'Traditional marriage' as a rite that 'involves paying a bride price and a series of ceremonies unique to each tribe.'",
    hint: "The practice is mentioned in the 'Common Traditional Practices' section."
  },
  {
    id: 9,
    text: "Traditional rulers and chiefs hold significant influence as custodians of tradition. Which of the following is NOT a title for a traditional ruler mentioned in the text?",
    options: [
      { id: 'a', text: "Oba" },
      { id: 'b', text: "Emir" },
      { id: 'c', text: "Ooni", correct: true },
      { id: 'd', text: "Igwe" }
    ],
    correctAnswer: "Ooni",
    explanation: "The text lists 'Oba, Emir, and Igwe' as examples of traditional rulers, but 'Ooni' is not included in the list.",
    hint: "Check the list of traditional ruler titles carefully. One of them is not mentioned."
  },
  {
    id: 10,
    text: "According to the text, what is the purpose of a naming ceremony?",
    options: [
      { id: 'a', text: "To give babies names and offer prayers and blessings.", correct: true },
      { id: 'b', text: "To announce the baby’s birth to the wider community." },
      { id: 'c', text: "To give a baby a surname." },
      { id: 'd', text: "To celebrate the harvest season with a new baby." }
    ],
    correctAnswer: "To give babies names and offer prayers and blessings.",
    explanation: "The document states that in 'Naming Ceremonies,' babies 'are given names... often with prayers, blessings, and sometimes symbolic food items.'",
    hint: "The text provides a clear description of this ceremony's purpose."
  },
  {
    id: 11,
    text: "The Yoruba traditional attire 'Iro and Buba' is often made from which type of fabric mentioned in the text?",
    options: [
      { id: 'a', text: "Ankara" },
      { id: 'b', text: "Damask" },
      { id: 'c', text: "Aso-Oke", correct: true },
      { id: 'd', text: "Lace" }
    ],
    correctAnswer: "Aso-Oke",
    explanation: "The text on Yoruba attire states 'Agbada and Iro and Buba, often made with Aso-Oke.'",
    hint: "The fabric's name is also used as an analogy in the introduction."
  },
  {
    id: 12,
    text: "Which traditional festival is associated with the Yoruba people and is known for its masquerades?",
    options: [
      { id: 'a', text: "Osun-Osogbo Festival" },
      { id: 'b', text: "Durbar Festival" },
      { id: 'c', text: "Eyo Festival", correct: true },
      { id: 'd', text: "Iri Ji Festival" }
    ],
    correctAnswer: "Eyo Festival",
    explanation: "The document lists 'Eyo Festival' as a festival for the Yoruba people.",
    hint: "The name of the festival is a type of masquerade."
  },
  {
    id: 13,
    text: "Which type of craft is specifically mentioned for the Igbo ethnic group in the provided text?",
    options: [
      { id: 'a', text: "Leatherwork" },
      { id: 'b', text: "Beadwork" },
      { id: 'c', text: "Masquerade art", correct: true },
      { id: 'd', text: "Weaving" }
    ],
    correctAnswer: "Masquerade art",
    explanation: "The section on Igbo art and craft lists 'Masquerade art, bronze works, and pottery.'",
    hint: "Look for an art form related to traditional spiritual displays."
  },
  {
    id: 14,
    text: "The traditional attire 'Abaya' is worn by women from which Nigerian ethnic group?",
    options: [
      { id: 'a', text: "Yoruba" },
      { id: 'b', text: "Igbo" },
      { id: 'c', text: "Hausa-Fulani", correct: true },
      { id: 'd', text: "Efik" }
    ],
    correctAnswer: "Hausa-Fulani",
    explanation: "The text on Hausa-Fulani attire mentions 'Abaya (for women)' as a traditional dress.",
    hint: "This attire is often a loose-fitting robe."
  },
  {
    id: 15,
    text: "Which group is primarily located in the South-Western region of Nigeria?",
    options: [
      { id: 'a', text: "Hausa-Fulani" },
      { id: 'b', text: "Igbo" },
      { id: 'c', text: "Yoruba", correct: true },
      { id: 'd', text: "Ijaw" }
    ],
    correctAnswer: "Yoruba",
    explanation: "The 'Did you know?' section and the 'Major Ethnic Groups' section both state that the Yoruba are in the 'South-West.'",
    hint: "Think of the states in the Southwest like Lagos and Oyo."
  },
  {
    id: 16,
    text: "Which type of craft is mentioned as being practiced by the Hausa-Fulani people?",
    options: [
      { id: 'a', text: "Masquerade art" },
      { id: 'b', text: "Bronze casting" },
      { id: 'c', text: "Beadwork" },
      { id: 'd', text: "Leatherwork", correct: true }
    ],
    correctAnswer: "Leatherwork",
    explanation: "The document lists 'Leatherwork, weaving, and pottery' as art and craft for the Hausa-Fulani.",
    hint: "This craft is often associated with products like bags and shoes."
  },
  {
    id: 17,
    text: "The term 'Aso-Oke' is used to describe the type of fabric used for which ethnic group's traditional attire?",
    options: [
      { id: 'a', text: "Igbo" },
      { id: 'b', text: "Hausa-Fulani" },
      { id: 'c', text: "Yoruba", correct: true },
      { id: 'd', text: "Nupe" }
    ],
    correctAnswer: "Yoruba",
    explanation: "The Yoruba section mentions their attire is 'often made with Aso-Oke.'",
    hint: "The name of this fabric means 'top cloth'."
  },
  {
    id: 18,
    text: "The Yoruba festival that takes place in a UNESCO World Heritage Site is the...",
    options: [
      { id: 'a', text: "Eyo Festival" },
      { id: 'b', text: "Durbar Festival" },
      { id: 'c', text: "Osun-Osogbo Festival", correct: true },
      { id: 'd', text: "Iri Ji Festival" }
    ],
    correctAnswer: "Osun-Osogbo Festival",
    explanation: "The document mentions the 'Osun-Osogbo Festival' in the Yoruba section, which takes place in the sacred grove.",
    hint: "This festival is named after a goddess and a city."
  },
  {
    id: 19,
    text: "What is a central concept of traditional marriage rites in Nigeria, as described in the text?",
    options: [
      { id: 'a', text: "A legal contract between two individuals." },
      { id: 'b', text: "The coming together of two families.", correct: true },
      { id: 'c', text: "A public declaration of love." },
      { id: 'd', text: "A celebration of friendship." }
    ],
    correctAnswer: "The coming together of two families.",
    explanation: "The text explicitly states that traditional marriage is 'a coming together of two families, not just two people.'",
    hint: "The explanation for this practice focuses on a unit larger than just the couple."
  },
  {
    id: 20,
    text: "Which ethnic group is primarily located in the South-Eastern region of Nigeria?",
    options: [
      { id: 'a', text: "Hausa-Fulani" },
      { id: 'b', text: "Yoruba" },
      { id: 'c', text: "Igbo", correct: true },
      { id: 'd', text: "Tiv" }
    ],
    correctAnswer: "Igbo",
    explanation: "The 'Did you know?' section and the 'Major Ethnic Groups' section both state that the Igbo are in the 'South-East.'",
    hint: "Think of states like Anambra and Imo."
  },
  {
    id: 21,
    text: "Which traditional ruler title is associated with the Igbo people?",
    options: [
      { id: 'a', text: "Oba" },
      { id: 'b', text: "Emir" },
      { id: 'c', text: "Igwe", correct: true },
      { id: 'd', text: "Sultan" }
    ],
    correctAnswer: "Igwe",
    explanation: "The document lists 'Igwe' as a title for a traditional ruler, along with Oba and Emir.",
    hint: "This title is common in the South-Eastern part of Nigeria."
  },
  {
    id: 22,
    text: "In Nigerian traditional naming ceremonies, symbolic food items are sometimes used to represent a baby's...",
    options: [
      { id: 'a', text: "Favorite future foods" },
      { id: 'b', text: "Future", correct: true },
      { id: 'c', text: "Favorite colors" },
      { id: 'd', text: "Personality traits" }
    ],
    correctAnswer: "Future",
    explanation: "The text says symbolic food items are used 'to represent their future.'",
    hint: "The purpose of these foods is to provide a sense of what's to come in life."
  },
  {
    id: 23,
    text: "Which group is known for their bronze works, including the famous Benin bronze artworks?",
    options: [
      { id: 'a', text: "Yoruba" },
      { id: 'b', text: "Hausa-Fulani" },
      { id: 'c', text: "Edo" },
      { id: 'd', text: "Igbo", correct: true }
    ],
    correctAnswer: "Igbo",
    explanation: "The text on Igbo art lists 'bronze works' as a craft, similar to the bronze works associated with the Benin Kingdom in Edo state.",
    hint: "This group shares an art form with a well-known ancient kingdom."
  },
  {
    id: 24,
    text: "What is the collective term used to describe Nigeria's over 500 indigenous spoken languages?",
    options: [
      { id: 'a', text: "The Nigerian-Congo family" },
      { id: 'b', text: "A cultural melting pot" },
      { id: 'c', text: "A Tower of Babel!", correct: true },
      { id: 'd', text: "The languages of a vibrant nation" }
    ],
    correctAnswer: "A Tower of Babel!",
    explanation: "The text uses the phrase 'A Tower of Babel!' to describe the over 500 indigenous languages.",
    hint: "This is a descriptive phrase used in the 'Languages' section."
  },
  {
    id: 25,
    text: "The Yoruba traditional attire for men is called:",
    options: [
      { id: 'a', text: "Babanriga" },
      { id: 'b', text: "Agbada", correct: true },
      { id: 'c', text: "Isiagu" },
      { id: 'd', text: "Abaya" }
    ],
    correctAnswer: "Agbada",
    explanation: "The section on Yoruba attire lists 'Agbada and Iro and Buba' as traditional clothing.",
    hint: "This is a flowing wide-sleeved robe."
  },
  {
    id: 26,
    text: "Traditional rulers hold significant influence in their communities and are considered:",
    options: [
      { id: 'a', text: "Heads of government" },
      { id: 'b', text: "Political figureheads" },
      { id: 'c', text: "Custodians of tradition", correct: true },
      { id: 'd', text: "Leaders of religious institutions" }
    ],
    correctAnswer: "Custodians of tradition",
    explanation: "The document describes traditional rulers as 'custodians of tradition.'",
    hint: "This phrase appears in the section on 'Traditional Rulers & Chiefs'."
  },
  {
    id: 27,
    text: "Which phrase best describes Nigerian culture according to the text?",
    options: [
      { id: 'a', text: "A simple, monolithic tradition" },
      { id: 'b', text: "A vibrant Aso-Oke fabric—rich, diverse, and woven with many different threads.", correct: true },
      { id: 'c', text: "A collection of unrelated customs." },
      { id: 'd', text: "Primarily defined by its food." }
    ],
    correctAnswer: "A vibrant Aso-Oke fabric—rich, diverse, and woven with many different threads.",
    explanation: "The introduction section uses this metaphor to describe Nigerian culture.",
    hint: "This is the very first sentence of the learning module."
  },
  {
    id: 28,
    text: "The traditional attire 'Iro and Buba' is for women of which ethnic group?",
    options: [
      { id: 'a', text: "Igbo" },
      { id: 'b', text: "Yoruba", correct: true },
      { id: 'c', text: "Hausa-Fulani" },
      { id: 'd', text: "Edo" }
    ],
    correctAnswer: "Yoruba",
    explanation: "The section on Yoruba attire mentions 'Iro and Buba' as traditional clothing.",
    hint: "This outfit consists of a wrapper and a blouse."
  },
  {
    id: 29,
    text: "Which of the following is NOT listed as a form of art and craft for the Yoruba people?",
    options: [
      { id: 'a', text: "Carving" },
      { id: 'b', text: "Pottery", correct: true },
      { id: 'c', text: "Bronze casting" },
      { id: 'd', text: "Beadwork" }
    ],
    correctAnswer: "Pottery",
    explanation: "The text lists carving, bronze casting, and beadwork for the Yoruba, while pottery is listed for the Hausa-Fulani and Igbo.",
    hint: "Check the art and craft for each of the three major ethnic groups."
  },
  {
    id: 30,
    text: "According to the text, what do food items like Jollof Rice and Suya do for Nigerians?",
    options: [
      { id: 'a', text: "They are the main source of nutrition." },
      { id: 'b', text: "They are the most expensive dishes." },
      { id: 'c', text: "They unite us!", correct: true },
      { id: 'd', text: "They are only consumed during festivals." }
    ],
    correctAnswer: "They unite us!",
    explanation: "The 'Cuisine' section states that 'From Jollof Rice to Suya, food unites us!'",
    hint: "This is a direct quote from the document under the 'Cuisine' skill."
  }
];

export default questions;