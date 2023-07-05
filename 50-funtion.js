
// <!-- FUNCTIONS 
//     23.7.22 -->

    function sum(a, b, c) {
        console.log("the sum of a, b ,c is :" + (a + b + c))
    }

    sum(12, 3, 1) 

    function show(name = "chitresh")
    // chitresh is the defualt value in the absence of argument
    {
        console.log("welcome home " + name)
        return "thank you "

        console.log("this can not be called ")
    }
    show("harsh")
    show()
    // if we does not any argument then it will take chitresh as defualt value 
    returnvalue = show();
    console.log(returnvalue)
