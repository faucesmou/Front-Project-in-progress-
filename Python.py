"""
print ("hola mundo")
nombre_usuario= input("cuál es tu nombre?")
print(f"ahora estás en la Matrix {nombre_usuario}")
total= int(input(f"{nombre_usuario} podrías decirme cúanto te salió la cena? yo le agregaré el servicio y la propina."))
total_final= total + (total*0.16)
print(f"el monto total con servicio y propina es{total_final}")
dia=int(input(f"me dirías el dia de tu cumpleaños?"))
mes=int(input(f"me dirías en qué mes naciste?"))
año=int(input(f"me dirías en qué año naciste?"))
fecha=str(dia)+str(mes)+str(año)
print(f"ok entonces naciste en fecha {dia}/{mes}/{año}")

kmxlitro = int(input(f"cuántos kilómetros puede recorrer su moto con 1 litro de combustible?"))
tanque = int(input(f"qué capacidad (en litros) tiene el tanque?"))
kmxtanque = int(input(tanque*kmxlitro))
print(f"entonces, con un tanque pueden recorrer {kmxtanque} kilómetros")
kmviaje = int(input(f"cuántos kilómetros en total recorrerán?"))
tanques = int(input(kmviaje/kmxtanque))
print(f"para poder hacer todo el recorrido necesitarán {tanques}")

"""
sumapar=0
par=int(input("Ingrese un número par: "))
evaluaPar=par
while evaluaPar%2==0 and evaluaPar>0 :
    sumapar=evaluaPar+sumapar
    evaluaPar+=-2
print("La suma de los números pares menores a ",par,"es: ",sumapar)
