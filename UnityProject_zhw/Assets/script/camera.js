#pragma strict

function Start () {

}
var speed : int = 50;
var newObject : Transform;
function Update () {

	var x = Input.GetAxis("Horizontal") * Time.deltaTime * speed;
	var z = Input.GetAxis("Vertical") * Time.deltaTime * speed;
	transform.Translate(x,0,z);

	if (Input.GetButtonDown("Fire1")) 
	{
		var n: Transform = Instantiate(newObject,transform.position,transform.rotation);
		var fwd:Vector3 = transform.TransformDirection(Vector3.forward);
		n.GetComponent.<Rigidbody>().AddForce(fwd*20055);
	}


}