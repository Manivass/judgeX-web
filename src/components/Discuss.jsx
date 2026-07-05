import axios from "axios";
import { useState } from "react";
import { BASE_URL, getTimeAgo } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../store/question";

const Discuss = () => {
  const question = useSelector((store) => store?.question);
  const discussion = question?.discussion;
  const questionId = question?._id;
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleDiscuss = async () => {
    try {
      const res = await axios.post(
        BASE_URL + `/question/discussion/${questionId}`,
        { text },
        { withCredentials: true },
      );
      setText("");
      dispatch(addQuestion(res?.data?.question));

      console.log("Saving at:", new Date().toISOString());
      console.log("Current:", new Date().toISOString());
      console.log("Created:", discussion[discussion.length - 1]?.createdAt);
      console.log(
        "Diff (minutes):",
        (new Date() - new Date(discussion[discussion.length - 1]?.createdAt)) /
          1000 /
          60,
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" h-[640px] flex flex-col px-2 py-1">
      <div className="flex-[8] overflow-y-auto">
        {discussion?.length > 0 ? (
          discussion.map((val, index) => {
            return (
              <div
                key={index}
                className="bg-gray-200 border-b border-base-200 px-4 py-4 rounded-lg mt-1"
              >
                <div className="flex items-center gap-2 text-sm">
                  <h2 className="font-semibold text-base-content">
                    {val?.firstName} {val?.lastName}
                  </h2>

                  <span className="text-base-content/50">•</span>

                  <span className="text-base-content/50">
                    {getTimeAgo(val?.createdAt)}
                  </span>
                </div>

                <p className="mt-2 leading-7 text-base-content">{val?.text}</p>

                <div className="mt-2 flex gap-5 text-sm">
                  <button className="hover:text-primary">👍 {val.likes}</button>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No Discussion found</h2>
        )}
      </div>
      <div class="flex-[2] bg-gray-100 rounded-2xl  shadow-lg p-4 ">
        {/* <!-- Large Input -->/ */}
        <textarea
          class="textarea w-full h-22 resize-none  focus:outline-none focus:ring-0 bg-transparent text-base border border-gray-400"
          placeholder="Type your message here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* <!-- Bottom Row --> */}
        <div class="flex items-center justify-end mt-1">
          {/* <!-- Send Button --> */}
          <button class="btn btn-success px-6" onClick={handleDiscuss}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
