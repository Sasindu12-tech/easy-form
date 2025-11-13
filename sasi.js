 document.getElementById('studentForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const studentName = document.getElementById('studentName').value;
            const studentGrade = document.getElementById('studentGrade').value;
            const subject = document.getElementById('subject').value;
            const marks = document.getElementById('marks').value;

            // Validate form
            if (!studentName || !studentGrade || !subject || !marks) {
                alert('Please fill all fields!');
                return;
            }

            // Add to table
            addStudentToTable(studentName, studentGrade, subject, marks);

            // Clear form
            document.getElementById('studentForm').reset();
        });

        function addStudentToTable(name, grade, subject, marks) {
            const tableBody = document.getElementById('studentTableBody');
            const newRow = document.createElement('tr');

            newRow.innerHTML = `
                <td>${name}</td>
                <td>${grade}</td>
                <td>${subject}</td>
                <td>${marks}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteStudent(this)">Delete</button>
                </td>
            `;

            tableBody.appendChild(newRow);
        }

        function deleteStudent(button) {
            const row = button.closest('tr');
            row.remove();
        }
   
    