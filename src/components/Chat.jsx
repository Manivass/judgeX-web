import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL, socketConnectionString } from "../utils/constant";
import { FaArrowLeft, FaPaperPlane, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Chat = () => {
  const { id } = useParams();

  const user = useSelector((store) => store?.user);

  const [toUser, setToUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);
  const getUserDetails = async () => {
    try {
      const res = await axios.get(BASE_URL + `/getuser/${id}`, {
        withCredentials: true,
      });
      setToUser(res?.data?.user);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [id]);

  const getMessage = async () => {
    try {
      const res = await axios.get(BASE_URL + `/chat/${id}`, {
        withCredentials: true,
      });
      setMessages(res?.data?.chat?.messages);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMessage();
  }, [id]);

  useEffect(() => {
    const socket = socketConnectionString();

    socketRef.current = socket;

    // Client → Server
    socket.emit("joinChat", {
      fromUserId: user?._id,
      toUserId: id,
      userName: user?.firstName + " " + user?.lastName,
    });
    console.log("Registering MessageReceived listener");
    // Server → Client
    socket.on("MessageReceived", ({ senderId, userName, text }) => {
      setMessages((prev) => [
        ...prev,
        {
          senderId,
          userName,
          text,
        },
      ]);
    });

    return () => {
      socket.off("MessageReceived");
      socket.disconnect();
      socketRef.current = null;
    };
  }, [user, id]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    socketRef.current.emit("sendMessage", {
      fromUserId: user?._id,
      toUserId: id,
      userName: user?.firstName + " " + user?.lastName,
      text: message,
    });

    setMessage("");
  };

  return (
    <div>
      {/* ================= HEADER ================= */}

      {toUser && (
        <div className="h-[calc(100vh-64px)] bg-[#050816] text-white flex flex-col">
          <div className="h-[72px] px-5 border-b border-white/judge10 bg-[#080d1c] flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-white/5 transition">
              <FaArrowLeft />
            </button>

            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                {toUser.photoUrl ? (
                  <img
                    src={toUser.photoUrl}
                    alt={`${toUser.firstName} ${toUser.lastName}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser className="text-white text-lg" />
                )}
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-sm">{toUser.firstName}</h2>
            </div>
          </div>

          {/* ================= MESSAGES ================= */}

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {user &&
              messages.map((message, index) => {
                return (
                  <div key={index} className="w-full flex justify-start">
                    <div className="max-w-[70%] px-4 py-3 rounded-2xl bg-[#111827]">
                      <p className="text-xs text-purple-400 mb-1">
                        {message.userName}
                      </p>

                      <p className="text-sm">{message.text}</p>

                      <p className="text-[10px] mt-1 text-right text-gray-500">
                        12PM
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* ================= INPUT ================= */}

          <div className="p-4 border-t border-white/10 bg-[#080d1c]">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                placeholder="Type a message..."
                className="flex-1 bg-[#0d1426] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 transition"
              />

              <button
                onClick={handleSendMessage}
                className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
