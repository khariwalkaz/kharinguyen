$['getScript']('../[DATA]/[JS]/[LIB]/jquery.xdomainajax.js');
var fulllist = {
    "\x6D\x79\x75\x73\x65\x72\x61\x67\x65\x6E\x74": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Show current browser User-Agent',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>myuseragent</b>\' without any argument.'
    },
    "\x6D\x79\x69\x70": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Show current IP Address and IP Informations',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>myip</b>\' without any argument.'
    },
    "\x70\x69\x6E\x67": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Ping tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>ping</b> hostname'
    },
    "\x74\x72\x61\x63\x65\x72\x6F\x75\x74\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Traceroute tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>traceroute</b> hostname'
    },
    "\x69\x70\x6C\x6F\x6F\x6B\x75\x70": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'IP Lookup',
        "\x4D\x41\x4E": '<b class=\'hlight\'>iplookup</b> hostname'
    },
    "\x72\x65\x76\x65\x72\x73\x65\x69\x70": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Reverse ip to find out which site hosted on same IP',
        "\x4D\x41\x4E": '<b class=\'hlight\'>reverseip</b> hostname'
    },
    "\x64\x6E\x73\x72\x65\x63\x6F\x72\x64": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'DNS Record lookup tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>dnsrecord</b> domain'
    },
    "\x77\x68\x6F\x69\x73": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Whois domain',
        "\x4D\x41\x4E": '<b class=\'hlight\'>whois</b> domain'
    },
    "\x6D\x64\x35": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Generate md5 hash',
        "\x4D\x41\x4E": '<b class=\'hlight\'>md5</b> text'
    },
    "\x62\x61\x73\x65\x36\x34\x65\x6E\x63\x6F\x64\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Base64 Encoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>base64encode</b> text'
    },
    "\x62\x61\x73\x65\x36\x34\x64\x65\x63\x6F\x64\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Base64 Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>base64decode</b> text'
    },
    "\x72\x6F\x74\x31\x33": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Rot13+Rot5 Encoder/Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>rot13</b> text'
    },
    "\x72\x6F\x74\x34\x37": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Rot47 Encoder/Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>rot47</b> text'
    },
    "\x72\x61\x6E\x64\x6F\x6D\x70\x61\x73\x73": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Generate random password',
        "\x4D\x41\x4E": '<b class=\'hlight\'>randompass</b> n'
    },
    "\x72\x61\x6E\x64\x6F\x6D\x69\x64\x65\x6E\x74\x69\x74\x79": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Generate random identity',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>randomidentity</b>\' without any argument.'
    }
};
(function(_0xf2a4x2) {
    _0xf2a4x2['fn']['disableInput'] = function() {
        _0xf2a4x2('#loading')['show']();
        _0xf2a4x2(this)['prop']('readonly', true);
        return true
    };
    _0xf2a4x2['fn']['enableInput'] = function() {
        _0xf2a4x2('#loading')['hide']();
        _0xf2a4x2(this)['prop']('readonly', false);
        return true
    }
})(jQuery);

function ltrim(_0xf2a4x4) {
    return _0xf2a4x4['replace'](/^\s+/, '')
}

function rtrim(_0xf2a4x4) {
    return _0xf2a4x4['replace'](/\s+$/, '')
}

function escapeRegExp(_0xf2a4x7) {
    return _0xf2a4x7['replace'](/([.*+?^=!:${}()|\[\]\/\\])/g, '$1')
}

function replaceAll(_0xf2a4x7, _0xf2a4x9, _0xf2a4xa) {
    return _0xf2a4x7['replace'](new RegExp(escapeRegExp(_0xf2a4x9), 'g'), _0xf2a4xa)
}
Object['size'] = function(_0xf2a4xb) {
    var _0xf2a4xc = 0,
        _0xf2a4xd;
    for (_0xf2a4xd in _0xf2a4xb) {
        if (_0xf2a4xb['hasOwnProperty'](_0xf2a4xd)) {
            _0xf2a4xc++
        }
    };
    return _0xf2a4xc
};

