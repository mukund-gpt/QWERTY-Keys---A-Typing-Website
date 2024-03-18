from django.contrib.auth.signals import user_logged_in
from django.dispatch import receiver

# Create a signal receiver function
@receiver(user_logged_in)
def print_last_login_user(sender, request, user, **kwargs):
    # Print the username of the last login user
    print("Last login user=>", user.username)
