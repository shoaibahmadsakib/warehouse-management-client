import React from "react";
import "./ReviewSection.css"
const ReviewSection = () => {
  return (
    <section className="container">
      <h2 classNameName="popular-product">Popular products</h2>
      <div className="products">
        <div className="product">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <div className="detalis">
            <h2>camera</h2>
            <div className="price">$200</div>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <p>
              this is a very special camera .you can easily buy here and you can
              easily use here
            </p>
          </div>
        </div>
        <div className="product">
          <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhcmR8ZW58MHx8MHx8&w=1000&q=80" alt="" />
          <div className="detalis">
            <h2>Setup box</h2>
            <div className="price">$450</div>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span className="star-details">4.99</span>
            <p>
              setup box is a very popular product .this is very useful product
            </p>
          </div>
        </div>
        <div className="product">
          <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
          <div className="detalis">
            <h2>camera here</h2>
            <div className="price">$530</div>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span className="star-details">4.99</span>
            <p>
              This is a special mike for all kind of ocassion.this is very chip
              rate. This rating is almost high
            </p>
          </div>
        </div>
      </div>
      <div className="see-more">
        <a href="http://">
          see more{" "}
          <span>
          
            <i className="fas fa-arrow-right"></i>{" "}
          </span>
        </a>
      </div>
    </section>
  );
};

export default ReviewSection;
