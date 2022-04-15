let ajaxsck;
let apisc;

ajaxapi=(function(global,factory){
	let ajax_=getSocket();
	let bitget=0;
	let bitpost=0;
	let bitgetjson=0;
	let bitupload=0;
	let bitload=0;
	let protocol='get';
	let errormessage="";
	let bitgetxml=0;
	let datares="";
	//write code below
	function getSocket(){
		// code for modern browsers
		xmlhttp = new XMLHttpRequest();
		return xmlhttp;
	};
	return{
		getAjax:function(){
			let sockajax=getSocket();
			return sockajax;
	  	},
		load:function(url){
			let options;
			let respjson;
			let objeto;
			let x,y,valor,indice;
			var params = "action=load";
			bitget=0;
			bitpost=0;
			bitgetjson=0;
			bitupload=0;
			bitload=1;
			if(bitload==1){
				console.log("BITLOAD=1");
				ajax_.open("GET", url, true);
				ajax_.send(null);
				return this;
			}
		},
	  	get:function(url){
			let options;
			let respjson;
			let objeto;
			let x,y,valor,indice;
			var params = "action=get";
			bitget=1;
			bitpost=0;
			bitgetjson=0;
			bitupload=0;
			bitload=0;
			if(bitget==1){
				console.log("BITGET=1");
				ajax_.open("GET", url, true);
				ajax_.send(null);
				return this;
			}
	  	},
	  	getJSON:function(url){
			let options;
			let respjson;
			let objeto;
			let x,y,valor,indice;
			var params="action=getjson";
			bitget=0;
			bitpost=0;
			bitgetxml=0;
			bitgetjson=1;
			bitupload=0;
			bitload=0;
			if(bitgetjson==1){
				console.log("BITJSON=1");
				ajax_.open("GET", url, true);
				ajax_.send(null);
				return this;
			}
	  	},
	  	getXML:function(url){
			let options;
			let respjson;
			let objeto;
			let x,y,valor,indice;
			var params="action=getxml";
			bitget=0;
			bitpost=0;
			bitgetjson=0;
			bitgetxml=1;
			bitupload=0;
			bitload=0;
			if(bitgetxml==1){
				console.log("BITXML=1");
				ajax_.open("GET", url, true);
				ajax_.send(null);
				return this;
			}
	  	},
	  	post:function(url,data){
			let options;
			let respjson;
			let objeto;
			let x,y,valor,indice;
			protocol="post";
			bitget=0;
			bitpost=1;
			bitgetjson=0;
			bitupload=0;
			bitload=0;
			ajax_=getSocket();
			ajax_.open("POST", url, true);
			ajax_.response='json';
			ajax_.send(data);
			return this;
	  	},
	  	upload:function(url,data){
			let options;
			let respjson;
			let objeto;
			let x,y,valor,indice;
			protocol="post";
			bitget=0;
			bitpost=0;
			bitgetjson=0;
			bitupload=1;
			bitload=0;
			ajax_=getSocket();
			ajax_.open("POST", url, true);
			ajax_.response='text';
			ajax_.send(data);
			return this;
	  	},
		then:function(callback){
			ajax_.onreadystatechange = function(){
				if(ajax_.readyState==4){
					if(ajax_.status==200){
						if(bitgetjson==1 || bitgetxml==1){
							if(bitgetjson==1){
								datares = JSON.parse(ajax_.responseText);
							}
							if(bitgetxml==1){
								datares = ajax_.responseXML;
							}
						}
						else{
							datares = ajax_.responseText;
						}
						callback(datares);
						return this;
					}
					else{
						errormessage=ajax_.statusText;
						ajaxapi.catch(errormessage);
						return this;
					}
				}
			};
			return this;
		},
		catch:function(e){
			console.log(e);
		}
	}
}(window));

