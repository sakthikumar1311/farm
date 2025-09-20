import React from "react";

function DiagnosisCard({ diagnosis }) {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">Diagnosis Result</h2>
      <p><b>Crop:</b> {diagnosis.crop}</p>
      <p><b>Status:</b> {diagnosis.status}</p>
      {diagnosis.disease && <p><b>Disease:</b> {diagnosis.disease}</p>}
      <p className="mt-2 text-green-700"><b>Action:</b> {diagnosis.action}</p>
    </div>
  );
}

export default DiagnosisCard;