function htmlspecialchars(_0xf2a4x7) {
    if (typeof(_0xf2a4x7) == 'string') {
        _0xf2a4x7 = _0xf2a4x7['replace'](/&/g, '&amp;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/"/g, '&quot;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/'/g, '&#039;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/</g, '&lt;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/>/g, '&gt;')
    };
    return _0xf2a4x7
}

function GetSelectedText() {
    if (window['getSelection']) {
        var _0xf2a4x10 = window['getSelection']();
        return _0xf2a4x10.toString()
    } else {
        if (document['selection']['createRange']) {
            var _0xf2a4x10 = document['selection']['createRange']();
            return _0xf2a4x10['text']
        }
    }
}

function fixparameter(_0xf2a4x12) {
    var _0xf2a4x13 = _0xf2a4x12;
    while (_0xf2a4x13['search']('  ') > 0) {
        _0xf2a4x13 = replaceAll(_0xf2a4x13, '  ', ' ')
    };
    return _0xf2a4x13
}

function _ret(_0xf2a4x13, _0xf2a4x15) {
    if (_0xf2a4x15 === undefined) {
        _0xf2a4x15 = true
    };
    if (_0xf2a4x15) {
        txt = htmlspecialchars(_0xf2a4x13)
    } else {
        txt = _0xf2a4x13
    };
    $('#result')['append']('<pre>' + txt + '</pre>');
    $('#container')['scrollTop']($('#container')['get'](0)['scrollHeight']);
    if ($['browser']['mobile']) {
        fixpos()
    }
}

function _parse(_0xf2a4x17) {
    _cmd = ltrim(_0xf2a4x17);
    $('#console')['val']('');
    if (_cmd['length'] === 0 || _cmd == ' ') {
        $('#container')['scrollTop']($('#container')['get'](0)['scrollHeight']);
        if ($['browser']['mobile']) {
            fixpos()
        }
    } else {
        __cmd = htmlspecialchars(_cmd);
        $('#result')['append']('<p class=\'cmd\'>' + __cmd + '</p>');
        args = _cmd['split'](' ');
        _exe = args[0];
        _exe = _exe['toLowerCase']();
        _parameters = _cmd['substr'](_exe['length'] + 1, _cmd['length'] - (_exe['length'] + 1));
        switch (_exe) {
            default: _ret('Command not supported. Type \'<b class=\'hlight\'>help</b>\' for more info.', false);
            break;
            case 'clear':
                    _clear();
                break;
            case 'help':
                    _help();
                break;
            case 'reload':
                    _reload();
                break;
            case 'exit':
                    _exit();
                break;
            case 'showall':
                    $['getScript']('../[DATA]/[JS]/[APP]/_showall.js', function() {
                    _showall()
                });
                break;
            case 'myuseragent':
                    $['getScript']('../[DATA]/[JS]/[APP]/_myuseragent.js', function() {
                    _myuseragent()
                });
                break;
            case 'myip':
                    $['getScript']('../[DATA]/[JS]/[APP]/_myip.js', function() {
                    _myip()
                });
                break;
            case 'man':
                    $['getScript']('../[DATA]/[JS]/[APP]/_man.js', function() {
                    _man(_parameters)
                });
                break;
            case 'ping':
                    $['getScript']('../[DATA]/[JS]/[APP]/_ping.js', function() {
                    _ping(_parameters)
                });
                break;
            case 'traceroute':
                    $['getScript']('../[DATA]/[JS]/[APP]/_traceroute.js', function() {
                    _traceroute(_parameters)
                });
                break;
            case 'iplookup':
                    $['getScript']('../[DATA]/[JS]/[APP]/_iplookup.js', function() {
                    _iplookup(_parameters)
                });
                break;
            case 'reverseip':
                    $['getScript']('../[DATA]/[JS]/[APP]/_reverseip.js', function() {
                    _reverseip(_parameters)
                });
                break;
            case 'dnsrecord':
                    $['getScript']('../[DATA]/[JS]/[APP]/_dnsrecord.js', function() {
                    _dnsrecord(_parameters)
                });
                break;
            case 'whois':
                    $['getScript']('../[DATA]/[JS]/[APP]/_whois.js', function() {
                    _whois(_parameters)
                });
                break;
            case 'randomidentity':
                    $['getScript']('../[DATA]/[JS]/[APP]/_randomidentity.js', function() {
                    _randomidentity()
                });
                break;
            case 'md5':
                    $['getScript']('../[DATA]/[JS]/[APP]/_md5.js', function() {
                    _md5(_parameters)
                });
                break;
            case 'randompass':
                    $['getScript']('../[DATA]/[JS]/[APP]/_randompass.js', function() {
                    _randompass(_parameters)
                });
                break;
            case 'base64encode':
                    $['getScript']('../[DATA]/[JS]/[APP]/_base64.js', function() {
                    _base64encode(_parameters)
                });
                break;
            case 'base64decode':
                    $['getScript']('../[DATA]/[JS]/[APP]/_base64.js', function() {
                    _base64decode(_parameters)
                });
                break;
            case 'rot13':
                    $['getScript']('../[DATA]/[JS]/[APP]/_rot13.js', function() {
                    _rot13(_parameters)
                });
                break;
            case 'rot47':
                    $['getScript']('../[DATA]/[JS]/[APP]/_rot47.js', function() {
                    _rot47(_parameters)
                });
                break
        }
    }
}

function _clear() {
    $('#result')['empty']();
    if ($['browser']['mobile']) {
        fixpos()
    }
}

function _reload() {
    location['reload']()
}

function _exit() {
    window['close']()
}

function _help() {
    helptxt = '\x0D<font color=\'#E0A394\'>[Author]<br>&nbsp;&nbsp;&nbsp;Lina Sensei<br>\x0D[Contact]<br>&nbsp;&nbsp;&nbsp;Facebook: ~/LinaSS.BATeam<br>&nbsp;&nbsp;&nbsp;Mail: mail[at]vynghia.com</font><br><br>\x0DType `<b class=\'hlight\'>showall</b>\' to show the list of tools.<br>\x0DType `<b class=\'hlight\'>man</b> name\' to show manual of command `name\'.<br>\x0DTo reload console, you can type `<b class=\'hlight\'>reload</b>\'. Type `<b class=\'hlight\'>clear</b>\' to clear console and `<b class=\'hlight\'>exit</b>\' to close console.\x0D	';
    _ret(helptxt, false)
}
var _0x1fd5 = ['../[DATA]/[JS]/[LIB]/jquery.xdomainajax.js', 'getScript', 'Show current browser User-Agent', 'Type \'<b class=\'hlight\'>myuseragent</b>\' without any argument.', 'Show current IP Address and IP Informations', 'Type \'<b class=\'hlight\'>myip</b>\' without any argument.', 'Ping tool', '<b class=\'hlight\'>ping</b> hostname', 'Traceroute tool', '<b class=\'hlight\'>traceroute</b> hostname', 'IP Lookup', '<b class=\'hlight\'>iplookup</b> hostname', 'Reverse ip to find out which site hosted on same IP', '<b class=\'hlight\'>reverseip</b> hostname', 'DNS Record lookup tool', '<b class=\'hlight\'>dnsrecord</b> domain', 'Whois domain', '<b class=\'hlight\'>whois</b> domain', 'Generate md5 hash', '<b class=\'hlight\'>md5</b> text', 'Base64 Encoder', '<b class=\'hlight\'>base64encode</b> text', 'Base64 Decoder', '<b class=\'hlight\'>base64decode</b> text', 'Rot13+Rot5 Encoder/Decoder', '<b class=\'hlight\'>rot13</b> text', 'Rot47 Encoder/Decoder', '<b class=\'hlight\'>rot47</b> text', 'Generate random password', '<b class=\'hlight\'>randompass</b> n', 'Generate random identity', 'Type \'<b class=\'hlight\'>randomidentity</b>\' without any argument.', 'disableInput', 'fn', 'show', '#loading', 'readonly', 'prop', 'enableInput', 'hide', '', 'replace', '$1', 'g', 'size', 'hasOwnProperty', 'string', '&amp;', '&quot;', '&#039;', '&lt;', '&gt;', 'getSelection', 'createRange', 'selection', 'text', '  ', ' ', 'search', '<pre>', '</pre>', 'append', '#result', 'scrollHeight', 'get', '#container', 'scrollTop', 'mobile', 'browser', 'val', '#console', 'length', '<p class=\'cmd\'>', '</p>', 'split', 'toLowerCase', 'substr', 'Command not supported. Type \'<b class=\'hlight\'>help</b>\' for more info.', 'clear', 'help', 'reload', 'exit', '../[DATA]/[JS]/[APP]/_showall.js', 'showall', '../[DATA]/[JS]/[APP]/_myuseragent.js', 'myuseragent', '../[DATA]/[JS]/[APP]/_myip.js', 'myip', '../[DATA]/[JS]/[APP]/_man.js', 'man', '../[DATA]/[JS]/[APP]/_ping.js', 'ping', '../[DATA]/[JS]/[APP]/_traceroute.js', 'traceroute', '../[DATA]/[JS]/[APP]/_iplookup.js', 'iplookup', '../[DATA]/[JS]/[APP]/_reverseip.js', 'reverseip', '../[DATA]/[JS]/[APP]/_dnsrecord.js', 'dnsrecord', '../[DATA]/[JS]/[APP]/_whois.js', 'whois', '../[DATA]/[JS]/[APP]/_randomidentity.js', 'randomidentity', '../[DATA]/[JS]/[APP]/_md5.js', 'md5', '../[DATA]/[JS]/[APP]/_randompass.js', 'randompass', '../[DATA]/[JS]/[APP]/_base64.js', 'base64encode', 'base64decode', '../[DATA]/[JS]/[APP]/_rot13.js', 'rot13', '../[DATA]/[JS]/[APP]/_rot47.js', 'rot47', 'empty', 'close', '\x0D<font color=\'#E0A394\'>[Author]<br>&nbsp;&nbsp;&nbsp;Lina Sensei<br>\x0D[Contact]<br>&nbsp;&nbsp;&nbsp;Facebook: ~/LinaSS.BATeam<br>&nbsp;&nbsp;&nbsp;Mail: mail[at]vynghia.com</font><br><br>\x0DType `<b class=\'hlight\'>showall</b>\' to show the list of tools.<br>\x0DType `<b class=\'hlight\'>man</b> name\' to show manual of command `name\'.<br>\x0DTo reload console, you can type `<b class=\'hlight\'>reload</b>\'. Type `<b class=\'hlight\'>clear</b>\' to clear console and `<b class=\'hlight\'>exit</b>\' to close console.\x0D	'];
$['getScript']('../[DATA]/[JS]/[LIB]/jquery.xdomainajax.js');
var fulllist = {
    "\x6D\x79\x75\x73\x65\x72\x61\x67\x65\x6E\x74": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Show current browser User-Agent',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>myuseragent</b>\' without any argument.'
    },
    "\x6D\x79\x69\x70": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Show current IP Address and IP Informations',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>myip</b>\' without any argument.'
    },
    "\x70\x69\x6E\x67": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Ping tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>ping</b> hostname'
    },
    "\x74\x72\x61\x63\x65\x72\x6F\x75\x74\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Traceroute tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>traceroute</b> hostname'
    },
    "\x69\x70\x6C\x6F\x6F\x6B\x75\x70": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'IP Lookup',
        "\x4D\x41\x4E": '<b class=\'hlight\'>iplookup</b> hostname'
    },
    "\x72\x65\x76\x65\x72\x73\x65\x69\x70": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Reverse ip to find out which site hosted on same IP',
        "\x4D\x41\x4E": '<b class=\'hlight\'>reverseip</b> hostname'
    },
    "\x64\x6E\x73\x72\x65\x63\x6F\x72\x64": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'DNS Record lookup tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>dnsrecord</b> domain'
    },
    "\x77\x68\x6F\x69\x73": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Whois domain',
        "\x4D\x41\x4E": '<b class=\'hlight\'>whois</b> domain'
    },
    "\x6D\x64\x35": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Generate md5 hash',
        "\x4D\x41\x4E": '<b class=\'hlight\'>md5</b> text'
    },
    "\x62\x61\x73\x65\x36\x34\x65\x6E\x63\x6F\x64\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Base64 Encoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>base64encode</b> text'
    },
    "\x62\x61\x73\x65\x36\x34\x64\x65\x63\x6F\x64\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Base64 Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>base64decode</b> text'
    },
    "\x72\x6F\x74\x31\x33": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Rot13+Rot5 Encoder/Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>rot13</b> text'
    },
    "\x72\x6F\x74\x34\x37": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Rot47 Encoder/Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>rot47</b> text'
    },
    "\x72\x61\x6E\x64\x6F\x6D\x70\x61\x73\x73": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Generate random password',
        "\x4D\x41\x4E": '<b class=\'hlight\'>randompass</b> n'
    },
    "\x72\x61\x6E\x64\x6F\x6D\x69\x64\x65\x6E\x74\x69\x74\x79": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Generate random identity',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>randomidentity</b>\' without any argument.'
    }
};
(function(_0xf2a4x2) {
    _0xf2a4x2['fn']['disableInput'] = function() {
        _0xf2a4x2('#loading')['show']();
        _0xf2a4x2(this)['prop']('readonly', true);
        return true
    };
    _0xf2a4x2['fn']['enableInput'] = function() {
        _0xf2a4x2('#loading')['hide']();
        _0xf2a4x2(this)['prop']('readonly', false);
        return true
    }
})(jQuery);

