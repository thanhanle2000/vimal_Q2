import { useState, useEffect } from 'react';

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Gọi hàm để set kích thước ngay khi component mount
        handleResize();

        // Lắng nghe sự kiện resize của cửa sổ
        window.addEventListener('resize', handleResize);

        // Cleanup event listener khi component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize;
