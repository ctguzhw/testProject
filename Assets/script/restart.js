#pragma strict



function Update () {
	
}

function OnGUI() {

	

	if (GUI.Button(Rect(380,500,60,30),"退出")) {
		Application.Quit();
	}

	if (GUI.Button(Rect(480,500,60,30),"重新游戏")) {
		Application.LoadLevel("shejiScene");

	}
}
