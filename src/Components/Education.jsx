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
          <em>October 2022 - Present</em>
          <br />
          <em>Yamaguchi, Japan</em>
        </p>
        <p>
          <strong>Makerere University</strong>
          <br />
          <em>Bachelor of Information Technology</em>
          <br />
          <em>August 2012 - February 2016</em>
          <br />
          <em>Kampala, Uganda</em>
        </p>
        <p>
          <strong>Islamic University in Uganda</strong>
          <br />
          <em>Bachelor of Arts in Economics</em>
          <br />
          <em>August 2012 - December 2015</em>
          <br />
          <em>Kampala, Uganda</em>
        </p>
      </div>
    </section>
  );
};
export default Education;
