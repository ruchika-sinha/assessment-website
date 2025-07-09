function toggleBox(boxId) {
    const box = document.getElementById(boxId);
    const allBoxes = document.querySelectorAll('.offer-box');
    const allRadios = document.querySelectorAll('.pair-radio');

    // Close all boxes and uncheck all radios first
    allBoxes.forEach(b => {
        if (b.id !== boxId) {
            b.classList.remove('active');
        }
    });
    allRadios.forEach(r => {
        r.checked = false;
    });

    // Toggle the clicked box and check its radio
    box.classList.toggle('active');
    const radio = box.querySelector('.pair-radio');
    if (radio) radio.checked = true;
}

// Initialize with the second box open by default
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('box2').classList.add('active');
    const radio = document.querySelector('#box2 .pair-radio');
    if (radio) radio.checked = true;
});