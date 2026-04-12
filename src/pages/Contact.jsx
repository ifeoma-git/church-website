import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",   // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",  // Replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY"    // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          value={formData.from_email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          rows="5"
          required
        />

        <button
          type="submit"
          className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center text-green-600 font-semibold">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;