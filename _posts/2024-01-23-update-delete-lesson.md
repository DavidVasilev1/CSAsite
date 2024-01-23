---
title: HTML/JavaScript for User Profile
author: david
categories: ['Lab Notebook']
tags: ['Java']
type: tangibles
week: 18
description: Lesson on updating/deleting user info through HTML/JS and adding user stats.
toc: True
comments: True
date: 2024-01-21 12:00:00 +0000
---

## Update/Delete User Info
> In this section we will be explaining how data for the user would be updated and deleted in the Java Springboot backend.

First, make sure you have this repository cloned so that you can see the code working in real time: `git clone https://github.com/CSA-AI/CSA_AI_lessonBackend.git`

### Update Through API Requests
> This is how the user would update data specific to their profile using a PUT request which communicates to the Springboot server.




```python

```


    <IPython.core.display.Javascript object>


<body>
    <h2>Password Update</h2>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value="toby@gmail.com" readonly><br>
    <label for="password">New Password:</label>
    <input type="password" id="password" name="password" value="test@123"><br>
    <label for="name">New Name:</label>
    <input type="text" id="name" name="name" value="Test Test"><br>
    <button onclick="updatePassword()">Update</button>
    <p id="updateMessage"></p>
    <script>
        console.log("test");
        function updatePassword() {
            const url = 'http://localhost:8085/api/person/update?email=toby@gmail.com&password=test@123&name=Test';
            fetch(url, {
                method: 'PUT',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // Display the updated email address
                    const updateMessage = "Updating email to: " + data.email;
                    document.getElementById("updateMessage").innerHTML = updateMessage;
                })
                .catch(error => {
                    // Display the raw response in case of an error
                    console.error('Error:', error);
                    return response.text().then(text => console.error('Raw response:', text));
                });
        }
    </script>
</body>
