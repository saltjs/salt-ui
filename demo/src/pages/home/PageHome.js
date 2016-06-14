require('./PageHome.styl');
let { Grid, Gallery, TabBar, NavBar, Icon } = TingleUI;
let { hashHistory, browserHistory} = ReactRouter;

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.tingleIntroBgColors = [
            '#de3e3e', // 红
            '#FFB600', // 黄
            '#4E9C0B', // 绿
            '#3053AB' // 蓝
        ];
        this.state = {
            tingleIntroBgColorIndex: 0,
            activeIndex: 0,
            images: [
                {
                    src: 'https://gw.alicdn.com/tps/TB1PODtKpXXXXXnaXXXXXXXXXXX-640-199.png',
                    name: '钉钉开放平台',
                    href: 'http://open.dingtalk.com'
                },
                {
                    src: 'https://img.alicdn.com/tfs/TB1qFGQKXXXXXc9XpXXXXXXXXXX-640-200.jpg',
                    name: '钉钉开放平台',
                    href: 'http://open.dingtalk.com'
                }],
            icons: [{
                text: '列表',
                icon: 'show-list',
                route: 'list'
            }, {
                text: '表单',
                icon: 'show-form',
                route: 'form'
            }, {
                text: '图标',
                icon: 'show-icon',
                route: 'icon'
            }, {
                text: '按钮',
                icon: 'show-button',
                route: 'button'
            }, {
                text: '对话框',
                icon: 'show-dialog',
                route: 'dialog'
            }, {
                text: '场景',
                icon: 'show-scene',
                route: 'scene'
            }, {
                text: '源码',
                icon: 'show-github',
                route: 'github'
            }, {
                text: 'Native',
                icon: 'show-native',
                route: 'native'
            }, {
                text: '文档',
                icon: 'doc',
                route: 'doc'
            }]
        }
    }

    getTingleBgColorIndex() {
        let t = this;
        let currentIndex = t.state.tingleIntroBgColorIndex;
        let nextIndex = currentIndex === t.tingleIntroBgColors.length - 1 ? 0 : currentIndex + 1;
        return nextIndex;
    }

    handleChangeColor() {
        let t = this;
        t.setState({
            tingleIntroBgColorIndex: t.getTingleBgColorIndex()
        });
    }

    notice() {
        dd.device.notification.alert({
            title: "提示",
            message: "敬请期待",
            buttonName: "确定",
            onSuccess : function() {
            },
            onFail : function(err) {}
        });
    }

    handleRoute(route) {
        let t = this;
        switch (route) {
            case "feedback":
                Ali.ready(()=> {
                    if (Ali.isDingDing) {
                        Ali.alert({
                            message: "我们的钉钉反馈渠道目前正在升级中…",
                            title: "温馨提示",
                            okButton: "知道了"
                        }, ()=> {
                        })
                    } else if (Ali.isAliwork) {
                        Ali.chat.post({
                            'bizType': 'Create', // 业务类型(Create, Forward, Comment)
                            'title': '发送内外新分享', // 大标题
                            'postScope': 'public', // public, private
                            'content': '#意见反馈# ', // 默认内容
                            'placeholderText': '请输入您要反馈给tingle小组的意见，或bug', // placeholder
                            'groupId': '17122'
                        }, ()=> {
                        })
                    }
                });
                break;
            case "other":
                Ali.ready(()=> {
                    Ali.pushWindow({
                        url: "http://ux.alibaba.net/docs/tingle-getting-started.html"
                    });
                });
                break;
            case "doc":
                // Ali.ready(()=> {
                //     Ali.pushWindow({
                //         url: "http://g-assets.daily.taobao.net/platform/tingle-ui/1.0.3/docs/docs.html"
                //     });
                // });
                this.notice();
                break;
            case "github":
                // if (Ali.isDingDing) {
                //     Ali.alert({
                //         message: "正在升级中…",
                //         title: "温馨提示",
                //         okButton: "知道了"
                //     }, ()=> {
                //     })
                // } else if (Ali.isAliwork) {
                //     Ali.pushWindow({
                //         url: 'http://gitlab.alibaba-inc.com/tingle-ui'
                //     });
                // }
                this.notice();

                break;
            case "native":
                // Ali.ready(()=> {
                //     Ali.pushWindow({
                //         url: Ali.isDingDing ? 'http://h5.m.laiwang.com/home/ding.html' : 'http://zhuanti.alibaba-inc.com/markets/nw-test/native-api-test?__nc=0'
                //     });
                // });
                this.notice();
                break;
            default:
                t.context.router.push(route);
                break;
        }
    }

    render() {
        var t = this;
        return (
            <div className="home-page">
                <Gallery images={this.state.images}
                         showNav={true}/>
                <Grid square={true} col={3}>
                    {
                        t.state.icons.map((item, index) => {
                            return (
                                <div key={'icon' + index}
                                     className="t-FBV t-FBAC t-FBJC home-grid-item t-TE"
                                     onClick={t.handleRoute.bind(t, item.route)}>
                                    <div className="home-grid-icon">
                                        <Icon name="show-icon-bg" className={"icon-bg icon-color" + index}/>
                                        <Icon name={item.icon} className="icon-is"/>
                                    </div>
                                    <div className="t-FC6 icon-text">{item.text}</div>
                                </div>
                            )
                        })
                    }
                </Grid>
            </div>
        );
    }
}

Page.contextTypes = {
    router: React.PropTypes.object.isRequired
};
module.exports = Page;
