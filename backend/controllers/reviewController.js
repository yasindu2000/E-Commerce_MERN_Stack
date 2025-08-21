import Review from "../model/review.js";

export function createReview(req, res) {
  const { name, comment, rating } = req.body;

  // Validation
  if (!name || !comment || !rating) {
    return res.status(400).json({
      message: "All fields (name, comment, rating) are required",
    });
  }

  // Create review object
  const reviewData = {
    name: name,
    comment: comment,
    rating: rating,
   
  };

  const review = new Review(reviewData);

  review
    .save()
    .then(() => {
      res.status(201).json({
        message: "Review created successfully",
        review: review,
      });
    })
    .catch(() => {
      res.status(500).json({
        message: "Failed to create review",
      });
    });
}


export function getReviews(req, res) {
    Review.find()
        .sort({ createdAt: -1 })
        .then((reviews) => {
            res.status(200).json(reviews);
        })
        .catch(() => {
            res.status(500).json({
                message: "Failed to fetch reviews"
            });
        });
}

export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReview = await Review.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: "Failed to update review", error: error.message });
  }
};


export function deleteReview(req, res) {
    const { id } = req.params;

    Review.findByIdAndDelete(id)
        .then((deletedReview) => {
            if (!deletedReview) {
                return res.status(404).json({
                    message: "Review not found"
                });
            }
            res.status(200).json({
                message: "Review deleted successfully"
            });
        })
        .catch(() => {
            res.status(500).json({
                message: "Failed to delete review"
            });
        });
}