function Options({ question, dispatch, answer }) {
  const hasanswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasanswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={answer !== null}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
