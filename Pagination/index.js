const students = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack",
    "Kevin", "Liam", "Mona", "Nina", "Oscar", "Paul", "Quincy", "Rachel", "Sam", "Tina",
    "Uma", "Vera", "Will", "Xander", "Yara", "Zane", "Anna", "Ben", "Clara", "Daniel",
    "Ella", "Felix", "Gina", "Henry", "Isla", "Jordan", "Kara", "Leo", "Maya", "Nathan",
    "Olivia", "Parker", "Quinn", "Riley", "Sophia"
];

const studentsPerPage = 10;
let currentPage = 1;
const totalPages = Math.ceil(students.length / studentsPerPage);

function displayStudents(page) {
    const start = (page - 1) * studentsPerPage;
    const end = page * studentsPerPage;
    const studentsToDisplay = students.slice(start, end);

    const studentsList = document.getElementById("students-list");
    studentsList.innerHTML = ''; // Clear the current list

    studentsToDisplay.forEach(student => {
        const li = document.createElement('li');
        li.classList.add('student-item');
        li.textContent = student;
        studentsList.appendChild(li);
    });
}

function createPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ''; // Clear existing pagination

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        li.textContent = i;
        li.onclick = function() {
            currentPage = i;
            displayStudents(currentPage);
            updateActivePage();
            updatePrevNextButtons();
        };
        pagination.appendChild(li);
    }
}

function updateActivePage() {
    const pageItems = document.querySelectorAll('.page-item');
    pageItems.forEach((item, index) => {
        if (index === currentPage - 1) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function updatePrevNextButtons() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (currentPage === 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentPage === totalPages) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayStudents(currentPage);
        updateActivePage();
        updatePrevNextButtons();
    }
}

function goToNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        displayStudents(currentPage);
        updateActivePage();
        updatePrevNextButtons();
    }
}

// Initial Setup
displayStudents(currentPage);
createPagination();
updateActivePage();
updatePrevNextButtons();
