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
		print("射弹数" + xm);
		Destroy(gameObject);
	}	
};