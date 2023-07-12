import React, { useEffect } from "react";

export default function Header() {
   useEffect(() => {
      const handleSmoothScroll = (event) => {
         event.preventDefault();

         const targetId = event.target.getAttribute("href");
         const targetElement = document.querySelector(targetId);
         const topOffset = targetElement.offsetTop - 30; // Soustraire la marge souhaitée

         window.scrollTo({
            top: topOffset,
            behavior: "smooth",
         });
      };

      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
         link.addEventListener("click", handleSmoothScroll);
      });

      return () => {
         links.forEach((link) => {
            link.removeEventListener("click", handleSmoothScroll);
         });
      };
   }, []);

   return (
      <header>
         <nav>
            <ul>
               <li>
                  <a
                     href="#home"
                     className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                     }
                  >
                     Home
                  </a>
               </li>
               <li>
                  <a
                     href="#about"
                     className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                     }
                  >
                     À propos
                  </a>
               </li>
               <li>
                  <a
                     href="#service"
                     className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                     }
                  >
                     Mes services
                  </a>
               </li>
               <li>
                  <a
                     href="#activity"
                     className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                     }
                  >
                     Activités
                  </a>
               </li>
            </ul>
         </nav>
      </header>
   );
}
