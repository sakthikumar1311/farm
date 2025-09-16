import { useState } from "react";

function ImageUpload({ onUpload }) {
  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  return (
    <div className="p-4 border-2 border-dashed border-green-500 rounded-lg text-center">
      <input type="file" accept="image/*" onChange={handleFile} />
      {preview && (
        <div className="mt-4">
          <img src={preview} alt="preview" className="mx-auto h-48 object-cover rounded" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
