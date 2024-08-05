import { Chip, useMediaQuery, useTheme } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import './game-info.css';
import { GameImageModalButton } from './game-image-modal-button';
import Image from 'next/image';

type ChipInfo = {
    hasGame: boolean;
    hasBox: boolean;
    hasManual: boolean;
    hasPlayed: boolean;
}

type GameInfoProps = PropsWithChildren & {
    text: string;
    boxArt: string | undefined;
    personalCopyImage?: string;
    chipInfo: ChipInfo;
    gameReleaseDate: string;
    physicalGameType: string;
};

export const GameInfo: React.FC<GameInfoProps> = (props) => {
    const { text, boxArt, personalCopyImage, chipInfo, gameReleaseDate, physicalGameType } = props;
    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down(700));

    return (
        <div className="game-info">
            <div className="image-and-title">
                <div className="image-container">
                    <Image className="game-image" src={`/images/${boxArt}`} alt="TODO" objectFit="contain" layout="fill" />
                </div>
                <div className="title-and-chips">
                    <h2>{text}</h2>
                    {gameReleaseDate && <div className="game-release-date">{gameReleaseDate}</div>}
                    {!isSmallBreakpoint && 
                        <div className="chips">
                            <Chip label={physicalGameType} color="success" variant={chipInfo.hasGame ? "filled" : "outlined"} />
                            <Chip label="Box" color="success" variant={chipInfo.hasBox ? "filled" : "outlined"} />
                            <Chip label="Manual" color="success" variant={chipInfo.hasManual ? "filled" : "outlined"} />
                            <Chip label="Played" color="success" variant={chipInfo.hasPlayed ? "filled" : "outlined"} />
                            {chipInfo.hasGame && <GameImageModalButton text={`My copy of ${text}`} image={personalCopyImage} />}
                        </div>}
                </div>
            </div>
            {isSmallBreakpoint && 
                <div className="chips-small-breakpoint">
                    <div className="chip-space">
                        <Chip label="Cartridge" color="success" variant={chipInfo.hasGame ? "filled" : "outlined"} />
                        <Chip label="Box" color="success" variant={chipInfo.hasBox ? "filled" : "outlined"} />
                        <Chip label="Manual" color="success" variant={chipInfo.hasManual ? "filled" : "outlined"} />
                        <Chip label="Played" color="success" variant={chipInfo.hasPlayed ? "filled" : "outlined"} />
                        <div className="modal-button">
                            {chipInfo.hasGame && <GameImageModalButton text={`My copy of ${text}`} image={personalCopyImage} />}
                        </div>
                    </div>
            </div>}
        </div>
    )
}