// Quiz questions for Modular Arithmetic (matching EquationPages.jsx content)
const questions = [
  {
    id: 1,
    text: "What is modular arithmetic commonly called?",
    options: [
      { id: 'a', text: "Clock arithmetic", correct: true },
      { id: 'b', text: "Circle mathematics" },
      { id: 'c', text: "Time mathematics" },
      { id: 'd', text: "Round arithmetic" }
    ],
    correctAnswer: "Clock arithmetic",
    explanation: "Modular arithmetic is called 'clock arithmetic' because numbers wrap around after reaching the modulus, just like hours on a clock.",
    hint: "Think about how we tell time."
  },
  {
    id: 2,
    text: "What does a ≡ b (mod n) mean?",
    options: [
      { id: 'a', text: "'a' and 'b' have the same remainder when divided by 'n'", correct: true },
      { id: 'b', text: "'a' equals 'b' exactly" },
      { id: 'c', text: "'a' is greater than 'b' by 'n'" },
      { id: 'd', text: "'a' and 'b' are both divisible by 'n'" }
    ],
    correctAnswer: "'a' and 'b' have the same remainder when divided by 'n'",
    explanation: "a ≡ b (mod n) means a and b leave the same remainder when divided by n. It's about remainders, not exact equality.",
    hint: "The symbol '≡' is for congruence, which is different from 'equal'."
  },
  {
    id: 3,
    text: "Why is 15 ≡ 3 (mod 12)?",
    options: [
      { id: 'a', text: "Both 15 and 3 have remainder 3 when divided by 12", correct: true },
      { id: 'b', text: "15 - 3 = 12" },
      { id: 'c', text: "15 + 3 = 18" },
      { id: 'd', text: "15 ÷ 3 = 5" }
    ],
    correctAnswer: "Both 15 and 3 have remainder 3 when divided by 12",
    explanation: "15 ÷ 12 = 1 R 3, and 3 ÷ 12 = 0 R 3. Both have remainder 3, so 15 ≡ 3 (mod 12).",
    hint: "Check the remainder for each number when you divide by 12."
  },
  {
    id: 4,
    text: "What is 7 + 9 (mod 10)?",
    options: [
      { id: 'a', text: "6", correct: true },
      { id: 'b', text: "16" },
      { id: 'c', text: "7" },
      { id: 'd', text: "9" }
    ],
    correctAnswer: "6",
    explanation: "7 + 9 = 16. Then 16 ÷ 10 = 1 R 6. So 7 + 9 ≡ 6 (mod 10).",
    hint: "First do the normal addition, then find the remainder."
  },
  {
    id: 5,
    text: "What is 4 × 5 (mod 6)?",
    options: [
      { id: 'a', text: "2", correct: true },
      { id: 'b', text: "20" },
      { id: 'c', text: "4" },
      { id: 'd', text: "5" }
    ],
    correctAnswer: "2",
    explanation: "4 × 5 = 20. Then 20 ÷ 6 = 3 R 2. So 4 × 5 ≡ 2 (mod 6).",
    hint: "First do the normal multiplication, then find the remainder."
  },
  {
    id: 6,
    text: "What is the modulus in the expression 9 ≡ 2 (mod 7)?",
    options: [
      { id: 'a', text: "7", correct: true },
      { id: 'b', text: "9" },
      { id: 'c', text: "2" },
      { id: 'd', text: "11" }
    ],
    correctAnswer: "7",
    explanation: "In a ≡ b (mod n), the modulus is n. Here the modulus is 7.",
    hint: "The modulus is the number inside the parentheses."
  },
  {
    id: 7,
    text: "How do you add in modular arithmetic?",
    options: [
      { id: 'a', text: "Add the numbers, then find the remainder when divided by the modulus", correct: true },
      { id: 'b', text: "Add the numbers and multiply by the modulus" },
      { id: 'c', text: "Find remainders first, then add" },
      { id: 'd', text: "Add the modulus to both numbers" }
    ],
    correctAnswer: "Add the numbers, then find the remainder when divided by the modulus",
    explanation: "In modular addition: first add normally, then take the remainder when divided by the modulus.",
    hint: "The order of operations is important."
  },
  {
    id: 8,
    text: "What is a modular inverse?",
    options: [
      { id: 'a', text: "A number 'x' such that ax ≡ 1 (mod n)", correct: true },
      { id: 'b', text: "The negative of a number" },
      { id: 'c', text: "The reciprocal of a number" },
      { id: 'd', text: "A number minus the modulus" }
    ],
    correctAnswer: "A number 'x' such that ax ≡ 1 (mod n)",
    explanation: "The modular inverse of 'a' is a number 'x' where ax ≡ 1 (mod n). It's like the 'opposite' of 'a' in modular arithmetic.",
    hint: "Think about a number that 'undoes' multiplication in modular arithmetic."
  },
  {
    id: 9,
    text: "What is the inverse of 3 (mod 5)?",
    options: [
      { id: 'a', text: "2", correct: true },
      { id: 'b', text: "3" },
      { id: 'c', text: "5" },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "2",
    explanation: "We need 3x ≡ 1 (mod 5). Try x = 2: 3 × 2 = 6 ≡ 1 (mod 5). So the inverse is 2.",
    hint: "Multiply 3 by the options and see which one gives a remainder of 1."
  },
  {
    id: 10,
    text: "When does a modular inverse exist?",
    options: [
      { id: 'a', text: "When 'a' and 'n' have no common factor greater than 1", correct: true },
      { id: 'b', text: "When 'a' is larger than 'n'" },
      { id: 'c', text: "When 'n' is a prime number" },
      { id: 'd', text: "When 'a' is even" }
    ],
    correctAnswer: "When 'a' and 'n' have no common factor greater than 1",
    explanation: "A modular inverse exists only when gcd(a,n) = 1, meaning a and n are coprime (no common factors except 1).",
    hint: "This is a key condition for finding a modular inverse."
  },
  {
    id: 11,
    text: "What is 12 - 8 (mod 5)?",
    options: [
      { id: 'a', text: "4", correct: true },
      { id: 'b', text: "1" },
      { id: 'c', text: "3" },
      { id: 'd', text: "2" }
    ],
    correctAnswer: "4",
    explanation: "12 - 8 = 4. Since 4 ÷ 5 = 0 R 4, we have 12 - 8 ≡ 4 (mod 5).",
    hint: "You can subtract first and then find the remainder."
  },
  {
    id: 12,
    text: "In a 12-hour clock, if it's 9 AM and you add 6 hours, what time is it?",
    options: [
      { id: 'a', text: "3 PM", correct: true },
      { id: 'b', text: "15 PM" },
      { id: 'c', text: "15 AM" },
      { id: 'd', text: "6 PM" }
    ],
    correctAnswer: "3 PM",
    explanation: "9 + 6 = 15. In 12-hour format: 15 ≡ 3 (mod 12), so it's 3 PM. This is modular arithmetic in action!",
    hint: "This is a classic 'clock arithmetic' problem."
  },
  {
    id: 13,
    text: "What real-world system uses modular arithmetic?",
    options: [
      { id: 'a', text: "Calendar systems and time keeping", correct: true },
      { id: 'b', text: "Banking interest calculations" },
      { id: 'c', text: "Distance measurements" },
      { id: 'd', text: "Temperature conversions" }
    ],
    correctAnswer: "Calendar systems and time keeping",
    explanation: "Calendars use modular arithmetic: days of the week (mod 7), months (mod 12), hours (mod 12 or 24).",
    hint: "This is the most direct application of 'clock arithmetic'."
  },
  {
    id: 14,
    text: "If a 40-day course starts on Tuesday, on which day will it end?",
    options: [
      { id: 'a', text: "Sunday", correct: true },
      { id: 'b', text: "Tuesday" },
      { id: 'c', text: "Friday" },
      { id: 'd', text: "Monday" }
    ],
    correctAnswer: "Sunday",
    explanation: "40 ÷ 7 = 5 R 5. Count 5 days after Tuesday: Wed(1), Thu(2), Fri(3), Sat(4), Sun(5). Answer: Sunday.",
    hint: "There are 7 days in a week, so you should use modulo 7."
  },
  {
    id: 15,
    text: "What is 25 (mod 7)?",
    options: [
      { id: 'a', text: "4", correct: true },
      { id: 'b', text: "3" },
      { id: 'c', text: "5" },
      { id: 'd', text: "6" }
    ],
    correctAnswer: "4",
    explanation: "25 ÷ 7 = 3 R 4. So 25 ≡ 4 (mod 7).",
    hint: "Find the remainder when 25 is divided by 7."
  },
  {
    id: 16,
    text: "What field heavily uses modular arithmetic for security?",
    options: [
      { id: 'a', text: "Cryptography and computer science", correct: true },
      { id: 'b', text: "Biology and medicine" },
      { id: 'c', text: "Art and literature" },
      { id: 'd', text: "Agriculture" }
    ],
    correctAnswer: "Cryptography and computer science",
    explanation: "Cryptography uses modular arithmetic extensively for encryption algorithms and computer security.",
    hint: "Think about keeping secrets and protecting data."
  },
  {
    id: 17,
    text: "What is 3⁵ (mod 4)?",
    options: [
      { id: 'a', text: "3", correct: true },
      { id: 'b', text: "1" },
      { id: 'c', text: "2" },
      { id: 'd', text: "0" }
    ],
    correctAnswer: "3",
    explanation: "3⁵ = 243. Then 243 ÷ 4 = 60 R 3. So 3⁵ ≡ 3 (mod 4).",
    hint: "You can also work with the smaller remainders: 3¹ ≡ 3, 3² ≡ 1, 3³ ≡ 3, etc."
  },
  {
    id: 18,
    text: "What happens in modular arithmetic when you 'wrap around'?",
    options: [
      { id: 'a', text: "You start counting from 0 again after reaching the modulus", correct: true },
      { id: 'b', text: "You stop calculating" },
      { id: 'c', text: "You switch to regular arithmetic" },
      { id: 'd', text: "You reverse the operation" }
    ],
    correctAnswer: "You start counting from 0 again after reaching the modulus",
    explanation: "Like a clock face, when you reach the modulus value, you wrap around and start from 0 again.",
    hint: "Think of a circular number line."
  },
  {
    id: 19,
    text: "What is 0 (mod 5)?",
    options: [
      { id: 'a', text: "0", correct: true },
      { id: 'b', text: "5" },
      { id: 'c', text: "1" },
      { id: 'd', text: "Undefined" }
    ],
    correctAnswer: "0",
    explanation: "0 ÷ 5 = 0 R 0. So 0 ≡ 0 (mod 5). Zero is always congruent to zero in any modulus.",
    hint: "The remainder of 0 divided by any number (except 0) is 0."
  },
  {
    id: 20,
    text: "In modular arithmetic, what is 8 + 7 (mod 12)?",
    options: [
      { id: 'a', text: "3", correct: true },
      { id: 'b', text: "15" },
      { id: 'c', text: "8" },
      { id: 'd', text: "7" }
    ],
    correctAnswer: "3",
    explanation: "8 + 7 = 15. Then 15 ÷ 12 = 1 R 3. So 8 + 7 ≡ 3 (mod 12).",
    hint: "This is just like adding hours on a 12-hour clock."
  },
  {
    id: 21,
    text: "Why is modular arithmetic useful in computer science?",
    options: [
      { id: 'a', text: "It handles overflow and creates predictable cycles", correct: true },
      { id: 'b', text: "It makes calculations faster" },
      { id: 'c', text: "It uses less memory" },
      { id: 'd', text: "It's easier to program" }
    ],
    correctAnswer: "It handles overflow and creates predictable cycles",
    explanation: "Modular arithmetic helps computers handle number overflow and creates predictable, repeating patterns useful for algorithms.",
    hint: "Computers have limited memory, so numbers can 'overflow'."
  },
  {
    id: 22,
    text: "What is the result of 100 (mod 3)?",
    options: [
      { id: 'a', text: "1", correct: true },
      { id: 'b', text: "0" },
      { id: 'c', text: "2" },
      { id: 'd', text: "3" }
    ],
    correctAnswer: "1",
    explanation: "100 ÷ 3 = 33 R 1. So 100 ≡ 1 (mod 3).",
    hint: "Remember the divisibility rule for 3: a number is divisible by 3 if the sum of its digits is."
  },
  {
    id: 23,
    text: "What pattern do you see in powers of 2 modulo 3?",
    options: [
      { id: 'a', text: "2¹≡2, 2²≡1, 2³≡2, 2⁴≡1, ... (alternating 2,1)", correct: true },
      { id: 'b', text: "Always equals 2" },
      { id: 'c', text: "Always equals 1" },
      { id: 'd', text: "No clear pattern" }
    ],
    correctAnswer: "2¹≡2, 2²≡1, 2³≡2, 2⁴≡1, ... (alternating 2,1)",
    explanation: "2¹=2≡2(mod3), 2²=4≡1(mod3), 2³=8≡2(mod3), 2⁴=16≡1(mod3). The pattern repeats: 2,1,2,1,...",
    hint: "Calculate the first few powers of 2 and find their remainders when divided by 3."
  },
  {
    id: 24,
    text: "How is modular arithmetic used in hash functions?",
    options: [
      { id: 'a', text: "To distribute data evenly across storage locations", correct: true },
      { id: 'b', text: "To encrypt passwords" },
      { id: 'c', text: "To compress files" },
      { id: 'd', text: "To sort data" }
    ],
    correctAnswer: "To distribute data evenly across storage locations",
    explanation: "Hash functions use modular arithmetic to map data to fixed-size storage locations, ensuring even distribution.",
    hint: "Think about how a hash function converts a key into an index."
  },
  {
    id: 25,
    text: "What is 6 × 7 (mod 8)?",
    options: [
      { id: 'a', text: "2", correct: true },
      { id: 'b', text: "42" },
      { id: 'c', text: "6" },
      { id: 'd', text: "7" }
    ],
    correctAnswer: "2",
    explanation: "6 × 7 = 42. Then 42 ÷ 8 = 5 R 2. So 6 × 7 ≡ 2 (mod 8).",
    hint: "Multiply the numbers, then find the remainder."
  },
  {
    id: 26,
    text: "In modular arithmetic, what does congruent mean?",
    options: [
      { id: 'a', text: "Having the same remainder when divided by the modulus", correct: true },
      { id: 'b', text: "Being exactly equal" },
      { id: 'c', text: "Being approximately equal" },
      { id: 'd', text: "Having the same digits" }
    ],
    correctAnswer: "Having the same remainder when divided by the modulus",
    explanation: "Congruent means having the same remainder. Numbers can be congruent without being equal: 15 ≡ 3 (mod 12).",
    hint: "This is the definition of the '≡' symbol."
  },
  {
    id: 27,
    text: "What is special about arithmetic modulo a prime number?",
    options: [
      { id: 'a', text: "Every non-zero element has a multiplicative inverse", correct: true },
      { id: 'b', text: "Addition doesn't work" },
      { id: 'c', text: "Only even numbers can be used" },
      { id: 'd', text: "The results are always prime" }
    ],
    correctAnswer: "Every non-zero element has a multiplicative inverse",
    explanation: "In modular arithmetic with a prime modulus, every non-zero number has a multiplicative inverse, making it a mathematical field.",
    hint: "This property is essential for cryptography."
  },
  {
    id: 28,
    text: "What happens if you try to find the inverse of 6 (mod 9)?",
    options: [
      { id: 'a', text: "No inverse exists because gcd(6,9) = 3 ≠ 1", correct: true },
      { id: 'b', text: "The inverse is 3" },
      { id: 'c', text: "The inverse is 6" },
      { id: 'd', text: "The inverse is 9" }
    ],
    correctAnswer: "No inverse exists because gcd(6,9) = 3 ≠ 1",
    explanation: "Since gcd(6,9) = 3 ≠ 1, the numbers 6 and 9 are not coprime, so 6 has no multiplicative inverse modulo 9.",
    hint: "Check if the number and the modulus have any common factors other than 1."
  },
  {
    id: 29,
    text: "Why is modular arithmetic called 'clock arithmetic'?",
    options: [
      { id: 'a', text: "Because numbers wrap around like hours on a clock face", correct: true },
      { id: 'b', text: "Because it was invented by clockmakers" },
      { id: 'c', text: "Because it's only used for time calculations" },
      { id: 'd', text: "Because it's circular like a clock" }
    ],
    correctAnswer: "Because numbers wrap around like hours on a clock face",
    explanation: "Just like hours wrap around from 12 back to 1, numbers in modular arithmetic wrap around when they reach the modulus.",
    hint: "This is a simple analogy that helps explain the concept."
  },
  {
    id: 30,
    text: "What makes modular arithmetic important for your POST-UTME exam?",
    options: [
      { id: 'a', text: "It appears regularly and has systematic solution methods", correct: true },
      { id: 'b', text: "It's the hardest topic in mathematics" },
      { id: 'c', text: "It's rarely tested" },
      { id: 'd', text: "It requires advanced calculus knowledge" }
    ],
    correctAnswer: "It appears regularly and has systematic solution methods",
    explanation: "Modular arithmetic is a key part of POST-UTME exams with clear, systematic methods that guarantee correct answers when applied properly.",
    hint: "Knowing this topic can give you an edge in the exam."
  }
];

export default questions;