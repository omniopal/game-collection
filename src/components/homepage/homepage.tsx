import { useEffect, useState } from "react";
import './homepage.css';
import clsx from "clsx";
import Typewriter from 'typewriter-effect';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavBar } from "../navbar/navbar";

type HomepageProps = {};

export const Homepage: React.FC<HomepageProps> = (props) => {
    const {} = props;
    const [poweredOn, setPoweredOn] = useState(false);
    const [resetButtonClicked, setResetButtonClicked] = useState(false);
    const [resetButtonKey, setResetButtonKey] = useState(0);

    const handlePowerButtonMouseDown = () => {
        setPoweredOn(!poweredOn);
    }

    const handleResetButtonDown = () => {
        setResetButtonKey(resetButtonKey + 1);
        setResetButtonClicked(true);
    }

    const handleResetButtonUp = () => {
        setResetButtonClicked(false);
    }

    const arrowButtonStyle = {
        width: "30px",
        background: 'none',
        border: 0,
    };    

    const slideProperties = {
        prevArrow: <button style={{ ...arrowButtonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
        nextArrow: <button style={{ ...arrowButtonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    }

    useEffect(() => {
        const sliders = document.querySelectorAll('.slide-in');

        const appearOptions = {
            threshold: 0,
            rootMargin: '0px 0px -250px 0px',
        };
    
        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
    
        sliders.forEach(slider => {
            appearOnScroll.observe(slider);
        });
    }, [])

    return (
        <>
            <NavBar />
            {/* NES */}
            <div className="hero">
                <div className="nes-top">
                    <div className="nes-top-left">
                        <div className="cart-slot-outline">
                            <div className="cart-slot-text name">
                                I am Jacob Mauro
                            </div>
                            <div className="cart-slot-text title">
                                <Typewriter
                                    key={resetButtonKey}
                                    options={{
                                        wrapperClassName: 'typewriter',
                                        cursorClassName: 'typewriter-cursor',
                                        strings: ['Software Engineer', 'Scrum Master', 'Video Game Collector'],
                                        autoStart: true,
                                        loop: true,
                                        cursor: '_',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="nes-top-middle"></div>
                    <div className="nes-top-right"></div>
                </div>
                <div className="nes-middle" />
                <div className="nes-bottom">
                    <div className="nes-bottom-left">
                        <div className="buttons">
                            <div className={clsx("power-light", poweredOn ? "powered-on" : "powered-off")} />
                            <div 
                                className={clsx("power-button", "nes-buttons", poweredOn && "nes-buttons-pushed")}
                                onMouseDown={handlePowerButtonMouseDown}
                            >
                                <div className="nes-buttons-text">Power</div>
                            </div>
                            <div 
                                className={clsx("reset-button", "nes-buttons", resetButtonClicked && "nes-buttons-pushed")}
                                onMouseDown={handleResetButtonDown}
                                onTouchStart={handleResetButtonDown}
                                onMouseUp={handleResetButtonUp}
                                onTouchEnd={handleResetButtonUp}
                            >
                                <div className="nes-buttons-text">Reset</div>
                            </div>
                        </div>
                    </div>
                    <div className="nes-bottom-middle">
                        <div className="controller-ports">
                            <div className="controller-port-container">
                                <div className="controller-port">
                                    <div className="connector-row">
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                        <div className="controller-port-connector hidden-connector" />
                                    </div>
                                    <div className="connector-row">
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                    </div>
                                    <div className="connector-row">
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                    </div>
                                    <div className="connector-row">
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="controller-port-container second-controller-port">
                                <div className="controller-port">
                                    <div className="connector-row">
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                        <div className="controller-port-connector hidden-connector" />
                                    </div>
                                    <div className="connector-row">
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                    </div>
                                    <div className="connector-row">
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                    </div>
                                    <div className="connector-row">
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                        <div className="controller-port-connector">
                                            <div className="pin" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nes-bottom-right"></div>
                </div>
            </div>
            {/* About me */}
            {/* <div className="about-me-container">
                <div className="text">
                    <div className="about-me-header">
                        <img className="mario-thinking-image" src="/images/mario-thinking.png" alt="think" />
                        <div className="about-me">About Me</div>
                    </div>
                    <div className="about-me-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar cursus libero, ut eleifend nisi fermentum sit amet. Quisque quis augue leo. Quisque vitae tortor lacinia, scelerisque sapien sit amet, convallis ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ut sem id libero ultrices pharetra ac eu metus. Donec viverra velit at erat convallis vehicula vitae at dui. Sed orci diam, interdum nec velit sed, aliquet placerat dui. Sed magna est, scelerisque sed porta accumsan, pellentesque sed nulla. Nunc ultricies dapibus vulputate. Cras tincidunt auctor urna a molestie. In at aliquam nulla, ut auctor ex. Nullam porta nisl a nisi volutpat, vel ultricies risus egestas. Mauris ultricies nunc non mauris ullamcorper, in tempor nisl molestie.
                    </div>
                    <div className="about-me-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar cursus libero, ut eleifend nisi fermentum sit amet. Quisque quis augue leo. Quisque vitae tortor lacinia, scelerisque sapien sit amet, convallis ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ut sem id libero ultrices pharetra ac eu metus. Donec viverra velit at erat convallis vehicula vitae at dui. Sed orci diam, interdum nec velit sed, aliquet placerat dui. Sed magna est, scelerisque sed porta accumsan, pellentesque sed nulla. Nunc ultricies dapibus vulputate. Cras tincidunt auctor urna a molestie. In at aliquam nulla, ut auctor ex. Nullam porta nisl a nisi volutpat, vel ultricies risus egestas. Mauris ultricies nunc non mauris ullamcorper, in tempor nisl molestie.
                    </div>
                </div>
                <div className="pics">
                    <img className="cloud slide-in" src="/images/cloud.png" alt="test" />
                    <Slide {...slideProperties}>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': 'url(/images/me1.webp)' }} />
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': 'url(/images/me2.webp)' }} />
                        </div>
                    </Slide>
                </div>
            </div> */}
        </>
    )
}