import React from "react";
import "./about.css";
import AboutIMG from "../../assets/images/header_bg_1.jpg";
import About1 from "../../assets/images/about1.jpg";
import About2 from "../../assets/images/about2.jpg";
import About3 from "../../assets/images/about3.jpg";

function About() {
  return (
    <section>
      <div className="section_header">
        <div
          className="section_header_content"
          style={{ backgroundImage: `url(${AboutIMG})` }}
        >
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at
            vel, soluta odio velit obcaecati animi corporis esse veniam debitis
            voluptatibus cupiditate, ducimus nostrum tempora commodi minus
            laborum nihil nisi.
          </p>
        </div>
      </div>
      <div className="about_container container">
        <div className="about_content">
          <div className="about_img">
            <img src={About1} alt="about_img" />
          </div>
          <div className="about_text">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio fugit perferendis saepe eos voluptatem molestiae
              aperiam accusantium sapiente, numquam illum, corrupti iste in nam
              nemo ipsam, hic possimus. Suscipit, ad!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              vero? Unde veritatis eveniet suscipit a, eos tempore reiciendis
              incidunt velit repellat cumque quisquam autem explicabo, nihil
              nulla, laborum possimus aliquid.
            </p>
          </div>
        </div>
        <div className="about_content">
          <div className="about_text">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio fugit perferendis saepe eos voluptatem molestiae
              aperiam accusantium sapiente, numquam illum, corrupti iste in nam
              nemo ipsam, hic possimus. Suscipit, ad!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              vero? Unde veritatis eveniet suscipit a, eos tempore reiciendis
              incidunt velit repellat cumque quisquam autem explicabo, nihil
              nulla, laborum possimus aliquid.
            </p>
          </div>
          <div className="about_img">
            <img src={About2} alt="about_img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_img">
            <img src={About3} alt="about_img" />
          </div>
          <div className="about_text">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio fugit perferendis saepe eos voluptatem molestiae
              aperiam accusantium sapiente, numquam illum, corrupti iste in nam
              nemo ipsam, hic possimus. Suscipit, ad!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              vero? Unde veritatis eveniet suscipit a, eos tempore reiciendis
              incidunt velit repellat cumque quisquam autem explicabo, nihil
              nulla, laborum possimus aliquid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
