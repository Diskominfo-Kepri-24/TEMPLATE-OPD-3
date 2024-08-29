import React, { useState } from 'react';
import { FaFacebookF, FaTwitter} from 'react-icons/fa';

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const pageUrl = encodeURIComponent(window.location.href);
  const message = encodeURIComponent("Check out this page about Kepri on ");

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${message + pageUrl}`,
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="sharebtn relative flex z-10 bg-white border rounded-md p-2 opacity-50 hover:opacity-100 focus:outline-none focus:border-blue-400"
        title="click to enable menu"
      >
        <span className="inline-block pr-4 text-gray-600">Bagikan Halaman</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-6 my-1 text-blue-700">
          <path fill="currentColor" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="sharebtn-dropdown absolute right-0 mt-2 w-48 bg-white rounded-sm overflow-hidden shadow-lg z-20 border border-gray-100">
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex px-4 py-2 text-sm text-gray-800 border-b hover:bg-blue-100">
            <FaFacebookF className="w-5 h-5 mr-4 text-blue-500" />
            <span className="text-gray-600">Facebook</span>
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex px-4 py-2 text-sm text-gray-800 border-b hover:bg-blue-100">
            <FaTwitter className="w-5 h-5 mr-4 text-blue-500" />
            <span className="text-gray-600">Twitter</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
