import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={css.container}>
            <h1>Welcome to QuickContact!</h1>
            <p>QuickContact is your ultimate solution for seamless contact management. After a simple registration, effortlessly save your contacts in just a few taps. </p>
            <p>QuickContact ensures your connections are always at your fingertips. Say goodbye to manual entry and hello to efficient contact saving!</p>
            <ul className={css.list}>
                <li>Fast Registration: Get started in seconds with an easy registration process.</li>
                <li>Instant Contact Saving: Save new contacts quickly with minimal effort.</li>
                <li>Filter contacts: Filter contacts by name and number to quickly find the information you need.</li>
                <li>User-Friendly Interface: Navigate with ease thanks to an intuitive design.</li>
            </ul>
        </div>
    );
}