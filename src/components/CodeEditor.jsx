import Editor from "@monaco-editor/react";
import { useState } from "react";
import { boilerplates } from "../utils/constant";

const CodeEditor = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");

  const boilerplate = boilerplates[language.toLocaleLowerCase()];

  const handleRun = () => {
    console.log(code);
  };

  return (
    <div>
      {/* <!-- RIGHT --> */}
      <div className=" flex flex-col overflow-auto h-full">
        {/* <!-- Editor Header --> */}
        <div className="flex justify-between border-b border-base-content/10 py-4 px-2  my-auto">
          <select className="select select-bordered select-sm" value={language}>
            <option onClick={(e) => setLanguage(e.target.value)}>
              JavaScript
            </option>
            <option onClick={(e) => setLanguage(e.target.value)}>Java</option>
            <option onClick={(e) => setLanguage(e.target.value)}>C</option>
            <option onClick={(e) => setLanguage(e.target.value)}>Python</option>
          </select>

          <div className="flex gap-2">
            <div className="border-t border-base-content/10  flex justify-end gap-3">
              <button className="btn btn-outline" onClick={handleRun}>
                ▶ Run Code
              </button>

              <button className="btn btn-primary">Submit Code</button>
            </div>
          </div>
        </div>

        {/* <!-- Monaco --> */}
        <div className=" bg-base-200">
          <div id="editor" className="w-full h-full">
            <Editor
              value={boilerplate}
              onChange={(e) => setCode(e)}
              theme="vs-dark"
              height="70vh"
              language={language.toLowerCase()}
              options={{
                minimap: { enabled: false },
                fontSize: 16,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                wordWrap: "on",
              }}
            />
          </div>
        </div>

        {/* <!-- Footer --> */}
        <div className="p-4">
          <h2>Input</h2>
          <textarea
            className="textarea w-full py-3 my-4 overflow-y-auto h-32"
            placeholder="Enter Input"
          ></textarea>
          <h2>Output</h2>
          <textarea
            className="textarea w-full py-3 my-4 overflow-y-auto h-24 "
            disabled
            placeholder="Output"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
