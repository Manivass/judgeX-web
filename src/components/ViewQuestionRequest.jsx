import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BASE_URL } from "../utils/constant";

const ViewQuestionRequest = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState();
  const [status, setStatus] = useState("approved");
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();

  const getRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + `/request/${id}`, {
        withCredentials: true,
      });
      setQuestion(res?.data?.request);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRequest();
  }, []);

  const handleSubmit = async () => {
    await axios.post(
      BASE_URL + `/reviewquestion/${id}`,
      { status },
      {
        withCredentials: true,
      },
    );
    setToast(true);
    setTimeout(() => {
      setToast(false);
      navigate("/admin/questionrequest");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="card bg-slate-900 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold">{question?.title}</h1>

                <div className="flex gap-3 mt-4">
                  <div
                    className={`badge ${
                      question?.difficulty === "easy"
                        ? "badge-success"
                        : question?.difficulty === "medium"
                          ? "badge-warning"
                          : "badge-error"
                    }`}
                  >
                    {question?.difficulty}
                  </div>

                  <div className="badge badge-info">{question?.status}</div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-slate-400">Submitted By</p>

                <p className="font-semibold">
                  {question?.createdBy?.firstName}{" "}
                  {question?.createdBy?.lastName}
                </p>

                <p className="text-slate-500">{question?.createdAt}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <div className="card bg-slate-900">
            <div className="card-body">
              <h2 className="text-2xl font-bold">Description</h2>

              <p className="text-slate-300 leading-8">
                {question?.description}
              </p>
            </div>
          </div>

          <div className="card bg-slate-900">
            <div className="card-body">
              <h2 className="text-2xl font-bold">Limits</h2>

              <p>
                ⏱ Time Limit :
                <span className="font-bold ml-2">
                  {question?.timeLimit} sec
                </span>
              </p>

              <p className="mt-3">
                💾 Memory Limit :
                <span className="font-bold ml-2">
                  {question?.memoryLimit} MB
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="card bg-slate-900 mt-6">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Constraints</h2>

            <ul className="list-disc ml-6 mt-4 space-y-2">
              {question?.constraints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card bg-slate-900 mt-6">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Data Structures</h2>

            <div className="flex gap-3 flex-wrap mt-4">
              {question?.dataStructure.map((item, index) => (
                <div key={index} className="badge badge-primary badge-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card bg-slate-900 mt-6">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Explanation</h2>

            <p className="leading-8 text-slate-300">{question?.explanation}</p>
          </div>
        </div>

        <div className="card bg-slate-900 mt-6">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Testcases</h2>

            {question?.testcase.map((tc, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-5 mt-5">
                <div className="flex justify-between">
                  <h3 className="font-bold">Testcase {index + 1}</h3>

                  <div
                    className={`badge ${
                      tc.ishidden ? "badge-error" : "badge-success"
                    }`}
                  >
                    {tc.ishidden ? "Hidden" : "Visible"}
                  </div>
                </div>

                <p className="mt-4">
                  <span className="font-bold">Input :</span> {tc.input}
                </p>

                <p className="mt-2">
                  <span className="font-bold">Output :</span> {tc.output}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            className="btn btn-success btn-wide"
            onClick={() => {
              setStatus("approved");
              handleSubmit();
            }}
          >
            Approve
          </button>

          <button
            className="btn btn-error btn-wide"
            onClick={() => {
              setStatus("rejected");
              handleSubmit();
            }}
          >
            Reject
          </button>
        </div>
      </div>
      <div className="toast  toast-start">
        {toast && (
          <div className="alert alert-success">
            <span>Request {status} successfully.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewQuestionRequest;
