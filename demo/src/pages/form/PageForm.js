require('./PageForm.styl');
const {
    Group,
    TextField,
    TextareaField,
    Slot,
    SelectField,
    Note,
    Button,
    CheckboxField,
    RadioField,
    Toast,
    SwitchField
    } = TingleUI;

class Page extends React.Component {

    constructor(props) {
        super(props);
        let t = this;
        let dates = Slot.formatDataValue([
            [2015, 2016],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        ]);
        var monthArray = [
            {value: 0, text: '一月'}, {value: 1, text: '二月'},
            {value: 2, text: '三月'}, {value: 3, text: '四月'},
            {value: 4, text: '五月'}, {value: 5, text: '六月'},
            {value: 6, text: '七月'}, {value: 7, text: '八月'},
            {value: 8, text: '九月'}, {value: 9, text: '十月'},
            {value: 10, text: '十一月'}, {value: 11, text: '十二月'}
        ];
        let relations = [
            {value: 0, text: '朋友'},
            {value: 1, text: '家人'},
            {value: 2, text: '合作伙伴'},
            {value: 3, text: '供应商'}
        ];
        let buildings = Slot.formatDataValue([
            ['西溪', '黄龙', '龙章'],
            ['1号楼', '2号楼', '3号楼', '4号楼']
        ]);
        let checkboxFieldProps = {
            data: [
                {
                    checked: false,
                    text: (<span>同意<a href="javascript:;">《阿里巴巴访客协议》</a></span>),
                    disable: false
                }
            ],
            onChange: (item, index, AllData) => {
                t.handleChange('checked');
            }
        };
        let radioFieldProps = {
            data: [
                {
                    checked: true,
                    text: "杭州",
                    disable: false,
                    value: 'default'
                },
                {
                    checked: false,
                    text: "北京",
                    disable: false,
                    value: 'dd'
                },
                {
                    checked: false,
                    text: "上海",
                    disable: false,
                    value: 'blue'
                }
            ],
            onChange: function (value, index, data) {
               console.log('...');
            }
        };
        this.state = {
            dates: dates.data,
            monthArray: monthArray,
            relations: relations,
            buildings: buildings.data,
            required1: '',
            required2: dates.value,
            required3: dates.value,
            required5: 'Alice',
            required6: '13212321232',
            required7: buildings.value,
            required8: '',
            optional9: false,
            optional10: true,
            optional11: '',
            disabled: true,
            checkboxFieldProps: checkboxFieldProps,
            radioFieldProps: radioFieldProps,
            checked: true
        };
    }

    handleChange(label, value) {
        let t = this;
        t.setState({
            [label]: value
        }, () => {
            let disabled = false;
            for (let key in t.state) {
                if (/^required\d+$/.test(key) && !t.state[key]) {
                    disabled = true;
                    break;
                }
            }
            if (!t.state.checked) {
                disabled = true;
            }
            if (disabled !== t.state.disabled) {
                t.setState({
                    disabled: disabled
                });
            }
        });
    }

    handleClick() {
        for (let key in this.state) {
            if (/^required\d+$/.test(key) && !this.state[key]) {
                Toast.show({
                    type: 'error',
                    content: '请填写必填项',
                    onHide: function () {
                    }
                });
                return;
            }
        }
        Toast.show({
            type: 'error',
            content: '提交出错'
        });
    }

    render() {
        let t = this;
        return (
            <div className="page-form">
                <div>
                    <Note message='10.1 - 10.8 园区封园，不接受入园申请，请提前做好准备' type='warning' closeText='查看详情'/>
                </div>

                <Group>
                    <Group.Head>必填</Group.Head>
                    <Group.List lineIndent={18}>
                        <TextField label="来访单位" placeholder="请输入" value={t.state.required1}
                                   onChange={t.handleChange.bind(t, 'required1')}/>
                        <SelectField label="来访目的" options={t.state.relations} value={t.state.required4}
                                     onSelect={t.handleChange.bind(t, 'required4')}/>
                        <TextField label="访客姓名" placeholder="请输入" value={t.state.required5}
                                   onChange={t.handleChange.bind(t, 'required5')}/>
                        <TextField label="访客手机" placeholder="请输入" value={t.state.required6}
                                   onChange={t.handleChange.bind(t, 'required6')}/>
                        <TextField label="来访人数" placeholder="请输入" value={t.state.required8}
                                   onChange={t.handleChange.bind(t, 'required8')}/>
                        <SwitchField label="进入工作区" on={t.state.optional9}
                                     onChange={t.handleChange.bind(t, 'optional9')}/>
                        <SwitchField label="WIFI" on={t.state.optional10}
                                     onChange={t.handleChange.bind(t, 'optional10')}/>
                    </Group.List>
                </Group>
                <Group>
                    <Group.Head>地区</Group.Head>
                        <RadioField lineIndent={18} {...t.state.radioFieldProps} />
                </Group>
                <Group>
                    <Group.Head>选填</Group.Head>
                    <Group.List lineIndent={18}>
                        <TextareaField label="备注" minRows={3} placeholder="请输入" value={t.state.optional11}
                                       onChange={t.handleChange.bind(t, 'optional11')}/>
                    </Group.List>
                </Group>
                <Group>
                    <Group.Head>必填</Group.Head>
                    <CheckboxField className="t-MR10" {...t.state.checkboxFieldProps}/>
                </Group>
                <div style={{padding: '30px 15px'}}>
                    <Button type="primary" onClick={this.handleClick.bind(this)}>提交</Button>
                </div>
            </div>
        )
    }
}

module.exports = Page;
