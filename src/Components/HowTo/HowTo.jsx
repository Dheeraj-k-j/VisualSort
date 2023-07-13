import "./HowTo.css";
import React from "react";

const HowTo = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">How To Use</h2>
          <h3 className="section-subheading text-muted">
            Here is how you can get maximum out of it
          </h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image" />
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">How to Start</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Click on generate new array button. A random new array will be
                  generated. I suggest keep tapping that button multiple time
                  untill you get a perfectly messed up array
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image" />
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">Use Sorting Techniques</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Choose any of the sorting technique and see how the
                  visualization of how it works. I'll soon add more sorting
                  alogos. Keep Visiting.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image" />
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">How to Understand Colors</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Yellow implies currently comparing elements. Red emplies
                  Elements that are being swapped in Heap Sort while it
                  indicates pivot element in the Quick Sort and Finally Purple
                  means an element that is at it's correct sorted position.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <a href="https://github.com/Dheeraj-k-j/VisualSort">
                <h4>
                  Wanna
                  <br />
                  Contribute
                  <br />
                  Algos?
                </h4>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowTo;
