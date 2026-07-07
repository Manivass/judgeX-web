import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Testcase = ({ testcase }) => {
  const result = useSelector((store) => store?.testcase);
  const hiddenTestcase = testcase?.hiddenTestcase;
  const visibleTestcase = testcase?.visibleTestcase;
  const [testpass, setTestPass] = useState(false);
  console.log("Testcase rendered");
  useEffect(() => {
    if (!result?.testcaseResults) {
      setTestPass(false);
      return;
    }

    const isPassed = result.testcaseResults.every((val) => val === "pass");

    setTestPass(isPassed);
  }, [result]);

  return (
    <div className="p-4 grid grid-cols-1 gap-2">
      {!testpass && (
        <div>
          <h2 className="font-bold text-lg my-2">Visible Testcase</h2>
          {visibleTestcase &&
            visibleTestcase?.map((val, index) => {
              return (
                <div key={index}>
                  <div className="my-1">
                    <h2 className="font-bold mb-3">Example {index + 1}</h2>
                    <div className="mockup-code">
                      <pre>
                        <code>{val.input}</code>
                      </pre>
                      <pre>
                        <code>{val.output}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <div>
        <h2 className="font-bold text-lg my-2">hidden Testcase</h2>

        {hiddenTestcase.length > 0 ? (
          hiddenTestcase?.map((val, index) => {
            return (
              <div key={index}>
                <div className="p-4 space-y-4">
                  <div className="flex justify-between border border-base-300 bg-base-200">
                    <div className="collapse-title font-semibold">
                      Case {index + 1}
                    </div>
                    {result?.testcaseResults != null && (
                      <div
                        className={`btn my-auto text-lg ${
                          result.testcaseResults &&
                          result.testcaseResults[index] == "pass"
                            ? "btn-success"
                            : "btn-error"
                        }`}
                      >
                        {result.testcaseResults &&
                        result.testcaseResults[index] === "pass"
                          ? "pass"
                          : "fail"}
                      </div>
                    )}

                    <div className="collapse-content"></div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No testcase found</h2>
        )}
      </div>
      {testpass && (
        <div className="flex gap-2 p-4 justify-center">
          <div className="card w-60 h-40 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className=" text-lg text-center">Time Complexity</h2>
              <p className="text-3xl text-blue-800 font-bold text-center">
                {result?.executionTime} sec
              </p>
            </div>
          </div>
          <div className="card w-60 h-40 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className=" text-lg text-center">Space Complexity</h2>
              <p className="text-3xl text-blue-800 font-bold text-center">
                {result?.memory} KB
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testcase;
