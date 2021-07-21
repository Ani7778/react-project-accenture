import classes from "./Industries.module.css";

function Industries({isOpen}) {
    return (
        <div className={isOpen ? `${classes.container} ${classes.active}` : classes.container}>
            <a>Aerospace and Defense</a>
            <a>Automotive</a>
            <a>Banking</a>
            <a>Capital Markets</a>
            <a>Chemicals</a>
            <a>Communications and Media</a>
            <a>Consumer Goods and Services</a>
            <a>Energy</a>
            <a>Health</a>
            <a>High Tech</a>
            <a>Industrial</a>
            <a>Insurance</a>
            <a>Life Sciences</a>
            <a>Natural Resources</a>
            <a>Public Service</a>
            <a>Retail</a>
            <a>Software and Platforms</a>
            <a>Travel</a>
            <a>US Federal Government</a>
            <a>Utilities</a>
        </div>
    );
};

export default Industries;
