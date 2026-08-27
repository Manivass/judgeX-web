import axios from "axios";
import { FaCheck, FaCrown, FaGem } from "react-icons/fa";
import { BASE_URL } from "../utils/constant";
import { useSelector } from "react-redux";

const Membership = () => {
  const user = useSelector((store) => store.user);
  const handlePremium = async (type) => {
    console.log("🔥 BUTTON CLICKED");
    console.log("TYPE:", type);
    console.log("BASE_URL:", BASE_URL);

    try {
      console.log("🔥 CALLING:", BASE_URL + "/payment/create");

      const response = await axios.post(
        BASE_URL + "/payment/create",
        {
          membershipType: type,
        },
        {
          withCredentials: true,
        },
      );

      console.log("✅ PAYMENT RESPONSE:", response.data);

      // ...
    } catch (err) {
      console.error("❌ PAYMENT ERROR:", err);
      console.error("❌ STATUS:", err.response?.status);
      console.error("❌ DATA:", err.response?.data);
    }
  };
  if (user.isPremium) return <h2>You are already a premium user</h2>;
  const plans = [
    {
      name: "Silver",
      price: 199,
      icon: <FaGem />,
      description: "For serious coding practice",
      features: [
        "All Free features",
        "Premium problems",
        "Premium editorials",
        "More submissions",
        "Premium test cases",
        "No advertisements",
      ],
      button: "Get Silver",
    },
    {
      name: "Gold",
      price: 499,
      icon: <FaCrown />,
      description: "For advanced competitive programmers",
      features: [
        "All Silver features",
        "All premium problems",
        "Advanced editorials",
        "Premium contests",
        "Exclusive test cases",
        "Priority support",
        "No advertisements",
      ],
      button: "Get Gold",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] py-16 px-6">
      {/* HEADER */}

      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-blue-400 font-semibold uppercase tracking-wider">
          Membership
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
          Choose Your Plan
        </h1>

        <p className="text-slate-400 mt-4">
          Upgrade your JudgeX experience and unlock premium coding features.
        </p>
      </div>

      {/* PLANS */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`
              relative rounded-3xl p-8
              border backdrop-blur-xl
              transition duration-300
              hover:-translate-y-2
              ${
                plan.name === "Gold"
                  ? "border-yellow-400/40 bg-yellow-400/5 shadow-[0_0_40px_rgba(250,204,21,0.12)]"
                  : "border-white/10 bg-white/5"
              }
            `}
          >
            {/* GOLD BADGE */}

            {plan.name === "Gold" && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-5 py-2 rounded-full bg-yellow-400 text-black text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
            )}

            {/* ICON */}

            <div
              className={`
                w-14 h-14 rounded-2xl
                flex items-center justify-center
                text-2xl
                ${
                  plan.name === "Gold"
                    ? "bg-yellow-400/10 text-yellow-400"
                    : plan.name === "Silver"
                      ? "bg-slate-400/10 text-slate-300"
                      : "bg-blue-500/10 text-blue-400"
                }
              `}
            >
              {plan.icon}
            </div>

            {/* NAME */}

            <h2 className="text-2xl font-bold text-white mt-6">{plan.name}</h2>

            <p className="text-slate-400 text-sm mt-2">{plan.description}</p>

            {/* PRICE */}

            <div className="mt-6">
              <span className="text-5xl font-bold text-white">
                ₹{plan.price}
              </span>

              {plan.price > 0 && (
                <span className="text-slate-400 ml-2">/ month</span>
              )}
            </div>

            {/* FEATURES */}

            <div className="mt-8 space-y-4">
              {plan.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                    <FaCheck className="text-green-400 text-xs" />
                  </div>

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* BUTTON */}

            <button
              onClick={() => handlePremium(plan.name)}
              className={`
                w-full mt-10 py-3 rounded-xl
                font-semibold transition
                ${
                  plan.name === "Gold"
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : plan.name === "Silver"
                      ? "bg-slate-300 text-black hover:bg-white"
                      : "bg-slate-800 text-slate-400 cursor-not-allowed"
                }
              `}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
