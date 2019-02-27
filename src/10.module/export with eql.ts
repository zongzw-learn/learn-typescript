let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

/**
 * 通过export =  导出的模块使用 import = require 导入使用。 
 */
export = ZipCodeValidator;

import zip = require('./ZipCodeValidator');

