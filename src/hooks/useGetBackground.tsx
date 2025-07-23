import { useEffect, useState } from 'react';

const createDark = '/assets/dunes-create-dark.png';
const createLight = '/assets/dunes-create-light.png';
const loginDark = '/assets/dunes-login-dark.png';
const loginLight = '/assets/dunes-login-light.png';

export const useGetBackground = (type: 'create' | 'login') => {
    const [backgroundImage, setBackgroundImage] = useState<string>(createDark);

    useEffect(() => {
        const determineBackgroundImage = () => {
            // Force dark theme for now to match onlook behavior
            const isDark = true;
            const images = {
                create: isDark ? createDark : createLight,
                login: isDark ? loginDark : loginLight,
            };
            return images[type];
        };

        setBackgroundImage(determineBackgroundImage());
    }, [type]);
    
    return backgroundImage;
};