function ltrim(_0xf2a4x4) {
    return _0xf2a4x4['replace'](/^\s+/, '')
}

function rtrim(_0xf2a4x4) {
    return _0xf2a4x4['replace'](/\s+$/, '')
}

function escapeRegExp(_0xf2a4x7) {
    return _0xf2a4x7['replace'](/([.*+?^=!:${}()|\[\]\/\\])/g, '$1')
}

function replaceAll(_0xf2a4x7, _0xf2a4x9, _0xf2a4xa) {
    return _0xf2a4x7['replace'](new RegExp(escapeRegExp(_0xf2a4x9), 'g'), _0xf2a4xa)
}
Object['size'] = function(_0xf2a4xb) {
    var _0xf2a4xc = 0,
        _0xf2a4xd;
    for (_0xf2a4xd in _0xf2a4xb) {
        if (_0xf2a4xb['hasOwnProperty'](_0xf2a4xd)) {
            _0xf2a4xc++
        }
    };
    return _0xf2a4xc
};

function htmlspecialchars(_0xf2a4x7) {
    if (typeof(_0xf2a4x7) == 'string') {
        _0xf2a4x7 = _0xf2a4x7['replace'](/&/g, '&amp;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/"/g, '&quot;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/'/g, '&#039;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/</g, '&lt;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/>/g, '&gt;')
    };
    return _0xf2a4x7
}

function GetSelectedText() {
    if (window['getSelection']) {
        var _0xf2a4x10 = window['getSelection']();
        return _0xf2a4x10.toString()
    } else {
        if (document['selection']['createRange']) {
            var _0xf2a4x10 = document['selection']['createRange']();
            return _0xf2a4x10['text']
        }
    }
}

function fixparameter(_0xf2a4x12) {
    var _0xf2a4x13 = _0xf2a4x12;
    while (_0xf2a4x13['search']('  ') > 0) {
        _0xf2a4x13 = replaceAll(_0xf2a4x13, '  ', ' ')
    };
    return _0xf2a4x13
}

function _ret(_0xf2a4x13, _0xf2a4x15) {
    if (_0xf2a4x15 === undefined) {
        _0xf2a4x15 = true
    };
    if (_0xf2a4x15) {
        txt = htmlspecialchars(_0xf2a4x13)
    } else {
        txt = _0xf2a4x13
    };
    $('#result')['append']('<pre>' + txt + '</pre>');
    $('#container')['scrollTop']($('#container')['get'](0)['scrollHeight']);
    if ($['browser']['mobile']) {
        fixpos()
    }
}

function _parse(_0xf2a4x17) {
    _cmd = ltrim(_0xf2a4x17);
    $('#console')['val']('');
    if (_cmd['length'] === 0 || _cmd == ' ') {
        $('#container')['scrollTop']($('#container')['get'](0)['scrollHeight']);
        if ($['browser']['mobile']) {
            fixpos()
        }
    } else {
        __cmd = htmlspecialchars(_cmd);
        args = _cmd['split'](' ');
        _exe = args[0];
        _exe = _exe['toLowerCase']();
        _parameters = _cmd['substr'](_exe['length'] + 1, _cmd['length'] - (_exe['length'] + 1));
        switch (_exe) {
            default: _ret('Command not supported. Type \'<b class=\'hlight\'>help</b>\' for more info.', false);
            break;
            case 'clear':
                    _clear();
                break;
            case 'help':
                    _help();
                break;
            case 'reload':
                    _reload();
                break;
            case 'exit':
                    _exit();
                break;
            case 'showall':
                    $['getScript']('../[DATA]/[JS]/[APP]/_showall.js', function() {
                    _showall()
                });
                break;
            case 'myuseragent':
                    $['getScript']('../[DATA]/[JS]/[APP]/_myuseragent.js', function() {
                    _myuseragent()
                });
                break;
            case 'myip':
                    $['getScript']('../[DATA]/[JS]/[APP]/_myip.js', function() {
                    _myip()
                });
                break;
            case 'man':
                    $['getScript']('../[DATA]/[JS]/[APP]/_man.js', function() {
                    _man(_parameters)
                });
                break;
            case 'ping':
                    $['getScript']('../[DATA]/[JS]/[APP]/_ping.js', function() {
                    _ping(_parameters)
                });
                break;
            case 'traceroute':
                    $['getScript']('../[DATA]/[JS]/[APP]/_traceroute.js', function() {
                    _traceroute(_parameters)
                });
                break;
            case 'iplookup':
                    $['getScript']('../[DATA]/[JS]/[APP]/_iplookup.js', function() {
                    _iplookup(_parameters)
                });
                break;
            case 'reverseip':
                    $['getScript']('../[DATA]/[JS]/[APP]/_reverseip.js', function() {
                    _reverseip(_parameters)
                });
                break;
            case 'dnsrecord':
                    $['getScript']('../[DATA]/[JS]/[APP]/_dnsrecord.js', function() {
                    _dnsrecord(_parameters)
                });
                break;
            case 'whois':
                    $['getScript']('../[DATA]/[JS]/[APP]/_whois.js', function() {
                    _whois(_parameters)
                });
                break;
            case 'randomidentity':
                    $['getScript']('../[DATA]/[JS]/[APP]/_randomidentity.js', function() {
                    _randomidentity()
                });
                break;
            case 'md5':
                    $['getScript']('../[DATA]/[JS]/[APP]/_md5.js', function() {
                    _md5(_parameters)
                });
                break;
            case 'randompass':
                    $['getScript']('../[DATA]/[JS]/[APP]/_randompass.js', function() {
                    _randompass(_parameters)
                });
                break;
            case 'base64encode':
                    $['getScript']('../[DATA]/[JS]/[APP]/_base64.js', function() {
                    _base64encode(_parameters)
                });
                break;
            case 'base64decode':
                    $['getScript']('../[DATA]/[JS]/[APP]/_base64.js', function() {
                    _base64decode(_parameters)
                });
                break;
            case 'rot13':
                    $['getScript']('../[DATA]/[JS]/[APP]/_rot13.js', function() {
                    _rot13(_parameters)
                });
                break;
            case 'rot47':
                    $['getScript']('../[DATA]/[JS]/[APP]/_rot47.js', function() {
                    _rot47(_parameters)
                });
                break
        }
    }
}

function _clear() {
    $('#result')['empty']();
    if ($['browser']['mobile']) {
        fixpos()
    }
}

function _reload() {
    location['reload']()
}

function _exit() {
    window['close']()
}

function _help() {
    helptxt = '\x0D<font color=\'#E0A394\'>[Author]<br>&nbsp;&nbsp;&nbsp;Lina Sensei<br>\x0D[Contact]<br>&nbsp;&nbsp;&nbsp;Facebook: ~/LinaSS.BATeam<br>&nbsp;&nbsp;&nbsp;Mail: mail[at]vynghia.com</font><br><br>\x0DType `<b class=\'hlight\'>showall</b>\' to show the list of tools.<br>\x0DType `<b class=\'hlight\'>man</b> name\' to show manual of command `name\'.<br>\x0DTo reload console, you can type `<b class=\'hlight\'>reload</b>\'. Type `<b class=\'hlight\'>clear</b>\' to clear console and `<b class=\'hlight\'>exit</b>\' to close console.\x0D	';
    _ret(helptxt, false)
}
var _0xde0e = ['../[DATA]/[JS]/[LIB]/jquery.xdomainajax.js', 'getScript', 'Show current browser User-Agent', 'Type \'<b class=\'hlight\'>myuseragent</b>\' without any argument.', 'Show current IP Address and IP Informations', 'Type \'<b class=\'hlight\'>myip</b>\' without any argument.', 'Ping tool', '<b class=\'hlight\'>ping</b> hostname', 'Traceroute tool', '<b class=\'hlight\'>traceroute</b> hostname', 'IP Lookup', '<b class=\'hlight\'>iplookup</b> hostname', 'Reverse ip to find out which site hosted on same IP', '<b class=\'hlight\'>reverseip</b> hostname', 'DNS Record lookup tool', '<b class=\'hlight\'>dnsrecord</b> domain', 'Whois domain', '<b class=\'hlight\'>whois</b> domain', 'Generate md5 hash', '<b class=\'hlight\'>md5</b> text', 'Base64 Encoder', '<b class=\'hlight\'>base64encode</b> text', 'Base64 Decoder', '<b class=\'hlight\'>base64decode</b> text', 'Rot13+Rot5 Encoder/Decoder', '<b class=\'hlight\'>rot13</b> text', 'Rot47 Encoder/Decoder', '<b class=\'hlight\'>rot47</b> text', 'Generate random password', '<b class=\'hlight\'>randompass</b> n', 'Generate random identity', 'Type \'<b class=\'hlight\'>randomidentity</b>\' without any argument.', 'disableInput', 'fn', 'show', '#loading', 'readonly', 'prop', 'enableInput', 'hide', '', 'replace', '$1', 'g', 'size', 'hasOwnProperty', 'string', '&amp;', '&quot;', '&#039;', '&lt;', '&gt;', 'getSelection', 'createRange', 'selection', 'text', '  ', ' ', 'search', '<pre>', '</pre>', 'append', '#result', 'scrollHeight', 'get', '#container', 'scrollTop', 'mobile', 'browser', 'val', '#console', 'length', '<p class=\'cmd\'>', '</p>', 'split', 'toLowerCase', 'substr', 'Command not supported. Type \'<b class=\'hlight\'>help</b>\' for more info.', 'clear', 'help', 'reload', 'exit', '../[DATA]/[JS]/[APP]/_showall.js', 'showall', '../[DATA]/[JS]/[APP]/_myuseragent.js', 'myuseragent', '../[DATA]/[JS]/[APP]/_myip.js', 'myip', '../[DATA]/[JS]/[APP]/_man.js', 'man', '../[DATA]/[JS]/[APP]/_ping.js', 'ping', '../[DATA]/[JS]/[APP]/_traceroute.js', 'traceroute', '../[DATA]/[JS]/[APP]/_iplookup.js', 'iplookup', '../[DATA]/[JS]/[APP]/_reverseip.js', 'reverseip', '../[DATA]/[JS]/[APP]/_dnsrecord.js', 'dnsrecord', '../[DATA]/[JS]/[APP]/_whois.js', 'whois', '../[DATA]/[JS]/[APP]/_randomidentity.js', 'randomidentity', '../[DATA]/[JS]/[APP]/_md5.js', 'md5', '../[DATA]/[JS]/[APP]/_randompass.js', 'randompass', '../[DATA]/[JS]/[APP]/_base64.js', 'base64encode', 'base64decode', '../[DATA]/[JS]/[APP]/_rot13.js', 'rot13', '../[DATA]/[JS]/[APP]/_rot47.js', 'rot47', 'empty', 'close', '\x0D<font color=\'#E0A394\'>[Author]<br>&nbsp;&nbsp;&nbsp;Lina Sensei<br>\x0D[Contact]<br>&nbsp;&nbsp;&nbsp;Facebook: ~/LinaSS.BATeam<br>&nbsp;&nbsp;&nbsp;Mail: mail[at]vynghia.com</font><br><br>\x0DType `<b class=\'hlight\'>showall</b>\' to show the list of tools.<br>\x0DType `<b class=\'hlight\'>man</b> name\' to show manual of command `name\'.<br>\x0DTo reload console, you can type `<b class=\'hlight\'>reload</b>\'. Type `<b class=\'hlight\'>clear</b>\' to clear console and `<b class=\'hlight\'>exit</b>\' to close console.\x0D	'];
$['getScript']('../[DATA]/[JS]/[LIB]/jquery.xdomainajax.js');
var fulllist = {
    "\x6D\x79\x75\x73\x65\x72\x61\x67\x65\x6E\x74": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Show current browser User-Agent',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>myuseragent</b>\' without any argument.'
    },
    "\x6D\x79\x69\x70": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Show current IP Address and IP Informations',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>myip</b>\' without any argument.'
    },
    "\x70\x69\x6E\x67": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Ping tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>ping</b> hostname'
    },
    "\x74\x72\x61\x63\x65\x72\x6F\x75\x74\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Traceroute tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>traceroute</b> hostname'
    },
    "\x69\x70\x6C\x6F\x6F\x6B\x75\x70": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'IP Lookup',
        "\x4D\x41\x4E": '<b class=\'hlight\'>iplookup</b> hostname'
    },
    "\x72\x65\x76\x65\x72\x73\x65\x69\x70": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Reverse ip to find out which site hosted on same IP',
        "\x4D\x41\x4E": '<b class=\'hlight\'>reverseip</b> hostname'
    },
    "\x64\x6E\x73\x72\x65\x63\x6F\x72\x64": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'DNS Record lookup tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>dnsrecord</b> domain'
    },
    "\x77\x68\x6F\x69\x73": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Whois domain',
        "\x4D\x41\x4E": '<b class=\'hlight\'>whois</b> domain'
    },
    "\x6D\x64\x35": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Generate md5 hash',
        "\x4D\x41\x4E": '<b class=\'hlight\'>md5</b> text'
    },
    "\x62\x61\x73\x65\x36\x34\x65\x6E\x63\x6F\x64\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Base64 Encoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>base64encode</b> text'
    },
    "\x62\x61\x73\x65\x36\x34\x64\x65\x63\x6F\x64\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Base64 Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>base64decode</b> text'
    },
    "\x72\x6F\x74\x31\x33": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Rot13+Rot5 Encoder/Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>rot13</b> text'
    },
    "\x72\x6F\x74\x34\x37": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Rot47 Encoder/Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>rot47</b> text'
    },
    "\x72\x61\x6E\x64\x6F\x6D\x70\x61\x73\x73": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Generate random password',
        "\x4D\x41\x4E": '<b class=\'hlight\'>randompass</b> n'
    },
    "\x72\x61\x6E\x64\x6F\x6D\x69\x64\x65\x6E\x74\x69\x74\x79": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Generate random identity',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>randomidentity</b>\' without any argument.'
    }
};
(function(_0xf2a4x2) {
    _0xf2a4x2['fn']['disableInput'] = function() {
        _0xf2a4x2('#loading')['show']();
        _0xf2a4x2(this)['prop']('readonly', true);
        return true
    };
    _0xf2a4x2['fn']['enableInput'] = function() {
        _0xf2a4x2('#loading')['hide']();
        _0xf2a4x2(this)['prop']('readonly', false);
        return true
    }
})(jQuery);

