import { useState, useEffect, useContext } from 'react';
import { Crypto } from '../API';
import CryptoPanelList from '../Components/CryptoPanelList';
import ActionList from '../Components/ActionList';
import ActionListItem from '../Components/ActionListItem';
import { checkCryptoPageLDFlag } from '../Utils/utils';
import { LDContext } from '../Providers/LaunchDarkly/context';

import arrowIcon from '../img/arrow-icon.svg';
import cardIcon from '../img/card-icon.svg';
import pplIcon from '../img/ppl-icon.svg';

function Cryptos() {

    const [crypto, setCrypto] = useState(null);
    const flags = useContext(LDContext);
    var showCrypto = checkCryptoPageLDFlag(flags) ? "relative h-full" : "hidden";

    useEffect(() => {
        async function getCryptoFeed(){
            const apiResponse = await Crypto.getCryptoFeedById('all');
            const cryptoData = apiResponse.data;
            setCrypto(cryptoData);
        }
        getCryptoFeed();

    }, [])

    return (
        <div className={showCrypto}>
            <div className="py-12">
                <div className="flex items max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-8/12 px-4">
                        <CryptoPanelList cryptos={crypto}/>
                    </div>
                    <ActionList>
                        <ActionListItem imgSrc={arrowIcon} text="Learn Crypto" />
                        <ActionListItem imgSrc={cardIcon} text="$10 Crypto Offer" />
                        <ActionListItem imgSrc={pplIcon} text="Connect With Us" />
                    </ActionList>
                </div>
            </div>
        </div>
    );
}

export default (Cryptos);
