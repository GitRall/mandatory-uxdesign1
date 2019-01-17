let inputFields = document.querySelectorAll('.mds-text-field__input');
let switches = document.querySelectorAll('.mds-switch');

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
  switch: function(e){
    let track = e.target.childNodes[1];
    let thumb = track.childNodes[1];
    if(e.target.dataset.switch === 'disabled'){
      track.classList.add('mds-switch__track--active');
      thumb.classList.add('mds-switch__thumb--active');
      e.target.dataset.switch = 'active';
    }
    else{
      track.classList.remove('mds-switch__track--active');
      thumb.classList.remove('mds-switch__thumb--active');
      e.target.dataset.switch = 'disabled';
    }

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
for(let x of switches){
  x.addEventListener('click', mds.switch);
}
