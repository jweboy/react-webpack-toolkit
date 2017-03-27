export default {
    getRequest: (param, succFn, errFn) => {
        const xhr = new XMLHttpRequest();

        xhr.onabort = function() {
            errFn(xhr.status, "网络错误,请稍候重试");
        };
        xhr.errFn = function() {
            errFn(xhr.status, "当前网络状态异常");
        };
        xhr.onload = function() {
            // console.log(param.url + ":" + xhr.responseText);
            succFn(xhr.responseText);
        };
        xhr.ontimeout = function() {
            errFn(xhr.status, "网络超时，请检查网络");
        };

        xhr.open(param.method, param.url);

        switch (param.method) {
            case 'get':
                xhr.send();
                break;
            case 'post':
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send();
                break;
            default:
                xhr.send();
                break;
        }
    }
};
