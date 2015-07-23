function generateEmail(){
var url = urlInput.value;
var author = authorInput.value;
var twitter = twitterInput.value;
var facebook = FBInput.value;

var proxyurl = "http://localhost/get_external_content.php?url=" + url;
  $.ajax({
    url: proxyurl,
    async: true,
    success: function(response) {
      alert(response);
    },   
    error: function(e) {
      alert("error! " + e);
    }
  });

result.innerHTML = "Hey all,<br/><br />We just published \""+title+"\" to the blog. URL:<br /><br />"+url+"<br /><br />Many thanks to "+author+" for this post.<br /><br />Below are some proposed social media messages. Please tweak as needed.<br /><br /><b>Twitter (@wikipedia/@wikimedia):</b><br />• "+twitter+" "+url+"<br /><br /><b>Facebook/Google+:</b><br />• "+facebook+" "+url+"<br/ ><br />thanks,<br />Joe";

};

function SelectText(element) { //this code from https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    try {

		// The important part (copy selected text)
		var successful = document.execCommand('copy');

		// "Optional" remove selected text
		sel.removeAllRanges();

		if(successful) answer.innerHTML = 'Copied!';
		else answer.innerHTML = 'Unable to copy; please use ctrl+c!';
		} catch (err) {
		answer.innerHTML = 'Unsupported browser; please use ctrl+c!';
	}
};