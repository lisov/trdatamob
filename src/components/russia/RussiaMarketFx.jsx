
export const RussiaMarketFx = React.createClass({
    getInitialState: function() {

        return {
           test:null

        };

    },
    componentDidMount: function() {
        this.test = setInterval(() => {
            console.log('testRussia')
        },500);
    },

    componentWillUnmount: function() {
        clearInterval(this.test)
    },

    render: function()  {
        return (
            <div>
            	 {this.state.test ? this.state.test : null}
            </div>
        )
    }
});
