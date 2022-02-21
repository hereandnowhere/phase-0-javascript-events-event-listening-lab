function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert() {
     alert('I was clicked! Yay!');
    }

    input.addEventListener('click', clickAlert);
}
addingEventListener(`input`);