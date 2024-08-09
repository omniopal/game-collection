import React, { useEffect, useRef, useState } from 'react';
import './maze.css';

type Direction = 'up' | 'right' | 'down' | 'left';

const directionOrder: Direction[] = ['up', 'right', 'down', 'left'];
const imagePathMap: Record<Direction, string> = {
    up: '/images/Mazes/Maze 1 path only.webp', // only right
    right: '/images/Mazes/Maze 2 path only.webp', // no leaves
    down: '/images/Mazes/Maze 3 path only.webp', // 4 ways
    left: '/images/Mazes/Maze 4 path only.webp', // leaves
  };

export const Maze: React.FC = () => {
    const [rotationDegree, setRotationDegree] = useState(0);
    const [rotationDirection, setRotationDirection] = useState<Direction>('up');
    const [imagePath, setImagePath] = useState(imagePathMap[rotationDirection]);
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

    return (
        <div className="maze-container">
            <h2>What do you see?</h2>
            <div className="buttons">
                <div className="image-and-text">
                    <img className="button" src="/images/Mazes/Maze 4 in game.webp" onClick={() => handleClick('left')}/>
                    <h3>2 paths & leaves</h3>
                </div>
                <div className="image-and-text">
                    <img className="button" src="/images/Mazes/Maze 2 in game.webp" onClick={() => handleClick('right')}/>
                    <h3>No leaves</h3>
                </div>
                <div className="image-and-text">
                    <img className="button" src="/images/Mazes/Maze 3 in game.webp" onClick={() => handleClick('down')}/>
                    <h3>4 paths</h3>
                </div>
                <div className="image-and-button">
                    <img className="button" src="/images/Mazes/Maze 1 in game.webp" onClick={() => handleClick('up')}/>
                    <h3>1 path</h3>
                </div>
            </div>
            <div className="container">
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