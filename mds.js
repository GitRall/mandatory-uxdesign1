
window.mds = {
  textField: function(elements){
    for(let element of elements){
      element.addEventListener('focus', function(e){
        let label = e.target.parentNode.childNodes[3];
        let border = e.target.parentNode.childNodes[5];
        if(e.type === 'focus' || e.target.value.length > 0){
          label.style.top = '16px';
          label.style.fontSize = '1.2rem';
          label.style.transition = 'all 0.2s';
          border.style.transform = 'scaleX(1)';
        };
      });

      element.addEventListener('blur', function(e){
        let label = e.target.parentNode.childNodes[3];
        let border = e.target.parentNode.childNodes[5];
        if(e.target.value.length > 0){
          label.style.top = '16px';
          label.style.fontSize = '1.2rem';
          label.style.transition = 'all 0.2s';
          border.style.transform = 'scaleX(1)';
        }
        else{
          label.style.top = '50%';
          label.style.fontSize = '2rem';
          label.style.transition = 'all 0.2s';
          border.style.transform = 'scaleX(0)';
        };
      });
    };
  },
  switch: function(elements){
    for(let element of elements){
      element.addEventListener('click', function(e){
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
        };
      });
    };
  },
  checkbox: function(){

  },
  radioButton: function(){

  },
};
