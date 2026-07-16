const ProblemSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 my-4">
      <div className="bg-gray-300 skeleton h-8 w-[400px]"></div>
      <div className="bg-gray-300 skeleton h-8 w-[150px]"></div>
      <div className="bg-gray-300 skeleton h-8 w-[400px]"></div>
      <div className="bg-gray-300 skeleton h-8 w-[400px]"></div>
      <div className="bg-gray-300 skeleton h-8 w-[400px]"></div>
      <div className="bg-gray-300 skeleton h-20 w-[400px]"></div>
    </div>
  );
};

export default ProblemSkeleton;
