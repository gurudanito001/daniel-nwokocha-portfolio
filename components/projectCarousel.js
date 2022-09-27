import { Carousel } from "react-bootstrap"
import projects from "./projectObject"
import {Image} from "react-bootstrap"
import { NavigateNext, NavigateBefore } from "@material-ui/icons"
import { IconButton, Tabs, Tab, Box } from "@material-ui/core"


const carouselItem = (src, index, key, screen)=>{
  return(
    <Carousel.Item key={key} className="text-center py-3 p-lg-5" style={{ background: "#00000067"}} >
      <div className="h-100 border-danger">
      <img
        style={{ maxHeight: "500px"}}
        className="img img-fluid"
        src={`/images/${src}.png`}
        alt={`Slide ${index}`}
      />
      </div>
      
    </Carousel.Item>
  )
}


const ProjectCarousel = ({projectIndex}) =>{

  const [screen, setScreen] = React.useState('desktop');

  const handleChange = (event, newValue) => {
    setScreen(newValue);
  };

  const listCarouselItems = () =>{
    return projects[projectIndex][screen].map( (src, index) =>{
      return carouselItem(src, index, projects[projectIndex]["name"], screen)
    })
  }

  return(
    <>
    <Box className="container">
      <Tabs
        value={screen}
        onChange={handleChange}
        textColor="#273A69"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        className="mb-5 mx-auto"
      >
        <Tab value="desktop" label="Desktop" />
        <Tab value="mobile" label="Mobile" />
      </Tabs>
    </Box>
    <Carousel 
      variant="gray" 
      className="container px-0 px-sm-3"
      wrap={false}
      prevIcon={
        <IconButton className="bg-dark p-1 p-md-2" style={{ marginLeft: "-90%"}}> <NavigateBefore  className="text-light" /> </IconButton>
      }
      nextIcon={
        <IconButton className="bg-dark p-1 p-md-2" style={{ marginRight: "-90%"}}> <NavigateNext className="text-light" /> </IconButton>
      }
    >
      {listCarouselItems()}
    </Carousel>
    </>
  )
}

export default ProjectCarousel;