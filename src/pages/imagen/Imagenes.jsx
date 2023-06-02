import React, { useState, useEffect } from "react";
import Boxes from "../../components/boxes";
import Buttons from "../../components/buttons";
import DashboardLayout from "../../templates/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../templates/Navbars/DashboardNavbar";
import Datos from "../locations/datosDispo"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa"; // import the download icon
import { FaArrowLeft } from 'react-icons/fa';
function Imagenes() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch(`https://condor.onrender.com/api/imagen/${userId}`);
      const data = await response.json();
      const photoData = data.map((item) => {
        return {
          src: item.name,
          width: 4,
          height: 3,
        };
      });
      setPhotos(photoData);
    }
    fetchPhotos();
  }, []);

  const openLightbox = (event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // Function to download the photo
  const handleDownload = (photo) => {
    fetch(`${photo.src}`)
      .then(response => response.blob())
      .then(blob => {
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = '';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  };

  const PhotoWithDownloadButton = ({ photo }) => {
    return (
      <div>

        
      <button onClick={() => handleDownload(photo)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path d="M21 15v3H3v-3H0v5h24v-5zM16 9l-1.41-1.41L13 10.17V1h-2v9.17l-1.58-1.58L8 9l4 4 4-4z"/>
        </svg>
      </button>
      </div>
    );
  };
 

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div> 
        <button onClick={() => window.history.back()} style={{ color: 'blue' }}>
          <FaArrowLeft /> Volver atrás
        </button>
      </div>
      <Datos />

      <Boxes mt={4} mb={3} color="navy">
        MULTIMEDIA IMAGENES
      </Boxes>
      <Buttons type="submit" variant="gradient" color="info" fullWidth></Buttons>

      <div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
                components={{
                  Footer: ({ currentView }) => {
                    return (
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <div style={{ marginRight: "10px" }}>
                       
                        <button onClick={() => handleDownload(currentView )}  style={{backgroundColor: '#0D92EC', color: 'white', fontSize: '20px', padding: '10px'}}>
                          Descargar
                        </button>
                      
                          <div>
                          <button onClick={closeLightbox}></button>
                        </div>
                        <div>
                          <button onClick={closeLightbox}></button>
                        </div>
                        <div>
                          <button onClick={closeLightbox}></button>
                        </div>
                        </div>
                       
                      </div>
                      
                      
                    );
                  },
                }}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </DashboardLayout>
  );
}

export default Imagenes;
