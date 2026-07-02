const Editorial = ({ editorial }) => {
  return (
    <div className="p-5 space-y-5">
      <h2 className="text-2xl font-bold">Editorial</h2>

      {/* Approach 1 */}
      {editorial.length > 0 &&
        editorial?.map((val, index) => (
          <div key={val._id} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="text-xl font-semibold">Approach {index + 1}</h3>
              <div>
                <div className="badge badge-primary">Approach</div>

                <p className="mt-2">{val?.approach}</p>
              </div>
              <div>
                <div className="badge badge-secondary">Algorithm</div>

                <p className="mt-2">{val?.algorithm}</p>
              </div>
              <div className="flex gap-3">
                <div className="badge badge-success">
                  Time: {val?.complexity?.time}
                </div>

                <div className="badge badge-warning">
                  Space: {val?.complexity?.space}
                </div>
              </div>

              <div>
                <div className="badge badge-info mb-2">
                  {val?.code?.language}
                </div>

                <div className="mockup-code">
                  {val?.code?.solution?.map((code, index) => (
                    <pre data-prefix={index}>
                      <code>{code}</code>
                    </pre>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Editorial;
