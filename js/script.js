let quantity = document.getElementById('questions').children.length; //Получаю количество всех вопросов.
let current = 0;

for (var i = 0; i < quantity; i++) {
  $(".pagination").append("<div></div>"); // Добавляю пагинацию, в зависимости от количества вопросов.
}

$(".answer_button").click(function(){
  $(this).addClass("choosen");
  $('.pagination div').eq(current).addClass("fill"); // Заполняю точку в пагинации, при отвеченном вопросе.
  if (current == quantity-1){
    window.open("http://www.youtube.com/");
  }
  else{
    $('.question').eq(current).addClass("animate"); // Анимирую отвеченный вопрос,чтобы он исчез
    setTimeout(nextAnswer,500); // Отложенное выполнение функции, которая переключает активный вопрос.
  }
})


function nextAnswer() {
  $('.question').eq(current).removeClass("active")
  current+=1;
  $('.question').eq(current).addClass("active")
}


// Отправки и сборки ответов не делал, т.к. не требуется в ТЗ.
