var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener ("click",function(){
        this.classList.toggle("active");
        const answer = this.nextElementSibling;
        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
            icon
        }else{
            answer.style.maxHeight =  answer.scrollHeight + 'px';
        }
})
}