import React from "react";
const Education = () => {
  return (
    <section className="padding" id="education">
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          borderRadius: "1rem",
        }}
      >
        <h2>Education</h2>
        <p>
          <strong>Yamaguchi University</strong>
          <br />
          <em>Master of Technology Management</em>
          <br />
          <em>April 2020 - Present</em>
          <br />
          <em>Yamaguchi, Japan</em>
        </p>
        <p>
          <strong>University of Lagos</strong>
          <br />
          <em>Bachelor of Science in Computer Science</em>
          <br />
          <em>August 2012 - July 2016</em>
          <br />
          <em>Lagos, Nigeria</em>
        </p>
      </div>
    </section>
  );
};
export default Education;
