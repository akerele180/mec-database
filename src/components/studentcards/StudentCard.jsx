import React from "react";
import "./StudentCard.css";
import oreoluwa from "../../students-images/OREOLUWA.jpg";
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
              <img src={oreoluwa} alt={firstName + "-image"} />
            </div>
            {/* <ImageWrapper image={image} className={firstName + "-image"} /> */}
            <div className="basic-info">
              <h2>{firstName + " " + lastName} </h2>
              <h6>Email Address: {emailadd}</h6>
              <h3 className="level">Class: {level}</h3>
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
