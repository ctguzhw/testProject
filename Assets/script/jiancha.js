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
		gameObject.Find("Canvas/ziti").GetComponent(UI.Text).text = "射弹数:" + sd + " 消灭数:" + xm;
		Destroy(gameObject);

		if( xm >5){

			gameObject.Find("Canvas/ziti").GetComponent(UI.Text).text = "恭喜过关！";

			gameObject.Find("Point light").GetComponent(Light).enabled = false;
			gameObject.Find("Camera").GetComponent(sheji).enabled = false;

			gameObject.Find("dimian").GetComponent(restart).enabled = true;

		} 

	}	
};