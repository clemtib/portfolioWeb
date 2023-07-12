import React, { useState } from "react";
import projetData from "../data/projet.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Activity() {
   const categories = ["Web", "Electronics", "DIY"];
   const [filter, setFilter] = useState("Web"); // État initial du filtre
   const [selectedProject, setSelectedProject] = useState(null);
   const [modalOpen, setModalOpen] = useState(false);

   const handleCloseButtonClick = () => {
      setSelectedProject(null);
      setModalOpen(false);
      document.body.classList.remove("overflow-hidden");
   };

   // Fonction pour mettre à jour le filtre
   const handleFilterChange = (category, event) => {
      setFilter(category);
      setSelectedProject(null); // Réinitialise le projet sélectionné
      closeModal(event); // Ferme la boîte modale et rétablit le défilement de l'arrière-plan
   };

   // Fonction pour gérer le clic sur un projet
   const handleProjectClick = (project) => {
      setSelectedProject(project);
      setModalOpen(true);
      document.body.classList.add("overflow-hidden");
   };

   // Fonction pour fermer la boîte modale
   const closeModal = (event) => {
      // Vérifiez si l'événement provient de l'intérieur de la boîte modale
      if (event.target.classList.contains("modal-overlay")) {
         setSelectedProject(null);
         setModalOpen(false);
         document.body.classList.remove("overflow-hidden");
      }
   };

   // Filtrer les projets en fonction de la catégorie sélectionnée
   const filteredProjects = projetData.projects.filter((project) => {
      return project.category === filter;
   });

   return (
      <section className="activity" id="activity">
         <h3 className="activity-title">Activités</h3>
         <div className="filter-buttons">
            {categories.map((category) => (
               <button
                  key={category}
                  className={filter === category ? "active" : ""}
                  onClick={(event) => handleFilterChange(category, event)}
               >
                  {category}
               </button>
            ))}
         </div>
         <div className="projet-container">
            {filteredProjects.map((project, index) => (
               <div
                  key={index}
                  className="card-projet"
                  onClick={() => handleProjectClick(project)}
               >
                  <div className="display">
                     <h2 className="projet-title">{project.title}</h2>
                     <p className="savoirPlus">En savoir plus...</p>
                  </div>
                  <img src={project.background} alt="Project Background" />
               </div>
            ))}
         </div>
         {selectedProject && modalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
               <div className="modal">
                  <button
                     className="close-button"
                     onClick={handleCloseButtonClick}
                     onMouseEnter={(event) =>
                        event.target.classList.add("beat-animation")
                     }
                     onMouseLeave={(event) =>
                        event.target.classList.remove("beat-animation")
                     }
                  >
                     <FontAwesomeIcon
                        icon={faXmark}
                        size="1x"
                        style={{ color: "#1E3150" }}
                     />
                  </button>
                  <div className="modal-content">
                     <div className="modal-pres">
                        {" "}
                        <img
                           src={selectedProject.background}
                           alt="Project Background"
                        />
                        <div className="modal-info">
                           <h2>{selectedProject.title}</h2>
                           <p>
                              Year: <span>{selectedProject.year}</span>
                           </p>
                           <p>
                              Mission: <br />
                              <span>{selectedProject.mission}</span>
                           </p>
                           <p>
                              Techno: <br />{" "}
                              <span>{selectedProject.techno}</span>
                           </p>
                           <a href={selectedProject.webUrl} target="_blank">
                              Website
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
}
