import axios from "axios";
import { useEffect, useState } from "react";
import CardSkeleton from "../skeleton/CardSkeleton";
import { BASE_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Editorial = ({ numb }) => {
  const user = useSelector((store) => store?.user);

  const [editorial, setEditorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getEditorial = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(BASE_URL + `/geteditorial/${numb}`, {
          withCredentials: true,
        });

        setEditorial(res?.data?.editorial);
      } catch (err) {
        setError(err?.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (user?.isPremium) {
      getEditorial();
    } else {
      setLoading(false);
    }
  }, [numb, user?.isPremium]);

  if (loading || !user) return <CardSkeleton />;

  if (error) {
    return <div className="p-5 text-center text-error">{error}</div>;
  }
  return user?.isPremium ? (
    <div className="p-5 space-y-5 h-[650px] overflow-y-auto">
      {/* Brute Force */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h3 className="text-xl font-semibold">Brute Force Approach</h3>

          {/* Approach */}
          <div>
            <div className="badge badge-primary">Approach</div>

            <p className="mt-2">{editorial?.bruteForce?.approach}</p>
          </div>

          {/* Complexity */}
          <div className="flex gap-3">
            <div className="badge badge-success">
              Time: {editorial?.bruteForce?.timeComplexity}
            </div>

            <div className="badge badge-warning">
              Space: {editorial?.bruteForce?.spaceComplexity}
            </div>
          </div>

          {/* Code */}
          <div>
            <div className="mockup-code">
              {editorial?.bruteForce?.code?.split("\n").map((line, index) => (
                <pre key={index} data-prefix={index + 1}>
                  <code>{line}</code>
                </pre>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optimization */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h3 className="text-xl font-semibold">Optimized Approach</h3>

          {/* Approach */}
          <div>
            <div className="badge badge-primary">Approach</div>

            <p className="mt-2">{editorial?.optimization?.approach}</p>
          </div>

          {/* Complexity */}
          <div className="flex gap-3">
            <div className="badge badge-success">
              Time: {editorial?.optimization?.timeComplexity}
            </div>

            <div className="badge badge-warning">
              Space: {editorial?.optimization?.spaceComplexity}
            </div>
          </div>

          {/* Code */}
          <div>
            <div>
              <div className="mockup-code">
                {editorial?.optimization?.code
                  ?.split("\n")
                  .map((line, index) => (
                    <pre key={index} data-prefix={index + 1}>
                      <code>{line}</code>
                    </pre>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-[500px] flex items-center justify-center px-6">
      <div className="relative max-w-lg w-full text-center">
        {/* Glow */}
        <div className="absolute inset-0 bg-yellow-400/5 blur-3xl rounded-full" />

        {/* CARD */}
        <div className="relative rounded-3xl border border-yellow-400/20 bg-[#0b1020]/90 backdrop-blur-xl p-10 shadow-[0_0_50px_rgba(250,204,21,0.08)]">
          {/* LOCK ICON */}
          <div className="mx-auto w-20 h-20 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
            <span className="text-4xl">🔒</span>
          </div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-7">
            Premium Editorial
          </h2>

          {/* DESCRIPTION */}
          <p className="text-slate-400 mt-3 leading-relaxed">
            This editorial is available exclusively for
            <span className="text-yellow-400 font-semibold">
              {" "}
              JudgeX Premium{" "}
            </span>
            members.
          </p>

          {/* PREMIUM BADGE */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20">
            <span>👑</span>
            <span className="text-yellow-400 text-sm font-semibold">
              Premium Content
            </span>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/membership")}
            className="
            mt-8 w-full
            flex items-center justify-center gap-3
            py-3.5 px-6
            rounded-xl
            bg-yellow-400
            text-black
            font-bold
            hover:bg-yellow-300
            hover:scale-[1.02]
            active:scale-[0.98]
            transition-all duration-200
            shadow-lg shadow-yellow-400/10
          "
          >
            <span className="text-lg">🔓</span>
            Unlock Premium
          </button>

          {/* SMALL TEXT */}
          <p className="text-xs text-slate-500 mt-4">
            Unlock editorials, premium problems and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Editorial;
