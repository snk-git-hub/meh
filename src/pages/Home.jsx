import React, { useEffect, useState } from "react";
import "../Styles/Home.css"; 
import profileImg from "../assets/109211155.jpeg";
import Img1 from "../assets//Travel3.jpg";
import Img2 from "../assets//Travel2.jpg";
import Img3 from "../assets//Travel1.jpg"
export default function Home() {
    const [IMG, setIMG] = useState(Img1);
    const images=[Img1,Img2,Img3];

    useEffect(() => {
      const timer = setInterval(() => {
        setIMG((prevImg) => {

          const currentImg= images.indexOf(prevImg);
          const nextIndex= (currentImg+1)%images.length;
          return images[nextIndex];


        } )
      }, 5000); 
  
      return () => clearInterval(timer);
    }, []);

  return (
    <div className="home-container">
      <header>
        <i></i>  
        <h1 className="heading">Developer/Designer/Researcher</h1>
      </header>

      <section className="content-section">
        <div className="content-wrapper">
          <div className="text-content">
            <p>
              I'm a hobbyist software developer and an eager tinkerer, passionate about merging technology with research to create innovative solutions.
            </p>
            <p>
              I earned my BTech in Computer Science from Srinivas University. During my academic journey, I explored Artificial Intelligence and Computational Linguistics, which sparked my curiosity for tackling complex problems in new ways.
            </p>
            <p>
              A key research project of mine involved developing a signature verification model that combines Squeeze-and-Excitation (SE) blocks with Capsule Networks (CapsNet). The aim was to build a highly accurate and robust AI model capable of distinguishing between genuine and forged signatures. This led me to explore TensorFlow Lite, enabling me to deploy the model in mobile apps for real-time predictions.
            </p>
            <p>
              Though my academic background provided a strong foundation, my true passion lies in transforming ideas into real-world applications. I'm constantly experimenting with new technologies and striving to innovate wherever I can.
            </p>
          </div>
          <div className="image-container">
            <img src={profileImg} alt="Profile" className="profile-img" />
          </div>
        </div>
      </section>

      <div className="taj-container">
        <img src={IMG} alt="Taj Mahal" className="taj-img" />
      </div>

      <section className="content-section">
      <div className="content-wrapper">
      <div className="text-content">
        <p>
          College life has been quite a ride. I started my BTech in Computer Science at Srinivas University, and it’s been a mix of exploring tech and working on cool projects. I remember working on a college app with some friends, and we were trying to bring everyone together. We wanted students and faculty to show their tech skills and ideas.
        </p>
        <p>
          A big part of my journey was also my internship at NITK. Working under Shashidhar G. Koolagudi, my mentor, was an experience I’ll never forget. He made me dig into real-world problems and think critically, which really helped me grow as a developer. It wasn’t always easy, but those days were about learning from mistakes and finding solutions on the fly.
        </p>
        <p>
          One of the most memorable moments was when I traveled to NIT Jalandhar (Punjab) for the E2A Conference. It was for presenting my research, and I can’t even describe how cool it felt. Standing there, talking about my project, sharing ideas, and getting feedback from experts — it was an experience that I wouldn’t trade for anything. It was all about putting my work out there and seeing the bigger picture.
        </p>
        <p>
          I also participated in hackathons during my journey, and those were some of the most intense yet exciting times. One hackathon, in particular, I got into game development. It was a rush — brainstorming ideas, coding like crazy, and trying to finish something fun and innovative in just hours. We didn’t win, but the experience taught me a lot about quick thinking and working under pressure.
        </p>
        <p>
          And there’s one project that I started but didn’t get to finish. It was a mobile app that I was super passionate about. It had elements of AI and machine learning, and I had this whole plan in mind. But life got in the way, and I didn’t get to wrap it up. One day, I hope to return to it, though.
        </p>
        <p>
          It’s been a mix of highs and lows, but looking back, every part of it shaped me. Whether it was working with cool mentors, diving into hackathons, or trying to finish projects I started, it's all been about learning and growing.
        </p>
        </div>
        </div>
      </section>
    </div>
  );
}
