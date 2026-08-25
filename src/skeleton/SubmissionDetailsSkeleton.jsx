const SubmissionDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="skeleton h-6 w-48"></div>

          <div className="skeleton h-10 w-20 rounded-md"></div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {/* Status */}
          <div className="bg-base-100 rounded-lg p-6 shadow-sm">
            <div className="skeleton h-4 w-16 mx-auto mb-4"></div>
            <div className="skeleton h-7 w-14 mx-auto rounded-md"></div>
          </div>

          {/* Language */}
          <div className="bg-base-100 rounded-lg p-6 shadow-sm">
            <div className="skeleton h-4 w-20 mx-auto mb-4"></div>
            <div className="skeleton h-5 w-12 mx-auto"></div>
          </div>

          {/* Runtime */}
          <div className="bg-base-100 rounded-lg p-6 shadow-sm">
            <div className="skeleton h-4 w-16 mx-auto mb-4"></div>
            <div className="skeleton h-5 w-16 mx-auto"></div>
          </div>

          {/* Memory */}
          <div className="bg-base-100 rounded-lg p-6 shadow-sm">
            <div className="skeleton h-4 w-16 mx-auto mb-4"></div>
            <div className="skeleton h-5 w-16 mx-auto"></div>
          </div>

          {/* Submitted */}
          <div className="bg-base-100 rounded-lg p-6 shadow-sm">
            <div className="skeleton h-4 w-20 mx-auto mb-4"></div>
            <div className="skeleton h-4 w-32 mx-auto"></div>
          </div>
        </div>

        {/* Submitted Code */}
        <div className="bg-base-100 rounded-lg p-6 shadow-sm">
          {/* Title */}
          <div className="skeleton h-6 w-40 mb-6"></div>

          {/* Code Editor */}
          <div className="rounded-lg overflow-hidden bg-[#050505] p-4">
            {/* Fake dots */}
            <div className="flex gap-2 mb-4">
              <div className="skeleton w-3 h-3 rounded-full"></div>
              <div className="skeleton w-3 h-3 rounded-full"></div>
              <div className="skeleton w-3 h-3 rounded-full"></div>
            </div>

            {/* Fake code lines */}
            <div className="space-y-3">
              <div className="skeleton h-4 w-40"></div>
              <div className="skeleton h-4 w-64"></div>
              <div className="skeleton h-4 w-72"></div>
              <div className="skeleton h-4 w-56"></div>
              <div className="skeleton h-4 w-32"></div>
              <div className="skeleton h-4 w-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetailsSkeleton;
