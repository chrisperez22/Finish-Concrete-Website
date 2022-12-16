import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import work4 from "../../img/tile.jpg";
import pool from "../../img/pooldeck.jpg";
import work2 from "../../img/fence.jpg";
import work3 from "../../img/euro.jpg";
import work5 from "../../img/job9.jpg";
import work6 from "../../img/plain.jpg";
import "../../styles/services.css";

export const Services = () => {
	const { store, actions } = useContext(Context);

	return (

		<div class="container text-center">

    𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬
	<br></br><br></br><br></br>
	
  <div class="col-container">
  <div class="col">
	  <div>
		<img class="pic1" src={work4}></img>
		<h1>𝙎𝙩𝙖𝙢𝙥𝙚𝙙 𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 </h1>
		<div class="footer1">
		The appealing and long-lasting alternative to
            conventional concrete is stamped concrete. Because it can produce a
            distinctive and fashionable look that is also long-lasting and
            simple to maintain.
		</div>
	  </div>
 
  </div>

  <div class="col">
 
	  <div>
		<img class="pic1" src={work3}></img>
		<h1>𝙀𝙪𝙧𝙤 𝙏𝙞𝙡𝙚</h1>
		<div class="footer3">
		Eurotile is a product that consists of acrylic and concrete. It is applied over concrete and most any other sound and solid surface.

		</div>
	  </div>
  </div>

  <div class="col">
	  <div>
		<img class="pic1" src={work5}></img>
		<h1>𝘼𝙧𝙩𝙞𝙛𝙞𝙘𝙞𝙖𝙡 𝙂𝙧𝙖𝙨𝙨</h1>
		<div class="footer4">
		Artificial grass is material that is made of synthetic, man-made fibers that look like real grass. The synthetic grass blades are green and come in different pile heights.
		</div>
	  </div>
  </div>
</div>
<div class="col-container">
  <div class="col">
	  <div>
		<img class="pic1" src={work2}></img>
		<h1>𝘼𝙡𝙪𝙢𝙞𝙣𝙪𝙢 𝙁𝙚𝙣𝙘𝙞𝙣𝙜 𝙄𝙣𝙨𝙩𝙖𝙡𝙡𝙖𝙩𝙞𝙤𝙣 </h1>
		<div class="foote">
		They are durable, easy to install, maintenance free and an
            affordable fencing solution for every property. Above all, when
            installed correctly they look great and enhance the style of your
            property.
		</div>
	  </div>
 
  </div>

  <div class="col">
	  <div>
	  <img class="pic1" src={pool}></img>
	  <h1>𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 𝙋𝙤𝙤𝙡 𝘿𝙚𝙘𝙠</h1>
	  <div class="footer3">
		For a pool deck, concrete is a fantastic material because it is
            sturdy and long-lasting.Your pool deck can also be made
            more interesting and beautiful by stamping concrete. 
			
		</div>
	  </div>
  </div>

  <div class="col">
	  <div>
		<img class="pic1" src={work6}></img>
		<h1>𝙋𝙡𝙖𝙞𝙣 𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 </h1>
		<div class="footer2">
		Plain concrete is most commonly used for paving and flooring. Made
            from a mix of cement, aggregate, and water the different types of
            aggregate and ratio of materials used will give different types of
            cement.
		</div>
	  </div>
  </div>
</div>
</div>

	);
};
