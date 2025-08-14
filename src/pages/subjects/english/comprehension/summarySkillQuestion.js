const questions = [
  {
    id: 1,
    text: "What is the main idea of the passage?",
    passage: "In Ibadan, the cocoa trade has boosted the local economy. Farmers work hard to grow quality beans, which are exported globally. Some farmers also face challenges like poor roads and low prices.",
    options: [
      { id: 'a', text: "The challenges faced by Ibadan farmers" },
      { id: 'b', text: "The cocoa trade’s impact on Ibadan’s economy" },
      { id: 'c', text: "The global export of beans" },
      { id: 'd', text: "The quality of Ibadan’s roads" }
    ],
    correctAnswer: "The cocoa trade’s impact on Ibadan’s economy",
    explanation: "The passage focuses on how the cocoa trade has boosted Ibadan’s economy, with details about farming and exports supporting this main idea.",
    hint: "Look for the central focus of the passage."
  },
  {
    id: 2,
    text: "What does 'boosted' mean in the context of the cocoa trade?",
    passage: "In Ibadan, the cocoa trade has boosted the local economy. Farmers work hard to grow quality beans, which are exported globally. Some farmers also face challenges like poor roads and low prices.",
    options: [
      { id: 'a', text: "Weakened significantly" },
      { id: 'b', text: "Improved greatly" },
      { id: 'c', text: "Stopped completely" },
      { id: 'd', text: "Ignored entirely" }
    ],
    correctAnswer: "Improved greatly",
    explanation: "In the context of the economy, 'boosted' means greatly improved, as the cocoa trade strengthens Ibadan’s economy.",
    hint: "Think about the effect of the cocoa trade on the economy."
  },
  {
    id: 3,
    text: "What can be inferred about the challenges faced by Ibadan farmers?",
    passage: "In Ibadan, the cocoa trade has boosted the local economy. Farmers work hard to grow quality beans, which are exported globally. Some farmers also face challenges like poor roads and low prices.",
    options: [
      { id: 'a', text: "They have no challenges" },
      { id: 'b', text: "They face issues like poor roads and low prices" },
      { id: 'c', text: "They only face labor shortages" },
      { id: 'd', text: "They have modern equipment" }
    ],
    correctAnswer: "They face issues like poor roads and low prices",
    explanation: "The passage explicitly mentions poor roads and low prices as challenges faced by some farmers.",
    hint: "Focus on the specific challenges mentioned in the passage."
  },
  {
    id: 4,
    text: "What is a key detail about the cocoa trade in Ibadan?",
    passage: "In Ibadan, the cocoa trade has boosted the local economy. Farmers work hard to grow quality beans, which are exported globally. Some farmers also face challenges like poor roads and low prices.",
    options: [
      { id: 'a', text: "It involves poor quality beans" },
      { id: 'b', text: "It includes global exports of cocoa beans" },
      { id: 'c', text: "It is limited to local markets" },
      { id: 'd', text: "It faces no challenges" }
    ],
    correctAnswer: "It includes global exports of cocoa beans",
    explanation: "The passage states that quality cocoa beans from Ibadan are exported globally.",
    hint: "Look for what happens to the cocoa beans after farming."
  },
  {
    id: 5,
    text: "What is the main idea of the passage?",
    passage: "Ada’s tailoring shop in Aba is thriving. She employs ten workers, designs trendy ankara dresses, and supplies boutiques in Lagos. Her shop is painted blue and opens at 8 AM daily.",
    options: [
      { id: 'a', text: "The daily schedule of Ada’s shop" },
      { id: 'b', text: "Ada’s thriving tailoring business in Aba" },
      { id: 'c', text: "The painting of Ada’s shop" },
      { id: 'd', text: "The challenges of tailoring in Aba" }
    ],
    correctAnswer: "Ada’s thriving tailoring business in Aba",
    explanation: "The passage centers on the success of Ada’s tailoring shop, with details about her designs and supplies supporting this focus.",
    hint: "Focus on the overall description of Ada’s shop."
  },
  {
    id: 6,
    text: "What does 'thriving' mean in the context of Ada’s tailoring shop?",
    passage: "Ada’s tailoring shop in Aba is thriving. She employs ten workers, designs trendy ankara dresses, and supplies boutiques in Lagos. Her shop is painted blue and opens at 8 AM daily.",
    options: [
      { id: 'a', text: "Struggling to survive" },
      { id: 'b', text: "Growing successfully" },
      { id: 'c', text: "Closing down" },
      { id: 'd', text: "Operating quietly" }
    ],
    correctAnswer: "Growing successfully",
    explanation: "In the context of the shop, 'thriving' means growing successfully, as shown by Ada’s employment of workers and supplies to Lagos.",
    hint: "Think about why Ada’s shop is described positively."
  },
  {
    id: 7,
    text: "What can be inferred about Ada’s tailoring shop’s market reach?",
    passage: "Ada’s tailoring shop in Aba is thriving. She employs ten workers, designs trendy ankara dresses, and supplies boutiques in Lagos. Her shop is painted blue and opens at 8 AM daily.",
    options: [
      { id: 'a', text: "It only serves Aba customers" },
      { id: 'b', text: "It supplies boutiques beyond Aba" },
      { id: 'c', text: "It focuses on local workers" },
      { id: 'd', text: "It sells only in Ilorin" }
    ],
    correctAnswer: "It supplies boutiques beyond Aba",
    explanation: "The passage mentions Ada’s shop supplying boutiques in Lagos, indicating a market reach beyond Aba.",
    hint: "Look for where Ada’s dresses are sold."
  },
  {
    id: 8,
    text: "Which detail should be excluded from a summary of the passage?",
    passage: "Ada’s tailoring shop in Aba is thriving. She employs ten workers, designs trendy ankara dresses, and supplies boutiques in Lagos. Her shop is painted blue and opens at 8 AM daily.",
    options: [
      { id: 'a', text: "Ada designs trendy ankara dresses" },
      { id: 'b', text: "Her shop is painted blue" },
      { id: 'c', text: "She supplies boutiques in Lagos" },
      { id: 'd', text: "She employs ten workers" }
    ],
    correctAnswer: "Her shop is painted blue",
    explanation: "The shop’s color is a minor detail that does not contribute to the main idea of Ada’s thriving business.",
    hint: "Identify the least relevant detail for summarizing the business."
  },
  {
    id: 9,
    text: "What is the main idea of the passage?",
    passage: "The Oba’s palace in Benin City is a cultural landmark. It attracts tourists who admire its ancient architecture and artifacts. The palace also hosts festivals and traditional ceremonies every year.",
    options: [
      { id: 'a', text: "The architecture of the Oba’s palace" },
      { id: 'b', text: "The Oba’s palace as a cultural landmark" },
      { id: 'c', text: "The festivals in Benin City" },
      { id: 'd', text: "The challenges of maintaining the palace" }
    ],
    correctAnswer: "The Oba’s palace as a cultural landmark",
    explanation: "The passage emphasizes the palace’s role as a cultural landmark, supported by details about tourists and festivals.",
    hint: "Focus on the primary role of the Oba’s palace."
  },
  {
    id: 10,
    text: "What does 'attracts' mean in the context of the Oba’s palace?",
    passage: "The Oba’s palace in Benin City is a cultural landmark. It attracts tourists who admire its ancient architecture and artifacts. The palace also hosts festivals and traditional ceremonies every year.",
    options: [
      { id: 'a', text: "Repels visitors" },
      { id: 'b', text: "Draws people in" },
      { id: 'c', text: "Hides from view" },
      { id: 'd', text: "Confuses tourists" }
    ],
    correctAnswer: "Draws people in",
    explanation: "In the context of tourists, 'attracts' means drawing people in to visit the palace due to its cultural significance.",
    hint: "Think about why tourists visit the palace."
  },
  {
    id: 11,
    text: "Why do tourists visit the Oba’s palace?",
    passage: "The Oba’s palace in Benin City is a cultural landmark. It attracts tourists who admire its ancient architecture and artifacts. The palace also hosts festivals and traditional ceremonies every year.",
    options: [
      { id: 'a', text: "To buy artifacts" },
      { id: 'b', text: "To admire its architecture and artifacts" },
      { id: 'c', text: "To organize festivals" },
      { id: 'd', text: "To live in the palace" }
    ],
    correctAnswer: "To admire its architecture and artifacts",
    explanation: "The passage states that tourists visit to admire the palace’s ancient architecture and artifacts.",
    hint: "Look for the reason tourists are drawn to the palace."
  },
  {
    id: 12,
    text: "What can be inferred about the Oba’s palace events?",
    passage: "The Oba’s palace in Benin City is a cultural landmark. It attracts tourists who admire its ancient architecture and artifacts. The palace also hosts festivals and traditional ceremonies every year.",
    options: [
      { id: 'a', text: "They are modern concerts" },
      { id: 'b', text: "They are traditional and cultural" },
      { id: 'c', text: "They are private events" },
      { id: 'd', text: "They are held monthly" }
    ],
    correctAnswer: "They are traditional and cultural",
    explanation: "The passage mentions festivals and traditional ceremonies, indicating cultural and traditional events.",
    hint: "Focus on the type of events hosted at the palace."
  },
  {
    id: 13,
    text: "What is the main idea of the passage?",
    passage: "In Kano, the groundnut pyramids were once a symbol of wealth. Farmers stacked bags of groundnuts into huge pyramids for export. Today, the pyramids are gone, but groundnut farming remains vital.",
    options: [
      { id: 'a', text: "The construction of groundnut pyramids" },
      { id: 'b', text: "The history and importance of groundnut farming in Kano" },
      { id: 'c', text: "The export challenges in Kano" },
      { id: 'd', text: "The disappearance of farmers in Kano" }
    ],
    correctAnswer: "The history and importance of groundnut farming in Kano",
    explanation: "The passage discusses the historical groundnut pyramids and the continued importance of groundnut farming in Kano.",
    hint: "Focus on the past and present role of groundnut farming."
  },
  {
    id: 14,
    text: "What does 'vital' mean in the context of groundnut farming?",
    passage: "In Kano, the groundnut pyramids were once a symbol of wealth. Farmers stacked bags of groundnuts into huge pyramids for export. Today, the pyramids are gone, but groundnut farming remains vital.",
    options: [
      { id: 'a', text: "Unimportant" },
      { id: 'b', text: "Essential" },
      { id: 'c', text: "Temporary" },
      { id: 'd', text: "Declining" }
    ],
    correctAnswer: "Essential",
    explanation: "In the context of farming, 'vital' means essential, indicating groundnut farming’s continued importance in Kano.",
    hint: "Think about the role of groundnut farming today."
  },
  {
    id: 15,
    text: "What can be inferred about the groundnut pyramids today?",
    passage: "In Kano, the groundnut pyramids were once a symbol of wealth. Farmers stacked bags of groundnuts into huge pyramids for export. Today, the pyramids are gone, but groundnut farming remains vital.",
    options: [
      { id: 'a', text: "They are still being built" },
      { id: 'b', text: "They no longer exist" },
      { id: 'c', text: "They are made of other crops" },
      { id: 'd', text: "They are a tourist attraction" }
    ],
    correctAnswer: "They no longer exist",
    explanation: "The passage explicitly states that the groundnut pyramids are gone today.",
    hint: "Look for the current status of the pyramids."
  },
  {
    id: 16,
    text: "What is a key detail about the groundnut pyramids in Kano?",
    passage: "In Kano, the groundnut pyramids were once a symbol of wealth. Farmers stacked bags of groundnuts into huge pyramids for export. Today, the pyramids are gone, but groundnut farming remains vital.",
    options: [
      { id: 'a', text: "They are still built today" },
      { id: 'b', text: "They were stacked for export" },
      { id: 'c', text: "They were made of rice" },
      { id: 'd', text: "They were small structures" }
    ],
    correctAnswer: "They were stacked for export",
    explanation: "The passage specifies that farmers stacked groundnuts into pyramids for export.",
    hint: "Focus on the purpose of the pyramids."
  },
  {
    id: 17,
    text: "What is the main idea of the passage?",
    passage: "In Enugu, coal mining was once a major industry. Miners worked underground, extracting coal for export. Today, coal mining has declined, but the region’s markets remain vibrant with traders selling yam and palm oil.",
    options: [
      { id: 'a', text: "The decline of coal mining in Enugu" },
      { id: 'b', text: "The history and shift from coal mining to vibrant markets in Enugu" },
      { id: 'c', text: "The export of yam in Enugu" },
      { id: 'd', text: "The challenges of miners" }
    ],
    correctAnswer: "The history and shift from coal mining to vibrant markets in Enugu",
    explanation: "The passage describes the past prominence of coal mining and the current vibrancy of markets in Enugu.",
    hint: "Focus on the past and present economic activities in Enugu."
  },
  {
    id: 18,
    text: "What does 'vibrant' mean in the context of Enugu’s markets?",
    passage: "In Enugu, coal mining was once a major industry. Miners worked underground, extracting coal for export. Today, coal mining has declined, but the region’s markets remain vibrant with traders selling yam and palm oil.",
    options: [
      { id: 'a', text: "Quiet and empty" },
      { id: 'b', text: "Lively and active" },
      { id: 'c', text: "Closed and abandoned" },
      { id: 'd', text: "Small and limited" }
    ],
    correctAnswer: "Lively and active",
    explanation: "In the context of markets, 'vibrant' means lively and active, as traders sell goods like yam and palm oil.",
    hint: "Think about the activity level in Enugu’s markets."
  },
  {
    id: 19,
    text: "What can be inferred about Enugu’s economy today?",
    passage: "In Enugu, coal mining was once a major industry. Miners worked underground, extracting coal for export. Today, coal mining has declined, but the region’s markets remain vibrant with traders selling yam and palm oil.",
    options: [
      { id: 'a', text: "It depends entirely on coal mining" },
      { id: 'b', text: "It relies on vibrant market trade" },
      { id: 'c', text: "It has no economic activity" },
      { id: 'd', text: "It focuses on tourism" }
    ],
    correctAnswer: "It relies on vibrant market trade",
    explanation: "The passage indicates that with the decline of coal mining, Enugu’s economy now relies on vibrant market trade.",
    hint: "Consider what replaced coal mining in Enugu."
  },
  {
    id: 20,
    text: "Which detail should be excluded from a summary of the passage?",
    passage: "In Enugu, coal mining was once a major industry. Miners worked underground, extracting coal for export. Today, coal mining has declined, but the region’s markets remain vibrant with traders selling yam and palm oil.",
    options: [
      { id: 'a', text: "Coal mining has declined" },
      { id: 'b', text: "Miners worked underground" },
      { id: 'c', text: "Markets sell yam and palm oil" },
      { id: 'd', text: "The region’s markets are vibrant" }
    ],
    correctAnswer: "Miners worked underground",
    explanation: "The detail about miners working underground is less relevant to the main idea of the economic shift from mining to markets.",
    hint: "Identify the detail least connected to the economic change."
  },
  {
    id: 21,
    text: "What is the main idea of the passage?",
    passage: "In Lagos, the danfo bus is a key transport mode. These yellow buses speed through busy streets, carrying students and traders. However, they often get stuck in traffic on routes like Third Mainland Bridge.",
    options: [
      { id: 'a', text: "The challenges of Lagos traffic" },
      { id: 'b', text: "The role of danfo buses in Lagos transport" },
      { id: 'c', text: "The design of yellow buses" },
      { id: 'd', text: "The construction of Third Mainland Bridge" }
    ],
    correctAnswer: "The role of danfo buses in Lagos transport",
    explanation: "The passage focuses on the significance of danfo buses as a transport mode in Lagos, with details about their use and challenges.",
    hint: "Focus on the primary subject of the passage."
  },
  {
    id: 22,
    text: "What does 'key' mean in the context of danfo buses?",
    passage: "In Lagos, the danfo bus is a key transport mode. These yellow buses speed through busy streets, carrying students and traders. However, they often get stuck in traffic on routes like Third Mainland Bridge.",
    options: [
      { id: 'a', text: "Unimportant" },
      { id: 'b', text: "Essential" },
      { id: 'c', text: "Temporary" },
      { id: 'd', text: "Expensive" }
    ],
    correctAnswer: "Essential",
    explanation: "In the context of transport, 'key' means essential, highlighting the danfo bus’s critical role in Lagos.",
    hint: "Think about the importance of danfo buses."
  },
  {
    id: 23,
    text: "What can be inferred about danfo bus routes in Lagos?",
    passage: "In Lagos, the danfo bus is a key transport mode. These yellow buses speed through busy streets, carrying students and traders. However, they often get stuck in traffic on routes like Third Mainland Bridge.",
    options: [
      { id: 'a', text: "They avoid traffic entirely" },
      { id: 'b', text: "They face traffic challenges" },
      { id: 'c', text: "They only operate at night" },
      { id: 'd', text: "They are limited to one route" }
    ],
    correctAnswer: "They face traffic challenges",
    explanation: "The passage mentions danfo buses getting stuck in traffic, indicating challenges on their routes.",
    hint: "Look for the issue mentioned about bus routes."
  },
  {
    id: 24,
    text: "What is a key detail about danfo buses in Lagos?",
    passage: "In Lagos, the danfo bus is a key transport mode. These yellow buses speed through busy streets, carrying students and traders. However, they often get stuck in traffic on routes like Third Mainland Bridge.",
    options: [
      { id: 'a', text: "They are painted blue" },
      { id: 'b', text: "They carry students and traders" },
      { id: 'c', text: "They avoid busy streets" },
      { id: 'd', text: "They never face traffic" }
    ],
    correctAnswer: "They carry students and traders",
    explanation: "The passage specifies that danfo buses carry students and traders, a key detail about their role.",
    hint: "Focus on who uses the danfo buses."
  },
  {
    id: 25,
    text: "What is the main idea of the passage?",
    passage: "In Port Harcourt, the oil industry drives economic growth. Workers in oil companies earn high salaries, boosting local businesses. However, oil spills have caused environmental concerns in the region.",
    options: [
      { id: 'a', text: "The environmental issues in Port Harcourt" },
      { id: 'b', text: "The oil industry’s impact on Port Harcourt’s economy" },
      { id: 'c', text: "The salaries of oil workers" },
      { id: 'd', text: "The closure of local businesses" }
    ],
    correctAnswer: "The oil industry’s impact on Port Harcourt’s economy",
    explanation: "The passage focuses on how the oil industry drives economic growth in Port Harcourt, with details about salaries and businesses.",
    hint: "Focus on the primary economic driver in the passage."
  },
  {
    id: 26,
    text: "What does 'drives' mean in the context of the oil industry?",
    passage: "In Port Harcourt, the oil industry drives economic growth. Workers in oil companies earn high salaries, boosting local businesses. However, oil spills have caused environmental concerns in the region.",
    options: [
      { id: 'a', text: "Stops completely" },
      { id: 'b', text: "Powers or fuels" },
      { id: 'c', text: "Reduces significantly" },
      { id: 'd', text: "Ignores entirely" }
    ],
    correctAnswer: "Powers or fuels",
    explanation: "In the context of economic growth, 'drives' means powers or fuels, indicating the oil industry’s role in boosting the economy.",
    hint: "Think about the oil industry’s role in the economy."
  },
  {
    id: 27,
    text: "What can be inferred about the environmental impact of the oil industry in Port Harcourt?",
    passage: "In Port Harcourt, the oil industry drives economic growth. Workers in oil companies earn high salaries, boosting local businesses. However, oil spills have caused environmental concerns in the region.",
    options: [
      { id: 'a', text: "It has no environmental impact" },
      { id: 'b', text: "It causes environmental concerns" },
      { id: 'c', text: "It improves the environment" },
      { id: 'd', text: "It only affects businesses" }
    ],
    correctAnswer: "It causes environmental concerns",
    explanation: "The passage mentions oil spills causing environmental concerns in Port Harcourt.",
    hint: "Look for the negative impact mentioned in the passage."
  },
  {
    id: 28,
    text: "Which detail should be excluded from a summary of the passage?",
    passage: "In Port Harcourt, the oil industry drives economic growth. Workers in oil companies earn high salaries, boosting local businesses. However, oil spills have caused environmental concerns in the region.",
    options: [
      { id: 'a', text: "The oil industry drives economic growth" },
      { id: 'b', text: "Workers earn high salaries" },
      { id: 'c', text: "Oil spills cause environmental concerns" },
      { id: 'd', text: "Local businesses are boosted" }
    ],
    correctAnswer: "Workers earn high salaries",
    explanation: "While important, the detail about workers’ salaries is less central to the main idea of the oil industry’s economic impact compared to the other options.",
    hint: "Identify the detail least tied to the overall economic impact."
  },
  {
    id: 29,
    text: "What is the main idea of the passage?",
    passage: "In Jos, the tin mining industry has shaped the city’s history. Miners once dug deep tunnels to extract tin, creating jobs. Today, tourism and farming are growing, as tin mining has declined.",
    options: [
      { id: 'a', text: "The decline of tourism in Jos" },
      { id: 'b', text: "The historical and current economic shifts in Jos" },
      { id: 'c', text: "The challenges of tin miners" },
      { id: 'd', text: "The growth of tin mining today" }
    ],
    correctAnswer: "The historical and current economic shifts in Jos",
    explanation: "The passage describes the historical role of tin mining and the shift to tourism and farming in Jos today.",
    hint: "Focus on the economic changes described in the passage."
  },
  {
    id: 30,
    text: "What can be inferred about Jos’s economy today?",
    passage: "In Jos, the tin mining industry has shaped the city’s history. Miners once dug deep tunnels to extract tin, creating jobs. Today, tourism and farming are growing, as tin mining has declined.",
    options: [
      { id: 'a', text: "It relies solely on tin mining" },
      { id: 'b', text: "It is shifting to tourism and farming" },
      { id: 'c', text: "It has no economic activity" },
      { id: 'd', text: "It focuses on manufacturing" }
    ],
    correctAnswer: "It is shifting to tourism and farming",
    explanation: "The passage states that tourism and farming are growing as tin mining declines, indicating a shift in Jos’s economy.",
    hint: "Look for the new economic activities mentioned."
  }
];

export default questions;