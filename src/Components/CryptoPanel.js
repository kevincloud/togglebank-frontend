import Panel from './Panel';
import linkIcon from '../img/link-icon.svg';



function CryptoPanel({cryptoName, cryptoPrice}) {
    return (
        <Panel
          // clickHandler={() => handleClick()} ##Coming Soon
          stayActiveCondition={false}
        >
          <p>{cryptoName}</p>
          <div className="flex flex-row justify-between">
            <p className="inline-block mr-6">${cryptoPrice}</p>
            <img src={linkIcon} className="inline-block" alt=""/>
          </div>
        </Panel>
      );
}

export default CryptoPanel;
