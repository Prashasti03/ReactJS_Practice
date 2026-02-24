import "./Blog.css"; // external CSS file
import blogImage from "./assets/images.jpg";

function Blog() {
  // Static blog details
  var title = "10 Tips for Effective Time Management";
  var author = "John Doe";
  var description =
    "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
  

  // Inline styles
  const containerStyle = {
    width: "400px",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "8px",
    backgroundColor: "#FFD8DF",
    textAlign: "center",
  };

  const titleStyle = {
    color: "#333",
    fontSize: "22px",
    marginBottom: "10px",
  };

  const authorStyle = {
    color: "#777",
    fontStyle: "italic",
    marginBottom: "15px",
  };

  const descriptionStyle = {
    color: "#555",
    fontSize: "14px",
    lineHeight: "1.6",
  };

  return (
    <div className="blog-container" style={containerStyle}>
      <img src={blogImage} alt="Blog Thumbnail" />
      <h2 style={titleStyle}>{title}</h2>
      <p style={authorStyle}>By {author}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
}

export default Blog;
