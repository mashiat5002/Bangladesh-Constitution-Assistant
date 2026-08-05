"use client";

import { useState, useCallback, KeyboardEvent } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Answer will appear here...");
  const [loading, setLoading] = useState(false);

  const askQuestion = useCallback(async () => {
    const trimmed = question.trim();
    if (!trimmed) {
      setAnswer("⚠️ Please enter a question.");
      return;
    }

    setLoading(true);
    setAnswer("Searching constitutional knowledge...");

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = await response.json();

      if (!response.ok) {
        setAnswer(data.answer ?? "❌ Failed to get answer. Please try again.");
        return;
      }

      setAnswer(data.answer);
    } catch {
      setAnswer("❌ Failed to get answer. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [question]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === "Enter") askQuestion();
  };

  return (
    <div className="container">
      <h1>🇧🇩 Bangladesh Constitutional QA</h1>

      <textarea
        id="question"
        placeholder="Ask a constitutional question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button id="askBtn" onClick={askQuestion} disabled={loading}>
        {loading ? (
          <>
            <span className="loader" />
            Generating Answer...
          </>
        ) : (
          "Ask Question"
        )}
      </button>

      <div id="answer">{answer}</div>
    </div>
  );
}
