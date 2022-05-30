import * as React from 'react'; 
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import clsx from 'clsx';

export const ScrollToTopButton = () => {
    const [showScrollButton, setShowScrollButton] = React.useState(false);;
    
    React.useEffect(() => {
        document.addEventListener('scroll', () => {
            setShowScrollButton(window.pageYOffset > 300);
        });
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    return (
        <button
        className={clsx("scroll-to-top-button", showScrollButton ? null : 'hidden')}
        onClick={scrollToTop}
        >
        <span className="icon">
            <ArrowUpwardIcon />
        </span>
        </button>
    );
} 