import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./home.css";
import img4 from "../../assets/images/avatar4.jpg";
import questions_data from "./questions_data";
import testimonials_data from "./testimonails_data";
import HOMEIMG from "../../assets/images/main_header.png";
import VALUEIMG from "../../assets/images/values.jpg";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import Question from "./Question";
function Home() {
  const [questions, setQuestions] = useState(questions_data);
  const [testimonials, settestimonials] = useState(testimonials_data);
  return (
    <>
      <div className="container home_container" id="home">
        <div className="home_content">
          <span className="workOut">#100 Days Of Work Out</span>
          <h1>
            Join The Legends Of <br /> The Fitness World
          </h1>
          <p>
            Lorem ipsum dolor Doloribus est eum sequi sit amet consectetur
            adipisicing elit. Doloribus est eum sequi.
          </p>
          <Link to="/plans" className="btn">
            Get Started
          </Link>
        </div>
        <div className="home_img">
          <img src={HOMEIMG} alt="" />
        </div>
      </div>
      <section className="container program_container">
        <h1>Our Programs</h1>
        <div className="box_container">
          <div className="box">
            <AiTwotoneSetting className="box_icon" />
            <h5>Program One</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              natus.
            </p>
            <a href="#" className="btn">
              Learn More <BiRightArrow />
            </a>
          </div>
          <div className="box">
            <AiTwotoneSetting className="box_icon" />
            <h5>Program One</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              natus.
            </p>
            <a href="#" className="btn">
              Learn More <BiRightArrow />
            </a>
          </div>
          <div className="box">
            <AiTwotoneSetting className="box_icon" />
            <h5>Program One</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              natus.
            </p>
            <a href="#" className="btn">
              Learn More <BiRightArrow />
            </a>
          </div>
          <div className="box">
            <AiTwotoneSetting className="box_icon" />
            <h5>Program One</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              natus.
            </p>
            <a href="#" className="btn">
              Learn More <BiRightArrow />
            </a>
          </div>
        </div>
      </section>
      <section className="container value_container">
        <h1>Our Values</h1>
        <div className="box_container">
          <div className="value_img">
            <img src={VALUEIMG} alt="valueImg" />
          </div>
          <div className="value_boxs">
            <div className="box">
              <AiTwotoneSetting className="box_icon" />
              <h5>Program One</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                natus.
              </p>
            </div>
            <div className="box">
              <AiTwotoneSetting className="box_icon" />
              <h5>Program One</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                natus.
              </p>
            </div>
            <div className="box">
              <AiTwotoneSetting className="box_icon" />
              <h5>Program One</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                natus.
              </p>
            </div>
            <div className="box">
              <AiTwotoneSetting className="box_icon" />
              <h5>Program One</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                natus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container question_container">
        <h1>FAQs</h1>
        <div className="box_container">
          {questions.map((question) => {
            return <Question key={question.id} question={question} />;
          })}
        </div>
      </section>
      <section className="cotainer testimonails_containers">
        <h1>Testimonails</h1>
        <Swiper
          className="container testimonials_container"
          modules={[Autoplay, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {testimonials.map(({ id, avatar, name, review }) => {
            return (
              <SwiperSlide className="testimonial" key={id}>
                <div className="client_avatar">
                  <img src={avatar} alt="avatar" className="circle-5" />
                </div>
                <h5 className="client_name">{name}</h5>
                <p className="client_review">{review}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default Home;
