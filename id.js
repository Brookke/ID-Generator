function getID() {
	var hashids = new Hashids("zAfLJIzNlzh455bDguM1"),
	id = hashids.encode(Date.now())
	
	$('#ID').text(id)
}


$(function(){
	getID()
	
});
