/*
DESCRIPTION:
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
    Additionally, if the number is negative, return 0.

    Note: If the number is a multiple of both 3 and 5, only count it once.
    Courtesy of projecteuler.net (Problem 1)        */

    function getMultiples(number: number) {

        let data: any = "Hello World";
        data = 42;
        console.log('data => ', data);

        if (number < 0 ) return 0;
        if (number == 1) return 8;

        let end = number;
        let multiples = [];

        for (let i = 1, result = 1; (result + 3) < end; i++) {
            result = 3 * i;
            multiples.push(result);
        }
        console.log('multiples (3) => ', multiples);


        for (let i = 1, result = 1; (result + 5) < end; i++) {
            result = 5 * i;
            multiples.push(result);
        }
        console.log('multiples (5) => ', multiples);

        let uniqueNumbers: number[] = [... new Set(multiples)];
        console.log('uniqueNumbers => ', uniqueNumbers);

        return uniqueNumbers.reduce( (res, n) => res + n, 0);
    }


    console.log('OK');
    console.log('getMultiples => ', getMultiples(6));
