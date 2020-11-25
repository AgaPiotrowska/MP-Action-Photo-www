import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {useSelector} from "react-redux";
import imageCompression from 'browser-image-compression';
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

function GalleryPage () {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        console.log(index);
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const isLogged = useSelector((state) => state.loginStore.isLogged);

    const [images, setImages] = useState([]);
    const [deleting, setDeleting] = useState(false);

    const [savingProcess, setSavingProcess] = useState({saved: 0, total: 0});

    let { album } = useParams();

    const initialize = () => {
        fetch('https://api.mpactionphoto.pl/albums/'+album)
            .then(response => response.json())
            .then(data => {setImages(data.map((d) => {
                return {
                    height: d.height,
                    width: d.width,
                    src: "/"+d.name
                }
            }))});
    };

    useEffect( () => {
        initialize();
    }, [album]);

    async function handleImageUpload(event) {
        setSavingProcess({saved: 0, total: event.target.files.length})
        for (const file of event.target.files) {
           await handleImageUploadSingle(file);
        }
        setImages([]);
        initialize();
    };


     const handleImageUploadSingle = async (imageFile) => {
         return new Promise(async resolve => {
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

                    fetch('https://api.mpactionphoto.pl/image', requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            setSavingProcess( s => ({
                                saved: s.saved+1,
                                total: s.total
                            }));
                        resolve();
                        });
                };
            });
            img.src = window.URL.createObjectURL(compressedFile);

        } catch (error) {
        }});
    }

    const deletePhoto = (index) => {
        const requestOptions = {
            method: 'DELETE',
        }

        const imageUrl = images[index].src;
        const lastSlashIndex = imageUrl.lastIndexOf("/");
        const imageId = imageUrl.substring(lastSlashIndex + 1)

        fetch('https://api.mpactionphoto.pl/image/'+ imageId, requestOptions)
            .then(data => {
                setImages(images => {
                    return images.filter(i => i.src !== imageUrl);
                })
            });
    };

    return (
        <div>
            {isLogged && (
                <>
            <div className="btn btn-primary btn-file">
                ADD PICTURES
                <input type="file"
                       accept="image/*"
                       multiple
                       onChange={handleImageUpload}
                ></input>
            </div>
            <div className="button-upload-div-left">
                <button className="button-upload"
                        onClick={() => setDeleting(!deleting)}>
                    {deleting ? "STOP DELETING" : "DELETE"}
                </button>
            </div>
            { savingProcess.saved !== savingProcess.total &&
            (
                <div>
                <Spinner/>
                <div>Image saved: {savingProcess.saved}, Total: {savingProcess.total}</div>
                </div>
                )}
                </>
            )}
            <Gallery photos={images}
                     onClick={(event, { photo, index }) => {
                if(deleting) {
                    deletePhoto(index);
                } else {
                    openLightbox(event, { photo, index })
                }
            }}
            />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={images.map(x => ({
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