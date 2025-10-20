"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function DiwaliForm() {
  const [form, setForm] = useState({
    wisher: "",
    name: "",
    info: "",
    type: "",
    mode: "polite",
  });
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [updating, setUpdating] = useState(false);

  // Handle input changes
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Generate new wish
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
        toast.success("Wish generated! 🎇");
        setTimeout(() => setShowResult(true), 50);
      } else toast.error("Something went wrong!");
    } catch {
      toast.error("Server error, try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Copy share link
  const handleCopy = async () => {
    if (!res?.data?._id) return toast.error("No wish to copy!");
    try {
      const shareUrl = `${window.location.origin}/diwali/${res.data._id}`;
      await navigator.clipboard.writeText(shareUrl);
      toast.success("Shareable link copied!");
    } catch {
      toast.error("Failed to copy!");
    }
  };

  // Reset form
  const resetForm = () => {
    setForm({ wisher: "", name: "", info: "", type: "", mode: "polite" });
    setResponse("");
    setRes(null);
    setShowResult(false);
    setIsEdited(false);
  };

  // Update wish text in DB
  const handleUpdate = async () => {
    if (!res?.data?._id) return toast.error("Wish not found for update!");
    setUpdating(true);

    try {
      const putRes = await fetch("/api/ai/diwali", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: res.data._id,
          updatedWish: response.trim(),
          ...form,
        }),
      });
      const data = await putRes.json();

      if (data.success) {
        toast.success("Wish updated successfully!");
        setIsEdited(false);
        setRes(data);
      } else toast.error("Update failed!");
    } catch {
      toast.error("Error updating wish!");
    } finally {
      setUpdating(false);
    }
  };

  const modeHeading =
    form.mode === "roast"
      ? "Roast Wish 😏"
      : form.mode === "polite"
      ? "Polite Wish 🎉"
      : "Your Wish";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 md:py-10 relative">
      <Toaster position="top-center" />
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-3">
          Diwali Wish Generator
        </h1>
        <p className="text-gray-700 max-w-lg mx-auto">
          Enter details and get a <strong>customized Diwali wish</strong>
        </p>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div
          className={`flex transition-transform duration-700 ${
            showResult ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {/* --- FORM CARD --- */}
          <div className="w-full flex justify-center md:px-4 flex-shrink-0">
            <form
              onSubmit={handleSubmit}
              className="md:bg-white/70 md:backdrop-blur-xl md:shadow-xl rounded-2xl md:p-8 w-full md:max-w-2xl md:border border-orange-200 space-y-6"
            >
              {/* Name Inputs */}
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
                    className="w-full px-4 py-2 text-black border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
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
                    className="w-full px-4 py-2 text-black border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
                    placeholder="Enter recipient's name"
                  />
                </div>
              </div>

              {/* Relationship & Mode */}
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
                    className="w-full px-4 py-2 text-black border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
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
                    Mode
                  </label>
                  <div className="flex gap-4">
                    {["polite", "roast"].map((m) => (
                      <label key={m} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="mode"
                          value={m}
                          checked={form.mode === m}
                          onChange={handleChange}
                          className="accent-orange-500"
                        />
                        {m === "polite" ? "Polite" : "Roast"}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Field */}
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
                  className="w-full px-4 py-2 text-black border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-400"
                  placeholder="E.g. Always late to every party 😆"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-transform hover:scale-105 shadow-md"
              >
                {loading ? "Generating..." : "Generate Wish"}
              </button>
            </form>
          </div>

          {/* --- RESULT CARD --- */}
          <div className="w-full flex justify-center md:px-4 flex-shrink-0">
            {!response ? (
              <div className="bg-white/80 border border-orange-200 rounded-2xl p-6 shadow-lg animate-pulse w-full max-w-2xl">
                <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-5/6"></div>
              </div>
            ) : (
              <div className="bg-white/90 border border-orange-200 rounded-2xl p-6 shadow-xl w-full md:max-w-2xl relative">
                <button
                  onClick={resetForm}
                  className="absolute top-4 left-4 px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
                >
                  Back
                </button>

                <h2 className="text-2xl font-bold text-orange-700 mb-3 text-center">
                  {modeHeading}
                </h2>

                <p className="text-sm text-gray-600 text-center mb-4">
                  This is an AI response. You can edit and save your version
                  before sharing.
                </p>

                <textarea
                  value={response}
                  onChange={(e) => {
                    setResponse(e.target.value);
                    setIsEdited(true);
                  }}
                  rows={5}
                  className="w-full p-3 border border-orange-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-orange-400 resize-none bg-white/70"
                />

                <p className="text-sm text-gray-500 mt-2 text-center italic">
                  — from {form.wisher || "Anonymous"}
                </p>

                {isEdited && (
                  <button
                    onClick={handleUpdate}
                    disabled={updating}
                    className="mt-4 w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
                  >
                    {updating ? "Saving..." : "Save Updated Wish"}
                  </button>
                )}

                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleCopy}
                    className="px-5 py-2.5 bg-orange-600 rounded-lg hover:bg-orange-700 text-white font-medium transition"
                  >
                    Copy & Share
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
