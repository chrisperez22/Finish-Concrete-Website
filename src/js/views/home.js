import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import sone from "../../img/greyjob.jpg";
import stwo from "../../img/favorite2.jpg";
import sthree from "../../img/favorite.jpg";
import backtwo from "../../img/back2.jpg";
import sfive from "../../img/texture.jpg";
import check from "../../img/checkmark.jpg";
import pay from "../../img/payment.jpg";
import pool from "../../img/pooldeck.jpg";
import work2 from "../../img/fence.jpg";
import work3 from "../../img/euro.jpg";
import work4 from "../../img/tile.jpg";

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => (
  <div className="every bg-light">
    <div className="slide">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img id="slideshow" src={sthree} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="slideshow" src={sone} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="slideshow" src={backtwo} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="slideshow" src={stwo} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="slideshow" src={sfive} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <br></br>
    <div class="ser">
      <div class="services">
        <h3>𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬</h3>
      </div>

      <div class="row">
        <div class="col-4">
          <h5>𝙎𝙩𝙖𝙢𝙥𝙚𝙙 𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 </h5>

          
          <p1 id="service">
            Stamped concrete is frequently used for pool decks, patios, and
            driveways. The appealing and long-lasting alternative to
            conventional concrete is stamped concrete. Because it can produce a
            distinctive and fashionable look that is also long-lasting and
            simple to maintain.
          </p1>
        </div>

        <div class="col-4">
    
        
          <h5>𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 𝙋𝙤𝙤𝙡 𝘿𝙚𝙘𝙠</h5>
          <p1 id="service">
            For a pool deck, concrete is a fantastic material because it is
            sturdy and long-lasting.Your pool deck can also be made
            more interesting and beautiful by stamping concrete. A concrete
            contractor will be able to install your deck effectively and assist
            you in selecting the best material.
          </p1>
         
        </div>


        <div class="col-4">
        
          <h5>𝘼𝙡𝙪𝙢𝙞𝙣𝙪𝙢 𝙁𝙚𝙣𝙘𝙞𝙣𝙜 𝙄𝙣𝙨𝙩𝙖𝙡𝙡𝙖𝙩𝙞𝙤𝙣 </h5>
          <p1 id="service">
            They are durable, easy to install, maintenance free and an
            affordable fencing solution for every property. Above all, when
            installed correctly they look great and enhance the style of your
            property.
          </p1>
        </div>

        <div class="col-4">
          <h5>𝙋𝙡𝙖𝙞𝙣 𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 </h5>
          <p1 id="service">
            Plain concrete is most commonly used for paving and flooring. Made
            from a mix of cement, aggregate, and water the different types of
            aggregate and ratio of materials used will give different types of
            cement with slightly different properties.
          </p1>
        </div>
        <div class="col-4">
       
          <h5>𝙀𝙪𝙧𝙤 𝙏𝙞𝙡𝙚</h5>
          <p1 id="service">
            Eurotile is a product that consists of acrylic and concrete. It is
            applied over concrete and most any other sound and solid surface.
          </p1>
        </div>
        <div class="col-4">
          <h5>𝘼𝙧𝙩𝙞𝙛𝙞𝙘𝙞𝙖𝙡 𝙂𝙧𝙖𝙨𝙨</h5>
          <p1 id="service">Artificial grass is material that is made of synthetic, man-made fibers that look like real grass. The synthetic grass blades are green and come in different pile heights.</p1>
        </div>
      </div>
    </div>
    {/* <Link to="/services">
				<button className="btn-primary">Services</button>
			</Link> */}
      <div className="video">
			<div className="container">
			<div className="vid">
			<iframe width="600" height="315" src="https://www.youtube.com/embed/LwUL2YHnsh4" frameborder="0" allowfullscreen></iframe>
			</div>
			</div>
			

		</div>
    

    
    <br></br>
    <br></br>
    <br></br>
  </div>
);