function ltrim(_0xf2a4x4) {
    return _0xf2a4x4['replace'](/^\s+/, '')
}

function rtrim(_0xf2a4x4) {
    return _0xf2a4x4['replace'](/\s+$/, '')
}

function escapeRegExp(_0xf2a4x7) {
    return _0xf2a4x7['replace'](/([.*+?^=!:${}()|\[\]\/\\])/g, '$1')
}

function replaceAll(_0xf2a4x7, _0xf2a4x9, _0xf2a4xa) {
    return _0xf2a4x7['replace'](new RegExp(escapeRegExp(_0xf2a4x9), 'g'), _0xf2a4xa)
}
Object['size'] = function(_0xf2a4xb) {
    var _0xf2a4xc = 0,
        _0xf2a4xd;
    for (_0xf2a4xd in _0xf2a4xb) {
        if (_0xf2a4xb['hasOwnProperty'](_0xf2a4xd)) {
            _0xf2a4xc++
        }
    };
    return _0xf2a4xc
};

function htmlspecialchars(_0xf2a4x7) {
    if (typeof(_0xf2a4x7) == 'string') {
        _0xf2a4x7 = _0xf2a4x7['replace'](/&/g, '&amp;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/"/g, '&quot;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/'/g, '&#039;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/</g, '&lt;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/>/g, '&gt;')
    };
    return _0xf2a4x7
}

function GetSelectedText() {
    if (window['getSelection']) {
        var _0xf2a4x10 = window['getSelection']();
        return _0xf2a4x10.toString()
    } else {
        if (document['selection']['createRange']) {
            var _0xf2a4x10 = document['selection']['createRange']();
            return _0xf2a4x10['text']
        }
    }
}

function fixparameter(_0xf2a4x12) {
    var _0xf2a4x13 = _0xf2a4x12;
    while (_0xf2a4x13['search']('  ') > 0) {
        _0xf2a4x13 = replaceAll(_0xf2a4x13, '  ', ' ')
    };
    return _0xf2a4x13
}

function _ret(_0xf2a4x13, _0xf2a4x15) {
    if (_0xf2a4x15 === undefined) {
        _0xf2a4x15 = true
    };
    if (_0xf2a4x15) {
        txt = htmlspecialchars(_0xf2a4x13)
    } else {
        txt = _0xf2a4x13
    };
    $('#result')['append']('<pre>' + txt + '</pre>');
    $('#container')['scrollTop']($('#container')['get'](0)['scrollHeight']);
    if ($['browser']['mobile']) {
        fixpos()
    }
}

function _parse(_0xf2a4x17) {
    _cmd = ltrim(_0xf2a4x17);
    $('#console')['val']('');
    if (_cmd['length'] === 0 || _cmd == ' ') {
        $('#container')['scrollTop']($('#container')['get'](0)['scrollHeight']);
        if ($['browser']['mobile']) {
            fixpos()
        }
    } else {
        __cmd = htmlspecialchars(_cmd);
        args = _cmd['split'](' ');
        _exe = args[0];
        _exe = _exe['toLowerCase']();
        _parameters = _cmd['substr'](_exe['length'] + 1, _cmd['length'] - (_exe['length'] + 1));
        switch (_exe) {
            default: _ret('Command not supported. Type \'<b class=\'hlight\'>help</b>\' for more info.', false);
            break;
			case 'khari':
                    _clear();
                break;
            case 'clear':
                    _clear();
                break;
            case 'help':
                    _help();
                break;
            case 'reload':
                    _reload();
                break;
            case 'exit':
                    _exit();
                break;
            case 'showall':
                    $['getScript']('../[DATA]/[JS]/[APP]/_showall.js', function() {
                    _showall()
                });
                break;
            case 'myuseragent':
                    $['getScript']('../[DATA]/[JS]/[APP]/_myuseragent.js', function() {
                    _myuseragent()
                });
                break;
            case 'myip':
                    $['getScript']('../[DATA]/[JS]/[APP]/_myip.js', function() {
                    _myip()
                });
                break;
            case 'man':
                    $['getScript']('../[DATA]/[JS]/[APP]/_man.js', function() {
                    _man(_parameters)
                });
                break;
            case 'ping':
                    $['getScript']('../[DATA]/[JS]/[APP]/_ping.js', function() {
                    _ping(_parameters)
                });
                break;
            case 'traceroute':
                    $['getScript']('../[DATA]/[JS]/[APP]/_traceroute.js', function() {
                    _traceroute(_parameters)
                });
                break;
            case 'iplookup':
                    $['getScript']('../[DATA]/[JS]/[APP]/_iplookup.js', function() {
                    _iplookup(_parameters)
                });
                break;
            case 'reverseip':
                    $['getScript']('../[DATA]/[JS]/[APP]/_reverseip.js', function() {
                    _reverseip(_parameters)
                });
                break;
            case 'dnsrecord':
                    $['getScript']('../[DATA]/[JS]/[APP]/_dnsrecord.js', function() {
                    _dnsrecord(_parameters)
                });
                break;
            case 'whois':
                    $['getScript']('../[DATA]/[JS]/[APP]/_whois.js', function() {
                    _whois(_parameters)
                });
                break;
            case 'randomidentity':
                    $['getScript']('../[DATA]/[JS]/[APP]/_randomidentity.js', function() {
                    _randomidentity()
                });
                break;
            case 'md5':
                    $['getScript']('../[DATA]/[JS]/[APP]/_md5.js', function() {
                    _md5(_parameters)
                });
                break;
            case 'randompass':
                    $['getScript']('../[DATA]/[JS]/[APP]/_randompass.js', function() {
                    _randompass(_parameters)
                });
                break;
            case 'base64encode':
                    $['getScript']('../[DATA]/[JS]/[APP]/_base64.js', function() {
                    _base64encode(_parameters)
                });
                break;
            case 'base64decode':
                    $['getScript']('../[DATA]/[JS]/[APP]/_base64.js', function() {
                    _base64decode(_parameters)
                });
                break;
            case 'rot13':
                    $['getScript']('../[DATA]/[JS]/[APP]/_rot13.js', function() {
                    _rot13(_parameters)
                });
                break;
            case 'rot47':
                    $['getScript']('../[DATA]/[JS]/[APP]/_rot47.js', function() {
                    _rot47(_parameters)
                });
                break
        }
    }
}
function _khari() {
    $('#result')['empty']();
    if ($['browser']['mobile']) {
        fixpos()
    }
}
function _clear() {
    $('#result')['empty']();
    if ($['browser']['mobile']) {
        fixpos()
    }
}

function _reload() {
    location['reload']()
}

function _exit() {
    window['close']()
}

function _help() {
    helptxt = '\x0D<font color=\'#E0A394\'>[Author]<br>&nbsp;&nbsp;&nbsp;Lina Sensei<br>\x0D[Contact]<br>&nbsp;&nbsp;&nbsp;Facebook: ~/LinaSS.BATeam<br>&nbsp;&nbsp;&nbsp;Mail: mail[at]vynghia.com</font><br><br>\x0DType `<b class=\'hlight\'>showall</b>\' to show the list of tools.<br>\x0DType `<b class=\'hlight\'>man</b> name\' to show manual of command `name\'.<br>\x0DTo reload console, you can type `<b class=\'hlight\'>reload</b>\'. Type `<b class=\'hlight\'>clear</b>\' to clear console and `<b class=\'hlight\'>exit</b>\' to close console.\x0D	';
    _ret(helptxt, false)
}
var _0x1fd5 = ['../[DATA]/[JS]/[LIB]/jquery.xdomainajax.js', 'getScript', 'Show current browser User-Agent', 'Type \'<b class=\'hlight\'>myuseragent</b>\' without any argument.', 'Show current IP Address and IP Informations', 'Type \'<b class=\'hlight\'>myip</b>\' without any argument.', 'Ping tool', '<b class=\'hlight\'>ping</b> hostname', 'Traceroute tool', '<b class=\'hlight\'>traceroute</b> hostname', 'IP Lookup', '<b class=\'hlight\'>iplookup</b> hostname', 'Reverse ip to find out which site hosted on same IP', '<b class=\'hlight\'>reverseip</b> hostname', 'DNS Record lookup tool', '<b class=\'hlight\'>dnsrecord</b> domain', 'Whois domain', '<b class=\'hlight\'>whois</b> domain', 'Generate md5 hash', '<b class=\'hlight\'>md5</b> text', 'Base64 Encoder', '<b class=\'hlight\'>base64encode</b> text', 'Base64 Decoder', '<b class=\'hlight\'>base64decode</b> text', 'Rot13+Rot5 Encoder/Decoder', '<b class=\'hlight\'>rot13</b> text', 'Rot47 Encoder/Decoder', '<b class=\'hlight\'>rot47</b> text', 'Generate random password', '<b class=\'hlight\'>randompass</b> n', 'Generate random identity', 'Type \'<b class=\'hlight\'>randomidentity</b>\' without any argument.', 'disableInput', 'fn', 'show', '#loading', 'readonly', 'prop', 'enableInput', 'hide', '', 'replace', '$1', 'g', 'size', 'hasOwnProperty', 'string', '&amp;', '&quot;', '&#039;', '&lt;', '&gt;', 'getSelection', 'createRange', 'selection', 'text', '  ', ' ', 'search', '<pre>', '</pre>', 'append', '#result', 'scrollHeight', 'get', '#container', 'scrollTop', 'mobile', 'browser', 'val', '#console', 'length', '<p class=\'cmd\'>', '</p>', 'split', 'toLowerCase', 'substr', 'Command not supported. Type \'<b class=\'hlight\'>help</b>\' for more info.', 'clear', 'help', 'reload', 'exit', '../[DATA]/[JS]/[APP]/_showall.js', 'showall', '../[DATA]/[JS]/[APP]/_myuseragent.js', 'myuseragent', '../[DATA]/[JS]/[APP]/_myip.js', 'myip', '../[DATA]/[JS]/[APP]/_man.js', 'man', '../[DATA]/[JS]/[APP]/_ping.js', 'ping', '../[DATA]/[JS]/[APP]/_traceroute.js', 'traceroute', '../[DATA]/[JS]/[APP]/_iplookup.js', 'iplookup', '../[DATA]/[JS]/[APP]/_reverseip.js', 'reverseip', '../[DATA]/[JS]/[APP]/_dnsrecord.js', 'dnsrecord', '../[DATA]/[JS]/[APP]/_whois.js', 'whois', '../[DATA]/[JS]/[APP]/_randomidentity.js', 'randomidentity', '../[DATA]/[JS]/[APP]/_md5.js', 'md5', '../[DATA]/[JS]/[APP]/_randompass.js', 'randompass', '../[DATA]/[JS]/[APP]/_base64.js', 'base64encode', 'base64decode', '../[DATA]/[JS]/[APP]/_rot13.js', 'rot13', '../[DATA]/[JS]/[APP]/_rot47.js', 'rot47', 'empty', 'close', '\x0D<font color=\'#E0A394\'>[Author]<br>&nbsp;&nbsp;&nbsp;Lina Sensei<br>\x0D[Contact]<br>&nbsp;&nbsp;&nbsp;Facebook: ~/LinaSS.BATeam<br>&nbsp;&nbsp;&nbsp;Mail: mail[at]vynghia.com</font><br><br>\x0DType `<b class=\'hlight\'>showall</b>\' to show the list of tools.<br>\x0DType `<b class=\'hlight\'>man</b> name\' to show manual of command `name\'.<br>\x0DTo reload console, you can type `<b class=\'hlight\'>reload</b>\'. Type `<b class=\'hlight\'>clear</b>\' to clear console and `<b class=\'hlight\'>exit</b>\' to close console.\x0D	'];
$['getScript']('../[DATA]/[JS]/[LIB]/jquery.xdomainajax.js');
var fulllist = {
    "\x6D\x79\x75\x73\x65\x72\x61\x67\x65\x6E\x74": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Show current browser User-Agent',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>myuseragent</b>\' without any argument.'
    },
    "\x6D\x79\x69\x70": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Show current IP Address and IP Informations',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>myip</b>\' without any argument.'
    },
    "\x70\x69\x6E\x67": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Ping tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>ping</b> hostname'
    },
    "\x74\x72\x61\x63\x65\x72\x6F\x75\x74\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Traceroute tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>traceroute</b> hostname'
    },
    "\x69\x70\x6C\x6F\x6F\x6B\x75\x70": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'IP Lookup',
        "\x4D\x41\x4E": '<b class=\'hlight\'>iplookup</b> hostname'
    },
    "\x72\x65\x76\x65\x72\x73\x65\x69\x70": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Reverse ip to find out which site hosted on same IP',
        "\x4D\x41\x4E": '<b class=\'hlight\'>reverseip</b> hostname'
    },
    "\x64\x6E\x73\x72\x65\x63\x6F\x72\x64": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'DNS Record lookup tool',
        "\x4D\x41\x4E": '<b class=\'hlight\'>dnsrecord</b> domain'
    },
    "\x77\x68\x6F\x69\x73": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Whois domain',
        "\x4D\x41\x4E": '<b class=\'hlight\'>whois</b> domain'
    },
    "\x6D\x64\x35": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Generate md5 hash',
        "\x4D\x41\x4E": '<b class=\'hlight\'>md5</b> text'
    },
    "\x62\x61\x73\x65\x36\x34\x65\x6E\x63\x6F\x64\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Base64 Encoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>base64encode</b> text'
    },
    "\x62\x61\x73\x65\x36\x34\x64\x65\x63\x6F\x64\x65": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Base64 Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>base64decode</b> text'
    },
    "\x72\x6F\x74\x31\x33": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Rot13+Rot5 Encoder/Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>rot13</b> text'
    },
    "\x72\x6F\x74\x34\x37": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Rot47 Encoder/Decoder',
        "\x4D\x41\x4E": '<b class=\'hlight\'>rot47</b> text'
    },
    "\x72\x61\x6E\x64\x6F\x6D\x70\x61\x73\x73": {
        "\x41\x52\x47\x53": 1,
        "\x44\x45\x53\x43": 'Generate random password',
        "\x4D\x41\x4E": '<b class=\'hlight\'>randompass</b> n'
    },
    "\x72\x61\x6E\x64\x6F\x6D\x69\x64\x65\x6E\x74\x69\x74\x79": {
        "\x41\x52\x47\x53": 0,
        "\x44\x45\x53\x43": 'Generate random identity',
        "\x4D\x41\x4E": 'Type \'<b class=\'hlight\'>randomidentity</b>\' without any argument.'
    }
};
(function(_0xf2a4x2) {
    _0xf2a4x2['fn']['disableInput'] = function() {
        _0xf2a4x2('#loading')['show']();
        _0xf2a4x2(this)['prop']('readonly', true);
        return true
    };
    _0xf2a4x2['fn']['enableInput'] = function() {
        _0xf2a4x2('#loading')['hide']();
        _0xf2a4x2(this)['prop']('readonly', false);
        return true
    }
})(jQuery);

