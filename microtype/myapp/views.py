from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth
from .models import History,YourModel
from django.http import JsonResponse

# def index(request):
#     # last_login_user = User.objects.last()  # Get the last logged-in user
#     # return render(request, 'index.html', {'last_login_user': last_login_user})
#     return render(request,'index.html')

def signup(request):
    if(request.method=="POST"):
        first_name=request.POST['first_name']
        last_name=request.POST['last_name']
        email=request.POST['email']
        username=request.POST['username']
        password1=request.POST['password1']
        password2=request.POST['password2']

        data=User.objects.create_user(first_name=first_name,last_name=last_name,email=email,username=username,password=password1)
        data.save()
        return redirect('login')
    
    return render(request,'register.html')

def Login(request):
    if request.method=="POST":
        username=request.POST['username']
        password=request.POST['password']
        global curr_user
        curr_user=username
        user=auth.authenticate(username=username,password=password)

        if user is not None:
            auth.login(request,user)
        if not History.objects.filter(user=user).exists():
            History.objects.create(user=user)
        return redirect('home')

    return render(request,'login.html')

# def Home(request):
#     return render(request,'index.html')

# def Home(request):
#     last_login_user = User.objects.last()  # Get the last logged-in user
#     return render(request, 'index.html', {'last_login_user': last_login_user})
#     # return render(request,'index.html')
def Home(request):
    text={'username':curr_user}

    return render(request,'index.html',text)




def save_data(request):
    if request.method == 'POST':
        your_data = request.POST.get('your_data')  # Assuming data is sent via POST
        # Create a new instance of YourModel and save it to the database
        YourModel.objects.create(your_field=your_data)
        return JsonResponse({'message': 'Data saved successfully'})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'})
    

# from django.views.decorators.csrf import csrf_exempt
# import json
# @csrf_exempt
# def update_entry(request):
    if request.method == 'PUT':
        # Handle your update logic here
        # Assuming you're receiving JSON data
        data = json.loads(request.body)
        user = data.get('user')
        best_pa = data.get('best_pa')
        test = data.get('test')
        
        # Your update logic here
        print("entry updated from views.py")
        return JsonResponse({'message': 'Entry updated from view.py successfully'})
    else:
        return JsonResponse({'error': 'Only PUT requests are allowed'})

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import YourModel  # Import your model

@csrf_exempt
def update_entry(request):
    if request.method == 'PUT':
        # Assuming you're receiving JSON data
        data = json.loads(request.body)
        user = curr_user
        best_pa = data.get('best_pa')
        test = data.get('test')

        # Retrieve the record based on the user
        try:
            entry = History.objects.get(user=user)
        except History.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)

        # Update the fields and save the changes
        entry.best_pa = best_pa
        entry.test = test
        entry.save()

        return JsonResponse({'message': 'Entry updated successfully'})
    else:
        return JsonResponse({'error': 'Only PUT requests are allowed'})
