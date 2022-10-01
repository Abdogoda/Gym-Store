import React, { useState } from "react";
import trainers_data from "./trainers_data";
import TrainersIMG from "../../assets/images/header_bg_5.jpg";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./trainers.css";
function Trainers() {
  const [trainers, setTrainers] = useState(trainers_data);
  return (
    <section>
      <div className="section_header">
        <div
          className="section_header_content"
          style={{ backgroundImage: `url(${TrainersIMG})` }}
        >
          <h1>Our Trainers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at
            vel, soluta odio velit obcaecati animi corporis esse veniam debitis
            voluptatibus cupiditate, ducimus nostrum tempora commodi minus
            laborum nihil nisi.
          </p>
        </div>
      </div>
      <div className="container trainers_container">
        {trainers.map((trainer) => {
          return (
            <div className="box" key={trainer.id}>
              <div className="trainer_img">
                <img src={trainer.img} alt={trainer.name} />
              </div>
              <h5 className="trainer_name">{trainer.name}</h5>
              <p className="traininig_type">{trainer.type}</p>
              <div className="trainer_socials">
                <IoLogoLinkedin className="trainer_social_icon" />
                <FaFacebook className="trainer_social_icon" />
                <FaTwitter className="trainer_social_icon" />
                <FaInstagram className="trainer_social_icon" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Trainers;
