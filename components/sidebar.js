import { Twitter, GitHub, Email, LinkedIn, CheckCircle, } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Sidebar = () =>{


  return (
    <aside className='col-3 border-right d-none d-lg-flex flex-column p-5 sticky-top' style={{height: "100vh", overflowY: "auto"}}>
      <div className="d-flex flex-column align-items-center border-bottom pb-2">
        <img height="150px" src="/images/sidebar-profile-pic.png" />
        <h5 className="my-1">Daniel Nwokocha</h5>
        <span className="h6 text-secondary font-weight-normal">Full Stack Developer</span>
        <ul className="list-unstyled d-flex mb-0" style={{width: "250px"}}>
          <a className="mr-auto" href="mailto:gurudanito001@gmail.com"> <IconButton > <Email style={{height: "20px"}} /></IconButton></a>
          <a className="mr-auto" href="https://github.com/gurudanito001" target="_blank"> <IconButton> <GitHub style={{height: "20px"}} /></IconButton></a>
          <a className="mr-auto" href="https://twitter.com/iamnotstopping" target="_blank"> <IconButton> <Twitter style={{height: "20px"}} /></IconButton></a>
          <a className="mr-auto" href="https://linkedin.com/in/daniel-nwokocha/" target="_blank"> <IconButton> <LinkedIn style={{height: "20px"}} /></IconButton></a>
        </ul>
      </div>

      <div className="mx-auto py-3" style={{ width: "270px" }}>
        <header className="d-flex mb-3 text-secondary">
          <span className="small">Skills</span>
          <span className="ml-auto small">Experience(yrs)</span>
        </header>
        <ul className="list-unstyled">
          <li className="d-flex py-1 font-weight-bold">
            Javascript <span className="ml-auto font-weight-normal small">{new Date().getFullYear() - 2017} Years</span>
          </li>
          <li className="d-flex py-1 font-weight-bold">
            ReactJs <span className="ml-auto font-weight-normal small">{new Date().getFullYear() - 2018} Years</span>
          </li>
          <li className="d-flex py-1 font-weight-bold">
            Redux <span className="ml-auto font-weight-normal small">{new Date().getFullYear() - 2018} Years</span>
          </li>
          <li className="d-flex py-1 font-weight-bold">
            NodeJs <span className="ml-auto font-weight-normal small">{new Date().getFullYear() - 2019} Years</span>
          </li>
          <li className="d-flex py-1 font-weight-bold">
            NextJs <span className="ml-auto font-weight-normal small">{new Date().getFullYear() - 2019} Years</span>
          </li>
          <li className="d-flex py-1 font-weight-bold">
            Graphql <span className="ml-auto font-weight-normal small">{new Date().getFullYear() - 2019} Years</span>
          </li>
          <li className="d-flex py-1 font-weight-bold">
            Postgresql <span className="ml-auto font-weight-normal small">{new Date().getFullYear() - 2019} Years</span>
          </li>
          <li className="d-flex py-1 font-weight-bold">
            Mongodb <span className="ml-auto font-weight-normal small">{new Date().getFullYear() - 2019} Years</span>
          </li>
          <li className="d-flex py-1 font-weight-bold">
            MySQL <span className="ml-auto font-weight-normal small">{new Date().getFullYear() - 2019} Years</span>
          </li>
          <li className="d-flex py-1 font-weight-bold">
            Python Framework <span className="ml-auto font-weight-normal small">{new Date().getFullYear() - 2021} Years</span>
          </li>
          
        </ul>
      </div>
      

    </aside>
  )
}

export default Sidebar;