import Editor from "@monaco-editor/react";
import { useState } from "react";
import { BASE_URL, boilerplates, languageId } from "../utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addSubmissionResult } from "../store/submissionResult";

const CodeEditor = () => {
  const question = useSelector((store) => store?.question);
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const boilerplate = boilerplates[language.toLocaleLowerCase()];
  const dispatch = useDispatch();

  const handleRun = async () => {
    try {
      const res = await axios.post(BASE_URL + "/run", {
        code,
        language_id: languageId[language],
        stdin: input,
      });
      setOutput(
        res?.data?.result?.stdout
          ? res?.data?.result?.stdout
          : res?.data?.result?.compile_output,
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        BASE_URL + `/codeSubmission/${question._id}`,
        {
          code,
          language_id: languageId[language],
        },
        {
          withCredentials: true,
        },
      );
      dispatch(addSubmissionResult(res?.data?.testcaseResults));
    } catch (err) {
      console.log(err);
    }
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

              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit Code
              </button>
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
        <div className="p-4 collapse collapse-arrow">
          <input type="checkbox" />
          <div className="collapse-title">Sample testcase</div>
          <div className="collapse-content bg-base-200">
            <div className="">Input</div>
            <textarea
              className=" textarea w-full py-3 my-4 overflow-y-auto h-32"
              placeholder="Enter Input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></textarea>

            <div className=" font-semibold">Output</div>
            <textarea
              className=" textarea w-full py-3 my-4 overflow-y-auto h-32 border border-gray-400"
              disabled
              value={output}
              onChange={(e) => setOutput(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
