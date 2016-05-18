var APP =
React.createClass({
    getInitialState: function () {
        return {data: []}
    },

    componentWillMount: function () {
        reqwest({
            url: 'http://www.filltext.com/?rows=10&val={randomNumber}',
            type: '',
            contentType: 'application/json',
            crossOrigin: true,
            headers: {
            },
            success: function(resp){
                this.setState({data:resp})
                this.renderChart(this.state.data)
            }.bind(this)
        })
    },

    renderChart: function (dataset) {
        d3.select('#chart').selectAll('div')
        .data(dataset)
        .enter()
        .append('div')
        .attr('class', 'bar')
        .style('height', function(d){
            return d.val * 5 + 'px';
        });
    },

    render: function () {
        return <div id="chart"></div>
    }
});

ReactDOM.render(<APP />, document.getElementById('app'));
