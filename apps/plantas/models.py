from django.db import models

# Create your models here.

class Categoria(models.Model):
    id_categoria = models.IntegerField(primary_key=True)
    nombre_categoria = models.CharField(max_length=30,null=False)

    def __str__(self):
        txt = "Id: {0} - Nombre: {1}"
        return txt.format(self.id_categoria,self.nombre_categoria)
        

class Producto(models.Model):
    id_objeto = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=20,null=False)
    valor = models.IntegerField(null=False)
    cantidad = models.IntegerField(null=False)
    descripcion = models.CharField(max_length=100, null=False)
    foto = models.ImageField(upload_to='imagenesProducto')
    fecha_agregar = models.DateField(auto_now_add=True)
    categoria = models.ForeignKey(Categoria,on_delete=models.CASCADE)

    def __str__(self):
        txt = "Codigo: {0} - Nombre: {1} - Stock: {2}"
        return txt.format(self.id,self.nombre,self.cantidad)
    
class Sucursal(models.Model):
    id_sucursal = models.IntegerField(primary_key=True)
    nombre_sucursal = models.CharField(max_length=50)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=15)

    def __str__(self):
        return f"ID Sucursal: {self.id_sucursal} - Nombre: {self.nombre_sucursal}"
    