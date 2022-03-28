async function newFormHandler(event) {
    event.preventDefault();

    // Grab the values from the form
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;

    // Create a new post using the values from the form
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        // After creating a post, the requirements always say to redirect to the dashboard, so do that
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

// Attach listener to the form
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

// Attach listener to the "+ New Post" button
document.querySelector('#new-post-btn').addEventListener('click', (event) => {
    event.preventDefault();
    // Show the create post form
    document.querySelector("#toggle").hidden = false;
});