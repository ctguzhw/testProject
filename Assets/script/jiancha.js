#pragma strict

function Start () {

}

var sd : int;
var xm : int;

function Update () {

	if (gameObject.transform.position.y<0)
	{
		xm = gameObject.Find("Camera").GetComponent(sheji).xmshu++;
		sd = gameObject.Find("Camera").GetComponent(sheji).sdshu;
		print(" 检查到消灭 射弹数:" + sd + " 消灭数:" + xm);
		gameObject.Find("Canvas/ziti").GetComponent(UI.Text).text = "射弹数:" + sd + " 消灭数:" + xm;
		Destroy(gameObject);
	}	
};