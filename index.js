
let rootDiv = document.getElementById("root");

let reactRoot = ReactDOM.createRoot(rootDiv);

let h1 = React.createElement("h1", {style: {fontSize: '3.5rem', fontWeight: '600', marginTop: '0'}}, "Learn Web Development");
let div1 = React.createElement("div", null, React.createElement("p", {style: {fontSize:'18px'}}, "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites."));

let div2 = React.createElement("div", {}, React.createElement('p', {style: {fontSize:'18px',}}, ',The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable". From there, you should be able to start making your way, learning from ',
        React.createElement('a', { style: { textDecoration: 'underline', color: 'blue' } }, 'the rest of MDN,'), ' and other intermediate to advanced resources that assume a lot of previous knowledge.'));

 let div3 = React.createElement("div", {}, React.createElement('p', {style: {fontSize:'18px'}}, 'If you are a computer beginner, web development can be challenging -- we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.'));


const container = React.createElement("div", {style : {padding: '0 2rem', width: '80%', margin: "auto",
    fontFamily: 'Poppins', borderTop: '2px solid lightgray', marginTop: '2rem'
}},h1, div1, div2, div3);
reactRoot.render(container);




