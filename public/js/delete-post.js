async function deleteFormHandler(event) {
    event.preventDefault();

    // Determine the post ID from the URL
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // Call the route to delete a post by ID
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    
    if (response.ok) {
        // Then return the user to their dashboard
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);