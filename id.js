function getID() {
	var hashids = new Hashids("zAfLJIzNlzh455bDguM1"),
	id = hashids.encode(Date.now())
	return id
}


$(function(){
	$('#ID').text(getID())
});
