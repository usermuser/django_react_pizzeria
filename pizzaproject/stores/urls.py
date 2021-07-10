from django.urls import path
from .views import PizzeriaAPIView

urlpatterns = [
    path('', PizzeriaAPIView.as_view(), name='pizzeria_list'),
]
