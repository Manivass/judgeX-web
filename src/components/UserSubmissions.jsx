import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { BASE_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import StatsSkeleton from "../skeleton/StatsSkeleton";

const UserSubmissions = () => {
  const { id } = useParams();

  const userDetails = useSelector((store) => store?.user);

  const navigate = useNavigate();

  const [submission, setSubmissions] = useState([]);

  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    totalSubmissions: 0,
    totalPages: 0,
    currentPage: 1,
  });

  const [loading, setLoading] = useState(false);

  const [skeleton, setSkeleton] = useState(true);

  const limit = 10;

  const getSubmissions = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        BASE_URL + `/recentSubmissions/${id}?page=${page}&limit=${limit}`,
        {
          withCredentials: true,
        },
      );

      console.log(res.data);

      setSubmissions(res?.data?.submissions || []);

      setPagination(
        res?.data?.pagination || {
          totalSubmissions: 0,
          totalPages: 0,
          currentPage: 1,
        },
      );
    } catch (err) {
      console.log(err?.response?.data?.message);
    } finally {
      setLoading(false);
      setSkeleton(false);
    }
  };

  useEffect(() => {
    if (!userDetails) {
      navigate("/login");
      return;
    }

    getSubmissions();
  }, [userDetails, id, page]);

  if (skeleton) {
    return <StatsSkeleton />;
  }

  return (
    <div className="min-h-screen bg-base-400 p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Recent Submissions</h1>

            <p className="text-base-content/60 mt-1">
              View all your coding submissions.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            Total:{" "}
            <span className="font-bold text-base-content">
              {pagination.totalSubmissions}
            </span>
          </div>
        </div>

        {/* TABLE */}

        <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Problem</th>
                <th>Difficulty</th>
                <th>Status</th>
                <th>Language</th>
                <th>Submitted</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/* LOADING */}

              {loading ? (
                <tr>
                  <td colSpan="7">
                    <div className="flex justify-center py-10">
                      <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                  </td>
                </tr>
              ) : submission.length === 0 ? (
                /* EMPTY */

                <tr>
                  <td colSpan="7" className="text-center text-slate-400 py-10">
                    No submissions found
                  </td>
                </tr>
              ) : (
                /* DATA */

                submission.map((item, index) => (
                  <tr key={item._id} className="hover">
                    {/* NUMBER */}

                    <td>{(page - 1) * limit + index + 1}</td>

                    {/* PROBLEM */}

                    <td className="font-semibold hover:text-blue-800 hover:underline cursor-pointer">
                      <Link to={`/submissionDetails/${item?._id}`}>
                        {item?.problemId?.title}
                      </Link>
                    </td>

                    {/* DIFFICULTY */}

                    <td>
                      <div
                        className={`badge ${
                          item?.problemId?.difficulty === "easy"
                            ? "badge-success"
                            : item?.problemId?.difficulty === "medium"
                              ? "badge-warning"
                              : "badge-error"
                        }`}
                      >
                        {item?.problemId?.difficulty}
                      </div>
                    </td>

                    {/* STATUS */}

                    <td>
                      <div
                        className={`badge ${
                          item?.result === true
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {item?.result ? "Pass" : "Fail"}
                      </div>
                    </td>

                    {/* LANGUAGE */}

                    <td>{item?.language}</td>

                    {/* DATE */}

                    <td>
                      {item?.createdAt
                        ? new Date(item.createdAt).toLocaleString()
                        : "-"}
                    </td>

                    {/* VIEW */}

                    <td>
                      <Link
                        to={`/submissionDetails/${item?._id}`}
                        className="btn btn-sm btn-outline btn-primary"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}

        {pagination.totalPages > 0 && (
          <div className="flex justify-between items-center p-5 border-t border-slate-700">
            {/* PAGE INFO */}

            <p className="text-sm text-slate-400">
              Showing page{" "}
              <span className="text-black font-semibold ">{page}</span> of{" "}
              <span className="text-black font-semibold">
                {pagination.totalPages}
              </span>
            </p>


            <div className="join">
              <button
                className="join-item btn btn-sm"
                disabled={page === 1 || loading}
                onClick={() => {
                  setPage((prev) => prev - 1);
                }}
              >
                «
              </button>


              <button className="join-item btn btn-sm btn-primary">
                {page}
              </button>


              <button
                className="join-item btn btn-sm"
                disabled={page === pagination.totalPages || loading}
                onClick={() => {
                  setPage((prev) => prev + 1);
                }}
              >
                »
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSubmissions;
