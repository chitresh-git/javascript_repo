
// <!-- LOOPS 
// 24.7.22
//  -->


        // FOR LOOPS 
        console.log("FOR LOOP : ")
        for (i = 0; i <= 10; i++) {
            console.log(i)
        }

        // FOR EACH LOOPS : this loop is used to iterate any type iterable object 
        console.log("for each loop : ")
        let app = [2, 4, 56, 7, 9, 10];
        app.forEach(function fun(element) {  // for each loop takes callback function 
            console.log(element)
        });

        
        // FOR OF LOOPS   :   this loop is same as for loop but the difference is this loop doesnt take any callback funtion 
        console.log(" for of loop ")
        for (data of app) {
            console.log(data)
        }

        let diary = {
            name: "chitresh",
            age: 20,
            college: "IIPS",
            hobby: " cricket "
        }

        // FOR IN LOOPS 
        console.log("for in loop ")
        for (key in diary) {
            console.log(` my ${key}  is ${diary[key]} `)
        }


        i = 0
        // WHILE LOOPS  
        console.log("while loop : ")
        while (i <= 5) {
            console.log(i)
            i++
        }
        i = 0
        // DO WHILE LOOPS  
        console.log("do while loop : ")
        do {
            console.log(i)
            i++
        } while (i <= 5)


