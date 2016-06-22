require('./PageList.styl');
let { Group, Tab, List, Avatar, Button, Boxs, Icon} = SaltUI;
let HBox = Boxs.HBox;
let Box = Boxs.Box;

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: ''
        }
    }

    handleChange() {

    }

    changeTheme() {
        console.log('...');
    }

    handleClick() {
        this.setState({
            type: this.state.type === '' ? 'brick' : ''
        });
    }

    render() {
        let t = this;
        return (
            <Tab className="page-list" type={t.state.type} onChange={t.handleChange.bind(t)}>
                <Tab.item title="贡献者">
                    <Group.List borderTopNone={true} lineIndent={15} itemIndent={[15,15]}>
                        <div className="about-item t-FBH t-FBAC" onClick={t.handleChange.bind(t)}>
                            <div><Avatar size="40" name="Alice"/></div>
                            <p className="info t-FB1">
                                <span className="nickname">Alice</span>
                            </p>
                        </div>
                        <div className="about-item t-FBH t-FBAC" onClick={t.handleChange.bind(t)}>
                            <div><Avatar size="40" name="Bob"/></div>
                            <p className="info t-FB1">
                                <span className="nickname">Bob</span>
                            </p>
                        </div>

                    </Group.List>
                    <Button className="list-change-theme" type="primary" onClick={t.changeTheme.bind(t)}>切换主题</Button>
                </Tab.item>
                <Tab.item title="服务于项目">
                    <Group className="project-tingle">
                        <Group.Head>
                            项目名称
                        </Group.Head>
                        <Group.List lineIndent={15} itemIndent={[15,15]}>
                            <div className='t-LH44 t-omit'>项目一</div>
                            <div className='t-LH44 t-omit'>项目二</div>
                        </Group.List>
                    </Group>
                </Tab.item>
                <Tab.item title="列表">
                    <Tab type={'brick'}>
                        <Tab.item title="列表一">
                            <List
                                layout="left"
                                hasRightIcon={true}
                                iconName="angle-right"
                                iconWidth={20}
                                isDelete={true}
                                demoTitle="左图右文有箭头icon"
                                data={[{
                                    imgUrl : "https://img.alicdn.com/tps/TB16A2fJFXXXXbQXFXXXXXXXXXX-480-640.jpg",
                                    text : "前端开发工程师",
                                    title : "Alice"
                                },{
                                    imgUrl : "https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg",
                                    text : "资深交互设计师",
                                    title : "Bob"
                                },{
                                    imgUrl : "https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg",
                                    text : "交互设计师",
                                    title : "Charlie"
                                }]}/>

                            <List
                                layout="right"
                                hasRightIcon={false}
                                isDelete={false}
                                demoTitle="右图左文无箭头"
                                data={[{
                            imgUrl : "https://img.alicdn.com/tps/TB1j2u5JFXXXXaEXVXXXXXXXXXX-564-1004.jpg",
                            text : "静静的看着这世界，最后疯了",
                            title : "Alice"
                        },{
                            imgUrl : "https://img.alicdn.com/tps/TB1GnjaJFXXXXcpXFXXXXXXXXXX-2448-1836.jpg",
                            text : "就想要这样一间小木屋，夏天挫冰吃，冬天为炉取暖，秋天静看落叶，春天畅闻花香",
                            title : "Bob"
                        },{
                            imgUrl : "https://img.alicdn.com/tps/TB1KC9.JFXXXXX0XVXXXXXXXXXX-225-225.jpg",
                            text : "能和心爱的人一起睡觉，是件幸福的事情",
                            title : "Charlie"
                        }]}/>
                            <List
                                layout="left"
                                hasRightIcon={false}
                                isDelete={true}
                                demoTitle="左图右文无箭头可滑动删除"
                                data={[{
                            imgUrl : "https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg",
                            text : "中午一起吃饭吗？",
                            title : "Alice",
                            date : "10月12日"
                        },{
                            imgUrl : "https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg",
                            text : "在哪个会议室？",
                            title : "Bob",
                            date : "今天"
                        }]}/>
                        </Tab.item>
                        <Tab.item title="列表二">
                            <Group className='demo-t-list'>
                                <Group.Head className='t-demo-title'>图加标题</Group.Head>
                                <Group.List lineIndent={15}>
                                    <div>
                                        <div className='demo-t-list-wrap-single'>
                                            <HBox vAlign="center">
                                                <HBox flex={1}>
                                                    <Box>
                                                        <img src='https://img.alicdn.com/tps/TB1S02rJFXXXXcuXpXXXXXXXXXX-58-58.png' className='demo-t-list-img'/>
                                                    </Box>
                                                    <Box className='demo-t-list-text-content-single' flex={1}>
                                                        <p className='demo-t-list-title-single omit'>手机通讯录</p>
                                                    </Box>
                                                </HBox>
                                                <Box>
                                                    <Icon name="angle-right" width={20} fill="#ccc" className='demo-t-list-arrow' />
                                                </Box>
                                            </HBox>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='demo-t-list-wrap-single'>
                                            <HBox vAlign="center">
                                                <HBox flex={1}>
                                                    <Box>
                                                        <img src='https://img.alicdn.com/tps/TB1eoLXJFXXXXaFXVXXXXXXXXXX-60-60.png' className='demo-t-list-img'/>
                                                    </Box>
                                                    <Box className='demo-t-list-text-content-single' flex={1}>
                                                        <p className='demo-t-list-title-single omit'>特别关注</p>
                                                    </Box>
                                                </HBox>
                                                <Box>
                                                    <Icon name="angle-right" width={20} fill="#ccc" className='demo-t-list-arrow' />
                                                </Box>
                                            </HBox>
                                        </div>
                                    </div>
                                </Group.List>
                            </Group>
                            <Group className='demo-t-list'>
                                <Group.Head className='t-demo-title'>信息卡列表</Group.Head>
                                <Group.List lineIndent={80}>
                                    <div className='demo3-t-list-wrap'>
                                        <HBox vAlign="center">
                                            <HBox flex={1}>
                                                <Box>
                                                    <img src='https://img.alicdn.com/tps/TB1HInCJFXXXXXcXpXXXXXXXXXX-60-60.png' className='demo3-t-list-img'/>
                                                </Box>
                                                <Box className='demo3-t-list-text-content' flex={1}>
                                                    <p className='demo3-t-list-title t-omit'>信息卡片名称<span className='demo3-t-list-cricle'></span></p>
                                                    <p className='demo3-t-list-text t-omit'>辅助信息介绍辅助信息介绍辅助信息介绍</p>
                                                    <p className='demo3-t-list-time t-omit'>有效期：2016.10.12-2016.11.21</p>
                                                </Box>
                                            </HBox>
                                        </HBox>
                                    </div>
                                    <div className='demo3-t-list-wrap'>
                                        <HBox vAlign="center">
                                            <HBox flex={1}>
                                                <Box>
                                                    <img src='https://img.alicdn.com/tps/TB1HInCJFXXXXXcXpXXXXXXXXXX-60-60.png' className='demo3-t-list-img'/>
                                                </Box>
                                                <Box className='demo3-t-list-text-content' flex={1}>
                                                    <p className='demo3-t-list-title t-omit'>信息卡片名称<span className='demo3-t-list-cricle'></span></p>
                                                    <p className='demo3-t-list-text t-omit'>辅助信息介绍辅助信息介绍辅助信息介绍</p>
                                                    <p className='demo3-t-list-time t-omit'>有效期：2016.10.12-2016.11.21</p>
                                                </Box>
                                            </HBox>
                                        </HBox>
                                    </div>
                                </Group.List>
                            </Group>
                        </Tab.item>
                        <Tab.item title="列表三">
                            <Group className='demo-t-list'>
                                <Group.Head className='t-demo-title'>图文纵排</Group.Head>
                                <Group.List>
                                    <div className='demo2-t-list-wrap'>
                                        <HBox vAlign="center">
                                            <HBox flex={1}>
                                                <Box className="demo2-t-list-img-wrap">
                                                    <img src='https://img.alicdn.com/tps/TB1mKYuJFXXXXbFXpXXXXXXXXXX-375-140.png' className='demo2-t-list-img'/>
                                                </Box>
                                            </HBox>
                                        </HBox>
                                        <HBox className="demo2-t-list-title">
                                            <Box flex={1}>
                                                <p className='demo2-t-list-title-content t-omit'>标题</p>
                                            </Box>
                                            <Box>
                                                <span className='demo2-t-list-time'>2015.08.09</span>
                                            </Box>
                                        </HBox>
                                    </div>
                                    <div className='demo2-t-list-wrap'>
                                        <HBox vAlign="center">
                                            <HBox flex={1}>
                                                <Box className="demo2-t-list-img-wrap">
                                                    <img src='https://img.alicdn.com/tps/TB1EtbhJFXXXXc5XFXXXXXXXXXX-375-140.png' className='demo2-t-list-img'/>
                                                </Box>
                                            </HBox>
                                        </HBox>
                                        <HBox className="demo2-t-list-title">
                                            <Box flex={1}>
                                                <p className='demo2-t-list-title-content t-omit'>标题文字</p>
                                            </Box>
                                            <Box>
                                                <span className='demo2-t-list-time'>2015.08.09</span>
                                            </Box>
                                        </HBox>
                                    </div>
                                </Group.List>
                            </Group>
                        </Tab.item>
                    </Tab>
                </Tab.item>
            </Tab>
        )
    }
}

module.exports = Page;
