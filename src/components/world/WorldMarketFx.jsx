var moment = require('moment');

export const WorldMarketFx = React.createClass({
    getInitialState: function() {

        return {
            EUR_USD: {},
            GBP_USD: {},
            USD_JPY: {},
            USD_CHF: {},
            EUR_CHF: {},
            EUR_CNY: {},
            USD_CNY: {},
            GBP_EUR: {},
            USD_AUD: {},
            EUR_JPY: {},
            USD_RUB: {},
            EUR_RUB: {}
        };

    },
    componentDidMount: function() {
        this.folded = false;
        var getData = function( ) {
            if(!this.folded) {
                var url = 'url';
                this.serverRequest = $.get(url, function (data) {

                    this.setState({
                        EUR_USD: data.data.refEUR_USD_SPOT,
                        GBP_USD: data.data.refGBP_USD_SPOT,
                        USD_JPY: data.data.refUSD_JPY_SPOT,
                        USD_CHF: data.data.refUSD_CHF_SPOT,
                        EUR_CHF: data.data.refEUR_CHF_SPOT,
                        EUR_CNY: data.data.refEUR_CNY_SPOT,
                        USD_CNY: data.data.refUSD_CNY_SPOT,
                        GBP_EUR: data.data.refGBP_EUR_SPOT,
                        USD_AUD: data.data.refUSD_AUD_SPOT,
                        EUR_JPY: data.data.refEUR_JPY_SPOT,
                        USD_RUB: data.data.refUSD_RUB_SPOT,
                        EUR_RUB: data.data.refEUR_RUB_SPOT

                    });
                }.bind(this)); 
            }
             
        }.bind(this);

        getData();

        this.tenMinUpdate = setInterval(getData,5000);
    },

    componentWillUnmount: function() {
        clearInterval(this.tenMinUpdate);
        this.serverRequest.abort();
    },

    checkVal: function(val, ts) {
        if (toString(val).length) {
            return ts ? moment.unix(val).format("H:mm") : val;
        } else {
            return '-'
        }
    },

    render: function()  {
        return (
            <div id="world_fx_market_screen" className="world_fx_market_screen">
                <table className="assets_table fx_market_table">
                    <thead>
                        <tr>
                            <th className="asset_name">Name</th>
                            <th>Bid</th>
                            <th>Ask</th>
                            <th>Last price</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody className="assets_container">
                        {this.state.EUR_USD.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">EUR/USD</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.EUR_USD.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.EUR_USD.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.EUR_USD.price)}</td>
                            <td className="time">{this.checkVal(this.state.EUR_USD.price, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.GBP_USD.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">GBP/USD</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.GBP_USD.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.GBP_USD.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.GBP_USD.price)}</td>
                            <td className="time">{this.checkVal(this.state.GBP_USD.ts, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.USD_JPY.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">USD/JPY</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.USD_JPY.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.USD_JPY.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.USD_JPY.price)}</td>
                            <td className="time">{this.checkVal(this.state.USD_JPY.ts, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.USD_CHF.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">USD/CHF</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.USD_CHF.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.USD_CHF.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.USD_CHF.price)}</td>
                            <td className="time">{this.checkVal(this.state.USD_CHF.ts, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.EUR_CHF.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">EUR/CHF</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.EUR_CHF.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.EUR_CHF.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.EUR_CHF.price)}</td>
                            <td className="time">{this.checkVal(this.state.EUR_CHF.ts, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.EUR_CNY.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">EUR/CNY</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.EUR_CNY.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.EUR_CNY.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.EUR_CNY.price)}</td>
                            <td className="time">{this.checkVal(this.state.EUR_CNY.ts, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.USD_CNY.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">USD/CNY</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.USD_CNY.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.USD_CNY.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.USD_CNY.price)}</td>
                            <td className="time">{this.checkVal(this.state.USD_CNY.ts, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.GBP_EUR.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">GBP/EUR</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.GBP_EUR.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.GBP_EUR.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.GBP_EUR.price)}</td>
                            <td className="time">{this.checkVal(this.state.GBP_EUR.ts, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.USD_AUD.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">USD/AUD</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.USD_AUD.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.USD_AUD.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.USD_AUD.price)}</td>
                            <td className="time">{this.checkVal(this.state.USD_AUD.ts, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.EUR_JPY.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">EUR/JPY</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.EUR_JPY.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.EUR_JPY.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.EUR_JPY.price)}</td>
                            <td className="time">{this.checkVal(this.state.EUR_JPY.ts, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.USD_RUB.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">USD/RUB</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.USD_RUB.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.USD_RUB.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.USD_RUB.price)}</td>
                            <td className="time">{this.checkVal(this.state.USD_RUB.ts, 'ts')}</td>
                            </tr>
                        ) : null}

                        {this.state.EUR_RUB.addi
                        ? ( 
                            <tr className="">
                            <td className="asset_name text-left">EUR/RUB</td>
                            <td className="bid priceItem down">{this.checkVal(this.state.EUR_RUB.addi.origin_price.bid)}</td>
                            <td className="ask priceItem down">{this.checkVal(this.state.EUR_RUB.addi.origin_price.ask)}</td>
                            <td className="price priceItem down">{this.checkVal(this.state.EUR_RUB.price)}</td>
                            <td className="time">{this.checkVal(this.state.EUR_RUB.ts, 'ts')}</td>
                            </tr>
                        ) : null}
                        
                    </tbody>
                </table>
            </div>
        )
    }
});
