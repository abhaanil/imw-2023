function refreshPage() {
    location.reload();
}

function showContainer(containerId) {
    const container = document.querySelector(`.${containerId}`);

    // Toggle the 'hidden' class to show/hide the container
    container.classList.toggle('hidden');
    container.classList.toggle('visible');
}


