import React, { useState } from "react";
import ContentCard from "./ContentCard";
import TenseSection from "./TenseSection";
import { TENSES_PAGES } from "../data/tensesContent.jsx";

const TensesContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tense = TENSES_PAGES[currentIndex];

  return (
    <div>
      <ContentCard>
        <TenseSection tense={tense} />
      </ContentCard>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded bg-indigo-100 text-indigo-700 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentIndex(i => Math.min(i + 1, TENSES_PAGES.length - 1))}
          disabled={currentIndex === TENSES_PAGES.length - 1}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TensesContent;
