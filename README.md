1. para instalar paquetes 
```npm install```
2. para ejecutar
```npm run serve```

# Modelo de Usuario Base

```json
{
    "_id": {"$oid": "677d8a0c4f9ef61250519f33"},
    "idUser": 2,
    "role": "client",
    "nameUser": "Admin",
    "email": "admin",
    "passwordUser": "123",
    "state": "activo",
    "__v": 0
}
```
# Modelo de Usuario Administrador

```json
{
    "_id": {"$oid": "677d8a0c4f9ef61250519f33"},
    "idUser": 2,
    "role": "administrador",
    "nameUser": "Admin",
    "email": "admin",
    "passwordUser": "123",
    "state": "activo",
    "__v": 0
}
```