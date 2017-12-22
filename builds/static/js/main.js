"use strict";
'use strict';

function createEl(elType, className, innerArray, options) {

  if (!options) {
    options = {};
  }
  if (!innerArray) {
    innerArray = [];
  }
  if (className === undefined) {
    className = '';
  }

  var newEl = document.createElement(elType);
  newEl.className = className;

  if (elType === 'a') {
    newEl.href = options.href || '#';
  }
  if (elType === 'input') {
    newEl.type = options.inputType || 'text';
  }
  if (options.innerText) {
    newEl.innerText = options.innerText;
  }

  for (var i = 0; i < innerArray.length; i++) {
    newEl.appendChild(innerArray[i]);
  }

  return newEl;
}

var google = createEl('div', 'google-page', [createEl('div', 'google-header', [createEl('ul', 'links', [createEl('li', '', [createEl('a', '', [], {
  'innerText': 'Почта'
})]), createEl('li', '', [createEl('a', '', [], {
  'href': '/pictures.html',
  'innerText': 'Картинки'
})])])]), createEl('div', 'google-body', [createEl('div', 'google-body-logo', [createEl('span', '', [], { innerText: 'G' }), createEl('span', '', [], { innerText: 'o' }), createEl('span', '', [], { innerText: 'o' }), createEl('span', '', [], { innerText: 'g' }), createEl('span', '', [], { innerText: 'l' }), createEl('span', '', [], { innerText: 'e' })]), createEl('div', 'google-body-input', [createEl('input')]), createEl('div', 'google-body-buttons', [createEl('button', '', [], { innerText: 'Поиск в Google' }), createEl('button', '', [], { innerText: 'Мне повезёт!' })], {}), createEl('div', 'google-body-info', [createEl('span', '', [], { innerText: 'Сервисы Google доступны на разных языках: ' }), createEl('a', '', [], { href: 'https://google.com.ua', innerText: 'українська' })], {})], {}), createEl('div', 'google-footer', [createEl('ul', 'links', [createEl('li', '', [createEl('a', '', [], { 'innerText': 'Реклама' })]), createEl('li', '', [createEl('a', '', [], { 'innerText': 'Для бизнеса' })]), createEl('li', '', [createEl('a', '', [], { 'innerText': 'Всё о Google' })])])])]);

root.appendChild(google);

// var logoName = 'Google';
// var logo = [];

// var pageDiv = document.createElement('div'),

//    headerDiv = document.createElement('div'),
//      headerLinks = document.createElement('ul'),
//    bodyDiv = document.createElement('div'),
//      logoDiv = document.createElement('div'),
//      inputDiv = document.createElement('div'),
//      buttonsDiv = document.createElement('div'),
//      infoDiv = document.createElement('div'),
//    footerDiv = document.createElement('div');

// pageDiv.className = "google-page";
// headerDiv.className = "google-header";
// bodyDiv.className = "google-body";
// footerDiv.className = "google-footer";
// logoDiv.className = "google-body-logo";

// for (var i = 0; i <logoName.length ; i++) {
//  var letter = document.createElement('span');
//  letter.innerHTML = logoName[i];
//  logo.push(letter);
// }

// for (var i = 0; i < logoName.length; i++) {
//  logoDiv.appendChild(logo[i]);
// }


// bodyDiv.appendChild(logoDiv);
// bodyDiv.appendChild(inputDiv);
// bodyDiv.appendChild(buttonsDiv);
// bodyDiv.appendChild(infoDiv);

// pageDiv.appendChild(headerDiv);
// pageDiv.appendChild(bodyDiv);
// pageDiv.appendChild(footerDiv);

// root.appendChild(pageDiv);