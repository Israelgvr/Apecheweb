import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import Boxes from "../../components/boxes";
import Buttons from "../../components/buttons";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch("http://localhost:3200/api/videos/23sdhuewj72");
      const data = await response.json();
      setVideos(data);
    };
    fetchVideos();
  }, []);

  const playEvent = () => {
    document.getElementById("acciones").innerHTML = "";
  };

  const pauseEvent = () => {
    document.getElementById("acciones").innerHTML = "Pausando Video";
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Boxes mt={4} mb={3} color="navy">
        MULTIMEDIA VIDEOS
      </Boxes>
      <Buttons type="submit" variant="gradient" color="info" fullWidth />
      <div className="container d-flex justify-content-center align-items-center mt-3">
        {videos.map((video) => (
          <div key={video.userId} scope="row">
            <ReactPlayer
              url={video.name}
              loop
              controls
              onPlay={playEvent}
              onPause={pauseEvent}
            />
          </div>
        ))}
      </div>
      <div className="mt-3">
        <h2 id="acciones"></h2>
      </div>
    </DashboardLayout>
  );
};

export default Videos;
