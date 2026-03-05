import { useLocation, useNavigate } from "react-router-dom";

function Tutorial() {

  const location = useLocation();
  const navigate = useNavigate();

  const video = location.state?.video;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">

      <button
        onClick={() => navigate(-1)}
        className="bg-gray-700 px-4 py-2 rounded"
      >
        ← Back
      </button>

      <video
        src={video}
        controls
        className="w-[700px] rounded-lg"
      />

    </div>
  );
}

export default Tutorial;