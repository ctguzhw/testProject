#pragma strict

function Start () {

}
var speed : int = 20;
var rotateSpeed : int = 40;
var heightSpeed :int = 10;
var newObject : Transform;

var xmshu : int = 0;
var sdshu : int = 0;

function Update () {

// 平移摄像机
	var x :float = Input.GetAxis("Horizontal") * Time.deltaTime * speed;
	var z :float= Input.GetAxis("Vertical") * Time.deltaTime * speed;
	transform.Translate(x,0,z);

// 摄像机高度调节
	if (Input.GetKey(KeyCode.H))
	{
		transform.Translate(0,(1) * heightSpeed * Time.deltaTime,0);
	}
	if (Input.GetKey(KeyCode.N))
	{
		transform.Translate(0,(-1) * heightSpeed * Time.deltaTime,0);
	}


// Y轴旋转
	if (Input.GetKey(KeyCode.Q))
	{
		transform.Rotate(0,(-1) * rotateSpeed * Time.deltaTime,0,Space.Self);

	}
	if (Input.GetKey(KeyCode.E))
	{
		transform.Rotate(0,(1) * rotateSpeed * Time.deltaTime,0,Space.Self);

	}


// X轴旋转
	if (Input.GetKey(KeyCode.Z))
	{
		transform.Rotate((-1) * rotateSpeed * Time.deltaTime,0,0,Space.Self);

	}
	if (Input.GetKey(KeyCode.C))
	{
		transform.Rotate((1) * rotateSpeed * Time.deltaTime,0,0,Space.Self);

	}


// 射击
	if (Input.GetButtonDown("Fire1")) 
	{
		var n: Transform = Instantiate(newObject,transform.position,transform.rotation);
		var fwd:Vector3 = transform.TransformDirection(Vector3.forward);
		n.GetComponent.<Rigidbody>().AddForce(fwd*20055);
		sdshu++;

		print("射弹数:" + sdshu + " 消灭数:" + xmshu);
		gameObject.Find("Canvas/ziti").GetComponent(UI.Text).text = "射弹数:" + sdshu + " 消灭数:" + xmshu;
		

	}





}