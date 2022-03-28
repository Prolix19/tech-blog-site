async function editFormHandler(event) {
    event.preventDefault();

    // Get the post ID from the URL
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // Get title and content values from the form
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;

    // Use the route to update the post
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);