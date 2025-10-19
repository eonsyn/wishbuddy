"use client";
import React, { useState } from "react";
import { Check, X } from 'lucide-react';

const SubmitPopup = ({description,setDescription, show, setexpiredAt, expiredAt, isPublish, setIsPublish, onClose, onSubmit, thumbnailUrl, setThumbnailUrl, tags, setTags }) => {
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
   <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto p-4">
  <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-5xl p-6 text-white grid gap-6">
    
    {/* Grid: Thumbnail + Expired */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Thumbnail URL */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Thumbnail URL</label>
        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
          className="mt-1 p-3 w-full rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <p className="text-xs text-gray-400">Add a URL for the thumbnail image of your article.</p>
      </div>

      {/* Expired At */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Expire After (minutes)</label>
        <input
          type="number"
          placeholder="After how many minutes"
          value={expiredAt}
          onChange={(e) => setexpiredAt(e.target.value)}
          className="mt-1 p-3 w-full rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <p className="text-xs text-gray-400">Set how long this article should remain active.</p>
      </div>
    </div>

    {/* Grid: Description + Tags */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Description */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a short description..."
          className="mt-1 p-3 w-full rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
          rows={5}
        />
        <p className="text-xs text-gray-400">Provide a brief description to summarize your article.</p>
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Tags (comma or Enter separated)</label>
        <div className="mt-1 flex flex-wrap gap-2 p-2 rounded-lg border border-gray-700 bg-gray-800 max-h-40 overflow-y-auto">
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center bg-blue-700 text-blue-100 px-3 py-1 rounded-full text-sm">
              {tag}
              <button
                onClick={() => setTags(tags.filter((_, i) => i !== index))}
                className="ml-2 text-red-400 hover:text-red-600 transition"
              >
                &times;
              </button>
            </div>
          ))}
          <input
            type="text"
            placeholder="Add tag and press Enter"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            className="flex-1 min-w-[120px] bg-gray-800 text-white placeholder-gray-400 outline-none"
          />
        </div>
        <p className="text-xs text-gray-400">Use tags to make your article discoverable.</p>
      </div>
    </div>

    {/* Bottom Row: Publish + Cancel + Submit */}
    <div className="flex flex-wrap justify-end gap-4 mt-4">
      {/* Publish Toggle */}
      <button
        onClick={() => setIsPublish((prev) => !prev)}
        className={`flex items-center justify-center gap-2 py-3 px-5 rounded-2xl shadow-md text-white font-medium transition ${
          isPublish ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
        }`}
      >
        {isPublish ? <Check size={18} /> : <X size={18} />}
        {isPublish ? 'Published' : 'Unpublished'}
      </button>

      {/* Cancel */}
      <button
        onClick={onClose}
        className="py-3 px-5 bg-gray-700 rounded-lg hover:bg-gray-600 transition font-medium"
      >
        Cancel
      </button>

      {/* Submit */}
      <button
        onClick={onSubmit}
        className="py-3 px-5 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Submit Article
      </button>
    </div>

  </div>
</div>


  );
};

export default SubmitPopup;
