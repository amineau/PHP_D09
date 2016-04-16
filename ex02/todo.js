var index = maxId();

function addList()
{
    var text = prompt();
    var idName = 'child' + index;
    newList(idName, text);
}

function newList(idName, text)
{
    var newElement = document.createElement("div");
    var myDiv = document.getElementById('ft_list');
    var prev = index - 1
    
    if (text != "" && text)
    {
        newElement.setAttribute('id', idName);
        newElement.setAttribute('onclick', 'deleted('+ idName + ')');
        newElement.appendChild(document.createTextNode(text));
        if (!myDiv.childNodes[0])
            myDiv.appendChild(newElement);
        else
            myDiv.insertBefore(newElement, myDiv.childNodes[0]);
        createCookie(idName, text, 1);
        index++;
    }
}

function deleted(oldChild)
{
    var myDiv = document.getElementById('ft_list');
    if (confirm("Are you sure you want to delete this item ?")){
        eraseCookie(oldChild.getAttribute('id'));
        myDiv.removeChild(oldChild);
    }
}

function createCookie(name, value, day)
{
	var date = new Date();
	date.setTime(date.getTime()+(day*24*60*60*1000));
	var expires = "; expires="+ date.toGMTString();
	document.cookie = name + "=" + value + expires + "; path=/";
}

function checkCookie() {
	var cook = document.cookie.split(';');
	var c;
	
	for(var i = 0; i < cook.length; i++) {
		c = cook[i];
		while (c.charAt(0) == ' ')
		    c = c.substring(1,c.length);
		newList(c.substring(0, c.indexOf('=')), c.substring(c.indexOf('=') + 1, c.length));
	}
}

function maxId()
{
    var max = 0;
    var cook = document.cookie.split(';');
    
    for(var i = 0; i < cook.length; i++) {
        var idValue = parseInt(cook[i].charAt(cook[i].indexOf('=') - 1));
        if (max < idValue)
            max = idValue;
    }
    return max + 1;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}