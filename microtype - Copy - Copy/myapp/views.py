from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth
from .models import History

# def index(request):
#     # last_login_user = User.objects.last()  # Get the last logged-in user
#     # return render(request, 'index.html', {'last_login_user': last_login_user})
#     return render(request,'index.html')



def signup(request):        //Signup function
    if(request.method=="POST"):
        first_name=request.POST['first_name']
        last_name=request.POST['last_name']
        email=request.POST['email']
        username=request.POST['username']
        password1=request.POST['password1']
        password2=request.POST['password2']
        if(password1==password2):
            data=User.objects.create_user(first_name=first_name,last_name=last_name,email=email,username=username,password=password1)
            data.save()
        return redirect('login')
    
    return render(request,'register.html')

def Login(request):        //Login function
    if request.method=="POST":
        username=request.POST['username']
        password=request.POST['password']
        global curr_user
        curr_user=username
        user=auth.authenticate(username=username,password=password)

        if user is not None:
            auth.login(request, user)
        else:
            return render(request,'login.html')
        
        if not History.objects.filter(user=user).exists():
            History.objects.create(user=user)
        return redirect('landing')
            

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

def Landing(request):
    text={'username':curr_user}

    return render(request,'landing.html',text)

def Guidance(request):
    text={'username':curr_user}

    return render(request,'guidance.html',text)

def Coder(request):
    text={'username':curr_user}

    return render(request,'coder.html',text)
