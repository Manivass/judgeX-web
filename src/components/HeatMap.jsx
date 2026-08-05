import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const CELL_SIZE = 14;
const CELL_GAP = 4;

const HeatMap = () => {
  const [heatmap, setHeatmap] = useState({});
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    fetchHeatMap();
    generateCalendar();
  }, []);

  const fetchHeatMap = async () => {
    try {
      const res = await axios.get(BASE_URL + "/heatmap", {
        withCredentials: true,
      });

      setHeatmap(res.data.heatmap || {});
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  };

  const generateCalendar = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const start = new Date(today);
    start.setDate(today.getDate() - 364);

    const firstDay = start.getDay(); // Sunday = 0

    const calendar = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      calendar.push(null);
    }

    for (let i = 0; i < 365; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);

      calendar.push({
        key: d.toISOString().split("T")[0],
        date: d,
        month: d.getMonth(),
        year: d.getFullYear(),
      });
    }

    // Fill remaining cells
    while (calendar.length % 7 !== 0) {
      calendar.push(null);
    }

    const weekArray = [];

    for (let i = 0; i < calendar.length; i += 7) {
      weekArray.push(calendar.slice(i, i + 7));
    }

    setWeeks(weekArray);
  };

  const getColor = (count) => {
    if (count === 0) return "#1e293b";
    if (count === 1) return "#9be9a8";
    if (count <= 3) return "#40c463";
    if (count <= 6) return "#30a14e";
    return "#216e39";
  };

  const monthLabels = useMemo(() => {
    const arr = [];

    weeks.forEach((week, index) => {
      const firstValid = week.find((d) => d !== null);

      if (!firstValid) return;

      const exists = arr.find(
        (m) => m.month === firstValid.month && m.year === firstValid.year,
      );

      if (!exists) {
        arr.push({
          month: firstValid.month,
          year: firstValid.year,
          weekIndex: index,
        });
      }
    });

    return arr;
  }, [weeks]);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="bg-[#111827] rounded-xl border border-slate-700 p-8 overflow-x-auto my-10 ">
      <h2 className="text-2xl font-bold text-white">Submission Heatmap</h2>

      <p className="text-slate-400 text-sm mt-1 mb-6">Last 365 days</p>

      {/* Month Labels */}

      <div
        className="relative ml-10 mb-2"
        style={{
          width: weeks.length * (CELL_SIZE + CELL_GAP),
          height: 20,
        }}
      >
        {monthLabels.map((m) => (
          <span
            key={`${m.month}-${m.year}`}
            className="absolute text-xs text-slate-400"
            style={{
              left: m.weekIndex * (CELL_SIZE + CELL_GAP),
            }}
          >
            {new Date(m.year, m.month).toLocaleString("default", {
              month: "short",
            })}
          </span>
        ))}
      </div>

      <div className="flex">
        {/* Week Labels */}

        <div
          className="flex flex-col justify-between text-xs text-slate-500 mr-3"
          style={{
            height: 7 * (CELL_SIZE + CELL_GAP),
          }}
        >
          {weekDays.map((day, index) => (
            <span
              key={day}
              className={index % 2 === 1 ? "opacity-100" : "opacity-0"}
            >
              {day}
            </span>
          ))}
        </div>

        {/* Heatmap */}

        <div className="flex gap-1">
          {" "}
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => {
                if (!day) {
                  return (
                    <div
                      key={dayIndex}
                      style={{
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                      }}
                    />
                  );
                }

                const count = heatmap[day.key] || 0;

                return (
                  <div
                    key={day.key}
                    title={`${day.key} • ${count} submission${
                      count !== 1 ? "s" : ""
                    }`}
                    style={{
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                      backgroundColor: getColor(count),
                    }}
                    className="rounded-[3px] border border-[#0f172a] hover:scale-110 transition-all duration-150 cursor-pointer"
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}

      <div className="flex justify-end items-center gap-2 mt-6 text-xs text-slate-400">
        <span>Less</span>

        {[0, 1, 3, 6, 10].map((value) => (
          <div
            key={value}
            className="rounded-[3px]"
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              backgroundColor: getColor(value),
            }}
          />
        ))}

        <span>More</span>
      </div>
    </div>
  );
};

export default HeatMap;
