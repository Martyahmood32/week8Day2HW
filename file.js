const fs = require(`fs`);

// fs.readFile(`./docs/blog.txt`, (err,data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log(`last line`)




// fs.writeFile(`./docs/blog.txt`, `hello, turtles`, () => {
//     console.log(`file was written`);
// })
// fs.writeFile(`./docs/blog.txt`, `hello, Splinter`, () => {
//     console.log(`file was written`);
// })

if(fs.existsSync(`./docs/deleteme.txt`)){
    fs.unlink(`./docs/deleteme.txt`,)
}