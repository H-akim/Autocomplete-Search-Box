let available = [
    'html', 
    'css',
    'javascript', 
    'web development', 
    'full stack', 
    'python', 
    'ruby', 
    "react", 
    'angular', 
    'mern'
];

const result_box = document.querySelector(".result_box");
const input_box = document.getElementById("input_box");

input_box.onkeyup = function(){
    let result = [];
    let input = input_box.value ;
    if(input.length){
        result = available.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        result_box.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick = 'selectInput(this)'>" + list + "</li>" ;
    });
    result_box.innerHTML = '<ul>' + content.join('') + '</ul>'
}

function selectInput(list){
    input_box.value = list.innerHTML;
    result_box.innerHTML = '';
}