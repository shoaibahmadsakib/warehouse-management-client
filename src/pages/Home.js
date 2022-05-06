import React from "react";
import Banner from "../components/Banner/Banner";
import { imageLink } from "../assets/imageLink";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import ReviewSection from "../components/Reviewsection/ReviewSection";

import { Link } from "react-router-dom";
import useGetinfo from "../hooks/useGetinfo";

const Home = () => {
  const [users] = useGetinfo();

  return (
    <>
      <Banner />
      <div className="vehicle_collection">
        <h2 className="py-5">Our Vehicles Collection</h2>
        <div className="every_vehicle_collection container">
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
      <h2 className="text-center pt-5">Vehicles items</h2>
      <div className="image_style container">
        {users.slice(0, 6).map((data) => (
          <div className="card" key={data._id}>
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
                  manage
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-end container">
        <Link to="/manageitem" className="btn btn-primary ">
          Manage Vehicles
        </Link>
      </div>
      <ReviewSection />
    </>
  );
};

export default Home;
