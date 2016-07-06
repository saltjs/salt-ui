require('./PageGallery.styl');
const { Gallery, NavBar } = SaltUI;

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            className: '',
            title: '我是标题我是标题',
            rightText: '更多',
            isShow: true,
            images: [
                {
                    src: 'https://gw.alicdn.com/tps/TB1HMQVJpXXXXbZXpXXXXXXXXXX-640-340.jpg',
                    name: '信息平台前端团队',
                    href: 'http://www.alibaba-inc.com'
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1X.oFJpXXXXbMXVXXXXXXXXXX-484-282.png',
                    name: '信息平台前端团队',
                    href: 'http://www.alibaba-inc.com'
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1E2M9JpXXXXXQXXXXXXXXXXXX-820-356.png',
                    name: '信息平台前端团队',
                    href: 'http://www.alibaba-inc.com'
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1Qy3RJpXXXXcxXFXXXXXXXXXX-2000-680.jpg',
                    name: '信息平台前端团队 突破十大障碍最终登上人生巅峰',
                    href: 'http://www.alibaba-inc.com'
                }
            ]
        };
    }

    handleOnLeftClick() {
        alert('返回事件')
    }

    handleOnRightClick() {
        alert('更多事件')
    }

    handleCloseViewClick() {
        alert('关闭webView事件')
    }

    render() {
        let t = this;
        return (
            <div>
                <NavBar className={this.state.className + ' t-hide'} title={this.state.title} isShow={this.state.isShow}
                        onLeftClick={this.handleOnLeftClick.bind(this)}
                        onRightClick={this.handleOnRightClick.bind(this)}
                        closeViewClick={this.handleCloseViewClick.bind(this)}/>
                <Gallery images={this.state.images}
                         active={1}
                         showNav={true}/>
            </div>
        );
    }
}

module.exports = Page;
