function toggleInfo(id) {
    const selectedInfo = document.getElementById(id);

    // If the clicked section is already visible, hide it
    if (selectedInfo.style.display === 'block') {
        selectedInfo.style.display = 'none';
    } else {
        // Hide all sections first
        const infos = document.querySelectorAll('.info');
        infos.forEach(info => info.style.display = 'none');

        // Then show the clicked section
        selectedInfo.style.display = 'block';
    }
}

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Check if the user is on mobile
if (isMobile()) {
    // Hide desktop content and show mobile content
    document.body.querySelector('.information-container').style.display = 'none';
    document.getElementById('mobile-content').style.display = 'block';
}
