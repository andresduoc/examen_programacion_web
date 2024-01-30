from django.shortcuts import render
from django.views import View
from apps.Tienda.models import *
from django.http import JsonResponse, HttpResponseBadRequest
# Create your views here.

class ObtenerProductos(View):
    def get(self, request):
        productos = Producto.objects.all()
        if productos:
            return  JsonResponse(list(productos.values()),safe=False)
        else:
            return HttpResponseBadRequest("Hubo un problema en la soclicitud")

class AgregarProducto(View):
    def post(self, request):
        productos = Producto.objects.all()
        productos.add(View)

class EliminarProducto(View):
    def delete(self, request):
        productos = Producto.objects.all()
        productos.delete(View)