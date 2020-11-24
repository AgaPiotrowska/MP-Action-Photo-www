import React, {useState, useEffect} from "react";
import HeaderTitle from "./HeaderTitle";
import PortfolioBook from "./PortfolioBook";
import { useSelector} from "react-redux";
import imageCompression from 'browser-image-compression';

const Portfolio = ({header}) => {

    const isLogged = useSelector((state) => state.loginStore.isLogged);

    const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch("https://o7byko6zw0.execute-api.eu-central-1.amazonaws.com/prod/albums")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result)
                },
            )
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

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React POST Request Example' })
            };

            const img = new Image();
            img.addEventListener('load', () => {
                window.URL.revokeObjectURL(img.src); // Free some memory

                let reader = new FileReader();
                console.log(img);
                reader.readAsDataURL(compressedFile);
                reader.onload = function () {
                    console.log(reader.result);
                };
            });
            img.src = window.URL.createObjectURL(compressedFile);

            // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            //     .then(response => response.json())
            //     .then(data => this.setState({ postId: data.id }));

        } catch (error) {
            console.log(error);
        }
    }

    // const saveAlbum = () => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({width: img.width, height: img.height, file: reader.result, albumName: album})
    //     };

        // fetch('https://o7byko6zw0.execute-api.eu-central-1.amazonaws.com/prod/image', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //     });


    return (
        <div>
            <div className="button-upload-div">
                <button
                    className="button-upload"
                    onClick={() => setShowForm(true)}
                >ADD ALBUM</button>
            </div>
            {/*{showForm && (*/}
                <div className="button-upload-div">
                <input
                    type="text"
                    className="button-upload"
                    placeholder= "album name"
                />
                <input
                type="text"
                className="button-upload"
                placeholder= "album url"
                />
                    <button
                        type="submit"
                        className="button-upload"
                        // onSubmit={saveAlbum}
                    >Save</button>
                </div>


            <HeaderTitle header="PORTFOLIO"/>
            <div className="portfolio-all">
                {/*{return (3===4 ? null : <div></div>)}*/}
                {items.map(item => (
                    <PortfolioBook PortfolioLink={item.link} PortfolioTitle={item.name} PortfolioPicture={item.picture} SpanText={item.text}/>
                        ))}
            {/*<PortfolioBook PortfolioLink={"sport"} PortfolioPicture={"images/main6.jpg"} PortfolioTitle={"sport / outdoor / eventy"} SpanText={"sport"}/>*/}
            {/*<PortfolioBook PortfolioLink={"wnetrza"} PortfolioPicture={"images/architektura.jpg"} PortfolioTitle={"architektura / wnętrza / produkty"} SpanText={"wnętrza"}/>*/}
            {/*<PortfolioBook PortfolioLink={"portret"} PortfolioPicture={"images/portret.jpg"} PortfolioTitle={"portret / reportaż / zwierzęta"} SpanText={"portrety"}/>*/}
            </div>
        </div>
    )
};

export default Portfolio;