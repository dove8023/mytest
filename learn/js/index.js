require(["./a" , "./b"] , function(A , B){
    console.log("ok");
    A.aFn();

    B.say();
});