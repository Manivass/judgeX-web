import CodeEditor from "./CodeEditor";

export default function ProblemPage() {
  return (
    <div className="h-auto bg-gray-100 text-base-content flex  overflow-auto">
      {/* Left Side */}
      <div className="w-[40%] border-r border-base-content/10 overflow-y-auto">
        <div className="tabs tabs-bordered px-4 pt-2 sticky top-0 bg-base-300 z-10">
          <a className="tab tab-active">Problem</a>
          <a className="tab">Submissions</a>
          <a className="tab">Discuss</a>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold">1. Two Sum</h1>

          <div className="mt-3">
            <span className="badge badge-success">Easy</span>
          </div>

          <p className="mt-5 leading-7">
            Given an array of integers nums and an integer target, return
            indices of the two numbers such that they add up to target.
          </p>

          <p className="mt-4 leading-7">
            You may assume that each input would have exactly one solution, and
            you may not use the same element twice.
          </p>

          {/* Example 1 */}
          <div className="mt-8">
            <h2 className="font-bold mb-3">Example 1</h2>

            <div className="mockup-code">
              <pre>
                <code>Input: nums = [2,7,11,15], target = 9</code>
              </pre>

              <pre>
                <code>Output: [0,1]</code>
              </pre>

              <pre>
                <code>Explanation: nums[0] + nums[1] = 9</code>
              </pre>
            </div>
          </div>

          {/* Example 2 */}
          <div className="mt-6">
            <h2 className="font-bold mb-3">Example 2</h2>

            <div className="mockup-code">
              <pre>
                <code>Input: nums = [3,2,4], target = 6</code>
              </pre>

              <pre>
                <code>Output: [1,2]</code>
              </pre>
            </div>
          </div>

          {/* Example 3 */}
          <div className="mt-6">
            <h2 className="font-bold mb-3">Example 3</h2>

            <div className="mockup-code">
              <pre>
                <code>Input: nums = [3,3], target = 6</code>
              </pre>

              <pre>
                <code>Output: [0,1]</code>
              </pre>
            </div>
          </div>

          {/* Constraints */}
          <div className="mt-8">
            <h2 className="font-bold mb-3">Constraints</h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>2 &lt;= nums.length &lt;= 10⁴</li>
              <li>-10⁹ &lt;= nums[i] &lt;= 10⁹</li>
              <li>-10⁹ &lt;= target &lt;= 10⁹</li>
              <li>Only one valid answer exists.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        <CodeEditor />
        {/* Test Cases */}
        <div className="flex-1 border-t border-base-content/10 overflow-y-auto">
          <div className="tabs tabs-bordered px-4">
            <a className="tab tab-active">Testcase</a>

            <a className="tab">Output</a>
          </div>

          <div className="p-4 space-y-4">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" defaultChecked />

              <div className="collapse-title font-semibold">Case 1</div>

              <div className="collapse-content">
                <input
                  className="input input-bordered w-full"
                  defaultValue="nums = [2,7,11,15], target = 9"
                />

                <div className="mt-3 text-success font-bold">[0,1]</div>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />

              <div className="collapse-title font-semibold">Case 2</div>

              <div className="collapse-content">
                <input
                  className="input input-bordered w-full"
                  defaultValue="nums = [3,2,4], target = 6"
                />

                <div className="mt-3 text-success font-bold">[1,2]</div>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />

              <div className="collapse-title font-semibold">Case 3</div>

              <div className="collapse-content">
                <input
                  className="input input-bordered w-full"
                  defaultValue="nums = [3,3], target = 6"
                />

                <div className="mt-3 text-success font-bold">[0,1]</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
      </div>
    </div>
  );
}
