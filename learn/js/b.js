define(function(){
    var aaa = 1230400000;
    return {
        "name" : "bbb",
        "bFn"  : function(){
            console.log("this is b.js");
        },
        say   : function(){
            alert(aaa);
        }
    }
});