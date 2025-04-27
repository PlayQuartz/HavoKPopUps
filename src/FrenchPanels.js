import React, { useState, useEffect } from 'react';

import GourdeFR from './Image/GourdeFR.png'
import BasicsBeigeFR from './Image/BasicsBeigeFR.png'
import BasicsNoirFR from './Image/BasicsNoirFR.png'
import PrestigeFRv1 from './Image/PrestigeFRv1.png'
import PrestigeFRv2 from './Image/PrestigeFRv2.png'

const FrenchPanels = () => {
    const [currentMap, setCurrentMap] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const adSequence = [
            { map: GourdeFR, delay: 15000 },
            { map: PrestigeFRv2, delay: 15000 },
            { map: BasicsNoirFR, delay: 15000 },
            { map: BasicsBeigeFR, delay: 15000 },
            { map: PrestigeFRv1, delay: 15000 },
        ];
    
    
        const cycleAds = async () => {
            for (let ad of adSequence) {
                if (!isMounted) return;
                if (ad.map) {
                    setCurrentMap(ad.map);
                    setIsVisible(true);
                }
                await new Promise((resolve) => setTimeout(resolve, ad.delay));
    
                if (!isMounted) return;
                setIsVisible(false);
                await new Promise((resolve) => setTimeout(resolve, 2000));
            }
    
            cycleAds(); 
        };
    
        cycleAds();
    
        return () => {
            isMounted = false;
        };
    }, []);

    return (

        <div className="map-page">
            <div
                className="advert-box"
                style={{
                    right: isVisible ? '-25px' : '-350px', 
                }}
            >
                {currentMap && (
                    <img
                        src={currentMap}
                        alt="Map Advert"
                        style={{ width: '100%', height: 'auto' }}
                    />
                )}
            </div>    
        </div>
        

    );
};


export default FrenchPanels