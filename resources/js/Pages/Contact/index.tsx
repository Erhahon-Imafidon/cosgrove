import * as React from "react";
import Navy from "../../../Navbar-2/navbar-2";
import NavBar from "../../Components/Elements/Navbar/navbar";
import HeaderItem from "../../Components/Elements/HeaderItem/index";
import Hero from "../../Components/ContactSection/ContactHero";
import ContactTeam from "../../Components/ContactSection/ContactTeam";
import Footer from "../../Components/Elements/Footer";

import {Cube} from 'react-preloaders';
export default function () {
    return (
        <div>
            <Cube color={'#f7f7f7'} background={"#fbbd00"} time={1800}/>
            <NavBar isDark={true} />
            <HeaderItem
                height={50}
                bgImage={"/assets/images/bg/bgContact.png"}
            />
            <Hero />
            <ContactTeam />
            <Footer />
        </div>
    );
}