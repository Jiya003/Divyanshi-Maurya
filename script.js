// Function to open the social handles in a new window
document.getElementById('get-in-touch').addEventListener('click', function() {
    const socialHandles = `
        <h2>Connect with me:</h2>
        <ul>
            <li><a href="https://www.linkedin.com/in/your-linkedin" target="_blank">Connect through me to LinkedIn</a></li>
            <li><a href="https://github.com/your-github" target="_blank">Check my GitHub</a></li>
            <li><a href="https://your-blog-url.com" target="_blank">My Blogs</a></li>
            <li><a href="https://leetcode.com/your-leetcode" target="_blank">My LeetCode</a></li>
            <li><a href="https://www.hackerrank.com/your-hackerrank" target="_blank">My HackerRank</a></li>
            <li><a href="https://www.codechef.com/users/your-codechef" target="_blank">My CodeChef</a></li>
        </ul>
    `;
    const newWindow = window.open("", "Social Handles", "width=400,height=400");
    newWindow.document.write(socialHandles);
    newWindow.document.close();
});

// Function to send email using AJAX
document.getElementById('send-email').addEventListener('click', function() {
    const email = document.getElementById('email').value;

    if (email) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "your-email-endpoint-url", true); // Replace with your actual endpoint
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert("Email sent successfully!");
                    document.getElementById('email').value = ''; // Clear the input field
                } else {
                    alert("Error sending email. Please try again.");
                }
            }
        };

        const data = JSON.stringify({ email: email });
        xhr.send(data);
    } else {
        alert("Please enter a valid email address.");
    }
});