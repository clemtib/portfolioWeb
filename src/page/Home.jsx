import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React, { useState, useEffect } from "react";

export default function Home() {
   const [firstPageVisible, setFirstPageVisible] = useState(false);

   const handleFirstPageAnimationEnd = () => {
      setFirstPageVisible(true);
   };

   useEffect(() => {
      const header = document.querySelector("header");
      const homeSection = document.querySelector(".home");

      const observerOptions = {
         rootMargin: "-64px 0px 0px 0px", // Permet de déclencher l'observation 64px avant que la section "Home" atteigne le haut de l'écran
      };

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               header.classList.remove("invert-background");
            } else {
               header.classList.add("invert-background");
            }
         });
      }, observerOptions);

      observer.observe(homeSection);

      const createWhiteDot = () => {
         const dot = document.createElement("div");
         const dotSize = Math.floor(Math.random() * 31) + 5; // Génère une taille aléatoire
         dot.classList.add("white-dot");
         dot.style.top = `${Math.random() * 100}%`;
         dot.style.left = `${Math.random() * 100}%`;
         dot.style.width = `${dotSize}px`; // Ajoute la taille aléatoire au style du rond
         dot.style.height = `${dotSize}px`; // Ajoute la taille aléatoire au style du rond
         document.body.appendChild(dot);

         // Disparition du rond
         setTimeout(() => {
            dot.remove();
         }, 7000); // Supprime le rond après 5 secondes
      };

      // Apparition de ronds blancs de manière aléatoire
      const intervalId = setInterval(() => {
         const shouldCreateDot = Math.random() < 30; // Modifier le pourcentage pour ajuster le nombre de ronds créés (0.1 = 10%)
         if (shouldCreateDot) {
            createWhiteDot();
         }
      }, 80); // Modifier l'intervalle en millisecondes pour ajuster la fréquence d'apparition des ronds

      return () => {
         const whiteDots = document.querySelectorAll(".white-dot");
         whiteDots.forEach((dot) => {
            dot.remove();
         });

         observer.unobserve(homeSection);
         clearInterval(intervalId);
      };
   }, []);

   return (
      <section className="home" id="home">
         <div
            className={`firstPage ${firstPageVisible ? "visible" : ""}`}
            onAnimationEnd={handleFirstPageAnimationEnd}
         >
            <div className="title">
               <h1>Clément TIBERGHIEN</h1>
               <h2>Développeur Web</h2>
            </div>

            <div className="portrait">
               <img src="images/portrait.jpeg" alt="" />
            </div>
         </div>

         <a
            href="#activity"
            className={`scroll ${firstPageVisible ? "visible" : ""}`}
         >
            <p>Voir mon travail</p>
            <FontAwesomeIcon
               icon={faChevronDown}
               size="3x"
               style={{ color: "#ffffff" }}
            />
         </a>
      </section>
   );
}
