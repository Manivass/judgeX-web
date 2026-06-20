import { useState } from "react";

const AddProblem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [constraint, setConstraint] = useState([""]);
  const [difficulty, setDifficulty] = useState("easy");
  const [testcase, setTestcase] = useState([
    { input: "", output: "", hidden: false },
  ]);
  const addConstraint = () => {
    setConstraint([...constraint, ""]);
  };

  const handleChangeConstraints = (index, value) => {
    let updated = [...constraint];
    updated[index] = value;
    setConstraint(updated);
  };

  const handleInputItem = (index, value) => {
    let updated = [...testcase];
    updated[index].input = value;
    setTestcase(updated);
  };
  const handleOutputItem = (index, value) => {
    let updated = [...testcase];
    updated[index].output = value;
    setTestcase(updated);
  };

  const handleAddTestcase = () => {
    setTestcase([
      ...testcase,
      {
        input: "",
        output: "",
        hidden: false,
      },
    ]);
  };

  const handleHiddenTestCase = (index) => {
    let updated = [...testcase];
    updated[index].hidden = !updated[index].hidden;
    setConstraint(updated);
  };

  const handleDelete = (index) => {
    const updated = constraint?.filter((_, i) => i !== index);
    setConstraint(updated);
  };
  const handleDeleteTestcase = (index) => {
    const updated = testcase?.filter((_, i) => i !== index);
    setTestcase(updated);
  };

  return (
    <div className="min-h-screen bg-base-300 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Add New Problem</h1>
          <p className="text-base-content/60">
            Create a new coding problem for the platform
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {/* LEFT PANEL */}
          <div className="lg:col-span-2 card bg-base-200 border border-base-content/10">
            <div className="card-body">
              {/* Title + Difficulty */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Title *</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter problem title"
                    className="input input-bordered w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Difficulty *</span>
                  </label>

                  <select
                    className="select select-bordered w-full"
                    value={difficulty}
                  >
                    <option onClick={() => setDifficulty("easy")}>Easy</option>
                    <option onClick={() => setDifficulty("medium")}>
                      Medium
                    </option>
                    <option onClick={() => setDifficulty("hard")}>Hard</option>
                  </select>
                </div>
              </div>

              {/* Topic + Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Data Structure / Topic</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Array, HashMap"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Time Limit (ms)</span>
                  </label>

                  <input
                    type="number"
                    className="input input-bordered w-full"
                    defaultValue={1000}
                  />
                </div>
              </div>

              {/* Memory */}
              <div>
                <label className="label">
                  <span className="label-text">Memory Limit (MB)</span>
                </label>

                <input
                  type="number"
                  className="input input-bordered w-full"
                  defaultValue={256}
                />
              </div>

              {/* Description */}
              <div>
                <label className="label">
                  <span className="label-text">Description *</span>
                </label>

                <textarea
                  className="textarea textarea-bordered w-full h-48"
                  placeholder="Write problem description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Constraints */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Constraints</h3>

                  <button
                    className="btn btn-primary btn-sm"
                    onClick={addConstraint}
                  >
                    + Add Constraint
                  </button>
                </div>
                {constraint?.map((item, index) => {
                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex gap-2 my-1">
                        <input
                          className="input input-bordered flex-1"
                          placeholder="2 <= nums.length <= 10^4"
                          value={item}
                          onChange={(e) =>
                            handleChangeConstraints(index, e.target.value)
                          }
                        />

                        <button
                          className="btn btn-error btn-square"
                          onClick={() => handleDelete(index)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div>
                <label className="label">
                  <span className="label-text">Explanation</span>
                </label>

                <textarea
                  className="textarea textarea-bordered w-full h-40"
                  placeholder="Provide explanation..."
                />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="card bg-base-200 border border-base-content/10">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="font-bold">Sample Test Cases</h2>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleAddTestcase}
                >
                  + Add Test Case
                </button>
              </div>
              <div className="grid grid-cols-3 align-items-center gap-4">
                {/* Test Case 1 */}
                {testcase?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="border  border-base-content/10 rounded-xl p-4"
                    >
                      <div className="flex justify-between mb-4">
                        <h3 className="font-semibold">Test Case {index + 1}</h3>

                        {item?.hidden ? (
                          <div className="badge badge-error">hidden</div>
                        ) : (
                          <div className="badge badge-success">Visible</div>
                        )}
                      </div>

                      <label className="label">
                        <span className="label-text">Input</span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered w-full"
                        rows={4}
                        value={item.input}
                        onChange={(e) => handleInputItem(index, e.target.value)}
                      />

                      <label className="label mt-3">
                        <span className="label-text">Output</span>
                      </label>

                      <textarea
                        className="textarea textarea-bordered w-full"
                        rows={2}
                        value={item.output}
                        onChange={(e) =>
                          handleOutputItem(index, e.target.value)
                        }
                      />

                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex gap-3">
                          <span>Hidden Test Case?</span>

                          <input
                            type="checkbox"
                            className="toggle toggle-primary"
                            checked={item.hidden}
                            onClick={() => handleHiddenTestCase(index)}
                          />
                        </div>

                        <button
                          className="btn btn-error btn-square"
                          onClick={() => handleDeleteTestcase(index)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button className="btn btn-ghost">Cancel</button>

                <button className="btn btn-primary">Save Problem</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProblem;
