import React, { useEffect, useRef, useState } from 'react';
import './maze.css';
import clsx from 'clsx';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

type Direction = 'up' | 'right' | 'down' | 'left';

export const directionOrder: Direction[] = ['up', 'right', 'down', 'left'];
const imagePathMap: Record<Direction, string> = {
    up: '/images/Mazes/Maze 1 path only 2.webp', // only right
    right: '/images/Mazes/Maze 2 path only 2.webp', // no leaves
    down: '/images/Mazes/Maze 3 path only 2.webp', // 4 ways
    left: '/images/Mazes/Maze 4 path only 2.webp', // leaves
  };

export const Maze: React.FC = () => {
    const [rotationDegree, setRotationDegree] = useState(0);
    const [rotationDirection, setRotationDirection] = useState<Direction>('up');
    const [imagePath, setImagePath] = useState(imagePathMap[rotationDirection]);
    const [golfCourse, setGolfCourse] = useState<string>('First Fairway');
    const [turnsToLeft, setTurnsToLeft] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    const updateImagePath = () => {
        setImagePath(imagePathMap[rotationDirection]);
    }

    useEffect(() => {
        const imageEl = imageRef.current;
        imageEl?.addEventListener('transitionend', updateImagePath);

        return () => {
            imageEl?.removeEventListener('transitionend', updateImagePath);
        }
    }, [rotationDirection]);

    const calculateDegreeChange = (start: Direction, end: Direction): number => {
        const startIndex = directionOrder.indexOf(start);
        const endIndex = directionOrder.indexOf(end);
        let distance = endIndex - startIndex;

        if (distance === 3) {
            distance = -1;
        } else if (distance === -3) {
            distance = 1;
        }
        return distance * 90;
    }

    const handleClick = (direction: Direction) => {
        if (rotationDirection != direction) {
            const degreeChange = calculateDegreeChange(rotationDirection, direction);
            setRotationDegree(rotationDegree + degreeChange);

            setImagePath('');
            setRotationDirection(direction);
        }
    }

    const onChangeGolfCourse = (_: any, value: string) => {
        setGolfCourse(value);
    }

    const onTurnsToLeftChange = (_: any, value: boolean) => {
        setTurnsToLeft(value);
    }

    return (
        <div className="maze-container">
            <div className="settings-container">
                <div className="setting">
                    <h2>Select Golf Course</h2>
                    <ToggleButtonGroup
                        orientation='horizontal'
                        value={golfCourse}
                        exclusive
                        onChange={onChangeGolfCourse}
                    >
                        <ToggleButton value="First Fairway">
                            <div>First Fairway</div>
                        </ToggleButton>
                        <ToggleButton value="Final Fringe">
                            <div>Final Fringe</div>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>

            <h2>What do you see?</h2>
            <div className="buttons">
                <div className="image-group">
                    <div className="image-and-text">
                        <img className={clsx("button", rotationDirection === 'left' && "selected")} src="/images/Mazes/Maze 4 in game.webp" onClick={() => handleClick('left')}/>
                        <p>2 paths & leaves</p>
                    </div>
                    <div className="image-and-text">
                        <img className={clsx("button", rotationDirection === 'right' && "selected")} src="/images/Mazes/Maze 2 in game.webp" onClick={() => handleClick('right')}/>
                        <p>2 paths & no leaves</p>
                    </div>
                </div>
                <div className="image-group">
                    <div className="image-and-text">
                        <img className={clsx("button", rotationDirection === 'down' && "selected")} src="/images/Mazes/Maze 3 in game.webp" onClick={() => handleClick('down')}/>
                        <p>4 paths</p>
                    </div>
                    <div className="image-and-text">
                        <img className={clsx("button", rotationDirection === 'up' && "selected")} src="/images/Mazes/Maze 1 in game.webp" onClick={() => handleClick('up')}/>
                        <p>1 path</p>
                    </div>
                </div>
            </div>

            {golfCourse === 'Final Fringe' && <div className="setting">
                    <h2>Is the next maze to the left?</h2>
                    <ToggleButtonGroup
                        orientation='horizontal'
                        value={turnsToLeft}
                        exclusive
                        onChange={onTurnsToLeftChange}
                    >
                        <ToggleButton value={true}>
                            <div>Yes</div>
                        </ToggleButton>
                        <ToggleButton value={false}>
                            <div>No</div>
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <details className="details">
                        <summary>How do I tell?</summary>
                        <div>testing one two three</div>
                    </details>
                </div>
            }

            <div className="solution-container">
                <img
                    ref={imageRef}
                    className="image"
                    src="/images/Mazes/Maze template.webp"
                    style={{ transform: `rotate(${rotationDegree}deg)`, transition: 'transform 0.5s ease-in-out' }}
                />
                <img 
                    className="image"
                    src={imagePath}
                />
            </div>
        </div>
    )
}