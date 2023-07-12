import React from "react";
import ServiceCard from "../components/ServiceCard";
import cvPdf from "../assets/cv.pdf";

export default function Service() {
   return (
      <section className="service" id="service">
         <div className="service-container">
            <h3>Mes services</h3>
            <div className="cards-container">
               <ServiceCard />
            </div>
            <div className="cv-button">
               <a href={cvPdf} download="CV_Tiberghien_Clement.pdf">
                  Télécharger mon CV
               </a>
            </div>
         </div>
      </section>
   );
}
