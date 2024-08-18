import { Component } from "react";
import SectionFive from '../SectionFive/SectionFive';
import SectionFour from '../SectionFour/SectionFour';
import SectionOne from '../SectionOne/SectionOne';
import SectionSix from '../SectionSix/SectionSix';
import SectionThree from '../SectionThree/SectionThree';
import SectionTwo from '../SectionTwo/SectionTwo';
import YouTube from '../YouTube/YouTube';

class Main extends Component{
    render() {
        return(
            <>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>
                <SectionSix/>
                <YouTube/>
            </>
        )
    }
}
export default Main