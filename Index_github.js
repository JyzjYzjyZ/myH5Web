// JavaScript Document
function chickItUpdate()
{
    alert("于2020.8.30添加了更新日志\n更新内容:添加了更新日志;更换了背景图片<由原来的免版权图片 变为了作者拍摄的图片>;优化了网页加载速度<通过压缩背景图片达到了加快网页加载速度的效果,图片经压缩有杂色会在后续的版本中改进>在页脚做了些许修改")
}
function random(min,max)
{
	var ran;
	if(isNaN(max)||isNaN(min) == true)
		{
			ran = Infinity;
			return ran;
		}
	else
		{
			ran = Math.floor(Math.random()*(max+1-min)+min);
			return ran;
		}

}