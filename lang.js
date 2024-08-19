/ Аналог РНР-функции str_replace
 
function str_replace( search, replace, subject ) {
 
  if ( !( replace instanceof Array ) ) {
    replace = new Array( replace );
    if ( search instanceof Array ) {
      while ( search.length > replace.length ) {
        replace[ replace.length ] = replace[ 0 ];
      }
    }
  }
 
  if ( !( search instanceof Array ) ) search = new Array( search );
  while ( search.length > replace.length ) {
    replace[ replace.length ] = '';
  }
 
  if ( subject instanceof Array ) {
    for ( k in subject ) {
      subject[ k ] = str_replace( search, replace, subject[ k ] );
    }
    return subject;
  }
 
  for ( var k = 0; k - 1 ) {
    subject = subject.replace( search[ k ], replace[ k ] );
    i = subject.indexOf( search[ k ], i );
  }
}
 
return subject;
 
}
 
// Аналог РНР-функции parse_url
function parse_url( str, component ) {
 
  var o = {
      strictMode: false,
      key: [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ],
      q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]<em>)=?([^&]</em > ) / g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]<em>):?([^:@]</em > ) ) ? @ ) ? ( [ ^: \/?#]<em>)(?::(\d</em > ) ) ? ) ) ? ( ( ( ( ? : [ ^ ? #\/]<em>\/)</em > )( [ ^ ? # ] < em > ) )( ? : \ ? ( [ ^ # ] < /em>))?(?:#(.<em>))?)/,
      loose: /^(?:(?![^:@]+:[^:@\/]</em > @ )( [ ^: \/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]<em>):?([^:@]</em > ) ) ? @ ) ? ( [ ^: \/?#]<em>)(?::(\d</em > ) ) ? )( ( ( \/(?:<a href="?![^?#\/]*.[^?#\/.]+(?:[?#]|$)">^?#</a > ) < em > \/?)?([^?#\/]</em > ) )( ? : \ ? ( [ ^ # ] < em > ) ) ? ( ? : #( . < /em>))?)/ // Added one optional slash to post-protocol to catch file:/// (should restrict this)
      }
    };
 
    var m = o.parser[ o.strictMode ? "strict" : "loose" ].exec( str ),
      uri = {},
      i = 14;
    while ( i-- ) {
      uri[ o.key[ i ] ] = m[ i ] || "";
    }
    switch ( component ) {
    case 'PHP_URL_SCHEME':
      return uri.protocol;
    case 'PHP_URL_HOST':
      return uri.host;
    case 'PHP_URL_PORT':
      return uri.port;
    case 'PHP_URL_USER':
      return uri.user;
    case 'PHP_URL_PASS':
      return uri.password;
    case 'PHP_URL_PATH':
      return uri.path;
    case 'PHP_URL_QUERY':
      return uri.query;
    case 'PHP_URL_FRAGMENT':
      return uri.anchor;
    default:
      var retArr = {};
      if ( uri.protocol !== '' ) {
        retArr.scheme = uri.protocol;
      }
      if ( uri.host !== '' ) {
        retArr.host = uri.host;
      }
      if ( uri.port !== '' ) {
        retArr.port = uri.port;
      }
      if ( uri.user !== '' ) {
        retArr.user = uri.user;
      }
      if ( uri.password !== '' ) {
        retArr.pass = uri.password;
      }
      if ( uri.path !== '' ) {
        retArr.path = uri.path;
      }
      if ( uri.query !== '' ) {
        retArr.query = uri.query;
      }
      if ( uri.anchor !== '' ) {
        retArr.fragment = uri.anchor;
      }
      return retArr;
    }
  }
 
  // Собственно, само переключение
  function switch_language( from, to ) {
    // Если языки совпадают - пропустить
    if ( from == to ) return false;
    // Получить УРЛ
    var url = document.location.href;
    // Распарсить
    var purl = parse_url( url );
    // Взять ток путь
    var path = purl.path;
    var nurl;
    // Вариант для главной страницы
    if ( path == '/' ) {
      nurl = url + to + '/';
      // Для внутренних страниц
    } else {
      nurl = str_replace( '/' + from + '/', '/' + to + '/', url );
      //nurl = url.replace(/from/, to);
    }
    // Переход по новому адресу
    document.location.href = nurl;
    return false;
  }