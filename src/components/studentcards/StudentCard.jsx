import React from "react";
import "./StudentCard.css";
// import oreoluwa from "../../students-images/OREOLUWA.jpg";
// import styled from "styled-components";

function StudentCard({ students }) {
  // console.log(students.image);
  return (
    <section>
      {students.map(({ firstName, lastName, image, id, emailadd, level }) => {
        // console.log(image + "\n" + oreoluwa);
        return (
          <aside key={id} className={firstName}>
            <div className={firstName + "-image"}>
              <img src={image} alt={firstName + "-image"} />
            </div>
            {/* <ImageWrapper image={image} className={firstName + "-image"} /> */}
            <div className="basic-info">
              <h4>{firstName + " " + lastName} </h4>
              <h5 className="level">Class: {level}</h5>
              <div className="socials">
                <a href={"mailto:" + emailadd}>
                  <i class="far fa-envelope"></i>
                </a>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-whatsapp"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </aside>
        );
      })}
    </section>
  );
}

export default StudentCard;

// const ImageWrapper = styled.div`
//   background-image: ${({ image }) => `url(image)`};
// `;
