//console.log('Hello from MyModule.js');
//IIFE->Immediately Invoke function expression
window.MyModule = window.MyModule || (function () {
    console.log('Module loaded');
    function api() {
        console.log('Api    ')
    }
    return { api };
})();