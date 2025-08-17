// Quiz questions for Sets and Venn Diagrams (matching EquationPages.jsx content)
const questions = [
  {
    id: 1,
    text: "What is a set?",
    options: [
      { id: 'a', text: "A well-organized collection of unique items or elements", correct: true },
      { id: 'b', text: "A list of random numbers" },
      { id: 'c', text: "A mathematical equation" },
      { id: 'd', text: "A type of graph" }
    ],
    correctAnswer: "A well-organized collection of unique items or elements",
    explanation: "A set is like a well-organized basket containing unique items. Each item appears only once and the collection is well-defined.",
    hint: "Think about the properties of a set, especially uniqueness and order."
  },
  {
    id: 2,
    text: "Which symbol represents the empty set?",
    options: [
      { id: 'a', text: "∅", correct: true },
      { id: 'b', text: "∞" },
      { id: 'c', text: "∪" },
      { id: 'd', text: "∩" }
    ],
    correctAnswer: "∅",
    explanation: "The empty set is represented by ∅ and contains no elements, like the set of Nigerians who have walked on the moon.",
    hint: "The symbol looks like a zero with a line through it."
  },
  {
    id: 3,
    text: "What is a singleton set?",
    options: [
      { id: 'a', text: "A set with exactly one element", correct: true },
      { id: 'b', text: "A set with no elements" },
      { id: 'c', text: "A set with infinite elements" },
      { id: 'd', text: "A set with two elements" }
    ],
    correctAnswer: "A set with exactly one element",
    explanation: "A singleton set has just one element, like the set of even prime numbers: {2}.",
    hint: "The prefix 'single' gives a clue."
  },
  {
    id: 4,
    text: "If A = {2, 4, 6} and B = {4, 8, 12}, what is A ∩ B?",
    options: [
      { id: 'a', text: "{4}", correct: true },
      { id: 'b', text: "{2, 4, 6, 8, 12}" },
      { id: 'c', text: "{2, 6, 8, 12}" },
      { id: 'd', text: "∅" }
    ],
    correctAnswer: "{4}",
    explanation: "Intersection (A ∩ B) contains elements that are in both sets. Only 4 appears in both A and B.",
    hint: "Look for the common elements between the two sets."
  },
  {
    id: 5,
    text: "If A = {2, 4, 6} and B = {4, 8, 12}, what is A ∪ B?",
    options: [
      { id: 'a', text: "{2, 4, 6, 8, 12}", correct: true },
      { id: 'b', text: "{4}" },
      { id: 'c', text: "{2, 6, 8, 12}" },
      { id: 'd', text: "{2, 4, 6} + {4, 8, 12}" }
    ],
    correctAnswer: "{2, 4, 6, 8, 12}",
    explanation: "Union (A ∪ B) contains all elements from either set. Don't repeat the common element 4.",
    hint: "Combine all elements from both sets without duplicates."
  },
  {
    id: 6,
    text: "What does the symbol ∩ represent?",
    options: [
      { id: 'a', text: "Intersection (elements in both sets)", correct: true },
      { id: 'b', text: "Union (elements in either set)" },
      { id: 'c', text: "Empty set" },
      { id: 'd', text: "Universal set" }
    ],
    correctAnswer: "Intersection (elements in both sets)",
    explanation: "∩ is the intersection symbol - it finds elements that are common to both sets (the 'and' operation).",
    hint: "The symbol resembles a lowercase 'n' for 'intersection'."
  },
  {
    id: 7,
    text: "What does the symbol ∪ represent?",
    options: [
      { id: 'a', text: "Union (elements in either set)", correct: true },
      { id: 'b', text: "Intersection (elements in both sets)" },
      { id: 'c', text: "Empty set" },
      { id: 'd', text: "Subset" }
    ],
    correctAnswer: "Union (elements in either set)",
    explanation: "∪ is the union symbol - it combines all elements from both sets (the 'or' operation).",
    hint: "The symbol resembles an uppercase 'U' for 'union'."
  },
  {
    id: 8,
    text: "What is the cardinality of the set A = {Green, White}?",
    options: [
      { id: 'a', text: "2", correct: true },
      { id: 'b', text: "1" },
      { id: 'c', text: "0" },
      { id: 'd', text: "3" }
    ],
    correctAnswer: "2",
    explanation: "Cardinality n(A) is the number of elements in a set. The Nigerian flag colors set has 2 elements.",
    hint: "Just count the items in the set."
  },
  {
    id: 9,
    text: "What is the inclusion-exclusion principle formula?",
    options: [
      { id: 'a', text: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)", correct: true },
      { id: 'b', text: "n(A ∪ B) = n(A) + n(B) + n(A ∩ B)" },
      { id: 'c', text: "n(A ∪ B) = n(A) - n(B) + n(A ∩ B)" },
      { id: 'd', text: "n(A ∪ B) = n(A) × n(B) - n(A ∩ B)" }
    ],
    correctAnswer: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
    explanation: "This formula prevents double-counting. We add both sets then subtract the overlap to avoid counting common elements twice.",
    hint: "The key is to account for the overlap to prevent over-counting."
  },
  {
    id: 10,
    text: "In a class, 20 like Football, 15 like Basketball, and 8 like both. How many like at least one sport?",
    options: [
      { id: 'a', text: "27", correct: true },
      { id: 'b', text: "35" },
      { id: 'c', text: "43" },
      { id: 'd', text: "23" }
    ],
    correctAnswer: "27",
    explanation: "Using inclusion-exclusion: n(F ∪ B) = 20 + 15 - 8 = 27. We subtract 8 to avoid double-counting those who like both.",
    hint: "Apply the inclusion-exclusion formula you just learned."
  },
  {
    id: 11,
    text: "What represents the Universal Set in a Venn diagram?",
    options: [
      { id: 'a', text: "A rectangle containing all other sets", correct: true },
      { id: 'b', text: "A circle" },
      { id: 'c', text: "A triangle" },
      { id: 'd', text: "A dot" }
    ],
    correctAnswer: "A rectangle containing all other sets",
    explanation: "The Universal Set (U) is represented by a rectangle that contains everything being considered in the problem.",
    hint: "It's the boundary for all the sets in the problem."
  },
  {
    id: 12,
    text: "What type of set has a countable number of elements?",
    options: [
      { id: 'a', text: "Finite set", correct: true },
      { id: 'b', text: "Infinite set" },
      { id: 'c', text: "Empty set" },
      { id: 'd', text: "Universal set" }
    ],
    correctAnswer: "Finite set",
    explanation: "A finite set has a countable number of elements, like the months in a year (12 elements).",
    hint: "The name of the set gives a clue about its size."
  },
  {
    id: 13,
    text: "What type of set is the set of all whole numbers?",
    options: [
      { id: 'a', text: "Infinite set", correct: true },
      { id: 'b', text: "Finite set" },
      { id: 'c', text: "Empty set" },
      { id: 'd', text: "Singleton set" }
    ],
    correctAnswer: "Infinite set",
    explanation: "The set of whole numbers {0, 1, 2, 3, ...} goes on forever, so it's an infinite set.",
    hint: "Can you count all the whole numbers?"
  },
  {
    id: 14,
    text: "In a Venn diagram, where do you show elements that belong to both sets?",
    options: [
      { id: 'a', text: "In the overlapping region of the circles", correct: true },
      { id: 'b', text: "Outside both circles" },
      { id: 'c', text: "In the first circle only" },
      { id: 'd', text: "In the second circle only" }
    ],
    correctAnswer: "In the overlapping region of the circles",
    explanation: "The intersection (overlapping region) shows elements that belong to both sets - this is where the magic happens!",
    hint: "Think about where the two circles physically meet."
  },
  {
    id: 15,
    text: "If A = {1, 3, 5} and B = {2, 4, 6}, what is A ∩ B?",
    options: [
      { id: 'a', text: "∅ (empty set)", correct: true },
      { id: 'b', text: "{1, 2, 3, 4, 5, 6}" },
      { id: 'c', text: "{3}" },
      { id: 'd', text: "{1, 5}" }
    ],
    correctAnswer: "∅ (empty set)",
    explanation: "A and B have no common elements, so their intersection is the empty set ∅.",
    hint: "Check for any numbers that appear in both sets."
  },
  {
    id: 16,
    text: "What is n(∅)?",
    options: [
      { id: 'a', text: "0", correct: true },
      { id: 'b', text: "1" },
      { id: 'c', text: "∞" },
      { id: 'd', text: "Undefined" }
    ],
    correctAnswer: "0",
    explanation: "The empty set has zero elements, so its cardinality is 0.",
    hint: "Cardinality is a count."
  },
  {
    id: 17,
    text: "In the formula n(A ∪ B) = n(A) + n(B) - n(A ∩ B), why do we subtract n(A ∩ B)?",
    options: [
      { id: 'a', text: "To avoid counting common elements twice", correct: true },
      { id: 'b', text: "To make the formula more complex" },
      { id: 'c', text: "To get a smaller answer" },
      { id: 'd', text: "It's a mathematical rule with no reason" }
    ],
    correctAnswer: "To avoid counting common elements twice",
    explanation: "Common elements are counted in both n(A) and n(B), so we subtract n(A ∩ B) once to correct the double-counting.",
    hint: "Think about the overlap."
  },
  {
    id: 18,
    text: "What is the best way to visualize set relationships?",
    options: [
      { id: 'a', text: "Venn diagrams", correct: true },
      { id: 'b', text: "Bar charts" },
      { id: 'c', text: "Line graphs" },
      { id: 'd', text: "Pie charts" }
    ],
    correctAnswer: "Venn diagrams",
    explanation: "Venn diagrams are the coolest way to see how sets relate, with circles showing individual sets and overlaps showing intersections.",
    hint: "This type of diagram uses circles to show relationships."
  },
  {
    id: 19,
    text: "If a set A has 5 elements and set B has 3 elements, what is the maximum possible value of n(A ∪ B)?",
    options: [
      { id: 'a', text: "8", correct: true },
      { id: 'b', text: "5" },
      { id: 'c', text: "3" },
      { id: 'd', text: "15" }
    ],
    correctAnswer: "8",
    explanation: "Maximum occurs when A and B have no common elements. Then n(A ∪ B) = 5 + 3 - 0 = 8.",
    hint: "When does the union have the largest number of elements?"
  },
  {
    id: 20,
    text: "If a set A has 5 elements and set B has 3 elements, what is the minimum possible value of n(A ∪ B)?",
    options: [
      { id: 'a', text: "5", correct: true },
      { id: 'b', text: "8" },
      { id: 'c', text: "3" },
      { id: 'd', text: "2" }
    ],
    correctAnswer: "5",
    explanation: "Minimum occurs when B is completely contained in A. Then n(A ∪ B) = n(A) = 5.",
    hint: "When does the union have the smallest number of elements?"
  },
  {
    id: 21,
    text: "What does 'well-defined' mean for a set?",
    options: [
      { id: 'a', text: "You can clearly tell what belongs and what doesn't belong to the set", correct: true },
      { id: 'b', text: "The set has exactly 10 elements" },
      { id: 'c', text: "The set contains only numbers" },
      { id: 'd', text: "The set is written in alphabetical order" }
    ],
    correctAnswer: "You can clearly tell what belongs and what doesn't belong to the set",
    explanation: "A well-defined set has clear criteria - you know exactly which elements belong and which don't.",
    hint: "This property removes all ambiguity."
  },
  {
    id: 22,
    text: "In set notation, how do you list the elements of a set?",
    options: [
      { id: 'a', text: "Inside curly braces { }", correct: true },
      { id: 'b', text: "Inside square brackets [ ]" },
      { id: 'c', text: "Inside parentheses ( )" },
      { id: 'd', text: "Inside angle brackets < >" }
    ],
    correctAnswer: "Inside curly braces { }",
    explanation: "Set elements are always listed inside curly braces, like A = {1, 2, 3}.",
    hint: "The shape of the brackets is unique to sets."
  },
  {
    id: 23,
    text: "Can a set contain duplicate elements?",
    options: [
      { id: 'a', text: "No, each element appears only once", correct: true },
      { id: 'b', text: "Yes, elements can be repeated" },
      { id: 'c', text: "Only if the set is infinite" },
      { id: 'd', text: "Only numbers can be duplicated" }
    ],
    correctAnswer: "No, each element appears only once",
    explanation: "Sets contain unique elements only. If you write {1, 2, 2, 3}, it's the same as {1, 2, 3}.",
    hint: "This is a fundamental rule of set theory."
  },
  {
    id: 24,
    text: "What guaranteed topic appears in POST-UTME mathematics exams?",
    options: [
      { id: 'a', text: "Sets and Venn diagrams", correct: true },
      { id: 'b', text: "Advanced calculus" },
      { id: 'c', text: "Complex number theory" },
      { id: 'd', text: "Differential equations" }
    ],
    correctAnswer: "Sets and Venn diagrams",
    explanation: "Sets and Venn diagrams are guaranteed questions in POST-UTME. Mastering them is a major step towards acing your maths! 🎓",
    hint: "This topic is a staple of many entrance exams."
  },
  {
    id: 25,
    text: "In a survey, 30 students like Math, 25 like Science, and 15 like both. How many like Math or Science?",
    options: [
      { id: 'a', text: "40", correct: true },
      { id: 'b', text: "55" },
      { id: 'c', text: "70" },
      { id: 'd', text: "35" }
    ],
    correctAnswer: "40",
    explanation: "n(M ∪ S) = n(M) + n(S) - n(M ∩ S) = 30 + 25 - 15 = 40.",
    hint: "Apply the inclusion-exclusion principle."
  },
  {
    id: 26,
    text: "What do overlapping circles in a Venn diagram represent?",
    options: [
      { id: 'a', text: "Elements that belong to multiple sets", correct: true },
      { id: 'b', text: "Elements that belong to no sets" },
      { id: 'c', text: "Elements that are undefined" },
      { id: 'd', text: "Errors in the diagram" }
    ],
    correctAnswer: "Elements that belong to multiple sets",
    explanation: "Overlapping regions show intersections - elements that belong to multiple sets simultaneously.",
    hint: "This region is where sets share members."
  },
  {
    id: 27,
    text: "If A = {a, b, c, d} and B = {c, d, e, f}, what is n(A ∩ B)?",
    options: [
      { id: 'a', text: "2", correct: true },
      { id: 'b', text: "4" },
      { id: 'c', text: "6" },
      { id: 'd', text: "8" }
    ],
    correctAnswer: "2",
    explanation: "A ∩ B = {c, d} because these are the elements common to both sets. So n(A ∩ B) = 2.",
    hint: "First find the intersection, then count its elements."
  },
  {
    id: 28,
    text: "What is the union of any set A with the empty set ∅?",
    options: [
      { id: 'a', text: "A", correct: true },
      { id: 'b', text: "∅" },
      { id: 'c', text: "Universal set" },
      { id: 'd', text: "Cannot be determined" }
    ],
    correctAnswer: "A",
    explanation: "A ∪ ∅ = A because the empty set adds no new elements to set A.",
    hint: "Think about combining a set with nothing."
  },
  {
    id: 29,
    text: "What is the intersection of any set A with the empty set ∅?",
    options: [
      { id: 'a', text: "∅", correct: true },
      { id: 'b', text: "A" },
      { id: 'c', text: "Universal set" },
      { id: 'd', text: "Cannot be determined" }
    ],
    correctAnswer: "∅",
    explanation: "A ∩ ∅ = ∅ because there are no elements common to A and the empty set.",
    hint: "There can't be common elements if one of the sets has no elements."
  },
  {
    id: 30,
    text: "Why are sets and Venn diagrams important for logic and problem-solving?",
    options: [
      { id: 'a', text: "They help organize and analyze relationships between different groups", correct: true },
      { id: 'b', text: "They make problems more complicated" },
      { id: 'c', text: "They are only useful for mathematics" },
      { id: 'd', text: "They replace the need for calculations" }
    ],
    correctAnswer: "They help organize and analyze relationships between different groups",
    explanation: "Sets and Venn diagrams are powerful tools for organizing data and analyzing relationships, essential for logical thinking and problem-solving. 🤔",
    hint: "Consider their practical application."
  }
];

export default questions;