const mobileNavLinks = document.querySelectorAll('.mobile-nav ul a');
const speakerArr = [
    {
        name: 'Yochai Bankler',
        description: 'Bankler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        picture: 'assets/images/speaker/speaker.png',
        alt: 'A picture of Yochai Bankler'
    },
    {
        name: 'Yochai Bankler',
        description: 'Bankler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        picture: 'assets/images/speaker/speaker.png',
        alt: 'A picture of Yochai Bankler'
    }
];

document.querySelector('.menu-button').addEventListener('click', () =>{
    document.querySelector('.menu-button').classList.toggle('close-cross');
    document.querySelector('.menu-button').classList.toggle('fix-position');
    document.querySelector('.mobile-nav').classList.toggle('appear-block');
})

mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-button').classList.toggle('close-cross');
        document.querySelector('.menu-button').classList.toggle('fix-position');
        document.querySelector('.mobile-nav').classList.toggle('appear-block');
    });
});

function appendSpeaker(i) {
const speakerWrapper = document.createElement('div');
const speakerImage = document.createElement('img');
speakerImage.setAttribute('alt', `${speakerArr[i].alt}`);
speakerImage.setAttribute('src', `${speakerArr[i].picture}`);
const speakerInfoWrapper = document.createElement('div');
const speakerName = document.createElement('h3');
speakerName.textContent = `${speakerArr[i].name}`;
const speakerTitle = document.createElement('p')
speakerTitle.textContent = `${speakerArr[i].title}`;
const speakerDescription = document.createElement('p');
speakerDescription.textContent = `${speakerArr[i].description}`;
speakerWrapper.classList.add('speaker');
speakerInfoWrapper.classList.add('speaker-info');
speakerWrapper.appendChild(speakerImage);
speakerInfoWrapper.appendChild(speakerName);
speakerInfoWrapper.appendChild(speakerTitle);
speakerInfoWrapper.appendChild(speakerDescription);
speakerWrapper.appendChild(speakerInfoWrapper);
document.querySelector('.speakers-container').appendChild(speakerWrapper);
}

for (let i = 0; i < speakerArr.length; i += 1) {
    appendSpeaker(i);
}