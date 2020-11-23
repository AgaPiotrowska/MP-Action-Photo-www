import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import {useSelector} from "react-redux";
import imageCompression from 'browser-image-compression';
import { useParams } from "react-router-dom";

function GalleryPage () {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const isLogged = useSelector((state) => state.loginStore.isLogged);

    const [images, setImages] = useState([]);

    let { album } = useParams();

    const initialize = () => {
        fetch('https://o7byko6zw0.execute-api.eu-central-1.amazonaws.com/prod/albums/'+album)
            .then(response => response.json())
            .then(data => {setImages(data.map((d) => {
                d.src = "https://forest-spa.online/"+d.name;
                return d;
            }))});
    };

    useEffect( () => {
        initialize();
    }, []);

    async function handleImageUpload(event) {

        const imageFile = event.target.files[0];

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        }
        try {
            const compressedFile = await imageCompression(imageFile, options);

            const img = new Image();
            img.addEventListener('load', () => {
                window.URL.revokeObjectURL(img.src); // Free some memory

                let reader = new FileReader();
                reader.readAsDataURL(compressedFile);
                reader.onload = function () {

                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ width: img.width, height: img.height, file: reader.result, albumName: album })
                    };

                    fetch('https://o7byko6zw0.execute-api.eu-central-1.amazonaws.com/prod/image', requestOptions)
                        .then(response => response.json())
                        .then(data => {});
                };
            });
            img.src = window.URL.createObjectURL(compressedFile);

        } catch (error) {
        }
    }

    return (
        <div className="pictures">

            <input
                type="file"
                accept="image/*"
                multiple
                className="button-upload"
                onChange={handleImageUpload}
            />

            <Gallery photos={images} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default GalleryPage;