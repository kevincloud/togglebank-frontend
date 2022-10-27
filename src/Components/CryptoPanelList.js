import CryptoPanel from "./CryptoPanel";

function CryptoPanelList({ cryptos }) {

    return(
      <ul>
        {cryptos && cryptos.map(crypto => {
            return (
            <li key={crypto.name}>
                <CryptoPanel cryptoName={crypto.name} cryptoPrice={crypto.price} />
            </li>
            )
        })}  
      </ul>
    );

}

export default CryptoPanelList;