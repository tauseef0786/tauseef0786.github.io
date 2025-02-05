import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">My Resume</h1>

      {/* Resume Content */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg text-gray-700 mb-6">
          You can download my resume below. Feel free to check it out!
        </p>
        
        {/* Download Button */}
        <a
          href="../assets/MuhammadTauseefRaza-FullStackWebDeveloper-1fRh.pdf"  // Make sure this points to your actual resume file
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
