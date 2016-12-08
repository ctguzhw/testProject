#pragma strict

function Start () {
	
}

function Update () {
	
}

function OnGUI() {

	if (GUI.Button(Rect(380,500,60,30),"退出")) {
		Application.Quit();
	}

	if (GUI.Button(Rect(480,500,60,30),"开始游戏")) {
		Application.LoadLevel("shejiScene");

	}
}
