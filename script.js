function getUsers() {

    const container = document.getElementById("userContainer");
    const errorMsg = document.getElementById("error");

    // Clear previous data
    container.innerHTML = "";
    errorMsg.textContent = "";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();   // Parse JSON
        })
        .then(data => {

            data.forEach(user => {

                const userDiv = document.createElement("div");
                userDiv.classList.add("userCard");

                userDiv.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> 
                    ${user.address.street}, ${user.address.city}</p>
                `;

                container.appendChild(userDiv);
            });

        })
        .catch(error => {
            errorMsg.textContent = "Error fetching data. Please check your internet connection.";
            console.error(error);
        });
}