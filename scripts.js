let title = document.createElement('title');
title.innerText = 'New HTML Document';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'Utf-8');

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let articleTitle = document.createElement('div');
articleTitle.classList.add('articleTitle');
document.body.appendChild(articleTitle);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
articleTitle.appendChild(h1);

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
articleTitle.appendChild(p1);

let articleContent = document.createElement('div');
articleContent.classList.add('articleContent')
document.body.appendChild(articleContent);

let p2 = document.createElement('p');
p2.innerText = 'FREELANCER';
p2.classList.add('p2');

let p3 = document.createElement('p');
p3.innerText = 'Initially designed to ';
p3.classList.add('p3');

let p4 = document.createElement('p');
p4.innerText = 'But I must explain to you how all this mistaken idea of denouncing ';
p4.classList.add('p4');

let articleBlock_1 = document.createElement('div');
articleBlock_1.classList.add('articleBlock_1')

let articleElements = document.createElement('div');
articleElements.classList.add('articleElements')

articleContent.appendChild(articleBlock_1);
articleBlock_1.appendChild(articleElements);
articleElements.appendChild((p2));
articleElements.appendChild((p3));
articleElements.appendChild((p4));

let articleButtonBlock = document.createElement('div');
articleButtonBlock.classList.add('articleButtonBlock');
articleElements.appendChild(articleButtonBlock);

let articleButton = document.createElement('button');
articleButton.classList.add('articleButton');
articleButton.innerText = 'START HERE';
articleButtonBlock.appendChild(articleButton);

let articleBlock_2 = document.createElement('div');
articleContent.appendChild(articleBlock_2);
articleBlock_2.classList.add('articleBlock_2');

let articleElementsBlock_2 = document.createElement('div');
articleElementsBlock_2.classList.add('articleElementsBlock_2');
articleBlock_2.appendChild(articleElementsBlock_2);

let p5 = document.createElement('p');
p5.innerText = 'STUDIO';
p5.classList.add('p5');
articleElementsBlock_2.appendChild(p5);

let p6 = document.createElement('p');
p6.innerText = 'Initially designed to ';
p6.classList.add('p6');
articleElementsBlock_2.appendChild(p6);

let p7 = document.createElement('p');
p7.innerText = 'But I must explain to you how all this mistaken idea of denouncing  ';
p7.classList.add('p7');
articleElementsBlock_2.appendChild(p7);

let articleButtonBlock_2 = document.createElement('div');
articleButtonBlock_2.classList.add('articleButtonBlock_2');
articleElementsBlock_2.appendChild(articleButtonBlock_2);

let articleButton_2 = document.createElement('button');
articleButton_2.classList.add('articleButton_2');
articleButton_2.innerText = 'START HERE';
articleButtonBlock_2.appendChild(articleButton_2);