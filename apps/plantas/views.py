from dataclasses import dataclass
from re import M
from django.shortcuts import render,redirect
from .models import *
import os 
from django.conf import settings
from django.http import HttpResponse
import json

# Create your views here.

def registrarte(request):
    return render(request,"registrarte.html")

def iniciar_sesion(request):
    return render(request,"iniciar_sesion.html")


def cargarIndex(request):
    productos = Producto.objects.all()

    plantas = Producto.objects.filter(categoria = 1, cantidad__gt=0)
    maceteros = Producto.objects.filter(categoria = 2, cantidad__gt=0)
    flores = Producto.objects.filter(categoria = 3, cantidad__gt=0)
    accesorios = Producto.objects.filter(categoria = 4, cantidad__gt=0)

    return render(request,"index.html",{"plantas":plantas, "maceteros":maceteros,"flores":flores,"accesorios":accesorios,})

def AgregarProducto(request):
    categorias = Categoria.objects.all()
    productos = Producto.objects.all()
    return render(request,"AgregarProducto.html", {"ALLcategorias":categorias, "ALLproductos":productos})


def SubirAgregarProducto(req):
    print("ELEMENTOS EN LA REQUEST ", req.POST)
    m_id = req.POST['txtID']
    m_nombre = req.POST['txtNombre']
    m_valor = req.POST['txtValor']
    m_cantidad = req.POST['txtCantidad']
    m_descripcion = req.POST['txtDescripcion']
    m_foto = req.FILES['txtImagen']
    m_categoria = Categoria.objects.get(id_categoria = req.POST['SelectCategoria'])

    Producto.objects.create(
        id_objeto = m_id,
        nombre = m_nombre,
        valor = m_valor,
        cantidad = m_cantidad,
        descripcion = m_descripcion,
        foto = m_foto,
        categoria = m_categoria
    )

    return redirect('/AgregarProducto')


def cargarEditarProducto(request,id):
    categorias = Categoria.objects.all()
    producto = Producto.objects.get(id_objeto = id)
    categoriaId = producto.categoria
    productoCategoriaId = Categoria.objects.get(id_categoria = categoriaId.id_categoria).id_categoria
    return render(request, "editarProducto.html",{"producto":producto, "categorias":categorias ,"categoriaId":productoCategoriaId})

def editarProducto(req):
    m_id = req.POST['txtID']
    productoBD = Producto.objects.get(id_objeto = m_id)
    m_nombre = req.POST['txtNombre']
    m_valor = req.POST['txtValor']
    m_cantidad = req.POST['txtCantidad']
    m_descripcion = req.POST['txtDescripcion']
    m_categoria = Categoria.objects.get(id_categoria = req.POST['SelectCategoria'])

    try:
        m_foto = req.FILES['txtImagen']   
        ruta_imagen = os.path.join(settings.MEDIA_ROOT, str(productoBD.foto))
        os.remove(ruta_imagen)
    except:
        m_foto = productoBD.foto


    productoBD.nombre = m_nombre
    productoBD.valor = m_valor
    productoBD.cantidad = m_cantidad
    productoBD.descripcion = m_descripcion
    productoBD.categoria = m_categoria
    productoBD.foto = m_foto
    productoBD.save()
    return redirect('/AgregarProducto')


def QuitarProducto(request,id):
    producto = Producto.objects.get(id_objeto = id)
    producto.delete()
    ruta_foto = os.path.join(settings.MEDIA_ROOT,str(producto.foto))
    os.remove(ruta_foto)
    return redirect('/AgregarProducto')
