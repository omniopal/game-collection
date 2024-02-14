import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Chip, Collapse, useMediaQuery, useTheme } from '@mui/material';
import React, { useState, PropsWithChildren } from 'react';
import './collapsible-button.css';
import clsx from 'clsx';
import { GameImageModalButton } from './game-image-modal-button';

export type ChipInfo = {
    hasGame: boolean;
    hasBox: boolean;
    hasManual: boolean;
}

export type CollapsibleButtonProps = PropsWithChildren & {
    text: string;
    buttonImage: string | undefined;
    modalImage?: string;
    additionalIndent?: boolean;
    chipInfo?: ChipInfo;
    gameReleaseDate?: string;
    consoleReleaseDate?: string;
    rating?: string;
    top?: boolean;
    bottom?: boolean;
};

export const CollapsibleButton: React.FC<CollapsibleButtonProps> = (props) => {
    const { text, buttonImage, modalImage, additionalIndent, chipInfo, gameReleaseDate, consoleReleaseDate, rating, top, bottom, children } = props;
    const [openButton, setOpenButton] = useState<boolean>(false);
    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleCollapse = () => {
        setOpenButton(!openButton);
    };



    return (
        <>
            <button className={(clsx("collapsible-button", additionalIndent && "additional-indent", top && "top-button", bottom && "bottom-button"))} onClick={toggleCollapse}>
                <div className="contents">
                    <div className="image-and-title">
                        {buttonImage && <img className={clsx(additionalIndent ? "game-image" : "console-image")} src={`./images/${buttonImage}`} />}
                        <div className="title-and-chips">
                            <h2>{text}</h2>
                            {consoleReleaseDate && <div className="console-release-date">{consoleReleaseDate}</div>}
                            {chipInfo && !isSmallBreakpoint && <div className="chips">
                            <Chip label="Cartridge" color="success" variant={chipInfo.hasGame ? "filled" : "outlined"} />
                            <Chip label="Box" color="success" variant={chipInfo.hasBox ? "filled" : "outlined"} />
                            <Chip label="Manual" color="success" variant={chipInfo.hasManual ? "filled" : "outlined"} />
                            <GameImageModalButton text={`My copy of ${text}`} image={modalImage} />
                            </div>}
                        </div>
                    </div>
                    {chipInfo && isSmallBreakpoint && <div className="chips">
                        <Chip label="Cartridge" color="success" variant={chipInfo.hasGame ? "filled" : "outlined"} />
                        <Chip label="Box" color="success" variant={chipInfo.hasBox ? "filled" : "outlined"} />
                        <Chip label="Manual" color="success" variant={chipInfo.hasManual ? "filled" : "outlined"} />
                        <GameImageModalButton text={`My copy of ${text}`} image={modalImage} />
                    </div>}
                </div>
                <div className="chevron">
                    {openButton ? <ExpandLess /> : <ExpandMore />}
                </div>
            </button>
            <Collapse in={openButton} timeout="auto" unmountOnExit>
                {children ?? 
                    <div className="game-info">
                        <div className="game-info-container">
                            <h4>Release date: </h4>
                            <div className="game-info-content">{gameReleaseDate}</div>
                        </div>
                        <div className="game-info-container">
                            <h4>Rating:</h4>
                            <div className="game-info-content">{rating ?? "TBD"} / 10</div>
                        </div>
                        <p>Proin maximus, libero non consequat condimentum, magna mauris hendrerit risus, non aliquam lacus purus mattis diam. Aliquam at turpis sit amet felis posuere blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque volutpat finibus porttitor. Nullam tincidunt dolor tortor, vitae hendrerit sem euismod ac. Duis consequat ultrices metus eget dignissim. Phasellus fermentum iaculis enim eget molestie. Vestibulum sit amet imperdiet lacus. Proin augue erat, vestibulum vitae felis a, mollis pulvinar justo. Cras lobortis ex quam, quis egestas velit sodales at. Etiam ut elementum odio, vel porta risus. Nam at rhoncus risus, quis luctus sem. Pellentesque suscipit mauris eget tortor scelerisque, a interdum dui varius. Etiam quis turpis mauris.</p>
                    </div>}
            </Collapse>
        </>
    )
}