import React, { useState } from "react";
import GalleryIMG from "../../assets/images/header_bg_3.jpg";
import gallery_data from "./gallery_data";
import "./gallery.css";
function Gallery() {
  const [gallery, setGallery] = useState(gallery_data);
  return (
    <section>
      <div className="section_header">
        <div
          className="section_header_content"
          style={{ backgroundImage: `url(${GalleryIMG})` }}
        >
          <h1>Our Gallery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at
            vel, soluta odio velit obcaecati animi corporis esse veniam debitis
            voluptatibus cupiditate, ducimus nostrum tempora commodi minus
            laborum nihil nisi.
          </p>
        </div>
      </div>
      <div className="container gallery_container">
        {gallery.map((galleryImg) => {
          return (
            <div className="box" key={galleryImg.id}>
              <div className="gallery_img">
                <img src={galleryImg.img} alt={galleryImg.name} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
