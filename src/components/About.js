import React from "react";
import HeaderTitle from "./HeaderTitle";
import ContactForm from "./ContactForm";

const About = ({header}) => {
    return (
        <div>
            <HeaderTitle header="O MNIE"/>
            <div className="about-container">
                <img src="images/about.png" className="about-image" alt="about"/>
                <div className="about-text">
                    <p className="name">Nazywam się Mateusz Piotrowski</p>
                    <p>Jestem poszukiwaczem wspaniałych momentów. Pierwszych promieni słońca na górskich graniach, ścigania się z morskimi falami, dźwięku cięcia ślizgów po niedostępnych stokach, zapachu nafty lotniczej i zatapianiu się w dzikość w odległych miejscach.</p>
                    <p>Dla mnie fotografia spina te momenty jedną klamrą, sprawia, że potrafię zatrzymać czas. Pasjonuję się outdoorem, wspinaczką górska i kitesurfingiem. Zawodowo jestem pilotem. Obcuję z przestrzenią. Potrafię zobaczyć rzeczy z innej perspektywy, nie stojąc obok akcji, ale będąc jej częścią - zamykając ją w puszce.</p>
                    <p>Życie jest zbyt piękne, by po prostu minęło nie zostawiając śladu. Nie ważne czym się zajmujesz i kim jesteś, jeżeli chcesz zachować coś wspaniałego, napisz do mnie.</p>
                </div>
            </div>
            <ContactForm/>
        </div>
    )
};

export default About;

