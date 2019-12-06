$(function() {

	// 加载设置
	var defaultConfig = {color: 'white'}; // 默认配置
	chrome.storage.sync.get(defaultConfig, function(items) {
		document.body.style.backgroundColor = items.color;
	});

});

// 新标签打开网页
$('#open_url_new_tab').click(() => {
    var magnet=$("#magnet").val();
	chrome.tabs.create({url: 'video.html?url='+magnet});
}); 




