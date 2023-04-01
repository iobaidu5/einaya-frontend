import React from "react";

const Blog = () => {
  return (
    <>
      <div className="blog-two-area pt-100 pb-70">
        <div className="container">
          <div className="blog-item d-flex align-items-end justify-content-between">
            <div className="section-title left-title">
              <span className="top-title">Our Blog</span>
              <h2>Latest News & Articles</h2>
            </div>
            <a href="blog-details.html" className="default-btn btn-style-2">
              All Blog
            </a>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-blog-card blog-card-two">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="./assets/images/blog/blog-1.webp" alt="blog" />
                  </a>
                </div>
                <div className="date">
                  <span>12 November 2022</span>
                </div>
                <div className="single-blog-content">
                  <ul className="p-0 m-0">
                    <li className="list-inline">
                      <div className="admin">
                        <img src="./assets/images/blog/admin.svg" alt="admin" />
                      </div>
                      By<a href="author.html">Admin</a>
                    </li>
                    <li className="list-inline">
                      <div className="admin">
                        <img
                          src="./assets/images/blog/comment.svg"
                          alt="comment"
                        />
                      </div>
                      No Comment
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Which Allows You To Pay Down Insurance Bills Agile
                      Frameworks To Provide
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-blog-card blog-card-two">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="./assets/images/blog/blog-2.webp" alt="blog" />
                  </a>
                </div>
                <div className="date">
                  <span>15 November 2022</span>
                </div>
                <div className="single-blog-content">
                  <ul className="p-0 m-0">
                    <li className="list-inline">
                      <div className="admin">
                        <img src="./assets/images/blog/admin.svg" alt="admin" />
                      </div>
                      By<a href="author.html">Admin</a>
                    </li>
                    <li className="list-inline">
                      <div className="admin">
                        <img
                          src="./assets/images/blog/comment.svg"
                          alt="comment"
                        />
                      </div>
                      No Comment
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Insurance Covers Risk Of Fiar Absence Of Fier Insurance
                      Serving
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
