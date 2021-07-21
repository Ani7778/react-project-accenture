import classes from "./Services.module.css";

function Services({isOpen}) {
    return (
        <div className={isOpen ? `${classes.container} ${classes.active}` : classes.container}>
            <a>Application Services</a>
            <a>Artificial Intelligence</a>
            <a>Automation</a>
            <a>Business Process Outsourcing</a>
            <a>Business Strategy</a>
            <a>Change Management</a>
            <a>Cloud</a>
            <a>Customer Experience</a>
            <a>Data & Analytics</a>
            <a>Digital Commerce</a>
            <a>Ecosystem Services</a>
            <a>Finance Consulting</a>
            <a>Industry X</a>
            <a>Infrastructure</a>
            <a>Marketing</a>
            <a>Mergers & Acquisitions (M&A)</a>
            <a>Operating Models</a>
            <a>Security</a>
            <a>Supply Chain Management</a>
            <a>Sustainability</a>
            <a>Technology Consulting</a>
            <a>Technology Innovation</a>
            <a>Zero Based Budgeting (ZBB)</a>
        </div>
    );
};

export default Services;
