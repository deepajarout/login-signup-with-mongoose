exports.print = (req,res,next) =>{

console.log("Here i printing my date", Date.now());
next();

}

