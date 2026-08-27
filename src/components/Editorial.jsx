import axios from "axios";
import { useEffect, useState } from "react";
import CardSkeleton from "../skeleton/CardSkeleton";
import { BASE_URL } from "../utils/constant";

const Editorial = ({ numb }) => {
  const [editorial, setEditorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEditorial = async () => {
      try {
        setLoading(true);

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

    getEditorial();
  }, [numb]);

  if (loading) return <CardSkeleton />;

  if (error) {
    return <div className="p-5 text-center text-error">{error}</div>;
  }
  return (
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
  );
};

export default Editorial;
