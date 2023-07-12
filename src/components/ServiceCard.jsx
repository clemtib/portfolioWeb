// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import serviceData from "../data/cards.json";

export default function ServiceCard() {
   return (
      <>
         {serviceData.cards.map((card, index) => (
            <div key={index} className="card-item">
               <div className="head">
                  <div className="card-icon">
                     <FontAwesomeIcon
                        icon={card.icon}
                        size="3x"
                        style={{ color: "#13134d" }}
                     />
                  </div>
                  <h4>{card.title}</h4>
               </div>

               <p className="description">{card.description}</p>
               <h5 className="subtitle">{card.subtitle}</h5>
               <ul className="skills">
                  {card.skills.map((skill, skillIndex) => (
                     <li key={skillIndex}>{skill}</li>
                  ))}
               </ul>
            </div>
         ))}
      </>
   );
}
