#pragma strict

function Start () {
	
}

function Update () {
	
}

function OnCollisionEnter(){
	
	gameObject.Find("Canvas/zt").GetComponent(UI.Text).text = "如果世界失去了和平，世界将会怎样";
	gameObject.Find("Point light").GetComponent(Light).enabled = false;


	//销毁物体
	Destroy(gameObject);

}