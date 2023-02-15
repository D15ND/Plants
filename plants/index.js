console.log("1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20\nИтого: 110");
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
  })
  const massLi=document.querySelectorAll(".navigation__link");
  for (let i=0; i<massLi.length; i++) {
    massLi[i].addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")
    });
  }

  const buttonsService=document.querySelectorAll('.general__buttom-serivce');
  const blurBlur=document.querySelectorAll('.blur__img');
  for (let i=0; i<buttonsService.length; i++) {
    buttonsService[i].addEventListener("click", function() {
    if (i===0 && buttonsService[1].classList.contains('general__buttom-serivce_active')) {
      blurBlur[0].classList.toggle('blur__active');
      blurBlur[4].classList.toggle('blur__active');
      buttonsService[i].classList.toggle('general__buttom-serivce_active');
      if (buttonsService[0].classList.contains('general__buttom-serivce_active')) {
        buttonsService[2].disabled=true;
      } else {
        buttonsService[2].disabled=false;
      }
      console.log('block-0');
    } else if (i===1 && buttonsService[0].classList.contains('general__buttom-serivce_active')) {
      blurBlur[2].classList.toggle('blur__active');
      buttonsService[i].classList.toggle('general__buttom-serivce_active');
      if (buttonsService[1].classList.contains('general__buttom-serivce_active')) {
        buttonsService[2].disabled=true;
      } else {
        buttonsService[2].disabled=false;
      }
      console.log('block-0, first and second button');
    } else if (i===1 && buttonsService[2].classList.contains('general__buttom-serivce_active')) {
      blurBlur[2].classList.toggle('blur__active');
      buttonsService[i].classList.toggle('general__buttom-serivce_active');
      if (buttonsService[i].classList.contains('general__buttom-serivce_active')) {
        buttonsService[0].disabled=true;
      } else {
        buttonsService[0].disabled=false;
      }
    } else if (i===2 && buttonsService[1].classList.contains('general__buttom-serivce_active')) {
      blurBlur[1].classList.toggle('blur__active');
      blurBlur[3].classList.toggle('blur__active');
      blurBlur[5].classList.toggle('blur__active');
      buttonsService[i].classList.toggle('general__buttom-serivce_active');
      if (buttonsService[i].classList.contains('general__buttom-serivce_active')) {
        buttonsService[0].disabled=true;
      } else {
        buttonsService[0].disabled=false;
      }
    } else if (i===0 && buttonsService[2].classList.contains('general__buttom-serivce_active')) {
      blurBlur[0].classList.toggle('blur__active');
      blurBlur[4].classList.toggle('blur__active');
      buttonsService[i].classList.toggle('general__buttom-serivce_active');
      if (buttonsService[i].classList.contains('general__buttom-serivce_active')) {
        buttonsService[1].disabled=true;
      } else {
        buttonsService[1].disabled=false;
      }
    } else if (i===2 && buttonsService[0].classList.contains('general__buttom-serivce_active')) {
      blurBlur[1].classList.toggle('blur__active');
      blurBlur[3].classList.toggle('blur__active');
      blurBlur[5].classList.toggle('blur__active');
      buttonsService[i].classList.toggle('general__buttom-serivce_active');
      if (buttonsService[i].classList.contains('general__buttom-serivce_active')) {
        buttonsService[1].disabled=true;
      } else {
        buttonsService[1].disabled=false;
      }
    } else if (i===0) {
        blurBlur[1].classList.toggle('blur__active');
        blurBlur[2].classList.toggle('blur__active');
        blurBlur[3].classList.toggle('blur__active');
        blurBlur[5].classList.toggle('blur__active');
        buttonsService[i].classList.toggle('general__buttom-serivce_active');
        console.log('0');
    } else if (i===1) {
        blurBlur[0].classList.toggle('blur__active');
        blurBlur[1].classList.toggle('blur__active');
        blurBlur[3].classList.toggle('blur__active');
        blurBlur[4].classList.toggle('blur__active');
        blurBlur[5].classList.toggle('blur__active');
        buttonsService[i].classList.toggle('general__buttom-serivce_active');
        console.log('1');
    } else if (i===2) {
        blurBlur[0].classList.toggle('blur__active');
        blurBlur[2].classList.toggle('blur__active');
        blurBlur[4].classList.toggle('blur__active');
        buttonsService[i].classList.toggle('general__buttom-serivce_active');
        console.log('2');
    }
    });
  }
const pricesButtons=document.querySelectorAll(".items__text-config");
for (let i=0; i<pricesButtons.length; i++) {
  pricesButtons[i].addEventListener('click', function() {
    if (i===0 && pricesButtons[1].parentElement.classList.contains('accordion__main__open')) {
      pricesButtons[i].parentElement.classList.add('accordion__main__open');
      pricesButtons[1].parentElement.classList.remove('accordion__main__open');
    } else if (i===0 && pricesButtons[2].parentElement.classList.contains('accordion__main__open')) {
      pricesButtons[i].parentElement.classList.add('accordion__main__open');
      pricesButtons[2].parentElement.classList.remove('accordion__main__open');
    } else if (i===1 && pricesButtons[0].parentElement.classList.contains('accordion__main__open')) {
      pricesButtons[i].parentElement.classList.add('accordion__main__open');
      pricesButtons[0].parentElement.classList.remove('accordion__main__open');
    } else if (i===1 && pricesButtons[2].parentElement.classList.contains('accordion__main__open')) {
      pricesButtons[i].parentElement.classList.add('accordion__main__open');
      pricesButtons[2].parentElement.classList.remove('accordion__main__open');
    } else if (i===2 && pricesButtons[0].parentElement.classList.contains('accordion__main__open')) {
      pricesButtons[i].parentElement.classList.add('accordion__main__open');
      pricesButtons[0].parentElement.classList.remove('accordion__main__open');
    } else if (i===2 && pricesButtons[1].parentElement.classList.contains('accordion__main__open')) {
      pricesButtons[i].parentElement.classList.add('accordion__main__open');
      pricesButtons[1].parentElement.classList.remove('accordion__main__open');
    } else {
      pricesButtons[i].parentElement.classList.toggle('accordion__main__open');
    } 
  })
}
})