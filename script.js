/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('input'); //поле ввода
const point = document.querySelector('.items'); //куда добавить 


sendInput.addEventListener('keydown', function(event) {


    if (event.key == 'Enter') {

        const pointText = sendInput.value; //тут хранится то, что клиент ввел в поле ввода
        const newPoint = document.createElement('div');
        newPoint.classList.add('items');

        newPoint.textContent = pointText;

        if (pointText != '') {
            point.append(newPoint); /*для того, чтобы нельзя было отправить пустое сообщение*/
        }

        newPoint.addEventListener('click', function() {
            newPoint.classList.toggle('done');
        })

        sendInput.value = ''; /*для очищения импута после ввода сообщения*/

    }

})






/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */