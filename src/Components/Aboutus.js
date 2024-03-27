import React, { useState } from "react";
import "./Aboutus.css";
import { useNavigate } from "react-router-dom";
import bimg19 from "../subassets/bagris images/New folder/about img2.jpg";
import wedding from "../assets/iaw.jpg";
const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="flex justify-center flex-col md:flex-row items-center  px-10 gap-5 md:gap-32 mt-10">
        <section>
          <img src={wedding} alt="weeding" className="h-[34rem]" />
        </section>
        <section className="w-full sm:w-[30rem] py-4 px-4 rounded-md">
          <h1 className="underline text-green-600 py-1">About Me</h1>
          <p>
            Introducing myself to strangers through my lens is a dance of
            connection <br />
            and perception. I approach each encounter as an opportunity to
            unveil the extraordinary in the ordinary.
            <br /> With a camera in hand, I become a silent observer, capturing
            the nuances of emotion and character. Through genuine curiosity
            <br /> and a keen eye, I seek to showcase the beauty in every
            person, creating images that transcend the visual and resonate on a
            deeply human level.
            <br /> By engaging in authentic interactions, <br />I aim to
            establish a rapport that goes beyond the surface. It's not just
            about taking pictures; it's about capturing moments that echo the
            shared
            <br /> experiences of our humanity. My photography is a testament to
            the stories untold, leaving an unforgettable imprint on the
            <br /> minds of those who view my work—a visual symphony that
            lingers, connecting us through the
            <br /> universal language of emotion and narrative.
          </p>

          <p className="text-green-600 text-end">Bajrang Bagri.....</p>
        </section>
      </main>

      <div className="slider">
        <img src={bimg19} className="sliderimg" alt="slider" />
      </div>
      <div
        className="contact-me "
        onClick={() => {
          navigate("/contact");
        }}
      >
        <span>Contact me</span>
      </div>
      <div className="mx-10 sm:mx-20 m-auto mt-12">
        <div className="my-5">
          Welcome to my photographic journey, where every click of the shutter
          is a moment frozen in time, waiting to be discovered. I am passionate
          about capturing the essence of life through my lens, transforming
          ordinary scenes into extraordinary visions. With an eye for detail and
          a heart for storytelling, I seek to encapsulate the beauty of the
          world in all its forms.
        </div>
        <div className="my-5">
          Through my work, I aim to evoke emotions, provoke thought, and ignite
          curiosity. Whether it's the breathtaking landscapes of distant lands,
          the candid expressions of individuals, or the intricate details of
          everyday objects, each image tells a unique story. I believe in the
          power of photography to transcend language and connect people across
          cultures and continents.
        </div>
        <div className="my-5">
          Drawing inspiration from the world around me, I embrace both the
          grandeur of sweeping vistas and the intimacy of fleeting moments. From
          the soft glow of sunrise to the dramatic hues of sunset, I chase light
          and shadow to reveal the true character of my subjects. With a blend
          of technical skill and artistic vision, I strive to create images that
          leave a lasting impression on those who encounter them.
        </div>
        <div className="my-5">
          Thank you for taking the time to learn a little bit about me and my
          photography approach. If you’re looking for a storyteller who can
          capture those candid, editorial moments that make life so beautiful, I
          would be honored to be a part of your journey. Feel free to explore my
          portfolio and get in touch—I can’t wait to start capturing your story
          through my lens. Contact Information:
        </div>
        <br /> Email :- Bajrang198930@gmail.com <br /> Instagram :-{" "}
        <a href="https://www.instagram.com/bajrang_bagri_photography/">
          bajrang_bagri_photography
        </a>
      </div>
    </>
  );
};

export default Aboutus;