var genstore=(function(global,factory){
	//Submodulo Cookies
	return{
		setLocal:function(variable,valorvariable){
			try{
				window.localStorage.setItem(variable, valorvariable);
			}
			catch(e){
				console.log(e);
			}
		},
		getLocal:function(variable){
			if (window.localStorage) {
			  return window.localStorage.getItem(variable);
			}
			else {
			  throw new Error('Tu navegador no soporta LocalStorage!');
			}
		},
		rmLocal:function(variable){
			if (window.localStorage) {
			  window.localStorage.removeItem(variable);
			}
			else {
			  throw new Error('Tu navegador no soporta LocalStorage!');
			}
		},
		setSession:function(variable,valorvariable){
			if (window.sessionStorage) {
				window.sessionStorage.setItem(variable, valorvariable);
			}
			else {
				throw new Error('Tu navegador no soporta SessionStorage!');
			}
		},
		getSession:function(variable){
			if (window.sessionStorage) {
				return window.sessionStorage.getItem(variable);
			}
			else {
				throw new Error('Tu navegador no soporta SessionStorage!');
			}
		},
		rmSession:function(variable){
			if (window.sessionStorage) {
				window.sessionStorage.removeItem(variable);
			}
			else {
				throw new Error('Tu navegador no soporta SessionStorage!');
			}
		}
	}
}(window));

var generalh=(function(global,factory,history){
	window.addEventListener('onload',cambiourl, false);
	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		    vars[key] = value;
		});
		return vars;
	};
	function getParamURL() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		    vars[key] = value;
		});
		return vars;
	};
	function getUrlParam(parameter){
		var urlparameter = '';
		if(window.location.href.indexOf(parameter) > -1){
			urlparameter = getUrlVars()[parameter];
		}
		return urlparameter;
	};
	function cambiourl(e){
		return genstore.setLocal('session',e);
	};
	return {
		update:function(e){
			cambiourl(e);
			var myvar = getUrlParam('sessionkey');
			if(myvar!=''){
				var sessionvar=genstore.setLocal('sessionkey', myvar);
			}
			return 0;
		},
		show:function(){
			return genstore.getLocal('sessionkey');
		}
	};
}(window));

