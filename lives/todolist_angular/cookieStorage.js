var cookieStorage = ( function(){
    // ��������Զ� cookie ����Ч�ں�������������
    var config = {
        maxAge : 24*3600, // ������������Ҳ������ 'auto'��������Ϊ 'auto' ʱ����Ч��ֱ��������ر�
        path : '/'
    }
    // ��ȡ���е�cookie
    // ��ȡ����ϸ�ڰ�װ��һ��������
    // ��������Ⱦ��㻷��
    // ������ʱִ�в�����һ������
    // �ö������Ժ�ֵ���ǵ�ǰ cookie ����ֵ�ԣ�������ģ���ڲ���ά��
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
    // ����cookie
    var setItem = function( key, value ){
        cookie[ key ] = value;
        var _cookie = key + '=' + encodeURIComponent( value ); // ��ֵ���б��룬������ַǷ��ַ�
	// ������Ч��
        if( config.maxAge !== 'auto' ){
            _cookie += '; max-age=' + config.maxAge;
        }
        // ����������
        if( config.path ){
            _cookie += '; path=' + config.path;
        }
        // ����cookie
        document.cookie = _cookie;
    }
    // ��ȡcookie
    var getItem = function( key ){
        return cookie[ key ] || null;
    }
    // ɾ��cookie
    var removeItem = function( key ){
        if( key in cookie ){
            delete cookie[ key ]; // ���ڲ�ά����cookie������ɾ��ָ��������
        }
        document.cookie = key + '=; max-age=0'; // ��cookie����Ч������Ϊ0����ɾ��cookie
    }
    // �������cookie
    var clear = function(){
        for( var key in cookie ){
            document.cookie = key + '=;max-age=0';
        }
        cookie = {};
    }
    // �ṩ�ӿ�
    return {
        setItem : setItem,
        getItem : getItem,
        removeItem : removeItem,
        clear : clear
    }
}() );