const questions = [
  {
    id: 1,
    text: "When was the University of Ilorin founded?",
    options: [
      { id: 'a', text: "1977" },
      { id: 'b', text: "1982" },
      { id: 'c', text: "1975", correct: true },
      { id: 'd', text: "2001" }
    ],
    correctAnswer: "1975",
    explanation: "The text states that the University of Ilorin was founded in 1975.",
    hint: "The founding year is mentioned early in the document."
  },
  {
    id: 2,
    text: "UNILORIN started as a university college under which institution?",
    options: [
      { id: 'a', text: "University of Lagos" },
      { id: 'b', text: "University of Ibadan", correct: true },
      { id: 'c', text: "Ahmadu Bello University" },
      { id: 'd', text: "University of Nigeria, Nsukka" }
    ],
    correctAnswer: "University of Ibadan",
    explanation: "The document mentions UNILORIN was 'born in August 1975 as a university college under the University of Ibadan.'",
    hint: "This was a parent institution during UNILORIN's early days."
  },
  {
    id: 3,
    text: "Who was the first Principal of the University of Ilorin?",
    options: [
      { id: 'a', text: "Prof. O.O. Akinkugbe" },
      { id: 'b', text: "Prof. A.O. Adesola" },
      { id: 'c', text: "Dr. T.N. Tamuno", correct: true },
      { id: 'd', text: "Prof. S.A. Toye" }
    ],
    correctAnswer: "Dr. T.N. Tamuno",
    explanation: "The text identifies Dr. T.N. Tamuno as the 'first principal' of the university.",
    hint: "He was one of the early leaders who helped establish the institution."
  },
  {
    id: 4,
    text: "In what year did UNILORIN become an autonomous university?",
    options: [
      { id: 'a', text: "October 1976" },
      { id: 'b', text: "October 1977", correct: true },
      { id: 'c', text: "1982" },
      { id: 'd', text: "1993" }
    ],
    correctAnswer: "October 1977",
    explanation: "The text states that by 'October 1977, it went full uni mode with autonomy.'",
    hint: "This happened exactly a year after its first student intake."
  },
  {
    id: 5,
    text: "How many students did UNILORIN start with in October 1976?",
    options: [
      { id: 'a', text: "200", correct: true },
      { id: 'b', text: "150" },
      { id: 'c', text: "100" },
      { id: 'd', text: "500" }
    ],
    correctAnswer: "200",
    explanation: "The text specifies that the university 'Started with just 200 students in October 1976.'",
    hint: "This was the initial student intake."
  },
  {
    id: 6,
    text: "Which of these was NOT one of UNILORIN's three initial faculties?",
    options: [
      { id: 'a', text: "Arts" },
      { id: 'b', text: "Education" },
      { id: 'c', text: "Law", correct: true },
      { id: 'd', text: "Science" }
    ],
    correctAnswer: "Law",
    explanation: "The text mentions the initial faculties were Arts, Science, and Education. Law was added much later, in 1993.",
    hint: "The Law Faculty was part of UNILORIN's later 'Growth Spurt'."
  },
  {
    id: 7,
    text: "In what year did UNILORIN move to its permanent site?",
    options: [
      { id: 'a', text: "1975" },
      { id: 'b', text: "1977" },
      { id: 'c', text: "1982", correct: true },
      { id: 'd', text: "1993" }
    ],
    correctAnswer: "1982",
    explanation: "The document notes that the university 'Moved to the permanent site in 1982.'",
    hint: "This move was overseen by a specific Vice-Chancellor."
  },
  {
    id: 8,
    text: "According to the document, which of these faculties was added in 1993?",
    options: [
      { id: 'a', text: "Science" },
      { id: 'b', text: "Education" },
      { id: 'c', text: "Law", correct: true },
      { id: 'd', text: "Arts" }
    ],
    correctAnswer: "Law",
    explanation: "The text says UNILORIN added faculties like 'Law (1993)'.",
    hint: "This addition happened during Prof. J.O. Oyinloye's tenure."
  },
  {
    id: 9,
    text: "Who was UNILORIN's first Vice-Chancellor?",
    options: [
      { id: 'a', text: "Prof. S.A. Toye" },
      { id: 'b', text: "Prof. A.B.O. Oyediran" },
      { id: 'c', text: "Prof. O.O. Akinkugbe", correct: true },
      { id: 'd', text: "Dr. T.N. Tamuno" }
    ],
    correctAnswer: "Prof. O.O. Akinkugbe",
    explanation: "The text lists 'Prof. O.O. Akinkugbe (1977-1978)' as the 'first VC.'",
    hint: "He was the visionary who followed the first principal."
  },
  {
    id: 10,
    text: "Which Vice-Chancellor oversaw the university's move to its permanent site and a major infrastructure boom?",
    options: [
      { id: 'a', text: "Prof. O.O. Akinkugbe" },
      { id: 'b', text: "Prof. S.A. Toye", correct: true },
      { id: 'c', text: "Prof. AbdulGaniyu Ambali" },
      { id: 'd', text: "Prof. Is-haq O. Oloyede" }
    ],
    correctAnswer: "Prof. S.A. Toye",
    explanation: "The document credits Prof. S.A. Toye with overseeing 'the move to the permanent site and infrastructure boom.'",
    hint: "His era was described as being all about 'physical development'."
  },
  {
    id: 11,
    text: "Who was UNILORIN's first alumnus Vice-Chancellor?",
    options: [
      { id: 'a', text: "Prof. AbdulGaniyu Ambali" },
      { id: 'b', text: "Prof. S. O. AbdulRaheem" },
      { id: 'c', text: "Prof. Is-haq O. Oloyede", correct: true },
      { id: 'd', text: "Prof. Wahab Olasupo Egbewole" }
    ],
    correctAnswer: "Prof. Is-haq O. Oloyede",
    explanation: "The text mentions that Prof. Is-haq O. Oloyede was the 'First alumnus VC!'",
    hint: "This VC is also known for being a former JAMB boss."
  },
  {
    id: 12,
    text: "The nickname for the University of Ilorin is:",
    options: [
      { id: 'a', text: "The Great Citadel" },
      { id: 'b', text: "Knowledge is Power" },
      { id: 'c', text: "Better by Far", correct: true },
      { id: 'd', text: "Centre of Excellence" }
    ],
    correctAnswer: "Better by Far",
    explanation: "The very first paragraph refers to UNILORIN by its nickname, 'Better by Far.'",
    hint: "This phrase appears prominently in the title of the document."
  },
  {
    id: 13,
    text: "What is UNILORIN famous for producing, according to the document?",
    options: [
      { id: 'a', text: "Award-winning musicians" },
      { id: 'b', text: "Successful athletes" },
      { id: 'c', text: "VCs for other unis", correct: true },
      { id: 'd', text: "Notable politicians" }
    ],
    correctAnswer: "VCs for other unis",
    explanation: "The document states that UNILORIN is 'famous for producing VCs for other unis – over 33!'",
    hint: "This fact highlights the quality of its academic leadership."
  },
  {
    id: 14,
    text: "Who was the Vice-Chancellor who focused on digitizing the university and improving its rankings?",
    options: [
      { id: 'a', text: "Prof. Is-haq O. Oloyede", correct: true },
      { id: 'b', text: "Prof. S. O. AbdulRaheem" },
      { id: 'c', text: "Prof. Shamsudeen O.O. Amali" },
      { id: 'd', text: "Prof. AbdulGaniyu Ambali" }
    ],
    correctAnswer: "Prof. Is-haq O. Oloyede",
    explanation: "The text credits Prof. Oloyede with having 'Digitized everything, improved rankings, and made Unilorin a tech hub.'",
    hint: "He was also the first alumnus VC."
  },
  {
    id: 15,
    text: "Which of the following describes Prof. Wahab Olasupo Egbewole's background as UNILORIN's current VC?",
    options: [
      { id: 'a', text: "A medical professor" },
      { id: 'b', text: "A SAN and international law expert", correct: true },
      { id: 'c', text: "A biologist" },
      { id: 'd', text: "A physical education specialist" }
    ],
    correctAnswer: "A SAN and international law expert",
    explanation: "The document describes the current VC, Prof. Egbewole, as 'A SAN and international law expert.'",
    hint: "SAN is an acronym for Senior Advocate of Nigeria."
  },
  {
    id: 16,
    text: "The 'Fun Fact' section highlights UNILORIN's reputation for having the longest uninterrupted academic calendar since what year?",
    options: [
      { id: 'a', text: "1975" },
      { id: 'b', text: "1982" },
      { id: 'c', text: "2001", correct: true },
      { id: 'd', text: "1993" }
    ],
    correctAnswer: "2001",
    explanation: "The text states that the university has had 'no strikes since 2001!'",
    hint: "This is a key reason for its popularity among students."
  },
  {
    id: 17,
    text: "Who was the first Vice-Chancellor after Prof. O.O. Akinkugbe?",
    options: [
      { id: 'a', text: "Prof. S.A. Toye" },
      { id: 'b', text: "Prof. A.O. Adesola", correct: true },
      { id: 'c', text: "Prof. A.B.O. Oyediran" },
      { id: 'd', text: "Prof. J.O. Oyinloye" }
    ],
    correctAnswer: "Prof. A.O. Adesola",
    explanation: "The list of VCs shows Prof. A.O. Adesola served from 1979-1981, directly after Prof. Akinkugbe.",
    hint: "He was a medical professor who focused on academic expansion."
  },
  {
    id: 18,
    text: "The land for UNILORIN was provided by which state institution?",
    options: [
      { id: 'a', text: "Kwara State University" },
      { id: 'b', text: "Kwara State Polytechnic", correct: true },
      { id: 'c', text: "Kwara State College of Education" },
      { id: 'd', text: "Kwara State College of Health" }
    ],
    correctAnswer: "Kwara State Polytechnic",
    explanation: "The text states that UNILORIN 'got land from Kwara State Polytechnic.'",
    hint: "This was a crucial step in the university's early development."
  },
  {
    id: 19,
    text: "Which Vice-Chancellor's era saw the introduction of more programs and a focus on research, including the Law Faculty?",
    options: [
      { id: 'a', text: "Prof. S.A. Toye" },
      { id: 'b', text: "Prof. J.O. Oyinloye", correct: true },
      { id: 'c', text: "Prof. Is-haq O. Oloyede" },
      { id: 'd', text: "Prof. S. O. AbdulRaheem" }
    ],
    correctAnswer: "Prof. J.O. Oyinloye",
    explanation: "The document credits Prof. J.O. Oyinloye's tenure for the birth of the Law Faculty.",
    hint: "He served from 1992-1997."
  },
  {
    id: 20,
    text: "As of the provided text, what is the total number of faculties at UNILORIN?",
    options: [
      { id: 'a', text: "3" },
      { id: 'b', text: "10" },
      { id: 'c', text: "15", correct: true },
      { id: 'd', text: "60" }
    ],
    correctAnswer: "15",
    explanation: "The text states that the university has '15 faculties and over 60 departments!'",
    hint: "This number reflects the university's significant growth."
  },
  {
    id: 21,
    text: "Which Vice-Chancellor's leadership is credited with strengthening the 'Better by Far' brand?",
    options: [
      { id: 'a', text: "Prof. A.B.O. Oyediran" },
      { id: 'b', text: "Prof. Shamsudeen O.O. Amali", correct: true },
      { id: 'c', text: "Prof. Is-haq O. Oloyede" },
      { id: 'd', text: "Prof. Sulyman Age Abdulkareem" }
    ],
    correctAnswer: "Prof. Shamsudeen O.O. Amali",
    explanation: "The document says Prof. Amali's 'leadership strengthened the 'Better by Far' brand!'",
    hint: "He served from 2002-2007."
  },
  {
    id: 22,
    text: "The current Vice-Chancellor, Prof. Wahab Olasupo Egbewole, is pushing for what two things?",
    options: [
      { id: 'a', text: "Single 5-year tenure and infrastructure" },
      { id: 'b', text: "Community impact and STEM" },
      { id: 'c', text: "Digitization and improved rankings" },
      { id: 'd', text: "Global partnerships and student welfare", correct: true }
    ],
    correctAnswer: "Global partnerships and student welfare",
    explanation: "The text notes that Prof. Egbewole is 'pushing for global partnerships and student welfare.'",
    hint: "This describes his current focus for the university."
  },
  {
    id: 23,
    text: "Which Vice-Chancellor's long tenure (1985-1992) was known for stabilizing the university during national challenges?",
    options: [
      { id: 'a', text: "Prof. A.O. Adesola" },
      { id: 'b', text: "Prof. A.B.O. Oyediran", correct: true },
      { id: 'c', text: "Prof. J.O. Oyinloye" },
      { id: 'd', text: "Prof. S.A. Toye" }
    ],
    correctAnswer: "Prof. A.B.O. Oyediran",
    explanation: "The document states that Prof. Oyediran was 'Known for stabilizing the uni during national challenges.'",
    hint: "His tenure was one of the longest listed."
  },
  {
    id: 24,
    text: "How many programs, from undergrad to PhD, does UNILORIN offer?",
    options: [
      { id: 'a', text: "Over 33" },
      { id: 'b', text: "15" },
      { id: 'c', text: "Over 60" },
      { id: 'd', text: "103", correct: true }
    ],
    correctAnswer: "103",
    explanation: "The text mentions UNILORIN 'Offers 103 programs, from undergrad to PhD.'",
    hint: "This number reflects the variety of academic courses available."
  },
  {
    id: 25,
    text: "According to the text, which research institute is mentioned as part of UNILORIN?",
    options: [
      { id: 'a', text: "The Water Research Institute" },
      { id: 'b', text: "The Sugar Research Institute", correct: true },
      { id: 'c', text: "The Oil Research Institute" },
      { id: 'd', text: "The Textile Research Institute" }
    ],
    correctAnswer: "The Sugar Research Institute",
    explanation: "The document specifically lists the 'Sugar Research Institute' as an example of UNILORIN's research hubs.",
    hint: "This shows the university's focus on research."
  },
  {
    id: 26,
    text: "Who was the Vice-Chancellor that dealt with ASUU crises but successfully kept UNILORIN strike-free?",
    options: [
      { id: 'a', text: "Prof. J.O. Oyinloye" },
      { id: 'b', text: "Prof. S. O. AbdulRaheem", correct: true },
      { id: 'c', text: "Prof. Is-haq O. Oloyede" },
      { id: 'd', text: "Prof. Shamsudeen O.O. Amali" }
    ],
    correctAnswer: "Prof. S. O. AbdulRaheem",
    explanation: "The text states that Prof. AbdulRaheem 'Dealt with ASUU crises but kept Unilorin strike-free.'",
    hint: "This is a key point of the university's 'Fun Fact'."
  },
  {
    id: 27,
    text: "Who was the Vice-Chancellor who advocated for a single 5-year tenure?",
    options: [
      { id: 'a', text: "Prof. AbdulGaniyu Ambali", correct: true },
      { id: 'b', text: "Prof. Sulyman Age Abdulkareem" },
      { id: 'c', text: "Prof. Wahab Olasupo Egbewole" },
      { id: 'd', text: "Prof. A.B.O. Oyediran" }
    ],
    correctAnswer: "Prof. AbdulGaniyu Ambali",
    explanation: "The document credits Prof. Ambali with having 'Advocated for single 5-year VC tenure.'",
    hint: "He served from 2012-2017."
  },
  {
    id: 28,
    text: "In what year did UNILORIN receive its autonomy?",
    options: [
      { id: 'a', text: "1975" },
      { id: 'b', text: "1976" },
      { id: 'c', text: "1977", correct: true },
      { id: 'd', text: "1982" }
    ],
    correctAnswer: "1977",
    explanation: "The text specifies that by 'October 1977, it went full uni mode with autonomy.'",
    hint: "Autonomy means it became fully independent from the University of Ibadan."
  },
  {
    id: 29,
    text: "The document suggests that UNILORIN's stability and academic calendar make it a favorite for:",
    options: [
      { id: 'a', text: "Casual students" },
      { id: 'b', text: "Part-time learners" },
      { id: 'c', text: "Serious students", correct: true },
      { id: 'd', text: "Online students" }
    ],
    correctAnswer: "Serious students",
    explanation: "The 'Fun Fact' mentions the university's strike-free calendar and concludes, 'That's why it's a fave for serious students like you.'",
    hint: "This points to the kind of student who values consistent academic progress."
  },
  {
    id: 30,
    text: "Who was the Vice-Chancellor who succeeded Prof. AbdulGaniyu Ambali?",
    options: [
      { id: 'a', text: "Prof. J.O. Oyinloye" },
      { id: 'b', text: "Prof. S. O. AbdulRaheem" },
      { id: 'c', text: "Prof. Sulyman Age Abdulkareem", correct: true },
      { id: 'd', text: "Prof. Wahab Olasupo Egbewole" }
    ],
    correctAnswer: "Prof. Sulyman Age Abdulkareem",
    explanation: "The list of VCs shows Prof. Sulyman Age Abdulkareem (2017-2022) directly after Prof. AbdulGaniyu Ambali (2012-2017).",
    hint: "He was the tenth VC in the list."
  }
];

export default questions;