const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    // console.log(val);
})

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe);    // reference of functions is passed not the function (printMe())

// forEach not only prints the items but it also print the index and arr

coding.forEach((item , index , arr) => {
    // console.log(item , index , arr);
})

// This type will be used in most of the work specially for extracting data from the database

const myCoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },

    {
        languagename: "c++",
        languagefilename: "cpp"
    },

    {
        languagename: "python",
        languagefilename: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languagefilename);
})