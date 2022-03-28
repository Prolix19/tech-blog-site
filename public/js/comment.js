async function commentFormHandler(event) {
    event.preventDefault();

    // Grab the comment from the form
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    // Determine the post ID from the URL
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // Ensure comment isn't empty, then post it
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);