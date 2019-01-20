
window.mds = {
  textField: function(elements){
    for(let element of elements){
      element.addEventListener('focus', function(e){
        let label = e.target.parentNode.querySelector('.mds-text-field__label');
        let border = e.target.parentNode.querySelector('.mds-text-field__border');
        if(e.type === 'focus' || e.target.value.length > 0){
          label.classList.add('mds-text-field__label--moved');
          label.classList.add('mds-text-field__label--focused');
          border.classList.add('mds-text-field__border--focused');
          border.style.transform = 'scaleX(1)';
        };
      });

      element.addEventListener('blur', function(e){
        let label = e.target.parentNode.querySelector('.mds-text-field__label');
        let border = e.target.parentNode.querySelector('.mds-text-field__border');
        let errorIcon = e.target.parentNode.querySelector('.mds-text-field__error-icon');
        let helperText = e.target.parentNode.querySelector('.mds-text-field__helper-text');
        if(e.target.value.length > 0 && e.target.value.length < 6){
          errorIcon.classList.add('mds-text-field__error-icon--active');
          label.classList.add('mds-text-field__label--error');
          border.classList.add('mds-text-field__border--error');
          helperText.classList.add('mds-text-field__helper-text--error');
          helperText.innerHTML = 'minimum 6 characters';
        }
        else if(e.target.value.length > 0){
          label.classList.add('mds-text-field__label--moved');
          errorIcon.classList.remove('mds-text-field__error-icon--active');
          label.classList.remove('mds-text-field__label--error');
          border.classList.remove('mds-text-field__border--error');
          border.style.transform = 'scaleX(1)';
          helperText.classList.remove('mds-text-field__helper-text--error');
          helperText.innerHTML = 'Helper text';
        }
        else{
          label.classList.remove('mds-text-field__label--moved');
          errorIcon.classList.remove('mds-text-field__error-icon--active');
          label.classList.remove('mds-text-field__label--error');
          border.classList.remove('mds-text-field__border--error');
          border.style.transform = 'scaleX(0)';
          helperText.classList.remove('mds-text-field__helper-text--error');
          helperText.innerHTML = 'Helper text';
        };
        label.classList.remove('mds-text-field__label--focused');
        border.classList.remove('mds-text-field__border--focused');
      });
    };
  },
  switch: function(elements){
    for(let element of elements){
      element.addEventListener('click', function(e){
        let track = e.target.querySelector('.mds-switch__track');
        let thumb = track.querySelector('.mds-switch__thumb');
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
