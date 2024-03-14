from django.urls import path
from . import views
from .views import save_data
# from .views import update_entry


urlpatterns = [
    # path('', views.index, name='index'),
    # Other URL patterns can be added here
    path('update_entry/', views.update_entry, name='update_entry'),
    path('save-data/',save_data, name='save_data'),
]
