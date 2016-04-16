var index = 0;

$(document).ready(function(){
   $(".children").click(function(){
        if (confirm("Are you sure you want to delete this item ?")){
           // createCookie($(this).id, "", -1);
            $(this).remove();
        }
    });
   $('#new').click(function(){
        newList('child' + index, prompt());
   });
   
});

function newList(idName, text)
{
    if (text != "" && text)
    {
        var divText = '<div id="' + idName + '" class="children">' + text + '</div>';
        if ($('#ft_list').text() == ""){
            $('#ft_list').append(divText);console.log('coucou');}
        else{
            $('.children').first().before(divText);console.log('cocu');}
        //createCookie(idName, text, 1);
        index++;
    }
}

// function createCookie(name, value, day)
// {
// 	var date = new Date();
// 	date.setTime(date.getTime()+(day*24*60*60*1000));
// 	var expires = "; expires="+ date.toGMTString();
// 	document.cookie = name + "=" + value + expires+"; path=/";
// }

// function checkCookie() {
// 	var cook = document.cookie.split(';');
// 	var c;
	
// 	for(var i = 0; i < cook.length; i++) {
// 		c = cook[i];
// 		while (c.charAt(0) == ' ')
// 		    c = c.substring(1,c.length);
// 		newList(c.substring(0, c.indexOf('=')), c.substring(c.indexOf('=') + 1, c.length));
// 	}
// }

// function maxId()
// {
//     var max = 0;
//     var cook = document.cookie.split(';');
    
//     for(var i = 0; i < cook.length; i++) {
//         var idValue = parseInt(cook[i].charAt(cook[i].indexOf('=') - 1));
//         if (max < idValue)
//             max = idValue;
//     }
//     return max + 1;
// }