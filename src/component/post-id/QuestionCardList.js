import QuestionCard from './QuestionCard';

function QuestionCardList({ questions, profile }) {
  return (
    <>
      {questions.map((question) => {
        return (
          <QuestionCard
            key={question.id}
            question={question}
            profile={profile}
          />
        );
      })}
    </>
  );
}

export default QuestionCardList;
