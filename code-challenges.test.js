// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffle", () => {
    it("shifts and shuffles an array", () => {
        expect(shuffle(colors1)).toContain("blue", "green", "yellow", "pink");
        expect(shuffle(colors2)).toContain("indigo", "periwinkle", "ochre", "aquamarine", "saffron");
    });

    // b) Create the function that makes the test pass.

    ///PSEUDO///

    // Create a function that takes in an array, removes the first item from the array and shuffles the remaining content
    //  make a function that passes an array and removes the first item.
    // choose a method that will shuffle the remaining items in the array
    // 

    const shuffle = (array) => {
        array.shift()
        for (let i = array.length - 1; i > 0; i--) {
            let randomArray = Math.random();
        }
        return array
    }



    // --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

    // a) Create a test with expect statements for each of the variables provided.

    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    var nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]

    describe("minMax", () => {
        it("shifts and shuffles an array", () => {
            expect(shuffle(nums2)).toContain([-8, 90]);
            expect(shuffle(nums2)).toContain([5, 109]);
        });



        // b) Create the function that makes the test pass.

        //PSEUDO//

        // I am still not able to do the programming on my own for i still am learning the behavior of the language.  I am capturing the concepts, but we so fast it is hard for me to retain the information.
        // I am now reaching out for help in the class.  I was able to understand a little better the testing using yarn jest.  
        // I will make more effort to spend more time drilling this information.
        //Class is about to start


        // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

        // a) Create a test with an expect statement using the variables provided.

        var testArray1 = [3, 7, 10, 5, 4, 3, 3]
        var testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

        describe("newArray", () => {
            it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
                expect(shuffle(testArray1)).toContain([-8, 90]);
                expect(shuffle(testArray2)).toContain([5, 109]);
            });




// b) Create the function that makes the test pass.
