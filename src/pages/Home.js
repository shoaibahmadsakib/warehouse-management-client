import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { imageLink } from "../assets/imageLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAuthState } from "react-firebase-hooks/auth";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import ReviewSection from "../components/Reviewsection/ReviewSection";
import auth from "../firebase.init";
import { Link } from "react-router-dom";

const Home = () => {
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // const email = user?.email;
    fetch(`http://localhost:5000/userinfo`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Banner />
      <div className="vehicle_collection">
        <h1 className="py-4">Our vehicle Collection</h1>
        <div className="every_vehicle_collection">
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={imageLink.img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageLink.img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageLink.img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageLink.img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageLink.img4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <h2 className="text-center py-4">inventory items</h2>
      <div className="image_style">
        {users.slice(0, 6).map((data) => (
          <div className="card">
            <img src={data.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h3>Name: {data.name}</h3>
              <p className="card-text">
                {data.describtion?.slice(0, 50).concat("...")}
              </p>

              <p>
                Supplier name:<b>{data.suplierName}</b>
              </p>
              <div className=" d-flex justify-content-around">
                <p>
                  Quantity: <b>{data.quantity}</b>
                </p>
                <Link to={`/inventory/${data._id}`} className="btn btn-primary">
                  Update
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/manageitem" className="btn btn-primary">
                Manage item
              </Link>
      <ReviewSection />
    </>
  );
};

export default Home;
