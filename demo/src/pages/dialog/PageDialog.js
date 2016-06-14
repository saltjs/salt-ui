require('./PageDialog.styl');
const { Button, Dialog } = TingleUI;

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    handleAlert() {
        dd.device.notification.alert({
            message: "Hi there",
            title: "提示",//可传空
            buttonName: "收到",
            onSuccess : function() {
                //onSuccess将在点击button之后回调
                /*回调*/
            },
            onFail : function(err) {}
        });
    }

    handleConfirm() {
        dd.device.notification.confirm({
            message: "To be or not to be",
            title: "提示",
            buttonLabels: ['爱过', '不爱'],
            onSuccess : function(result) {
                //onSuccess将在点击button之后回调
                /*
                 {
                 buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
                 }
                 */
            },
            onFail : function(err) {}
        });
    }

    handlePrompt() {
        dd.device.notification.prompt({
            message: "再说一遍？",
            title: "提示",
            buttonLabels: ['继续', '不玩了'],
            onSuccess : function(result) {
                //onSuccess将在点击button之后回调
                /*
                 {
                 buttonIndex: 0, //被点击按钮的索引值，Number类型，从0开始
                 value: '' //输入的值
                 }
                 */
            },
            onFail : function(err) {}
        });
    }

    handleLoading() {
        dd.device.notification.showPreloader({
            text: "使劲加载中..", //loading显示的字符，空表示不显示文字
            showIcon: true, //是否显示icon，默认true
            onSuccess : function(result) {
                setTimeout(function() {
                    dd.device.notification.hidePreloader({
                        onSuccess : function(result) {
                            /*{}*/
                        },
                        onFail : function(err) {}
                    })
                }, 1000);
            },
            onFail : function(err) {}
        });
    }

    handleToast() {
        dd.device.notification.toast({
            icon: 'success', //success or error
            text: '提交成功', //提示信息
            onSuccess : function(result) {
                /*{}*/
            },
            onFail : function(err) {}
        });
    }

    handleActionSheet() {
        dd.device.notification.actionSheet({
            title: "Who wins", //标题
            cancelButton: '取消', //取消按钮文本
            otherButtons: ["Alice","Bob","Charlie","Daniel"],
            onSuccess : function(result) {
                //onSuccess将在点击button之后回调
                /*{
                 buttonIndex: 0 //被点击按钮的索引值，Number，从0开始, 取消按钮为-1
                 }*/
            },
            onFail : function(err) {}
        })
    }

    handleModal() {
        dd.device.notification.modal({
            image:"http://gw.alicdn.com/tps/i2/TB1SlYwGFXXXXXrXVXX9vKJ2XXX-2880-1560.jpg_200x200.jpg", // 标题图片地址
            title:"2.4版本更新", //标题
            content:"1.功能更新2.功能更新;", //文本内容
            buttonLabels:["了解更多","知道了"],// 最多两个按钮，至少有一个按钮。
            onSuccess : function(result) {
                //onSuccess将在点击button之后回调
                /*{
                 buttonIndex: 0 //被点击按钮的索引值，Number，从0开始
                 }*/
            },
            onFail : function(err) {}
        })
    }

    handleChosen() {
        dd.biz.util.chosen({
            source:[{
                key: '选项1', //显示文本
                value: '123' //值，
            },{
                key: '选项2',
                value: '234'
            }],
            onSuccess : function(result) {
                //onSuccess将在点击完成之后回调
                /*
                 {
                 key: '选项2',
                 value: '234'
                 }
                 */
            },
            onFail : function() {}
        })
    }

    handleTimePicker() {
        dd.biz.util.timepicker({
            format: 'HH:mm',
            value: '14:00', //默认显示时间  0.0.3
            onSuccess : function(result) {
                //onSuccess将在点击完成之后回调
                /*{
                 value: "10:00"
                 }
                 */
            },
            onFail : function() {}
        })
    }

    handleDatePicker() {
        dd.biz.util.datepicker({
            format: 'yyyy-MM-dd',
            value: '2015-04-17', //默认显示日期
            onSuccess : function(result) {
                //onSuccess将在点击完成之后回调
                /*{
                 value: "2015-02-10"
                 }
                 */
            },
            onFail : function() {}
        })
    }

    handleDateTimePicker() {
        dd.biz.util.datetimepicker({
            format: 'yyyy-MM-dd HH:mm',
            value: '2015-04-17 08:00', //默认显示
            onSuccess : function(result) {
                //onSuccess将在点击完成之后回调
                /*{
                 value: "2015-06-10 09:50"
                 }
                 */
            },
            onFail : function() {}
        })
    }

    render() {
        let t = this;
        let buttons = [{
            content: '取消',
            callback() {
                console.log('page cancel');
            }
        }, {
            content: '异步',
            callback() {
                setTimeout(function () {
                    t.refs.mainDialog.hide()
                }, 2000);
                return false;
            }
        }, {
            content: '确定',
            callback() {
                console.log('page confirm');
            },
            primary: true
        }];
        return (
            <div className="page-dialog">
                <Button className="demo" onClick={t.handleAlert.bind(t)}>alert</Button>
                <Button className="demo" onClick={t.handleConfirm.bind(t)}>confirm</Button>
                <Button className="demo" onClick={t.handlePrompt.bind(t)}>prompt</Button>
                <Button className="demo" onClick={t.handleLoading.bind(t)}>loading...</Button>
                <Button className="demo" onClick={t.handleToast.bind(t)}>toast</Button>
                <Button className="demo" onClick={t.handleActionSheet.bind(t)}>actionsheet</Button>
                <Button className="demo" onClick={t.handleChosen.bind(t)}>chosen</Button>
                <Button className="demo" onClick={t.handleModal.bind(t)}>modal</Button>
                <Button className="demo" onClick={t.handleTimePicker.bind(t)}>timepicker</Button>
                <Button className="demo" onClick={t.handleDatePicker.bind(t)}>datepicker</Button>
                <Button className="demo" onClick={t.handleDateTimePicker.bind(t)}>datetimepicker</Button>
            </div>
        );

        let popButton = [{
            content: '测试',
            callback: function () {
                console.log('pop button');
            },
            primary: true
        }];
    }
}

module.exports = Page;
