import React, { useState } from "react";

const HomeFAQ = ({question, answer, answer2}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    function toggleAnswer() {
        setShowAnswer(prev => !prev);
        console.log(showAnswer);
    }

    return (
        <div class="faq">
            <button class="faq-q" onClick={toggleAnswer}>{question}</button>
            { showAnswer && <div class="faq-a">{answer}</div> }
            { (showAnswer && answer2) && <div class="faq-a">{answer2}</div> }
        </div>
    )
}

export default HomeFAQ;