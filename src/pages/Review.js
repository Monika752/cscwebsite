import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewForm = () => {
    useEffect(() => {
        emailjs.init("JH2wrWAqUu3WwLMrO");
    }, []);

    const [reviewData, setReviewData] = useState({
        name: "",
        email: "",
        review: ""
    });

    const handleChange = (e) => {
        setReviewData({ ...reviewData, [e.target.name]: e.target.value });
    };

    const sendReviewEmail = () => {
    const templateParams = {
        name: reviewData.name,
        email: reviewData.email,
        review: reviewData.review
    };

    emailjs.send("service_7b52ser", "template_e0mi373", templateParams, "JH2wrWAqUu3WwLMrO")
        .then(() => {
            toast.success("Review Submitted Successfully!", {
                position: "top-center",
                autoClose: 3000
            });
        })
        .catch((error) => {
            toast.error("Failed to send review. Please try again.", {
                position: "top-center",
                autoClose: 3000
            });
            console.error("Failed to send review email:", error);
        });
};

    const handleSubmit = (e) => {
        e.preventDefault();
        sendReviewEmail();
        setReviewData({ name: "", email: "", review: "" });
    };

    return (
        <div style={{ 
    backgroundImage: `url('/images/cover1.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
            <ToastContainer />
            <div class="container">
                <div style={{ backgroundColor: "#175692" }}>
                    <h2 class=" d-flex justify-content-center m-2 text-white">Review and Feedback Form</h2>
                </div>
            </div>
            <div className="container review-container containertrans">
                <form id="reviewForm" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={reviewData.name} onChange={handleChange} required />

                    <label htmlFor="email">Email ID:</label>
                    <input type="email" id="email" name="email" value={reviewData.email} onChange={handleChange} required />

                    <label htmlFor="review">Review:</label>
                    <textarea id="review" name="review" value={reviewData.review} onChange={handleChange} required></textarea>

                    <button type="submit" className="bg-info text-white p-2">Submit Review</button>
                </form>
            </div>
        </div>

    );
};

export default ReviewForm;

