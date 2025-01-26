import { useEffect, useState } from "react";
import './homepage.css';
import clsx from "clsx";
import Typewriter from 'typewriter-effect';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavBar } from "../navbar/navbar";
import { Reveal } from "../reveal/reveal";

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
                                        strings: ['Software Engineer', 'UI/UX Enthusiast ', 'Video Game Collector', 'Husband'],
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
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="about-me">
                <div className="about-me-left">
                    <Reveal>
                        <img className="crt" src="/images/crtMe2.webp" alt="me" />
                    </Reveal>
                </div>
                <div className="about-me-right">
                    <Reveal width="fit-content" withSlide>
                        <div className="about-me-title">A little bit about me</div>
                    </Reveal>
                    {/* <Reveal width="fit-content" withSlide> */}
                        <div className="about-me-content">
                            <Reveal width="fit-content" withSlide>
                                <div className="about-me-item">
                                    <div className="about-me-item-img">
                                        <img className="me-img" src="images/AboutMe/final cake.webp" alt="bday" />
                                    </div>
                                    <div className="thing-about-me">October 20, 1999</div>
                                </div>
                            </Reveal>
                            <Reveal width="fit-content" withSlide>
                                <div className="about-me-item">
                                    <div className="about-me-item-img">
                                        <img className="me-img" src="images/AboutMe/final pin 2.webp" alt="bday" />
                                    </div>
                                    <div className="thing-about-me">Denver, Colorado</div>
                                </div>
                            </Reveal>
                            <Reveal width="fit-content" withSlide>
                                <div className="about-me-item">
                                    <div className="about-me-item-img">
                                        <img className="me-img" src="images/AboutMe/final grad cap.webp" alt="bday" />
                                    </div>
                                    <div className="thing-about-me">B.S. in Computer Science</div>
                                </div>
                            </Reveal>
                            <Reveal width="fit-content" withSlide>
                                <div className="about-me-item">
                                    <div className="about-me-item-img">
                                        <img className="me-img" src="images/AboutMe/jumper.webp" alt="bday" />
                                    </div>
                                    <div className="thing-about-me">Full Stack Software Engineer</div>
                                </div>
                            </Reveal>
                            <Reveal width="fit-content" withSlide>
                                <div className="about-me-item">
                                    <div className="about-me-item-img">
                                        <img className="me-img" src="images/AboutMe/retro.webp" alt="bday" />
                                    </div>
                                    <div className="thing-about-me">Retro Video Game Collector</div>
                                </div>
                            </Reveal>
                        </div>
                    {/* </Reveal> */}
                </div>
            </div>
        </>
    )
}