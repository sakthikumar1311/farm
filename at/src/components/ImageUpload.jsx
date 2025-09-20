import { useState, useRef } from "react";

function ImageUpload({ onUpload, maxFiles = 5 }) {
  const [preview, setPreview] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFiles = (files) => {
    const fileArray = Array.from(files).slice(0, maxFiles);

    fileArray.forEach((file, index) => {
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(prev => [...prev, {
            file,
            preview: e.target.result,
            name: file.name,
            size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
          }]);
        };
        reader.readAsDataURL(file);
      }
    });

    if (onUpload) {
      onUpload(fileArray);
    }
  };

  const handleFileInput = (e) => {
    handleFiles(e.target.files);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleUpload = async () => {
    if (preview.length === 0) return;

    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const removeImage = (index) => {
    setPreview(prev => prev.filter((_, i) => i !== index));
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Upload Area */}
      <div
        className={`
          relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300
          ${dragActive
            ? 'border-green-500 bg-green-50 scale-105'
            : 'border-gray-300 hover:border-green-400 hover:bg-gray-50'
          }
          ${preview.length >= maxFiles ? 'opacity-50 pointer-events-none' : ''}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
            📸
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Upload Crop Images
            </h3>
            <p className="text-gray-600 mb-4">
              Drag and drop your images here, or{" "}
              <button
                onClick={openFileDialog}
                className="text-green-600 hover:text-green-700 font-medium underline"
              >
                browse files
              </button>
            </p>
            <p className="text-sm text-gray-500">
              Supports: JPG, PNG, GIF up to 10MB each (Max {maxFiles} files)
            </p>
          </div>

          <button
            onClick={openFileDialog}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Choose Images
          </button>
        </div>
      </div>

      {/* Preview Section */}
      {preview.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-800">
              Selected Images ({preview.length}/{maxFiles})
            </h4>
            {preview.length > 0 && (
              <button
                onClick={handleUpload}
                disabled={uploading}
                className={`
                  px-6 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg
                  ${uploading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white'
                  }
                `}
              >
                {uploading ? 'Uploading...' : '📤 Upload Images'}
              </button>
            )}
          </div>

          {/* Upload Progress */}
          {uploading && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Upload Progress</span>
                <span className="text-sm text-gray-500">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {preview.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="relative">
                    <img
                      src={item.preview}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.size}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
          <span>💡</span>
          Tips for Better Results
        </h4>
        <ul className="text-sm text-blue-700 space-y-2">
          <li>• Take photos in good lighting conditions</li>
          <li>• Ensure the crop is clearly visible and in focus</li>
          <li>• Include multiple angles if possible</li>
          <li>• Avoid blurry or dark images for accurate diagnosis</li>
        </ul>
      </div>
    </div>
  );
}

export default ImageUpload;
