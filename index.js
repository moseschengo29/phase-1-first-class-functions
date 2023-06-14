
function spy(){
    console.log("This is a call back function")
}

function receivesAFunction (spy){
    spy();   
}



function returnsANamedFunction(){
    return function func(){

    }
}

var namedFunc = returnsANamedFunction();
namedFunc();

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}