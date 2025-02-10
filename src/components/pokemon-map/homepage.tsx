import { useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import './homepage.css';

export const Homepage = () => {
    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down(700));
    
    return (
        <>
        <div className="homepage">
            <img className="logo" src="/images/logo3.png" alt="" />
            <h1>Region{isSmallBreakpoint && <br />}Rhythms</h1>
            <div className="options">
                <Link className="link" href="/freeplay">Free Play</Link>
                <Link className="link" href="/">Daily</Link>
            </div>
        </div>
        <footer>
            contact@regionrhythms.com
        </footer>
        </>
    );
};