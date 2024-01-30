from django.urls import path
from . import views

urlpatterns = [
    path('', views.cargarIndex,name='index'),
    path('AgregarProducto',views.AgregarProducto,name='AgregarProducto'),
    path('SubirAgregarProducto',views.SubirAgregarProducto,name='SubirAgregarProducto'),
    path('cargarEditarProducto/<id>',views.cargarEditarProducto),
    path('editarProducto',views.editarProducto),
    path('QuitarProducto/<id>',views.QuitarProducto,name='QuitarProducto'),
    path('iniciar_sesion',views.iniciar_sesion, name='iniciar_sesion'),
    path('registrarte', views.registrarte, name='registrarte')
]