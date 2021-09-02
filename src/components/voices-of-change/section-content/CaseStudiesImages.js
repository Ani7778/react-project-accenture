import slide1 from "../../../images/case-studies-img1.png";
import slide2 from "../../../images/case-studies-img2.png";
import slide3 from "../../../images/case-studies-img3.png";
import slide4 from "../../../images/case-studies-img4.png";
import classes from "./SectionContent.module.scss";

export const CaseStudiesImages = [
    {
        src: slide1,
        container: classes.section + " " + classes.img1,
        subject: "Supply Chain",
        title: "Supply chain transformation on the cloud",
        text: "Discover how embracing the cloud can lead to interconnected, intelligent and innovative supply chains",
    },
    {
        src: slide2,
        container: classes.section + " " + classes.img2,
        subject: "Energy",
        title: "Necessity is the mother of (re)invention",
        text: "It’s make-or-break for oil and gas companies. Reinvention leaders are showing the way",
    },
    {
        src: slide3,
        container: classes.section + " " + classes.img3,
        subject: "Artificial Intelligence",
        title: "Change how you work with AI",
        text: "Professionalize your approach to AI to change what’s possible for your business.",
    },
    {
        src: slide4,
        container: classes.section + " " + classes.img4,
        subject: "Competitive Agility",
        title: "Delivering on the promise of sustainability",
        text: "Learn how to create value, drive resilience and create positive change through responsible business.",
    },
];