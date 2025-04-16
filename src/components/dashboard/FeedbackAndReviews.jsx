"use client";
export default function FeedbackAndReviews({ courseId }) {
  const reviews = [
    { id: 1, student: "John Doe", review: "Great course! Helped me a lot." },
    {
      id: 2,
      student: "Jane Smith",
      review: "Very informative and well-structured.",
    },
    { id: 3, student: "George Andrew", review: "Good course but can improve." },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-semibold text-[#334f6c] mb-4">
        Feedback & Reviews
      </h2>
      <ul className="space-y-4">
        {reviews.map((review) => (
          <li key={review.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="font-semibold text-[#334f6c]">{review.student}</p>
            <p className="text-sm text-[#757373]">{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
