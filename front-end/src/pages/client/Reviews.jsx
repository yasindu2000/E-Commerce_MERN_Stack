import React, { useState } from "react";
import { FaEdit, FaTrash, FaStar } from "react-icons/fa";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle adding or updating a review
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    if (editingIndex !== null) {
      const updated = [...reviews];
      updated[editingIndex] = newReview;
      setReviews(updated);
      setEditingIndex(null);
    } else {
      setReviews([...reviews, newReview]);
    }
    setNewReview({ name: "", comment: "", rating: 5 });
  };

  // Handle editing
  const handleEdit = (index) => {
    setNewReview(reviews[index]);
    setEditingIndex(index);
  };

  // Handle deleting
  const handleDelete = (index) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  return (
    <div className="h-full  p-4 md:p-2">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Placed Your Review
      </h1>

      {/* Review Form */}
      <div className="bg-white border-t-1 border-gray-200 shadow-xl rounded-2xl p-6 mb-10 max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="border-t-1 border-gray-200 shadow-md shadow-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <textarea
            placeholder="Write your review..."
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="border-t-1 border-gray-200 shadow-md shadow-gray-300 rounded-xl px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-gray-300"
          ></textarea>

          {/* Rating Selector */}
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-500">Rating:</label>
            <select
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({ ...newReview, rating: parseInt(e.target.value) })
              }
              className="border border-gray-400 text-gray-600 rounded-lg px-2 py-1 focus:outline-none"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option className="text-gray-600" key={r} value={r}>
                  {r} Star{r > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-700 transition duration-300"
          >
            {editingIndex !== null ? "Update Review" : "Add Review"}
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No reviews yet. Be the first to add one!</p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-2 relative"
            >
              {/* Rating */}
              <div className="flex text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              {/* Reviewer Name */}
              <h2 className="text-lg font-semibold text-gray-800">{review.name}</h2>
              {/* Comment */}
              <p className="text-gray-600">{review.comment}</p>

              {/* Edit & Delete Buttons */}
              <div className="absolute top-3 right-3 flex gap-3 text-gray-500">
                <FaEdit
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => handleEdit(index)}
                />
                <FaTrash
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => handleDelete(index)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reviews;
