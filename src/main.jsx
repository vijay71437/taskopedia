import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Student from "./Student";
import StudentReview from "./StudentReview";

const root = createRoot(document.getElementById("root"));
const courseName = "React ";
const lectureCount = 11;
const isActive = true;

function HomePage() {
  return (
    <div>
      <Header />
      <p className="customHeading">We are super exicted to learn react</p>
      <h3>Topics to learn in {courseName} Course</h3>
      <p>Lecture Count:{lectureCount}</p>
      <p>Is Active:{isActive ? "Active" : "InActive"}</p>
      <ul>
        <li>JSX</li>
        <li>Components</li>
        <li>Routing</li>
        <li>State Managment</li>
      </ul>
      <div>
        Enter Task: <input type="text" maxLength={6}></input>
      </div>
      <Student expirence={2} name="VijayKumar Mali" />
      <Student expirence={5} name="Mondar Muppendwar">
        <StudentReview />
      </Student>
      <Student expirence={8} name="vikas abc" />

      <Footer />
    </div>
  );
}

root.render(
  <div>
    <HomePage />
  </div>
);
