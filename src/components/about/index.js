import React from 'react';
import coverImage from '';

function About() {
  return (
    <section className="my-5">
          <hr></hr>
      <h1 id="about">About Us</h1>
      <img src={coverImage} className="my-2" style={{ width: "30%" }} alt="cover" />
      <div className="my-2">
        <p>
        </p>
      </div>
    </section>
  );
}

export default About;