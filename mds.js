let inputFields = document.querySelectorAll('.form__mds-text-field__input');

let mds = {
  textField: function(e){
    let label = e.target.parentNode.childNodes[3];
    if(e.type === 'focus' || e.target.value.length > 0){
      label.style.top = '16px';
      label.style.fontSize = '1.2rem';
      label.style.transition = 'all 0.2s';
    }
    else{
      label.style.top = '50%';
      label.style.fontSize = '2rem';
      label.style.transition = 'all 0.2s';
    }
  },
  switch: function(){

  },
  checkbox: function(){

  },
  radioButton: function(){

  },
}

for(let input of inputFields){
  input.addEventListener('focus', mds.textField);
}
for(let input of inputFields){
  input.addEventListener('blur', mds.textField);
}
