import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";

function Upload() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (file) {
      navigate("/result"); // Later pass result
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload Crop Photo</h1>
      <ImageUpload onUpload={setFile} />
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Get Diagnosis
      </button>
    </div>
  );
}

export default Upload;
