import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    // STATE
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setIsVisible(true);
            else setIsVisible(false);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // SCROLL TO TOP
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        isVisible && (
            <button
                title='Lên đầu trang'
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    background: '#ff4820',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    fontSize: '20px',
                    cursor: 'pointer',
                    zIndex: 1000,
                }}
            >
                ↑
            </button>
        )
    );
};

export default ScrollToTop;
