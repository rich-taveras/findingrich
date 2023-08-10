function filter(type) {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        if (type === 'all' || container.classList.contains(type)) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}