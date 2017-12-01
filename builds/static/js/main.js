"use strict";
'use strict';

var logoName = 'Google';
var logo = [];

var pageDiv = document.createElement('div'),
    headerDiv = document.createElement('div'),
    headerLinks = document.createElement('ul'),
    bodyDiv = document.createElement('div'),
    logoDiv = document.createElement('div'),
    inputDiv = document.createElement('div'),
    buttonsDiv = document.createElement('div'),
    infoDiv = document.createElement('div'),
    footerDiv = document.createElement('div');

pageDiv.className = "google-page";
headerDiv.className = "google-header";
bodyDiv.className = "google-body";
footerDiv.className = "google-footer";
logoDiv.className = "google-body-logo";

for (var i = 0; i < logoName.length; i++) {
	var letter = document.createElement('span');
	letter.innerHTML = logoName[i];
	logo.push(letter);
}

for (var i = 0; i < logoName.length; i++) {
	logoDiv.appendChild(logo[i]);
}

bodyDiv.appendChild(logoDiv);
bodyDiv.appendChild(inputDiv);
bodyDiv.appendChild(buttonsDiv);
bodyDiv.appendChild(infoDiv);

pageDiv.appendChild(headerDiv);
pageDiv.appendChild(bodyDiv);
pageDiv.appendChild(footerDiv);

root.appendChild(pageDiv);