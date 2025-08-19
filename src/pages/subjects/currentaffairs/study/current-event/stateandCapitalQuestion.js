const questions = [
  {
    id: 1,
    text: "How many states and a Federal Capital Territory (FCT) is Nigeria split into?",
    options: [
      { id: 'a', text: "30 states and 1 FCT" },
      { id: 'b', text: "36 states and 1 FCT", correct: true },
      { id: 'c', text: "35 states and 1 FCT" },
      { id: 'd', text: "37 states and 1 FCT" }
    ],
    correctAnswer: "36 states and 1 FCT",
    explanation: "The content explicitly states that Nigeria is 'split into 36 states and a Federal Capital Territory (FCT).'",
    hint: "The number is mentioned at the beginning of the text."
  },
  {
    id: 2,
    text: "Which of the following was NOT an original number of regions Nigeria had, according to the 'Did you know?' section?",
    options: [
      { id: 'a', text: "3" },
      { id: 'b', text: "19" },
      { id: 'c', text: "12" },
      { id: 'd', text: "15", correct: true }
    ],
    correctAnswer: "15",
    explanation: "The text mentions Nigeria started with 3 regions and expanded to 12, 19, 21, and 36 states. 15 is not on the list.",
    hint: "Check the 'Did you know?' fun fact for the list of historical state counts."
  },
  {
    id: 3,
    text: "What is the capital of Abia State?",
    options: [
      { id: 'a', text: "Umuahia", correct: true },
      { id: 'b', text: "Uyo" },
      { id: 'c', text: "Awka" },
      { id: 'd', text: "Aba" }
    ],
    correctAnswer: "Umuahia",
    explanation: "The list of states and capitals confirms that Umuahia is the capital of Abia State.",
    hint: "It's the first state on the alphabetical list."
  },
  {
    id: 4,
    text: "The slogan for Lagos State is 'Centre of ____.'",
    options: [
      { id: 'a', text: "Commerce" },
      { id: 'b', text: "Excellence", correct: true },
      { id: 'c', text: "Innovation" },
      { id: 'd', text: "Fame" }
    ],
    correctAnswer: "Excellence",
    explanation: "The 'More Than Just a Name!' section lists the slogan for Lagos as 'Centre of Excellence.'",
    hint: "This slogan is also mentioned in the 'Pro Tip' section."
  },
  {
    id: 5,
    text: "Which state is known as the 'Heart Beat of Nigeria'?",
    options: [
      { id: 'a', text: "Delta" },
      { id: 'b', text: "Edo", correct: true },
      { id: 'c', text: "Oyo" },
      { id: 'd', text: "Benue" }
    ],
    correctAnswer: "Edo",
    explanation: "The 'More Than Just a Name!' section identifies Edo State with the slogan 'Heart Beat of Nigeria.'",
    hint: "This state is famous for its ancient kingdom and bronze works."
  },
  {
    id: 6,
    text: "What is the capital of Ekiti State?",
    options: [
      { id: 'a', text: "Abeokuta" },
      { id: 'b', text: "Akure" },
      { id: 'c', text: "Ado-Ekiti", correct: true },
      { id: 'd', text: "Awka" }
    ],
    correctAnswer: "Ado-Ekiti",
    explanation: "According to the alphabetical list, the capital of Ekiti State is Ado-Ekiti.",
    hint: "The capital name includes the state's name."
  },
  {
    id: 7,
    text: "Which state is famous for its cool weather and stunning rock formations?",
    options: [
      { id: 'a', text: "Oyo" },
      { id: 'b', text: "Kano" },
      { id: 'c', text: "Rivers" },
      { id: 'd', text: "Plateau", correct: true }
    ],
    correctAnswer: "Plateau",
    explanation: "The text says Plateau State is 'Famous for its cool weather and stunning rock formations.'",
    hint: "Its slogan is 'Home of Peace and Tourism.'"
  },
  {
    id: 8,
    text: "The city of Makurdi is the capital of which state?",
    options: [
      { id: 'a', text: "Delta" },
      { id: 'b', text: "Benue", correct: true },
      { id: 'c', text: "Borno" },
      { id: 'd', text: "Bayelsa" }
    ],
    correctAnswer: "Benue",
    explanation: "The alphabetical list pairs Makurdi with Benue as its capital.",
    hint: "It comes after Bayelsa in the list."
  },
  {
    id: 9,
    text: "Which state is known for its entrepreneurial spirit and the Onitsha Main Market?",
    options: [
      { id: 'a', text: "Anambra", correct: true },
      { id: 'b', text: "Abia" },
      { id: 'c', text: "Enugu" },
      { id: 'd', text: "Ebonyi" }
    ],
    correctAnswer: "Anambra",
    explanation: "The 'More Than Just a Name!' section describes Anambra State as being 'Known for its entrepreneurial spirit and Onitsha Main Market.'",
    hint: "Its slogan is 'Light of the Nation.'"
  },
  {
    id: 10,
    text: "What is the capital of Kebbi State?",
    options: [
      { id: 'a', text: "Birnin Kebbi", correct: true },
      { id: 'b', text: "Yola" },
      { id: 'c', text: "Sokoto" },
      { id: 'd', text: "Lokoja" }
    ],
    correctAnswer: "Birnin Kebbi",
    explanation: "The alphabetical list correctly identifies Birnin Kebbi as the capital of Kebbi State.",
    hint: "This capital's name is very similar to the state's name."
  },
  {
    id: 11,
    text: "The slogan 'Treasure Base of the Nation' belongs to which state?",
    options: [
      { id: 'a', text: "Delta" },
      { id: 'b', text: "Akwa Ibom" },
      { id: 'c', text: "Rivers", correct: true },
      { id: 'd', text: "Bayelsa" }
    ],
    correctAnswer: "Rivers",
    explanation: "The text pairs the slogan 'Treasure Base of the Nation' with Rivers State, noting its oil and gas industry.",
    hint: "This state is a major hub for Nigeria's oil and gas."
  },
  {
    id: 12,
    text: "The capital of Osun State is...",
    options: [
      { id: 'a', text: "Ibadan" },
      { id: 'b', text: "Osogbo", correct: true },
      { id: 'c', text: "Lagos" },
      { id: 'd', text: "Owerri" }
    ],
    correctAnswer: "Osogbo",
    explanation: "The alphabetical list of states and capitals identifies Osogbo as the capital of Osun State.",
    hint: "The last question in the 'Quiz Time!' section also gives this answer."
  },
  {
    id: 13,
    text: "Which state is known as the 'Pacesetter State' and is home to the first university in Nigeria?",
    options: [
      { id: 'a', text: "Lagos" },
      { id: 'b', text: "Ogun" },
      { id: 'c', text: "Oyo", correct: true },
      { id: 'd', text: "Ondo" }
    ],
    correctAnswer: "Oyo",
    explanation: "The text states that Oyo is the 'Pacesetter State' and is 'Home to the first university in Nigeria, the University of Ibadan.'",
    hint: "The capital of this state is Ibadan."
  },
  {
    id: 14,
    text: "What is the capital of Borno State?",
    options: [
      { id: 'a', text: "Maiduguri", correct: true },
      { id: 'b', text: "Kano" },
      { id: 'c', text: "Damaturu" },
      { id: 'd', text: "Bauchi" }
    ],
    correctAnswer: "Maiduguri",
    explanation: "The alphabetical list confirms Maiduguri as the capital of Borno State.",
    hint: "It is listed after Benue in the state list."
  },
  {
    id: 15,
    text: "The food 'Ewa Agoyin' is a famous dish from which state?",
    options: [
      { id: 'a', text: "Kano" },
      { id: 'b', text: "Lagos", correct: true },
      { id: 'c', text: "Oyo" },
      { id: 'd', text: "Abia" }
    ],
    correctAnswer: "Lagos",
    explanation: "The text links 'Ewa Agoyin' to Lagos State, calling it 'a fiery stew that’s pure Lagos!'",
    hint: "This state is also known as the 'Centre of Excellence'."
  },
  {
    id: 16,
    text: "What is the capital of Bayelsa State?",
    options: [
      { id: 'a', text: "Port Harcourt" },
      { id: 'b', text: "Yenagoa", correct: true },
      { id: 'c', text: "Asaba" },
      { id: 'd', text: "Uyo" }
    ],
    correctAnswer: "Yenagoa",
    explanation: "The alphabetical list of states and capitals correctly pairs Bayelsa with Yenagoa.",
    hint: "This capital name starts with 'Y'."
  },
  {
    id: 17,
    text: "Which state is known for the Osun-Osogbo Sacred Grove, a UNESCO World Heritage Site?",
    options: [
      { id: 'a', text: "Cross River" },
      { id: 'b', text: "Oyo" },
      { id: 'c', text: "Osun", correct: true },
      { id: 'd', text: "Ogun" }
    ],
    correctAnswer: "Osun",
    explanation: "The 'More Than Just a Name!' section lists the Osun-Osogbo Sacred Grove as a feature of Osun State.",
    hint: "The site's name is very similar to the state's name."
  },
  {
    id: 18,
    text: "What is the capital of Kwara State?",
    options: [
      { id: 'a', text: "Lokoja" },
      { id: 'b', text: "Ilorin", correct: true },
      { id: 'c', text: "Abeokuta" },
      { id: 'd', text: "Lafia" }
    ],
    correctAnswer: "Ilorin",
    explanation: "The list of states and capitals confirms Ilorin as the capital of Kwara State.",
    hint: "This city is also the home of the University of Ilorin."
  },
  {
    id: 19,
    text: "The slogan 'God's Own State' belongs to which state?",
    options: [
      { id: 'a', text: "Anambra" },
      { id: 'b', text: "Ebonyi" },
      { id: 'c', text: "Abia", correct: true },
      { id: 'd', text: "Akwa Ibom" }
    ],
    correctAnswer: "Abia",
    explanation: "The text states that Abia's slogan is 'God's Own State.'",
    hint: "This state is also known for its commerce and the Ariaria Market."
  },
  {
    id: 20,
    text: "Which state is known for the Obudu Cattle Ranch and Tinapa Resort?",
    options: [
      { id: 'a', text: "Plateau" },
      { id: 'b', text: "Cross River", correct: true },
      { id: 'c', text: "Delta" },
      { id: 'd', text: "Rivers" }
    ],
    correctAnswer: "Cross River",
    explanation: "The document links Cross River State to the Obudu Cattle Ranch and Tinapa Resort.",
    hint: "Its slogan is 'The People's Paradise.'"
  },
  {
    id: 21,
    text: "What is the capital of Nasarawa State?",
    options: [
      { id: 'a', text: "Minna" },
      { id: 'b', text: "Lafia", correct: true },
      { id: 'c', text: "Gusau" },
      { id: 'd', text: "Jalingo" }
    ],
    correctAnswer: "Lafia",
    explanation: "The alphabetical list correctly identifies Lafia as the capital of Nasarawa State.",
    hint: "This state comes after Lagos in the alphabetical list."
  },
  {
    id: 22,
    text: "The dish 'Ukodo,' a yam and plantain pepper soup, is a famous food from which state?",
    options: [
      { id: 'a', text: "Oyo" },
      { id: 'b', text: "Edo", correct: true },
      { id: 'c', text: "Anambra" },
      { id: 'd', text: "Rivers" }
    ],
    correctAnswer: "Edo",
    explanation: "The text mentions 'Ukodo' as a famous food from Edo State.",
    hint: "This state is also known as the 'Heart Beat of Nigeria'."
  },
  {
    id: 23,
    text: "What is the capital of Sokoto State?",
    options: [
      { id: 'a', text: "Maiduguri" },
      { id: 'b', text: "Sokoto", correct: true },
      { id: 'c', text: "Gusau" },
      { id: 'd', text: "Birnin Kebbi" }
    ],
    correctAnswer: "Sokoto",
    explanation: "The alphabetical list shows Sokoto as the capital of Sokoto State.",
    hint: "The capital and state names are the same."
  },
  {
    id: 24,
    text: "Which of the following foods is a Northern classic from Kano State, according to the text?",
    options: [
      { id: 'a', text: "Banga Soup" },
      { id: 'b', text: "Suya", correct: true },
      { id: 'c', text: "Ukodo" },
      { id: 'd', text: "Ugba" }
    ],
    correctAnswer: "Suya",
    explanation: "The document lists 'Suya' as a famous food from Kano, describing it as a 'Northern classic!'",
    hint: "Kano's slogan is 'Centre of Commerce'."
  },
  {
    id: 25,
    text: "What is the capital of Enugu State?",
    options: [
      { id: 'a', text: "Enugu", correct: true },
      { id: 'b', text: "Abakaliki" },
      { id: 'c', text: "Owerri" },
      { id: 'd', text: "Awka" }
    ],
    correctAnswer: "Enugu",
    explanation: "The list of states and capitals confirms that Enugu is the capital of Enugu State.",
    hint: "The capital and state names are the same."
  },
  {
    id: 26,
    text: "The food 'Banga Soup' is a specialty of which state?",
    options: [
      { id: 'a', text: "Cross River" },
      { id: 'b', text: "Delta" },
      { id: 'c', text: "Rivers", correct: true },
      { id: 'd', text: "Bayelsa" }
    ],
    correctAnswer: "Rivers",
    explanation: "The text identifies 'Banga Soup' as a famous food from Rivers State.",
    hint: "This state is a major hub for Nigeria's oil and gas."
  },
  {
    id: 27,
    text: "What is the capital of Taraba State?",
    options: [
      { id: 'a', text: "Jalingo", correct: true },
      { id: 'b', text: "Yola" },
      { id: 'c', text: "Damaturu" },
      { id: 'd', text: "Gusau" }
    ],
    correctAnswer: "Jalingo",
    explanation: "The alphabetical list pairs Taraba with Jalingo as its capital.",
    hint: "This state is listed just before Yobe and Zamfara."
  },
  {
    id: 28,
    text: "Which state is known for the food 'Ugba,' or oil bean salad?",
    options: [
      { id: 'a', text: "Anambra" },
      { id: 'b', text: "Abia", correct: true },
      { id: 'c', text: "Imo" },
      { id: 'd', text: "Ebonyi" }
    ],
    correctAnswer: "Abia",
    explanation: "The 'More Than Just a Name!' section links 'Ugba' to Abia State.",
    hint: "This state's slogan is 'God's Own State'."
  },
  {
    id: 29,
    text: "The FCT has what capital city?",
    options: [
      { id: 'a', text: "Ikeja" },
      { id: 'b', text: "Abuja", correct: true },
      { id: 'c', text: "Lokoja" },
      { id: 'd', text: "Minna" }
    ],
    correctAnswer: "Abuja",
    explanation: "The list of states and capitals correctly identifies Abuja as the capital of the FCT.",
    hint: "This city is the political capital of Nigeria."
  },
  {
    id: 30,
    text: "The famous food 'Pounded Yam with Egusi' is a specialty of which state?",
    options: [
      { id: 'a', text: "Plateau" },
      { id: 'b', text: "Osun" },
      { id: 'c', text: "Oyo", correct: true },
      { id: 'd', text: "Edo" }
    ],
    correctAnswer: "Oyo",
    explanation: "The text links 'Pounded Yam with Egusi' to Oyo State.",
    hint: "This state is known as the 'Pacesetter State'."
  }
];

export default questions;