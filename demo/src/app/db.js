// See https://github.com/Jias/natty-fetch for more details.
const DBContext = new NattyDB.Context({
    mockUrlPrefix: '/mock/',
    urlPrefix: '/',
    mock: true,
    // jsonp: true,
    withCredentials: false,
    traditional: true,
    data: {
        _tb_token_: ''
    },
    timeout: 5000,
    fit: function(response) {
        return {
            success: response.success,
            content: response.content,
            error: {
                errorMsg: response.errorMsg,
                errorCode: response.errorCode,
                errorLevel: response.errorLevel
            }
        }
    }
});

DBContext.create('SomeModuleAPI', {
    getSomeInfo: {
        mockUrl: 'query/getSomeInfo.json',
        url: 'query/getSomeInfo.json'
    }
});

module.exports = DBContext;
