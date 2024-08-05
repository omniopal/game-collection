import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import React, { useState, useEffect, PropsWithChildren } from 'react';
import './collapsible-console-button.css';
import clsx from 'clsx';
import Image from 'next/image';

export type CollapsibleConsoleButtonProps = PropsWithChildren & {
    consoleIndex: number;
    consoleName: string;
    consoleImage: string;
    consoleReleaseDate: string;
    top?: boolean;
    bottom?: boolean;
    openIndex: number | null;
    setOpenIndex: () => void;
};

export const CollapsibleConsoleButton: React.FC<CollapsibleConsoleButtonProps> = (props) => {
    const {
        consoleIndex,
        consoleName,
        consoleImage,
        consoleReleaseDate,
        top,
        bottom,
        openIndex,
        setOpenIndex,
        children
    } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isPreviousButtonOpen = openIndex === consoleIndex - 1;

    useEffect(() => {
        // Only allow 1 console button open at a time
        if (openIndex !== consoleIndex) {
            setIsOpen(false);
        }
    }, [openIndex]);

    const toggleCollapse = () => {
        setOpenIndex();
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button 
                className={(clsx(
                    "collapsible-button",
                    top && "top-button",
                    bottom && "bottom-button",
                    isOpen && "curve-bottom-left",
                    isPreviousButtonOpen && "curve-top-left",
                ))}
                onClick={toggleCollapse}>
                <div className="console-info">
                    <div className="console-image-container">
                        <Image src={`/images/${consoleImage}`} alt="TODO" sizes="100vw" style={{ width: '100px', height: 'auto' }} height={0} width={0} />
                    </div>
                    <div className="name-and-release-date">
                        <h2>{consoleName}</h2>
                        <div className="console-release-date">{consoleReleaseDate}</div>
                    </div>
                </div>
                <div className="chevron">
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </div>
            </button>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    )
}