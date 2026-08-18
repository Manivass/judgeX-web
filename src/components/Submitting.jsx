const Submitting = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-12">
        <span className="loading loading-spinner loading-lg text-primary"></span>

        <h3 className="text-slate-400 text-xl font-semibold mt-4">
          Running your code...
        </h3>

        <p className="text-slate-400 text-md mt-2">
          Executing test cases. Please wait.
        </p>
      </div>
    </div>
  );
};

export default Submitting;
