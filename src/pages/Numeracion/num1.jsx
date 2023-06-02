import ReactPlayer from "react-player";
import React, {Component } from "react";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import Boxes from "../../components/boxes";
import Buttons from "../../components/buttons";
import DropdoItems from "../../templates/Navbars/DropdownItems/DropdoItems";
import $ from "jquery";

export default class num1 extends Component {
  playEvent() {
    $("#acciones").html("");
  }
  pauseEvent() {
    $("#acciones").html("Pausando Video");
  }
  render() {
    return (
      <DashboardLayout>
    <DashboardNavbar />
    <Boxes mt={4} mb={3} color="navy" >
        NO EXISTE MUTIMEDIA
        <DropdoItems />
    </Boxes>
      <Buttons type="submit" variant="gradient" color="info" fullWidth>
      </Buttons>
      <React.Fragment>
        <div className="container d-flex justify-content-center align-items-center mt-3">
          <div scope="row">
            <ReactPlayer
              url="https://cdn.filestackcontent.com/mDDjhGJbTpSlQWOSWZjb"
              loop
              controls
              onPlay={this.playEvent}
            />
            <ReactPlayer
              url="https://cdn.filestackcontent.com/4Q3iZC7tT2GSnGCaQmey"
              
              loop
              controls
            />
          </div>
          <div scope="row">
            <ReactPlayer
              url={[
                "https://cdn.filestackcontent.com/mDDjhGJbTpSlQWOSWZjb",
                "https://cdn.filestackcontent.com/4Q3iZC7tT2GSnGCaQmey",
                "https://cdn.filestackcontent.com/4Q3iZC7tT2GSnGCaQmey",
                "https://cdn.filestackcontent.com/mDDjhGJbTpSlQWOSWZjb",
              ]}
              playing
              loop
              controls
              volume="0.4"
            />
            <ReactPlayer
              url="https://cdn.filestackcontent.com/o227g5cwTOqun4GRRmOQ"
              loop
              controls
              onPause={this.pauseEvent}
            />
          </div>
        </div>
        <div className="mt-3">
          <h2 id="acciones"></h2>
        </div>
      </React.Fragment>

      </DashboardLayout>
    );
  }
}
