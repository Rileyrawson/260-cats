function loadPhoto(e) {
  e.preventDefault();

  let gif = document.getElementById('gif').checked;
  let text = document.getElementById('text').value;
  let color = document.getElementById('color').value;
  let width = document.getElementById('width').value;
  let height = document.getElementById('height').value;
  let textSize = document.getElementById('textSize').value;

  //let type = document.getElementById('type').value;

//https://cataas.com/cat/gif/says/Hello?filter=sepia&color=orange&size=40&type=or
//https://cataas.com/cat?height=500
	
 if (gif) {
    gif = "/gif";
  }
  if (!gif) {
    gif = "";	
  } 

  let url = "https://cataas.com/cat" + gif;
 

  if (text !== ""){
    url += "/says/" + text;
  }

  if (color !== "" || width !== "" || height !== "" || textSize !== ""){
   url += "?";
  }
  
  
  if (text !== "" && color !== ""){
    url += "&color=" + color;
  }
  if (text !== "" && textSize !== ""){
    url += "&size=" + textSize;
  }
  

  if (text === "" && width !== "" && color === '' && height === "" && textSize === ""){
    url += "width=" + width;
  }
  else  if (width !== ""){
    url += "&width=" + width;
  }
  if (text === "" && height !== "" && color === '' && width === "" && textSize === ""){
    url += "height=" + height;
  }
  else if (height !== ""){
    url += "&height=" + height;
  } 




  updateImage(url);   
}

function updateImage(url) {
  document.getElementById('photo').src = url;  
}

document.getElementById('get').addEventListener('click', loadPhoto);
