import ModalLayout from "./modalLayout"
import ProjectCarousel from "./projectCarousel";
import projects from "./projectObject";
import projectDetails from "./projectDetails";

const ProjectModal = ({open, onClose, projectIndex}) =>{

  return(
    <ModalLayout
      openModal={open}
      onClose={onClose}
    >
      <header className="py-4 mb-5 d-flex align-items-center container">
        <h4 className="m-0 mr-3">{projects[projectIndex]["name"]}</h4> 
        <a href={`${projects[projectIndex]["url"]}`} target="_blank">{projects[projectIndex]["url"]}</a>
      </header>

      <ProjectCarousel projectIndex={projectIndex} />
      <div className="d-flex align-items-center container py-4">
        {projectDetails(projectIndex)}
      </div>
      


    </ModalLayout>
  )
}

export default ProjectModal;