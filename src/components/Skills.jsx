import { useState } from "react";

const Skills = ({ user }) => {
  const [showAll, setShowAll] = useState(false);
  const topicProgress = user?.topicProgress || {};

  const skill = Object.entries(topicProgress).map(([name, value]) => ({
    name,
    attempted: value.attempted,
    solved: value.solved,
  }));

  const visible = showAll ? skill : skill.slice(0, 3);

  console.log(topicProgress);
  return (
    <div>
      {skill.length > 0 ? (
        <div className="card bg-[#111827] border border-slate-700 shadow-xl w-[1250px] my-10 mx-auto ">
          <div className="card-body ">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  📚 Topic Progress
                </h2>
                <p className="text-sm text-slate-400">
                  Track your strongest topics
                </p>
              </div>

              <div className="badge badge-primary badge-outline">
                {skill?.length} Topics
              </div>
            </div>

            <div className="space-y-4 grid grid-cols-3 gap-4">
              {visible?.map((topic, index) => {
                const accuracy = Math.round(
                  (topic.solved / topic.attempted) * 100,
                );

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-700 bg-slate-800/50 p-4 hover:border-primary transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold text-white text-lg">
                        {topic.name}
                      </h2>

                      <div className="badge badge-primary badge-outline">
                        {accuracy}%
                      </div>
                    </div>

                    <div className="mt-4">
                      <progress
                        className="progress progress-success w-full"
                        value={accuracy}
                        max="100"
                      ></progress>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="text-center rounded-lg bg-slate-900 p-3">
                        <h3 className="text-xl font-bold text-green-400">
                          {topic.solved}
                        </h3>

                        <p className="text-xs text-slate-400">Solved</p>
                      </div>

                      <div className="text-center rounded-lg bg-slate-900 p-3">
                        <h3 className="text-xl font-bold text-blue-400">
                          {topic.attempted}
                        </h3>

                        <p className="text-xs text-slate-400">Attempted</p>
                      </div>

                      <div className="text-center rounded-lg bg-slate-900 p-3">
                        <h3 className="text-xl font-bold text-yellow-400">
                          {accuracy}%
                        </h3>

                        <p className="text-xs text-slate-400">Accuracy</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {skill.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn btn-outline btn-primary mt-6"
              >
                {showAll ? "View Less ▲" : "View More ▼"}
              </button>
            )}
          </div>
        </div>
      ) : (
        <h2>Not FOund</h2>
      )}
    </div>
  );
};

export default Skills;
