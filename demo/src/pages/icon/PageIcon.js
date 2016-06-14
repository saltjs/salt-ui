require('./PageIcon.styl');
const {Grid, Icon} = TingleUI;

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icons: [{
                icon: 'cross'
            }, {
                icon: 'angle-down'
            }, {
                icon: 'angle-left'
            }, {
                icon: 'angle-right'
            }, {
                icon: 'angle-up'
            }, {
                icon: 'map'
            }, {
                icon: 'pen'
            }, {
                icon: 'check'
            }, {
                icon: 'check-round'
            }, {
                icon: 'info-circle'
            }, {
                icon: 'info-round'
            }, {
                icon: 'minus-circle'
            }, {
                icon: 'minus-round'
            }, {
                icon: 'plus-circle'
            }, {
                icon: 'plus-round'
            }, {
                icon: 'plus'
            },{
                icon: 'note-round'
            },{
                icon: 'user'
            },{
                icon: 'search'
            },{
                icon: 'setting'
            }, {
                icon: 'time'
            }, {
                icon: 'star'
            }]
        }
    }

    render() {
        var t = this;
        return (
            <div className="icon-page">
                <Grid square={true} col={3}>
                    {t.state.icons.map(function (item, index) {
                        return (
                            <div key={index} className="t-FBV t-FBAC t-FBJC icon-grid-item t-TE">
                                <div className="icon-grid-icon">
                                    <Icon name="show-icon-bg" className="icon-bg"/>
                                    <Icon name={item.icon} className="icon-is"/>
                                </div>
                                <div className="t-FC6 icon-text">{item.text || item.icon}</div>
                            </div>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

module.exports = Page;
