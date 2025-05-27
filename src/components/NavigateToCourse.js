export default function NavigateToCourse() {

    const selectedCourse = document.getElementById('courseDropdown').value.toLowerCase();
    const courseItems = document.querySelectorAll('.course-item');

    // Remove the highlight class from all images
    courseItems.forEach(item => {
        item.querySelector('img').classList.remove('highlight');
    });

    // Find the corresponding image and apply the highlight
    courseItems.forEach(item => {
        const courseName = item.getAttribute('data-name').toLowerCase();
        if (courseName === selectedCourse) {
            const courseImage = item.querySelector('img');
            courseImage.classList.add('highlight');

            // Scroll to the selected image
            item.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
}