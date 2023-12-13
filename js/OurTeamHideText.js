let click = document.querySelector('#clickToHide')

click.addEventListener("click", function(){
    let hideCont = document.querySelector('.ContForHide')

    hideCont.classList.toggle("hideContainer")

    if (hideCont.classList.contains("hideContainer")) {
        click.value = "Показать больше..."
    }
    else {
        click.value = "Скрыть"
    }
})

