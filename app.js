let paragraphs = document.getElementsByTagName("p");
let movies = document.getElementsByTagName("li");
let firstParagraph = paragraphs[0];

//The following will not work
// paragraphs.addEventListener('mouseover', function(){
//     paragraphs.style.color = 'red';
// });

for(let i = 0; i < paragraphs.length; ++i){
    paragraphs[i].addEventListener('click', function(){
        paragraphs[i].style.color = 'tomato';
    });
    // paragraphs[i].addEventListener('mouseover', function(){
    //     paragraphs[i].style.color = 'blue';
    // });
    // paragraphs[i].addEventListener('mouseout', function(){
    //     paragraphs[i].style.color = 'green';
    // });
}

for(let i = 0; i < movies.length; ++i){
    movies[i].addEventListener('mouseover', function(){
        movies[i].textContent = movies[i].textContent.toUpperCase();
    });
    movies[i].addEventListener('mouseout', function(){
        movies[i].textContent = movies[i].textContent.toLowerCase();
    });
}