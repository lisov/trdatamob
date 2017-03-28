import rtdataengine from '../../utils/rtdataengine.js';
var Backbone = require('backbone');


export const WorldCommodity = React.createClass({
    getInitialState: function() {

        return {
            refALUMINIUM_HIGHGRADE: {},
            refCACAO: {},
            refCOFFEE: {},
            refCOPPER_GRADE_A: {},
            refCOTTON: {},
            refCrude_Oil_Barrel: {},
            refGASOIL: {},
            refGAS_NATURAL: {},
            refGOLD_SPOT: {},
            refLEAD: {},
            refMAIZE: {},
            refNICKEL: {},
            refPALLADIUM_SPOT: {},
            refPLATINUM_SPOT: {},
            refPORK_LEAN_LOWFAT: {},
            refRBOB: {},
            refSILVER_SPOT: {},
            refSOYBEANS: {},
            refSUGAR: {},
            refWHEAT: {},
            refWTI_Crude_Oil: {},
            refZINC_HIGHGRADE: {}
        };

    },
    componentDidMount: function() {
        
        trdata = _.extend(trdata, Backbone.Events);

        trdata.rtdataengine.init(JSESSIONID, null, function() {
            
            trdata.rtdataengine.subscribe(['refWTI_Crude_Oil','refCrude_Oil_Barrel','refGOLD_SPOT','refPLATINUM_SPOT','refSILVER_SPOT','refPALLADIUM_SPOT','refCOTTON','refSUGAR','refGAS_NATURAL','refRBOB','refLEAD','refNICKEL','refCOPPER_GRADE_A','refZINC_HIGHGRADE','refALUMINIUM_HIGHGRADE','refCOFFEE','refCACAO','refWHEAT','refGASOIL','refSOYBEANS','refMAIZE','refFATSTOCK','refPORK_LEAN_LOWFAT'], null, 'tag');   

            trdata.on('quote:update:tag:tag', function(id, q){
                console.log("worldcommodity");
                this.setState({
                    [id]: q
                });
            }.bind(this));

        }.bind(this));

    },

    componentWillUnmount: function() {
        trdata.rtdataengine.unsubscribe(['refWTI_Crude_Oil','refCrude_Oil_Barrel','refGOLD_SPOT','refPLATINUM_SPOT','refSILVER_SPOT','refPALLADIUM_SPOT','refCOTTON','refSUGAR','refGAS_NATURAL','refRBOB','refLEAD','refNICKEL','refCOPPER_GRADE_A','refZINC_HIGHGRADE','refALUMINIUM_HIGHGRADE','refCOFFEE','refCACAO','refWHEAT','refGASOIL','refSOYBEANS','refMAIZE','refFATSTOCK','refPORK_LEAN_LOWFAT']);
    },

    render: function()  {
        return (
            <div id="world_fx_market_screen" className="world_fx_market_screen">
                <table className="assets_table commodity_table">
                    <thead>
                        <tr>
                            <th className="asset_name" colSpan="2">Energies</th>
                        </tr>
                    </thead>
                    <tbody className="assets_container">
                        <tr>
                            <td>WTI Crude Oil</td>
                            <td>{this.state.refWTI_Crude_Oil ? this.state.refWTI_Crude_Oil.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Brent Oil</td>
                            <td>{this.state.refCrude_Oil_Barrel ? this.state.refCrude_Oil_Barrel.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Gas natural</td>
                            <td>{this.state.refGAS_NATURAL ? this.state.refGAS_NATURAL.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>RBOB</td>
                            <td>{this.state.refRBOB ? this.state.refRBOB.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Gasoil</td>
                            <td>{this.state.refGASOIL ? this.state.refGASOIL.bid : '-'}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="assets_table commodity_table">
                    <thead>
                        <tr>
                            <th className="asset_name" colSpan="2">Metals</th>
                        </tr>
                    </thead>
                    <tbody className="assets_container">
                        <tr>
                            <td>Gold</td>
                            <td>{this.state.refGOLD_SPOT ? this.state.refGOLD_SPOT.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Platinum</td>
                            <td>{this.state.refPLATINUM_SPOT ? this.state.refPLATINUM_SPOT.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Silver</td>
                            <td>{this.state.refSILVER_SPOT ? this.state.refSILVER_SPOT.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Palladium</td>
                            <td>{this.state.refPALLADIUM_SPOT ? this.state.refPALLADIUM_SPOT.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Lead</td>
                            <td>{this.state.refLEAD ? this.state.refLEAD.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Nickel</td>
                            <td>{this.state.refNICKEL ? this.state.refNICKEL.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Copper</td>
                            <td>{this.state.refCOPPER_GRADE_A ? this.state.refCOPPER_GRADE_A.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Zinc</td>
                            <td>{this.state.refZINC_HIGHGRADE ? this.state.refZINC_HIGHGRADE.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Aluminium</td>
                            <td>{this.state.refALUMINIUM_HIGHGRADE ? this.state.refALUMINIUM_HIGHGRADE.bid : '-'}</td>
                        </tr>
                    </tbody>
                </table>

                <table className="assets_table commodity_table">
                    <thead>
                        <tr>
                            <th className="asset_name" colSpan="2">Soft</th>
                        </tr>
                    </thead>
                    <tbody className="assets_container">
                        <tr>
                            <td>Cotton</td>
                            <td>{this.state.refCOTTON ? this.state.refCOTTON.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>{this.state.refSUGAR ? this.state.refSUGAR.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Coffee</td>
                            <td>{this.state.refCOFFEE ? this.state.refCOFFEE.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Cacao</td>
                            <td>{this.state.refCACAO ? this.state.refCACAO.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Wheat</td>
                            <td>{this.state.refWHEAT ? this.state.refWHEAT.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Soybeans</td>
                            <td>{this.state.refSOYBEANS ? this.state.refSOYBEANS.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Maize</td>
                            <td>{this.state.refMAIZE ? this.state.refMAIZE.bid : '-'}</td>
                        </tr>
                        <tr>
                            <td>Pork Lean/Low-fat</td>
                            <td>{this.state.refPORK_LEAN_LOWFAT ? this.state.refPORK_LEAN_LOWFAT.bid : '-'}</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
});
