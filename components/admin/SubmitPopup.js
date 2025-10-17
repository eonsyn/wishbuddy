"use client";
import React, { useState } from "react";
import { Check, X } from 'lucide-react';

const SubmitPopup = ({ show, setexpiredAt, expiredAt, isPublish, setIsPublish, onClose, onSubmit, thumbnailUrl, setThumbnailUrl, tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue("");
    }
  };

  const handleBlur = () => {
    const newTag = inputValue.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
    setInputValue("");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-md w-full text-white">
    <h2 className="text-xl font-semibold mb-4">Before Submitting</h2>

    {/* Thumbnail URL */}
    <label className="block mb-4">
      Thumbnail URL:
      <input
        type="text"
        className="mt-1 p-2 w-full rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={thumbnailUrl}
        onChange={(e) => setThumbnailUrl(e.target.value)}
        placeholder="https://example.com/image.jpg"
      />
    </label>

    {/* Expired At */}
    <label className="block mb-4">
      Expired At (minutes):
      <input
        type="number"
        placeholder="After how many minutes."
        className="mt-1 p-2 w-full rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="expiredAt"
        name="expiredAt"
        value={expiredAt}
        onChange={(e) => setexpiredAt(e.target.value)}
      />
    </label>

    {/* Tags */}
    <label className="block mb-4">
      Tags (comma or Enter separated):
      <div className="border border-gray-700 rounded p-2 flex flex-wrap gap-2 bg-gray-800">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-700 text-blue-200 px-2 py-1 rounded-full text-sm"
          >
            {tag}
            <button
              onClick={() => setTags(tags.filter((_, i) => i !== index))}
              className="ml-1 text-red-400 hover:text-red-600"
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          className="flex-1 min-w-[120px] outline-none bg-gray-800 text-white placeholder-gray-400"
          placeholder="Add tag and press Enter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
      </div>
    </label>

    {/* Publish toggle */}
    <button
      onClick={() => setIsPublish((prev) => !prev)}
      className={`flex items-center gap-2 px-4 py-2 rounded-2xl shadow-md transition-all ${
        isPublish
          ? 'bg-green-600 hover:bg-green-700 text-white'
          : 'bg-red-600 hover:bg-red-700 text-white'
      } mb-4`}
    >
      {isPublish ? <Check size={18} /> : <X size={18} />}
      {isPublish ? 'Published' : 'Unpublished'}
    </button>

    {/* Action buttons */}
    <div className="flex justify-end space-x-2">
      <button
        onClick={onClose}
        className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 text-white"
      >
        Cancel
      </button>
      <button
        onClick={onSubmit}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white"
      >
        Submit Article
      </button>
    </div>
  </div>
</div>

  );
};

export default SubmitPopup;
