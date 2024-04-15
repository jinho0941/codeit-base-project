import QuestionCard from "./QuestionCard";
import noQuestionImg from "../../images/post-id-images/no-question.svg";

function QuestionCardList({ questions, profile }) {
  return (
    <>
      {questions.length === 0 ? (
        <img src={noQuestionImg} alt="no-question" />
      ) : (
        questions.map((question) => {
          return (
            <QuestionCard
              key={question.id}
              question={question}
              profile={profile}
            />
          );
        })
      )}
    </>
  );
}

export default QuestionCardList;
