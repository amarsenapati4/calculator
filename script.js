const buttons=document.getElementsByClassName('button');
const inputfiled=document.getElementById('number-input');
for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',(event) =>{
 
      let inputText="";
      switch(event.target.innerHTML)
      {
        case 'c':
          break;
        case '=':
          try{
          inputText=eval(inputfiled.value);
        }catch(e)
        {
          inputText="";
          alert("Inavlid operation");
        }
          break;
          case '←':
            inputText=inputfiled.value.slice(0,inputfiled.value.length-1);
            break;
            default:
              inputText=`${inputfiled.value}${event.target.innerHTML}`;

      }

      inputfiled.value=inputText;
    });
}

