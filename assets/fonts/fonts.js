import * as Font from 'expo-font';

export const loadFonts = async () => {
    await Font.loadAsync({
        'Lato-Regular': require('./Lato-Regular.ttf'),
        'Lato-Bold': require('./Lato-Bold.ttf'),
        'Lato-Italic': require('./Lato-Italic.ttf'),
        'Lato-BoldItalic': require('./Lato-BoldItalic.ttf'),
        'Lato-Light': require('./Lato-Light.ttf'),
        'Lato-LightItalic': require('./Lato-LightItalic.ttf'),
        'Lato-Black': require('./Lato-Black.ttf'),
        'Lato-BlackItalic': require('./Lato-BlackItalic.ttf'),
        'Lato-Hairline': require('./Lato-Hairline.ttf'),
        'Lato-HairlineItalic': require('./Lato-HairlineItalic.ttf'),
    });
};

// Thêm hook để sử dụng fonts
import { useEffect, useState } from 'react';

export const useLoadFonts = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const load = async () => {
            await loadFonts();
            setFontsLoaded(true);
        };
        load();
    }, []);

    return fontsLoaded;
};
