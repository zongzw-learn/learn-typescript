/**
 * 根据编译时指定的模块目标参数，
 * 编译器会生成相应的供
 *      Node.js (CommonJS)，
 *      Require.js (AMD)，
 *      isomorphic (UMD), 
 *      SystemJS或
 *      ECMAScript 2015 native modules (ES6)
 * 模块加载系统使用的代码。
 */

 // 这里注意ECMAScript 2015 native modules 就是 ES6。 
 // 这里提到的都是compilerOption中的target的配置。 
 // 所谓typescript 和 javascript紧密，研究ts深时就会触及到js的原理性内容。 
 // 普通编程过程中并不关注js，只是因为typescript编译器都给屏蔽掉了。 
 // 通过tsc --module commonjs Test.ts 来编译。 