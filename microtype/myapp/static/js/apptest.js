var yourData = 'your_variable_data';  // This is your variable data
var csrftoken = getCookie('csrftoken');  // Function to retrieve CSRF token

$.ajax({
    url: '/save-data/',
    method: 'POST',
    headers: {
        'X-CSRFToken': csrftoken
    },
    data: {
        your_data: yourData
    },
    success: function(response) {
        console.log(response.message);
    },
    error: function(xhr, status, error) {
        console.error('Error saving data:', error);
    }
});

// Function to retrieve CSRF token from cookies
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
