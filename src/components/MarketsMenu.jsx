import {loc} from './basic/localize.js';
import {store} from '../store';

export const MarketsMenu = React.createClass({

    toggleItem: () => {

        $('#sidebar').toggleClass('openItem');
       
    },

    openWidget: (e) => {
        var widgetName = e.currentTarget.attributes["data-widget"].value;
        var widgetTitle = e.currentTarget.innerText;
        store.dispatch({
            type: 'openWidget',
            widgetName: widgetName,
            widgetTitle: widgetTitle
        });
        $('body').removeClass('openBar');

    },

    render: function()  {
        return (
                <li onClick={this.toggleItem}>
                    <div className="navItemMain">
                        <div className="navIcon marketIcon"></div>
                        <div className="navText">{loc.et_markets}</div>
                    </div>
                    <ul className="navMarkets">
                        <li className="navCountry">{loc.top_menu_world}</li>
                        <li className="navItem" data-widget="WorldMarketFx" onClick={this.openWidget}>{loc.world_fx_market}</li>
                        <li className="navItem" data-widget="WorldCommodity" onClick={this.openWidget}>{loc.world_commodity}</li>
                        <li className="navItemTest">TEST:</li>
                        <li className="navCountry">{loc.russia}</li>
                        <li className="navItem" data-widget="RussiaMarketFx" onClick={this.openWidget}>{loc.rubcorpbonds_sovereign}</li>
                        <li className="navItem"></li>
                        <li className="navItem"></li>
                        <li className="navItem"></li>
                        <li className="navItem"></li>
                        <li className="navItem"></li>

                    </ul>
                </li>
        )
    }
});


