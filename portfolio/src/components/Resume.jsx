import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume = ({ resumePath }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = "resume.pdf";  // The file name to download
        link.click();
    };

    return (
        <div className="relative w-full h-screen bg-gradient-to-b from-blue-600 to-blue-800">
            {/* Show Resume PDF using iframe */}
            <iframe
                src={resumePath}
                title="Resume"
                className="w-full h-full border-none"
            />
            
            {/* Download Button */}
            <button
                onClick={handleDownload}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
                <FaDownload className="inline-block mr-2" /> Download Resume
            </button>
        </div>
    );
};

export default Resume;