var SC=(function(global,factory){
	credentials=[{}];
	return {
		api:function(endpoint,datain,callback){
			let fetchobj=ajaxapi;
			let initdir="https://credentials.underdevelopment.work/api/credentials/v1/" + endpoint;
			let datastr;
			datastr=JSON.stringify(datain);
			fetchobj
			.post(initdir,datastr)
			.then(function(data){
				callback(data)
			})
			.catch(function(e){	
				console.log("ERROR:" + e);
			})
		},
		linkToLogin:function(){

		},
		loginPopUp:function(defaults){
			this.initarr=defaults;
			let url="https://credentials.underdevelopment.work/api/credentials/v1/sl/sysconfigpassport";
			let ventana=global.window.open(url,"Popup","toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=0,width=400,height=550,left = 490,top = 300");
			// Listen for messages
			window.addEventListener("message", function(event) {
				console.log(event.data)
				if(event.data === "success") {
					ventana.close();
				} else {
					// Oh no!
				}
			});
		},
		loginBackend:function(datoslogin,callback){
			//hacer una llamada a la api, que devuelva una cadena de texto
			let fetchobj=ajaxapi;
			let endpoint="sl/login"
			let initdir="https://credentials.underdevelopment.work/api/credentials/v1/" + endpoint;
			let datastr;
			datastr=JSON.stringify(datoslogin);
			fetchobj
			.post(initdir,datastr)
			.then(function(data){
				callback(data)
			})
			.catch(function(e){	
				console.log("ERROR:" + e);
			})
			return 0;
		},
		logout:function(callback){
			//hacer una llamada a la api, que devuelva una cadena de texto
			if(SC.api("logout")){
				callback();
			}
			return 0;
		},
		settings:function(defaults){
			//idapp
			//apikey
			//apisecret
			//scriptid
			//frmcontid
			if(defaults.idapp===undefined || defaults.idapp==null || defaults.idapp==''){
				SC.log("FALTA IDAPP");
			}
			if(defaults.apikey==undefined || defaults.apikey==null || defaults.apikey==''){
				SC.log("FALTA APIKEY");
			}
			if(defaults.secretkey==undefined || defaults.secretkey==null || defaults.secretkey==''){
				SC.log("FALTA SECRETKEY");
			}
			if(defaults.scriptid==undefined || defaults.scriptid==null || defaults.scriptid==''){
				SC.log("FALTA SECRETKEY");
			}
			if(defaults.frmcontid==undefined || defaults.frmcontid==null || defaults.frmcontid==''){
				SC.log("FALTA SECRETKEY");
			}
			if(defaults.idapp!='' && defaults.apikey!='' && defaults.secretkey!=''){
				genstore.setLocal('idapp', defaults.idapp);
				genstore.setLocal('apikey', defaults.apikey);
				genstore.setLocal('secretkey', defaults.secretkey);
				genstore.setLocal('scriptid', defaults.scriptid);
				genstore.setLocal('frmcontid', defaults.frmcontid);
				credenciales=defaults;
			}
		},
		check:function(){
			let sessionkey=genstore.getLocal("sessionkey");
			let idapp=genstore.getLocal('idapp');
			let apikey=genstore.getLocal('apikey');
			let secretkey=genstore.getLocal('secretkey');

			if(sessionkey=='' || !sessionkey || sessionkey==null){
				generalh.update(location.href);
			}
			return 0;
		},
		getSignUpLink:function(){
			idapp=genstore.getLocal('idapp');
			apikey=genstore.getLocal('apikey');
			secretkey=genstore.getLocal('secretkey');
			if(credentials){
				if(idapp!='' && secretkey!='' && apikey!=''){
					retlink="https://credentials.underdevelopment.work/api/credentials/v1/sl/signupsysconfig/" + apikey + "/" + secretkey + "/" +  idapp;
					return retlink;
				}
			}
			return 0;
		},
		getLoginLink:function(){
			idapp=genstore.getLocal('idapp');
			apikey=genstore.getLocal('apikey');
			secretkey=genstore.getLocal('secretkey');
			if(credentials){
				if(idapp!='' && secretkey!='' && apikey!=''){
					retlink="https://credentials.underdevelopment.work/api/credentials/v1/sl/loginsysconfig/" + apikey + "/" + secretkey + "/" +  idapp;
					return retlink;
				}
			}
			return 0;
		},
		getLoginMinimal:function(){
			idapp=genstore.getLocal('idapp');
			apikey=genstore.getLocal('apikey');
			secretkey=genstore.getLocal('secretkey');
			scriptid=genstore.getLocal('scriptid');
			frmcontid=genstore.getLocal('frmcontid');

			if(credentials){
				if(idapp!='' && secretkey!='' && apikey!=''){
					let strdata="{\"api_key\":\"" + apikey + "\",\"secret_key\":\"" + secretkey + "\",\"app_id\":\"" + idapp + "\"}";
					fetchobj=ajaxapi;
					fetchobj
					.post("https://credentials.underdevelopment.work/api/credentials/v1/sl/login_minimal",strdata)
					.then(function(data){
						g(scriptid).html(data);
						g(frmcontid).eval(data);
					})
					.catch(function(e){	
						SC.log("ERROR:" + e);
					});
				}
			}
			return 0;
		},
		getDevSignUp:function(){
			idapp=genstore.getLocal('idapp');
			apikey=genstore.getLocal('apikey');
			secretkey=genstore.getLocal('secretkey');
			scriptid=genstore.getLocal('scriptid');
			frmcontid=genstore.getLocal('frmcontid');

			if(credentials){
				if(idapp!='' && secretkey!='' && apikey!=''){
					let strdata="{\"api_key\":\"" + apikey + "\",\"secret_key\":\"" + secretkey + "\",\"app_id\":\"" + idapp + "\"}";
					fetchobj=ajaxapi;
					fetchobj
					.post("https://credentials.underdevelopment.work/api/credentials/v1/sl/devsignup",strdata)
					.then(function(data){
						g(scriptid).html(data);
						g(frmcontid).eval(data);
					})
					.catch(function(e){	
						SC.log("ERROR:" + e);
					});
				}
			}
			return 0;
		},
		getNormalSignUp:function(){
			idapp=genstore.getLocal('idapp');
			apikey=genstore.getLocal('apikey');
			secretkey=genstore.getLocal('secretkey');
			scriptid=genstore.getLocal('scriptid');
			frmcontid=genstore.getLocal('frmcontid');

			if(credentials){
				if(idapp!='' && secretkey!='' && apikey!=''){
					let strdata="{\"api_key\":\"" + apikey + "\",\"secret_key\":\"" + secretkey + "\",\"app_id\":\"" + idapp + "\"}";
					fetchobj=ajaxapi;
					fetchobj
					.post("https://credentials.underdevelopment.work/api/credentials/v1/sl/signupuser",strdata)
					.then(function(data){
						g(scriptid).html(data);
						g(frmcontid).eval(data);
					})
					.catch(function(e){	
						SC.log("ERROR:" + e);
					});
				}
			}
			return 0;
		},
		validUsr:function(){
			idapp=genstore.getLocal('idapp');
			apikey=genstore.getLocal('apikey');
			secretkey=genstore.getLocal('secretkey');
			scriptid=genstore.getLocal('scriptid');
			frmcontid=genstore.getLocal('frmcontid');

			if(credentials){
				if(idapp!='' && secretkey!='' && apikey!=''){
					let strdata="{\"api_key\":\"" + apikey + "\",\"secret_key\":\"" + secretkey + "\",\"app_id\":\"" + idapp + "\"}";
					fetchobj=ajaxapi;
					fetchobj
					.post("https://credentials.underdevelopment.work/api/credentials/v1/validuser",strdata)
					.then(function(data){
						g(scriptid).html(data);
						g(frmcontid).eval(data);
					})
					.catch(function(e){	
						SC.log("ERROR:" + e);
					});
				}
			}
			return 0;
		},
		validSes:function(idsesion){
			idapp=genstore.getLocal('idapp');
			apikey=genstore.getLocal('apikey');
			secretkey=genstore.getLocal('secretkey');
			scriptid=genstore.getLocal('scriptid');
			frmcontid=genstore.getLocal('frmcontid');

			if(credentials){
				if(idapp!='' && secretkey!='' && apikey!=''){
					let strdata="{\"api_key\":\"" + apikey + "\",\"secret_key\":\"" + secretkey + "\",\"app_id\":\"" + idapp + "\"}";
					fetchobj=ajaxapi;
					fetchobj
					.post("https://credentials.underdevelopment.work/api/credentials/v1/wapivalidsession",strdata)
					.then(function(data){
						g(scriptid).html(data);
						g(frmcontid).eval(data);
					})
					.catch(function(e){	
						SC.log("ERROR:" + e);
					});
				}
			}
			return 0;
		},
		validLink:function(){
			idapp=genstore.getLocal('idapp');
			apikey=genstore.getLocal('apikey');
			secretkey=genstore.getLocal('secretkey');
			scriptid=genstore.getLocal('scriptid');
			frmcontid=genstore.getLocal('frmcontid');

			if(credentials){
				if(idapp!='' && secretkey!='' && apikey!=''){
					let strdata="{\"api_key\":\"" + apikey + "\",\"secret_key\":\"" + secretkey + "\",\"app_id\":\"" + idapp + "\"}";
					fetchobj=ajaxapi;
					fetchobj
					.post("https://credentials.underdevelopment.work/api/credentials/v1/validlink",strdata)
					.then(function(data){
						g(scriptid).html(data);
						g(frmcontid).eval(data);
					})
					.catch(function(e){	
						SC.log("ERROR:" + e);
					});
				}
			}
			return 0;
		},
		saveSession:function(){
			idapp=genstore.getLocal('idapp');
			apikey=genstore.getLocal('apikey');
			secretkey=genstore.getLocal('secretkey');
			scriptid=genstore.getLocal('scriptid');
			frmcontid=genstore.getLocal('frmcontid');

			if(credentials){
				if(idapp!='' && secretkey!='' && apikey!=''){
					let strdata="{\"api_key\":\"" + apikey + "\",\"secret_key\":\"" + secretkey + "\",\"app_id\":\"" + idapp + "\"}";
					fetchobj=ajaxapi;
					fetchobj
					.post("https://credentials.underdevelopment.work/api/credentials/v1/sl/savesession",strdata)
					.then(function(data){
						g(scriptid).html(data);
						g(frmcontid).eval(data);
					})
					.catch(function(e){	
						SC.log("ERROR:" + e);
					});
				}
			}
			return 0;
		},
		disconnect:function(){
			let sessionkey=genstore.getLocal("sessionkey");
			if(sessionkey!=''){
				genstore.rmLocal("sessionkey");
			}
			return 0;
		},
		log:function(mensaje){
			console.log(mensaje);
			return 0;
		},
		getParam:function(parameter){
			let paramget='';
			paramget=getUrlParam(parameter);
			if(paramget!=''){
				return paramget;
			}
			else{
				return -1;
			}
		}
	}
}(window));
