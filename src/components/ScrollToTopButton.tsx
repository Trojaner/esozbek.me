import * as React from 'react'; 
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const ScrollToTopButton = () => {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <button
        className="scroll-to-top-button"
        onClick={scrollToTop}
        >
        <span className="icon">
            <ArrowUpwardIcon />
        </span>
        </button>
    );
} 