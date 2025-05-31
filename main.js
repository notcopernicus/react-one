/*
const domNode = document.getElementById("app")

//create root lets you display react components
const root = ReactDOM.createRoot(domNode);

//this displays a peiece of JSX into the react rooot's browser DOM node
root.render(<h1>Try. New. Things.</h1>)

*/



// Creating a react compnonent which can be though of as a lego block
// Must be capatalized and must be in brackets

const app = document.getElementById("app");

function HomePage () {
    return (
        <div>
            <Header/>
        </div>
    );
    function Header () {
        return (<h1>This. Is. A. Test</h1>)
    }
}


const root = ReactDOM.createRoot(app);
root.render(<HomePage/>);





/* These are notes:

//This is an arrow function in JS
const add = (a,b) => {
    return a + b;
}

console.log(add(2,1))

function square (number) {
    return number * number;
}

console.log(square(2));

// recursive functions
function loop (x) {
    if (x >= 10) {
        return;
    }
    loop(x+1);
}
loop(2);

*/