

window.onload = function() {
		chrome.tabs.getSelected(function(currentWindow){ 
			var title = currentWindow.title; 
			var url = currentWindow.url;
			var ap=document.createElement('iframe');  
			
			var param = {
				url:location.href,
				type:'6',
				count:'', /**�Ƿ���ʾ��������1��ʾ(��ѡ)*/
				appkey:'', /**�������Ӧ��appkey,��ʾ������Դ(��ѡ)*/
				pic:'', /**����ͼƬ��·��(��ѡ)*/
				ralateUid:'', /**�����û���UID������΢����@���û�(��ѡ)*/
				language:'zh_cn', /**�������ԣ�zh_cn|zh_tw(��ѡ)*/
				rnd:new Date().valueOf()
			}
			var temp = [];
			for( var p in param ){
				temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
			}
			
			var url = "http://hits.sinajs.cn/A1/weiboshare.html?' + temp.join('&') + '" + '&title=' + encodeURIComponent(title || '') + " " + url;
			//alert(url);
			
			ap.setAttribute('src',url);   		
			ap.setAttribute('allowTransparency','true');  
			ap.setAttribute('frameborder','0');   
			ap.setAttribute('scrolling','0');   
			ap.setAttribute('width','32');   
			ap.setAttribute('height','32');   		
			document.body.appendChild(ap);
		});
};


