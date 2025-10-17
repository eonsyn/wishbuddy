"use client";
import React, { useState } from "react";
import { Copy, ArrowLeft } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function DiwaliForm() {
  const [form, setForm] = useState({ wisher: "", name: "", info: "", type: "" });
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    setShowResult(false);

    try {
      const res = await fetch("/api/ai/diwali", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setRes(data);

      if (data.success) {
        setResponse(data.message);
        setTimeout(() => setShowResult(true), 50);
      } else {
        setResponse("Something went wrong! 😭");
      }
    } catch (error) {
      console.error(error);
      setResponse("Server error, try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!res?.data?._id) {
      toast.error("No wish to copy! ❌");
      return;
    }
    try {
      const shareUrl = `${window.location.origin}/diwali/${res.data._id}`;
      await navigator.clipboard.writeText(shareUrl);
      toast.success("Shareable link copied!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy 😢");
    }
  };

  const resetForm = () => {
    setForm({ wisher: "", name: "", info: "", type: "" });
    setResponse("");
    setRes(null);
    setShowResult(false);
  };
const formattedWishParts = (response || "")
  .split(/(\*.*?\*)/g)
  .map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      const text = part.slice(1, -1);
      return (
        <strong key={index} className="font-semibold text-orange-800">
          {text}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10  relative">
      <Toaster position="top-center" />

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-3">
          Diwali Sarcastic Wish Generator
        </h1>
        <p className="text-gray-700 max-w-lg mx-auto">
          Enter details and get a{" "}
          <strong>totally harmless yet sarcastic</strong> Diwali wish 😏
        </p>
      </div>

      {/* Card Container */}
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div
          className={`flex transition-transform duration-700 ${showResult ? "-translate-x-full" : "translate-x-0"}`}
        >
          {/* Form Card */}
          <div className="w-full flex justify-center md:px-4 flex-shrink-0">
            <form
              onSubmit={handleSubmit}
              className="md:bg-white/70 md:backdrop-blur-xl md:shadow-xl rounded-2xl md:p-8 w-full md:max-w-2xl md:border border-orange-200 space-y-6"
            >
              {/* Wisher & Recipient Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="wisher"
                    required
                    value={form.wisher}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-black border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Person’s Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-black border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Enter recipient's name"
                  />
                </div>
              </div>

              {/* Relationship & Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Relationship
                  </label>
                  <select
                    name="type"
                    required
                    value={form.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-black border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    <option value="">Select</option>
                    <option value="friend">Friend</option>
                    <option value="couple">Couple</option>
                    <option value="parent">Parent</option>
                    <option value="brother">Brother</option>
                    <option value="sister">Sister</option>
                     <option value="crush">Crush</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Something about them
                  </label>
                  <textarea
                    name="info"
                    required
                    rows={3}
                    value={form.info}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-black border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="E.g. Always late to every party 😆"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-transform hover:scale-105 shadow-md flex justify-center items-center gap-2"
              >
                {loading ? "Generating..." : "Generate Wish"}
              </button>
            </form>

          </div>

          {/* Result Card */}
          <div className="w-full  flex justify-center md:px-4 flex-shrink-0">
            {loading || !response ? (
              // Skeleton Loader
              <div className="bg-white/80 border border-orange-200 rounded-2xl p-6 shadow-lg animate-pulse w-full max-w-2xl">
                <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-2/3"></div>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="h-8 w-24 bg-gray-300 rounded"></div>
                  <div className="h-8 w-32 bg-gray-300 rounded"></div>
                </div>
              </div>
            ) : (
              <div className="bg-white/90 border border-orange-200 rounded-2xl p-6 shadow-lg w-full md:max-w-2xl relative mx-auto">
                <h2 className="text-2xl font-bold text-orange-700 mb-4 text-center">
                  Sarcastic Wish 😜
                </h2>
                <p className="text-gray-700 italic mb-6 text-center">
                  {formattedWishParts} <br />
                  <span className="block mt-2 text-sm text-gray-500">
                    — from {form.wisher || "Anonymous"}
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600  cursor-pointer rounded-lg hover:bg-orange-700 text-white transition shadow-sm"
                    onClick={handleCopy}
                  >
                    <Copy size={18} />
                    Copy & Share
                  </button>
                  <span className="text-sm text-gray-500 sm:ml-2 text-center">
                    Share this link with your friends!
                  </span>
                </div>

                <button
                  className="flex items-center gap-2 absolute top-4 left-4 p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 shadow-md transition"
                  onClick={resetForm}
                >
                  <ArrowLeft size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
