const QuestionSkeleton = () => {
  return (
    <div className="flex w-300 flex-col gap-4 my-4">
      {Array(9)
        .fill(0)
        .map(() => (
          <div>
            <div className="skeleton bg-[#1f2937] h-6 w-full"></div>
          </div>
        ))}
    </div>
  );
};
export default QuestionSkeleton;