function ltrim(_0xf2a4x4) {
    return _0xf2a4x4['replace'](/^\s+/, '')
}

function rtrim(_0xf2a4x4) {
    return _0xf2a4x4['replace'](/\s+$/, '')
}

function escapeRegExp(_0xf2a4x7) {
    return _0xf2a4x7['replace'](/([.*+?^=!:${}()|\[\]\/\\])/g, '$1')
}

function replaceAll(_0xf2a4x7, _0xf2a4x9, _0xf2a4xa) {
    return _0xf2a4x7['replace'](new RegExp(escapeRegExp(_0xf2a4x9), 'g'), _0xf2a4xa)
}
Object['size'] = function(_0xf2a4xb) {
    var _0xf2a4xc = 0,
        _0xf2a4xd;
    for (_0xf2a4xd in _0xf2a4xb) {
        if (_0xf2a4xb['hasOwnProperty'](_0xf2a4xd)) {
            _0xf2a4xc++
        }
    };
    return _0xf2a4xc
};

function htmlspecialchars(_0xf2a4x7) {
    if (typeof(_0xf2a4x7) == 'string') {
        _0xf2a4x7 = _0xf2a4x7['replace'](/&/g, '&amp;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/"/g, '&quot;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/'/g, '&#039;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/</g, '&lt;');
        _0xf2a4x7 = _0xf2a4x7['replace'](/>/g, '&gt;')
    };
    return _0xf2a4x7
}

function GetSelectedText() {
    if (window['getSelection']) {
        var _0xf2a4x10 = window['getSelection']();
        return _0xf2a4x10.toString()
    } else {
        if (document['selection']['createRange']) {
            var _0xf2a4x10 = document['selection']['createRange']();
            return _0xf2a4x10['text']
        }
    }
}

function fixparameter(_0xf2a4x12) {
    var _0xf2a4x13 = _0xf2a4x12;
    while (_0xf2a4x13['search']('  ') > 0) {
        _0xf2a4x13 = replaceAll(_0xf2a4x13, '  ', ' ')
    };
    return _0xf2a4x13
}

function _ret(_0xf2a4x13, _0xf2a4x15) {
    if (_0xf2a4x15 === undefined) {
        _0xf2a4x15 = true
    };
    if (_0xf2a4x15) {
        txt = htmlspecialchars(_0xf2a4x13)
    } else {
        txt = _0xf2a4x13
    };
    $('#result')['append']('<pre>' + txt + '</pre>');
    $('#container')['scrollTop']($('#container')['get'](0)['scrollHeight']);
    if ($['browser']['mobile']) {
        fixpos()
    }
}

function _parse(_0xf2a4x17) {
    _cmd = ltrim(_0xf2a4x17);
    $('#console')['val']('');
    if (_cmd['length'] === 0 || _cmd == ' ') {
        $('#container')['scrollTop']($('#container')['get'](0)['scrollHeight']);
        if ($['browser']['mobile']) {
            fixpos()
        }
    } else {
        __cmd = htmlspecialchars(_cmd);
        args = _cmd['split'](' ');
        _exe = args[0];
        _exe = _exe['toLowerCase']();
        _parameters = _cmd['substr'](_exe['length'] + 1, _cmd['length'] - (_exe['length'] + 1));
        switch (_exe) {
            default: _ret('Command not supported. Type \'<b class=\'hlight\'>help</b>\' for more info.', false);
            break;
            case 'clear':
                    _clear();
                break;
            case 'help':
                    _help();
                break;
            case 'reload':
                    _reload();
                break;
            case 'exit':
                    _exit();
                break;
            case 'showall':
                    $['getScript']('../[DATA]/[JS]/[APP]/_showall.js', function() {
                    _showall()
                });
                break;
            case 'myuseragent':
                    $['getScript']('../[DATA]/[JS]/[APP]/_myuseragent.js', function() {
                    _myuseragent()
                });
                break;
            case 'myip':
                    $['getScript']('../[DATA]/[JS]/[APP]/_myip.js', function() {
                    _myip()
                });
                break;
            case 'man':
                    $['getScript']('../[DATA]/[JS]/[APP]/_man.js', function() {
                    _man(_parameters)
                });
                break;
            case 'ping':
                    $['getScript']('../[DATA]/[JS]/[APP]/_ping.js', function() {
                    _ping(_parameters)
                });
                break;
            case 'traceroute':
                    $['getScript']('../[DATA]/[JS]/[APP]/_traceroute.js', function() {
                    _traceroute(_parameters)
                });
                break;
            case 'iplookup':
                    $['getScript']('../[DATA]/[JS]/[APP]/_iplookup.js', function() {
                    _iplookup(_parameters)
                });
                break;
            case 'reverseip':
                    $['getScript']('../[DATA]/[JS]/[APP]/_reverseip.js', function() {
                    _reverseip(_parameters)
                });
                break;
            case 'dnsrecord':
                    $['getScript']('../[DATA]/[JS]/[APP]/_dnsrecord.js', function() {
                    _dnsrecord(_parameters)
                });
                break;
            case 'whois':
                    $['getScript']('../[DATA]/[JS]/[APP]/_whois.js', function() {
                    _whois(_parameters)
                });
                break;
            case 'randomidentity':
                    $['getScript']('../[DATA]/[JS]/[APP]/_randomidentity.js', function() {
                    _randomidentity()
                });
                break;
            case 'md5':
                    $['getScript']('../[DATA]/[JS]/[APP]/_md5.js', function() {
                    _md5(_parameters)
                });
                break;
            case 'randompass':
                    $['getScript']('../[DATA]/[JS]/[APP]/_randompass.js', function() {
                    _randompass(_parameters)
                });
                break;
            case 'base64encode':
                    $['getScript']('../[DATA]/[JS]/[APP]/_base64.js', function() {
                    _base64encode(_parameters)
                });
                break;
            case 'base64decode':
                    $['getScript']('../[DATA]/[JS]/[APP]/_base64.js', function() {
                    _base64decode(_parameters)
                });
                break;
            case 'rot13':
                    $['getScript']('../[DATA]/[JS]/[APP]/_rot13.js', function() {
                    _rot13(_parameters)
                });
                break;
            case 'rot47':
                    $['getScript']('../[DATA]/[JS]/[APP]/_rot47.js', function() {
                    _rot47(_parameters)
                });
                break
        }
    }
}

function _clear() {
    $('#result')['empty']();
    if ($['browser']['mobile']) {
        fixpos()
    }
}

function _reload() {
    location['reload']()
}

function _exit() {
    window['close']()
}

function _help() {
    helptxt = '\x0D<font color=\'#E0A394\'>[Author]<br>&nbsp;&nbsp;&nbsp;Lina Sensei<br>\x0D[Contact]<br>&nbsp;&nbsp;&nbsp;Facebook: ~/LinaSS.BATeam<br>&nbsp;&nbsp;&nbsp;Mail: mail[at]vynghia.com</font><br><br>\x0DType `<b class=\'hlight\'>showall</b>\' to show the list of tools.<br>\x0DType `<b class=\'hlight\'>man</b> name\' to show manual of command `name\'.<br>\x0DTo reload console, you can type `<b class=\'hlight\'>reload</b>\'. Type `<b class=\'hlight\'>clear</b>\' to clear console and `<b class=\'hlight\'>exit</b>\' to close console.\x0D	';
    _ret(helptxt, false)
}