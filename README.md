# SCLogin.js

**Capa de abstracción para inicio de sesión / registro e interactividad con el sistema ligada a General.JS**

## Import library from CDN
```html
	<script src="https://cdn.underdevelopment.work/generaljs/sclogin.min.js">
```

## Cómo iniciar la librería
```javascript
		genrl.run(function(){
			SC.settings({
				'idapp':'14',
				'apikey':'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
				'secretkey':'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
				'scriptid':'#formsblock',
				'frmcontid':'#scriptlogin'
			});
		});
```

## Validar si iniciamos sesión
```javascript
		genrl.run(function(){
			SC.check();
		});
```

## Cerrar Sesión
```javascript
		genrl.run(function(){
			SC.logout();
		});
```

## Mostrar form de inicio de sesión
```javascript
		genrl.run(function(){
			SC.getLoginMinimal();
		});
```

### Use the Source...

### The Source be with you...

## Si deseas colaborar, haz clic en el enlace abajo:
## if do you like to to collab, you can do it by clicking the link below:
## --Paypal-- 
[![paypal-btn-image-pay](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/paypalme/avsolucionesweb)

