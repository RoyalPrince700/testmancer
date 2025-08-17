const questions = [
  {
    id: 1,
    text: "What does the 'base' in number bases tell you?",
    options: [
      { id: 'a', text: "The largest number you can write" },
      { id: 'b', text: "How many unique digits you have before carrying over to the next place value", correct: true },
      { id: 'c', text: "The number of decimal places" },
      { id: 'd', text: "The type of operation to perform" }
    ],
    correctAnswer: "How many unique digits you have before carrying over to the next place value",
    explanation: "The base tells you how many unique digits are available before you need to carry over to the next position.",
    hint: "Think about why we have 10 digits in our everyday number system."
  },
  {
    id: 2,
    text: "What digits are used in base 2 (binary)?",
    options: [
      { id: 'a', text: "0, 1, and 2" },
      { id: 'b', text: "0 through 9" },
      { id: 'c', text: "0 and 1 only", correct: true },
      { id: 'd', text: "A through F" }
    ],
    correctAnswer: "0 and 1 only",
    explanation: "Binary uses only two digits: 0 and 1. This is the language of computers! 💻",
    hint: "The word 'binary' means 'two parts'."
  },
  {
    id: 3,
    text: "What is 125 in base 10 really representing?",
    options: [
      { id: 'a', text: "1 + 2 + 5" },
      { id: 'b', text: "125×10" },
      { id: 'c', text: "125÷10" },
      { id: 'd', text: "1×10² + 2×10¹ + 5×10⁰", correct: true }
    ],
    correctAnswer: "1×10² + 2×10¹ + 5×10⁰",
    explanation: "Every number system works with powers of its base. In base 10: 125 = 1×100 + 2×10 + 5×1.",
    hint: "This is the **expansion method** for base 10."
  },
  {
    id: 4,
    text: "Convert 1101₂ to base 10.",
    options: [
      { id: 'a', text: "13", correct: true },
      { id: 'b', text: "11" },
      { id: 'c', text: "15" },
      { id: 'd', text: "9" }
    ],
    correctAnswer: "13",
    explanation: "(1×2³) + (1×2²) + (0×2¹) + (1×2⁰) = 8 + 4 + 0 + 1 = 13.",
    hint: "Use the **expansion method** with powers of 2."
  },
  {
    id: 5,
    text: "What digits are used in base 8 (octal)?",
    options: [
      { id: 'a', text: "0 to 8" },
      { id: 'b', text: "0 to 7", correct: true },
      { id: 'c', text: "1 to 8" },
      { id: 'd', text: "0 to 9" }
    ],
    correctAnswer: "0 to 7",
    explanation: "Base 8 uses digits from 0 to 7. Once you reach 8, you write it as 10₈.",
    hint: "The digits must always be less than the base."
  },
  {
    id: 6,
    text: "What digits and letters are used in base 16 (hexadecimal)?",
    options: [
      { id: 'a', text: "0-9 only" },
      { id: 'b', text: "A-Z only" },
      { id: 'c', text: "0-9 and A-F", correct: true },
      { id: 'd', text: "0-15" }
    ],
    correctAnswer: "0-9 and A-F",
    explanation: "Hexadecimal uses 0-9 for values 0-9, then A=10, B=11, C=12, D=13, E=14, F=15.",
    hint: "This base needs more than 10 symbols."
  },
  {
    id: 7,
    text: "Convert 25₁₀ to base 2 using repeated division.",
    options: [
      { id: 'a', text: "10101₂" },
      { id: 'b', text: "11001₂", correct: true },
      { id: 'c', text: "11111₂" },
      { id: 'd', text: "10011₂" }
    ],
    correctAnswer: "11001₂",
    explanation: "25÷2=12 R1, 12÷2=6 R0, 6÷2=3 R0, 3÷2=1 R1, 1÷2=0 R1. Reading remainders bottom-up: 11001₂.",
    hint: "Divide by 2 and note the remainders."
  },
  {
    id: 8,
    text: "What is the method called for converting from base 10 to any other base?",
    options: [
      { id: 'a', text: "Expansion method" },
      { id: 'b', text: "Repeated division", correct: true },
      { id: 'c', text: "Substitution method" },
      { id: 'd', text: "Addition method" }
    ],
    correctAnswer: "Repeated division",
    explanation: "Repeated division involves dividing by the target base and collecting remainders from bottom to top.",
    hint: "This method is useful when you want to convert from decimal."
  },
  {
    id: 9,
    text: "What is the method called for converting from any base to base 10?",
    options: [
      { id: 'a', text: "Subtraction method" },
      { id: 'b', text: "Repeated division" },
      { id: 'c', text: "Expansion method", correct: true },
      { id: 'd', text: "Multiplication method" }
    ],
    correctAnswer: "Expansion method",
    explanation: "Expansion method means expressing the number as a sum of powers of its base.",
    hint: "This method 'expands' the number to its full decimal value."
  },
  {
    id: 10,
    text: "In base 2 arithmetic, what is 1 + 1?",
    options: [
      { id: 'a', text: "2₂" },
      { id: 'b', text: "10₂", correct: true },
      { id: 'c', text: "11₂" },
      { id: 'd', text: "1₂" }
    ],
    correctAnswer: "10₂",
    explanation: "In base 2, 1+1 = 10₂ (which represents 'two' in binary). You carry over when you reach the base value.",
    hint: "Remember to carry over a '1' to the next column, just like in base 10."
  },
  {
    id: 11,
    text: "What is 1011₂ + 110₂?",
    options: [
      { id: 'a', text: "1101₂" },
      { id: 'b', text: "1111₂" },
      { id: 'c', text: "10001₂", correct: true },
      { id: 'd', text: "10101₂" }
    ],
    correctAnswer: "10001₂",
    explanation: "Adding column by column in base 2: 1+0=1, 1+1=10 (carry 1), 0+1+1=10 (carry 1), 1+0+1=10, so 10001₂.",
    hint: "Add column by column from right to left, remembering to carry over."
  },
  {
    id: 12,
    text: "Which number base do computers primarily use?",
    options: [
      { id: 'a', text: "Base 10 (decimal)" },
      { id: 'b', text: "Base 8 (octal)" },
      { id: 'c', text: "Base 16 (hexadecimal)" },
      { id: 'd', text: "Base 2 (binary)", correct: true }
    ],
    correctAnswer: "Base 2 (binary)",
    explanation: "Computers work with base 2 (binary) because electronic circuits can easily represent two states: on (1) and off (0).",
    hint: "Think about the simplest possible state for an electrical signal."
  },
  {
    id: 13,
    text: "What is the value of A in hexadecimal?",
    options: [
      { id: 'a', text: "10", correct: true },
      { id: 'b', text: "11" },
      { id: 'c', text: "1" },
      { id: 'd', text: "15" }
    ],
    correctAnswer: "10",
    explanation: "In hexadecimal: A=10, B=11, C=12, D=13, E=14, F=15.",
    hint: "A is the first letter after the number 9."
  },
  {
    id: 14,
    text: "What is 101₂ in base 10?",
    options: [
      { id: 'a', text: "3" },
      { id: 'b', text: "5", correct: true },
      { id: 'c', text: "7" },
      { id: 'd', text: "101" }
    ],
    correctAnswer: "5",
    explanation: "101₂ = (1×2²) + (0×2¹) + (1×2⁰) = 4 + 0 + 1 = 5.",
    hint: "Use the expansion method. The positions are 2⁰, 2¹, 2², etc."
  },
  {
    id: 15,
    text: "In base 8, what comes after 7?",
    options: [
      { id: 'a', text: "8₈" },
      { id: 'b', text: "11₈" },
      { id: 'c', text: "10₈", correct: true },
      { id: 'd', text: "20₈" }
    ],
    correctAnswer: "10₈",
    explanation: "In base 8, after using all digits 0-7, the next number is 10₈ (which represents 'eight' in octal).",
    hint: "This is a carry-over situation."
  },
  {
    id: 16,
    text: "Convert 64₁₀ to base 2.",
    options: [
      { id: 'a', text: "1111111₂" },
      { id: 'b', text: "1000000₂", correct: true },
      { id: 'c', text: "0111111₂" },
      { id: 'd', text: "1000001₂" }
    ],
    correctAnswer: "1000000₂",
    explanation: "64 = 2⁶, so 64₁₀ = 1000000₂ (1 followed by six zeros).",
    hint: "Think about the powers of 2: 1, 2, 4, 8, 16, 32, 64..."
  },
  {
    id: 17,
    text: "What is the main advantage of understanding number bases for POST-UTME?",
    options: [
      { id: 'a', text: "They are the hardest part of the exam" },
      { id: 'b', text: "They are rarely asked" },
      { id: 'c', text: "Number base questions are guaranteed easy marks", correct: true },
      { id: 'd', text: "They require advanced mathematics" }
    ],
    correctAnswer: "Number base questions are guaranteed easy marks",
    explanation: "Number base questions are a sure bet in POST-UTME exams. They're predictable and can secure easy marks with practice! 💯",
    hint: "Think about the reliability of this topic for exams."
  },
  {
    id: 18,
    text: "What is 777₈ in base 10?",
    options: [
      { id: 'a', text: "777" },
      { id: 'b', text: "511", correct: true },
      { id: 'c', text: "343" },
      { id: 'd', text: "399" }
    ],
    correctAnswer: "511",
    explanation: "777₈ = (7×8²) + (7×8¹) + (7×8⁰) = 7×64 + 7×8 + 7×1 = 448 + 56 + 7 = 511.",
    hint: "Use the expansion method with powers of 8."
  },
  {
    id: 19,
    text: "When converting 15₁₀ to base 2, what is the correct sequence of divisions?",
    options: [
      { id: 'a', text: "15÷2=7 R0, 7÷2=3 R1, 3÷2=1 R1, 1÷2=0 R1" },
      { id: 'b', text: "15÷2=8 R1, 8÷2=4 R0, 4÷2=2 R0, 2÷2=1 R0" },
      { id: 'c', text: "15÷2=7 R1, 7÷2=4 R1, 4÷2=2 R0, 2÷2=1 R0" },
      { id: 'd', text: "15÷2=7 R1, 7÷2=3 R1, 3÷2=1 R1, 1÷2=0 R1", correct: true }
    ],
    correctAnswer: "15÷2=7 R1, 7÷2=3 R1, 3÷2=1 R1, 1÷2=0 R1",
    explanation: "Dividing 15 by 2 repeatedly: 15÷2=7 R1, 7÷2=3 R1, 3÷2=1 R1, 1÷2=0 R1. Reading up: 1111₂.",
    hint: "Perform the repeated division correctly and write down the remainders."
  },
  {
    id: 20,
    text: "What does the subscript notation like 101₂ indicate?",
    options: [
      { id: 'a', text: "The number of digits" },
      { id: 'b', text: "The base of the number system", correct: true },
      { id: 'c', text: "The power to raise the number to" },
      { id: 'd', text: "The position of the decimal point" }
    ],
    correctAnswer: "The base of the number system",
    explanation: "The subscript shows which base the number is written in. 101₂ means 101 in base 2.",
    hint: "This notation is crucial for distinguishing between bases."
  },
  {
    id: 21,
    text: "In which base would you write the number 'ten' as 'A'?",
    options: [
      { id: 'a', text: "Base 10 (decimal)" },
      { id: 'b', text: "Base 8 (octal)" },
      { id: 'c', text: "Base 16 (hexadecimal)", correct: true },
      { id: 'd', text: "Base 2 (binary)" }
    ],
    correctAnswer: "Base 16 (hexadecimal)",
    explanation: "In hexadecimal (base 16), the digit A represents the value ten.",
    hint: "This base needs letters for values above 9."
  },
  {
    id: 22,
    text: "What is 1000₂ in base 10?",
    options: [
      { id: 'a', text: "4" },
      { id: 'b', text: "16" },
      { id: 'c', text: "1000" },
      { id: 'd', text: "8", correct: true }
    ],
    correctAnswer: "8",
    explanation: "1000₂ = (1×2³) + (0×2²) + (0×2¹) + (0×2⁰) = 8 + 0 + 0 + 0 = 8.",
    hint: "1000₂ is the binary representation of 2³."
  },
  {
    id: 23,
    text: "Why is base 2 called 'binary'?",
    options: [
      { id: 'a', text: "Because it was invented in the 2nd century" },
      { id: 'b', text: "Because it uses exactly two digits", correct: true },
      { id: 'c', text: "Because it doubles every position" },
      { id: 'd', text: "Because it's used for two-part systems" }
    ],
    correctAnswer: "Because it uses exactly two digits",
    explanation: "'Binary' means 'consisting of two parts' - base 2 uses only two digits: 0 and 1.",
    hint: "The prefix 'bi-' means two."
  },
  {
    id: 24,
    text: "What is 12₁₀ in base 5?",
    options: [
      { id: 'a', text: "12₅" },
      { id: 'b', text: "15₅" },
      { id: 'c', text: "22₅", correct: true },
      { id: 'd', text: "21₅" }
    ],
    correctAnswer: "22₅",
    explanation: "12÷5=2 R2, 2÷5=0 R2. Reading remainders bottom-up: 22₅. Check: (2×5¹) + (2×5⁰) = 10 + 2 = 12 ✓.",
    hint: "Use the repeated division method."
  },
  {
    id: 25,
    text: "In base 3, what digits are allowed?",
    options: [
      { id: 'a', text: "0, 1, 2, 3" },
      { id: 'b', text: "1, 2, 3" },
      { id: 'c', text: "0, 1" },
      { id: 'd', text: "0, 1, 2", correct: true }
    ],
    correctAnswer: "0, 1, 2",
    explanation: "Base 3 uses digits 0, 1, and 2. When you reach 3, you write it as 10₃.",
    hint: "The number of digits must equal the base."
  },
  {
    id: 26,
    text: "What is the key insight about number bases?",
    options: [
      { id: 'a', text: "Every base works exactly like base 10, just with different powers", correct: true },
      { id: 'b', text: "Each base has completely different rules" },
      { id: 'c', text: "Only base 10 follows logical patterns" },
      { id: 'd', text: "Higher bases are always more complex" }
    ],
    correctAnswer: "Every base works exactly like base 10, just with different powers",
    explanation: "All bases follow the same pattern: each position represents a power of the base, just like base 10.",
    hint: "The fundamental principle is the same regardless of the base."
  },
  {
    id: 27,
    text: "Convert 100₂ to base 10.",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "3" },
      { id: 'c', text: "4", correct: true },
      { id: 'd', text: "100" }
    ],
    correctAnswer: "4",
    explanation: "100₂ = (1×2²) + (0×2¹) + (0×2⁰) = 4 + 0 + 0 = 4.",
    hint: "This is a simple binary conversion."
  },
  {
    id: 28,
    text: "What happens when you reach the base value in any number system?",
    options: [
      { id: 'a', text: "You stop counting" },
      { id: 'b', text: "You carry over to the next position and start from 0 again", correct: true },
      { id: 'c', text: "You switch to a different base" },
      { id: 'd', text: "You add 10 to the current digit" }
    ],
    correctAnswer: "You carry over to the next position and start from 0 again",
    explanation: "When you reach the base value, you carry over to the next position. For example, in base 3: after 2 comes 10₃.",
    hint: "Think about what happens after you count to 9 in base 10."
  },
  {
    id: 29,
    text: "Which base system do we naturally use in everyday life?",
    options: [
      { id: 'a', text: "Base 2 (binary)" },
      { id: 'b', text: "Base 8 (octal)" },
      { id: 'c', text: "Base 10 (decimal)", correct: true },
      { id: 'd', text: "Base 16 (hexadecimal)" }
    ],
    correctAnswer: "Base 10 (decimal)",
    explanation: "We naturally use base 10 (decimal) in everyday life, probably because we have 10 fingers. 🖐️",
    hint: "The name 'decimal' comes from the Latin word for ten."
  },
  {
    id: 30,
    text: "What makes number base conversion problems good for exams?",
    options: [
      { id: 'a', text: "They require memorizing many formulas" },
      { id: 'b', text: "They are based on luck and guessing" },
      { id: 'c', text: "They have clear, systematic methods that always work", correct: true },
      { id: 'd', text: "They change rules depending on the situation" }
    ],
    correctAnswer: "They have clear, systematic methods that always work",
    explanation: "Number base problems are excellent for exams because they follow systematic, reliable methods that always produce correct answers.",
    hint: "These are 'free marks' if you know the methods."
  }
];

export default questions;