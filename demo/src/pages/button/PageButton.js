require('./PageButton.styl');
let {Toast, Button, Boxs} = TingleUI;
let HBox = Boxs.HBox;
let Box = Boxs.Box;

class Page extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(options) {
        dd.device.notification.toast({
            icon: options.icon,
            text: options.text
        });
    }

    changeTheme() {
        console.log('...');
    }

    render() {
        let t = this;
        return (
            <div className="page-button">
                <div className="t-PL16 t-PR16">
                    <Button type="primary" onClick={t.handleClick.bind(t, {
                    icon: 'success',
                    text: '提交成功'
                })}>一级按钮</Button>
                    <Button type="secondary" onClick={t.handleClick.bind(t, {
                    icon: 'error',
                    text: '提交出错'
                })}>二 级 按 钮</Button>
                    <Button type="minor" onClick={t.handleClick.bind(t, {
                    icon: 'error',
                    text: '取消'
                })}>幽灵按钮</Button>
                    <HBox>
                        <Box flex={1} className="t-PR8">
                            <Button type="primary" onClick={t.handleClick.bind(t)}>小按钮</Button>
                        </Box>
                        <Box flex={1} className="t-PL8">
                            <Button type="secondary" onClick={t.changeTheme.bind(t)}>切换主题</Button>
                        </Box>
                    </HBox>
                    <Button disabled={true}>禁用按钮</Button>
                </div>
                <Button className="fixed-button tPF" onClick={t.handleClick.bind(t, {text: '提交成功'})}>通栏按钮</Button>
            </div>
        );
    }
}

module.exports = Page;
