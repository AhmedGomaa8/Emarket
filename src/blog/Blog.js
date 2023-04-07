import "./Blog.css";
import blogOne from "../imgs/blog-masonry-img-1.jpg";
import blogTwo from "../imgs/blog-masonry-img-2.jpg";
import blogThree from "../imgs/blog-masonry-img-3.jpg";
function Blog() {
  return (
    <div className="blog">
      <h2>LATEST BLOG POSTS</h2>
      <div className="container">
        <div className="row">
          <div className="blog-boxs">
            <a href="/#" className="box">
              <div className="img">
                <img src={blogOne} alt="" />
              </div>
              <div className="title">
                <h5>BEST FASHION INFLUENCERS SUMMER AND WINTER 2023</h5>
              </div>
            </a>
            <a href="/#" className="box">
              <div className="img">
                <img src={blogTwo} alt="" />
              </div>
              <div className="title">
                <h5>THE IDENTITY PROJECT FOR THE FASHION REVOLUTION FAIR</h5>
              </div>
            </a>
            <a href="/#" className="box">
              <div className="img">
                <img src={blogThree} alt="" />
              </div>
              <div className="title">
                <h5>NEW BRANDING SOLUTIONS FOR STREETWEAR BRANDS</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
