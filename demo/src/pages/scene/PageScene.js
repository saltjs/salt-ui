require('./PageScene.styl');
let { hashHistory, browserHistory} = ReactRouter;
let { Note, Icon, TabBar, NavBar, Group, Tab, Boxs, Avatar, Grid} = TingleUI;
let HBox = Boxs.HBox;
let Box = Boxs.Box;

class Page extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            activeIndex: 0,
            className: 'scene-nav'
        };
    }

    componentDidMount() {
        let className = document.body.className;
        document.body.className = className + ' scene-body';
        try {
            this.setTitle('阿里顺风车');
        } catch(e) {
            console.log('请使用手机打开');
        }
    }

    componentWillUnmount() {
        let className = document.body.className;
        document.body.className = className.replace(/ scene-body/, '');
        try {
            this.setTitle('salt-ui');
        } catch(e) {
            console.log('请使用手机打开');
        }
    }

    handleTabBarClick() {

    }

    handleChange() {

    }

    setTitle(title) {
        dd.biz.navigation.setTitle({
            title: title
        });
    }


    handleOnLeftClick() {
        hashHistory.replace('/');
    }

    handleOnRightClick() {

    }

    handleCloseViewClick() {

    }

    render() {
        let t = this;
        return (
            <div className="page-secne">
                <TabBar className="scene-tab-bar" activeIndex={this.state.activeIndex} onChange={this.handleTabBarClick.bind(this)}>
                    <TabBar.Item title="首页" icon="scene-home">
                        <div>
                            <Note message='申报公益时更方便记得了，发布明天早上的的，请提前做好准备' type='warning' closeText='查看详情'/>
                            <p className="scene-warn">凭工牌免费乘车</p>
                            <Grid square={true} col={2}>
                                <div className="scene-home t-FBV t-FBAC t-FBJC">
                                    <Icon fill="#3053AB"  name="people" width={100} height={100} className="icon-is"/>
                                    <div className="t-FC6 icon-text">我要捎人</div>
                                </div>
                                <div className="scene-home t-FBV t-FBAC t-FBJC">
                                    <Icon fill="#4E9C0B"  name="lift" width={100} height={100} className="icon-is"/>
                                    <div className="t-FC6 icon-text">求搭车</div>
                                </div>
                                <div className="scene-home t-FBV t-FBAC t-FBJC">
                                    <Icon fill="#FFB600"  name="apply" width={100} height={100} className="icon-is"/>
                                    <div className="t-FC6 icon-text">公益车位报名</div>
                                </div>
                                <div className="scene-home t-FBV t-FBAC t-FBJC">
                                    <Icon fill="#de3e3e" name="benefit" width={100} height={100} className="icon-is"/>
                                    <div className="t-FC6 icon-text">我要申报公益时</div>
                                </div>
                            </Grid>
                        </div>
                    </TabBar.Item>
                    <TabBar.Item title="搭乘列表" icon="scene-list">
                        <Tab onChange={t.handleChange.bind(t)}>
                            <Tab.item title="我是乘客">
                                <Tab className="t-tab-secondary" type={'brick'} onChange={t.handleChange.bind(t)}>
                                    <Tab.item title="全部">
                                        <Group className='demo-t-list'>
                                            <Group.List borderTopNone={true}>
                                                <div className='demo-t-list-wrap'>
                                                    <HBox vAlign="center">
                                                        <HBox flex={1}>
                                                            <Box>
                                                                <Avatar className="t-MR10" size="60" name="小明"/>
                                                            </Box>
                                                            <Box className='demo-t-list-text-content' flex={1}>
                                                                <p className='demo-t-list-title t-omit'>顺风车<span className="demo-t-list-title-tag">已完成</span></p>
                                                                <p className='demo-t-list-text t-omit2'>西溪园区-西溪花园</p>
                                                                <p className='demo-t-list-time t-omit'>时间：2016-02-12</p>
                                                            </Box>
                                                            <div className="t-FBV t-FBAC">
                                                                <Icon fill="#ccc" width={26} height={68} className="t-FB1" name="angle-right"/>
                                                            </div>
                                                        </HBox>
                                                    </HBox>
                                                </div>
                                            </Group.List>
                                            <Group.List>
                                                <div className='demo-t-list-wrap'>
                                                    <HBox vAlign="center">
                                                        <HBox flex={1}>
                                                            <Box>
                                                                <Avatar src="https://img.alicdn.com/tps/TB1cnJcKpXXXXbbXpXXXXXXXXXX-150-150.png" className="t-MR10" size="60" name="小明"/>
                                                            </Box>
                                                            <Box className='demo-t-list-text-content' flex={1}>
                                                                <p className='demo-t-list-title t-omit'>顺风车<span className="demo-t-list-title-tag">未完成</span></p>
                                                                <p className='demo-t-list-text t-omit2'>西溪园区-西溪花园</p>
                                                                <p className='demo-t-list-time t-omit'>时间：2016-02-13</p>
                                                            </Box>
                                                            <div className="t-FBV">
                                                                <Icon fill="#ccc" width={26} height={68} className="t-FB1" name="angle-right"/>
                                                            </div>
                                                        </HBox>
                                                    </HBox>
                                                </div>
                                            </Group.List>
                                        </Group>
                                    </Tab.item>
                                    <Tab.item title="已完成">
                                        <Group.List borderTopNone={true}>
                                            <div className='demo-t-list-wrap'>
                                                <HBox vAlign="center">
                                                    <HBox flex={1}>
                                                        <Box>
                                                            <Avatar className="t-MR10" size="60" name="小明"/>
                                                        </Box>
                                                        <Box className='demo-t-list-text-content' flex={1}>
                                                            <p className='demo-t-list-title t-omit'>顺风车<span className="demo-t-list-title-tag">已完成</span></p>
                                                            <p className='demo-t-list-text t-omit2'>西溪园区-西溪花园</p>
                                                            <p className='demo-t-list-time t-omit'>时间：2016-02-12</p>
                                                        </Box>
                                                        <div className="t-FBV">
                                                            <Icon fill="#ccc" width={26} height={68} className="t-FB1" name="angle-right"/>
                                                        </div>
                                                    </HBox>
                                                </HBox>
                                            </div>
                                        </Group.List>
                                    </Tab.item>
                                </Tab>
                            </Tab.item>
                            <Tab.item title="我是司机">
                                <div className="scene-list-record">暂无发布记录</div>
                            </Tab.item>
                        </Tab>
                    </TabBar.Item>
                    <TabBar.Item title="FAQ" icon="info-round">
                        <div className="scene-faq">
                            <Tab onChange={t.handleChange.bind(t)}>
                                <Tab.item title="乘客篇">
                                    <div className="scene-faq-list">
                                        <dl>
                                            <dt>1、新手怎样搭顺风车？</dt>
                                            <dd>猛击手机上的“阿里内外”图标，在更多中找到“顺风车”并轻点一下，“求搭车”会带给您美妙的屌丝回家之旅。</dd>
                                        </dl>
                                        <dl>
                                            <dt>2、为什么我总是搜索不到路过我家的车啊？</dt>
                                            <dd>
                                                路线搜索功能仅会匹配途径点和终点，某些司机填写途径点的时并不知道或不记得路过某个小区。例如：目的地为蒋村的车大多数都会经过西溪花园，可是有些司机只会填写“文一西路”或“文一路”，我们推荐您分别搜索“西溪花园”，“文一西路”，“文一路”等。注：未来我们将推出线路标签功能，让司机和乘客共同完善途径点信息。
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>3、如何预约顺风车？</dt>
                                            <dd>在搜索结果中点您想乘坐的路线，我们将显示司机的“花名”和“电话”等信息，建议您先和司机确认可搭车后，再点击页面最下方的“预约”按钮即可。
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>4、如何确认或取消已预约的顺风车？</dt>
                                            <dd>
                                                在搭乘列表中选择“我的搭乘”并点开已预约的顺风车，仔细看页面最下方，点击“成功搭乘”完成确认（司机可获对应的公益时奖励）；点击“因故取消”取消预约（建议发车前取消的亲电话通知下司机）。
                                            </dd>
                                        </dl>
                                    </div>
                                </Tab.item>
                                <Tab.item title="司机篇">
                                    <div className="scene-faq-list">
                                        <dl>
                                            <dt>1、如何发布顺风车信息？</dt>
                                            <dd>
                                                请您在阿里内外手机客户端的更多里点开“顺风车”图标，选择“我要捎人”-“添加常用路线”，添加您常走的路线信息，然后点一下刚添加的路线并确认发布即可。
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>2、如何查看已发布顺风车信息？</dt>
                                            <dd>在搭乘列表中选择“我的发布”，可查看已发布的顺风车信息，点击其中一条可查看对应预约过的乘客列表。</dd>
                                        </dl>

                                        <dl>
                                            <dt>3、如何获得顺风车车牌？</dt>
                                            <dd>在您开车上班经过公交站时，我们的车牌可以帮助等车的同事辨别和搭车，希望您直接联系以下负责人领取专用车牌</dd>
                                            <dd>1号楼:舜耕1-2-N-58</dd>
                                            <dd>2号楼:元宜2-3-S-119</dd>
                                            <dd>3号楼:红药3-3-S-196</dd>
                                            <dd>4号楼:乂二4-3-N-83</dd>
                                            <dd>5号楼:战哥5-2-S-74</dd>
                                            <dd>6号楼:圆影6-3-N-295</dd>
                                        </dl>
                                        <dl>
                                            <dt>4、如何获得顺风车车标徽章？</dt>
                                            <dd>
                                                司机累积满20公益时（0.5公益时/次，按成功带到乘客计算）即可申请顺风车车标徽章，当前客户端不支持主动申请，顺风车管委会将定期给满足条件的司机集中制作和发放！
                                            </dd>
                                        </dl>
                                    </div>
                                </Tab.item>
                            </Tab>
                        </div>
                    </TabBar.Item>
                    <TabBar.Item title="法律声明" icon="scene-law">
                        <div className="scene-law">
                            <p>
                                为缓解同学们上下班的交通压力，倡导环保节能、绿色出行、文明交通的理念，阿里巴巴顺风车平台开发小组特提供顺风车公益信息发布平台。提请同学们特别注意：机动车出行风险较高，各位同学务必注意安全，审慎选择出行方式，遵守交通规则、文明出行。</p>
                            <p>
                                做为发布线路的司机，本人确认拥有合法有效的驾驶资格，自愿作为司机参加顺风车公益活动，顺风车搭载过程将不收取任何费用。本人在搭载过程中，将严格遵守交通规则及相关法律规定，对乘车人的危险行为进行必要的提醒和制止，尽到谨慎驾驶、合理提醒等注意义务。若在搭载过程中发现交通意外，本人将及时报警、通知保险公司、维护现场，积极与第三方配合解决纠纷。</p>
                            <p>
                                做为顺风车搭乘乘客，本人自愿作为乘客参加顺风车公益活动。在顺风车搭乘过程中，本人将严格遵守交通规则及相关法律规定，不干扰车辆行驶。若在搭乘过程中发生交通意外，本人将协助驾车人报警、通知保险公司、维护现场，积极配合驾车人与第三方解决纠纷。</p>
                        </div>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

module.exports = Page;
