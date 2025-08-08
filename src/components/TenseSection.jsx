import React from "react";
import { FiCheck } from "react-icons/fi";

const TenseSection = ({ tense }) => {
  return (
    <div className="space-y-8">
      <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
        {tense.icon}
        {tense.title}
      </h3>

      <p>{tense.description}</p>

      <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
        <p className="font-medium text-green-700">Examples:</p>
        <ul className="mt-2 space-y-1">
          {tense.examples.map((example, index) => (
            <li key={index} className="flex items-start gap-2">
              <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-2 italic text-gray-600">{tense.notes}</p>
    </div>
  );
};

export default TenseSection;
