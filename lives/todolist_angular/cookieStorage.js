var cookieStorage = ( function(){
    // 在这里可以对 cookie 的有效期和作用域做配置
    var config = {
        maxAge : 24*3600, // 可以是秒数，也可以是 'auto'，当设置为 'auto' 时，有效期直到浏览器关闭
        path : '/'
    }
    // 获取现有的cookie
    // 获取过程细节包装在一个函数中
    // 避免了污染外层环境
    // 函数即时执行并返回一个对象
    // 该对象属性和值就是当前 cookie 的名值对，并将在模块内部被维护
    var cookie = ( function(){
        var cookie = {};
        var all = document.cookie;
        if( all === '' ){
            return cookie;
        }
        var pairs = all.split( '; ' );
        for( var i = 0, len = pairs.length;i < len; i += 1 ){
            var pos = pairs[ i ].indexOf( '=' );
            var key = pairs[ i ].substring( 0, pos );
            var value = pairs[ i ].substring( pos + 1 );
            value = decodeURIComponent( value );
            cookie[ key ] = value;
        }
        return cookie;
    }() );
    // 设置cookie
    var setItem = function( key, value ){
        cookie[ key ] = value;
        var _cookie = key + '=' + encodeURIComponent( value ); // 对值进行编码，避免出现非法字符
	// 设置有效期
        if( config.maxAge !== 'auto' ){
            _cookie += '; max-age=' + config.maxAge;
        }
        // 设置作用域
        if( config.path ){
            _cookie += '; path=' + config.path;
        }
        // 建立cookie
        document.cookie = _cookie;
    }
    // 获取cookie
    var getItem = function( key ){
        return cookie[ key ] || null;
    }
    // 删除cookie
    var removeItem = function( key ){
        if( key in cookie ){
            delete cookie[ key ]; // 从内部维护的cookie对象中删除指定的属性
        }
        document.cookie = key + '=; max-age=0'; // 将cookie的有效期设置为0就是删除cookie
    }
    // 清除所有cookie
    var clear = function(){
        for( var key in cookie ){
            document.cookie = key + '=;max-age=0';
        }
        cookie = {};
    }
    // 提供接口
    return {
        setItem : setItem,
        getItem : getItem,
        removeItem : removeItem,
        clear : clear
    }
}() );