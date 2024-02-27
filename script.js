document.getElementById('user').innerHTML = 'Surendher Reddy';

function changeColor() {
  var button = document.getElementById('btn-click');

  button.style.backgroundColor = 'red';
}

document.getElementById('build-button').addEventListener('click', makeSentence);

function makeSentence() {
  var noun = document.getElementById('noun').value;
  var verb = document.getElementById('verb').value;
  var adverb = document.getElementById('adverb').value;

  var sentence = `${noun} ${verb} ${adverb}`;

  document.getElementById('statement').innerText = sentence;
}

document.getElementById('child').addEventListener(
  'click',
  function () {
    console.log('Child clicked');
  },
  false
);

document.getElementById('parent').addEventListener(
  'click',
  function () {
    console.log('Parent clicked');
  },
  false
);

document.getElementById('grandparent').addEventListener(
  'click',
  function () {
    console.log('Grandparent clicked');
  },
  false
);

document.getElementById('grandparent').addEventListener(
  'click',
  function () {
    console.log('Grandparent clicked');
  },
  true
);

document.getElementById('parent').addEventListener(
  'click',
  function () {
    console.log('Parent clicked');
  },
  true
);

document.getElementById('child').addEventListener(
  'click',
  function () {
    console.log('Child clicked');
  },
  true
);

document.getElementById('category').addEventListener('click', function (event) {
  if (event.target.id === 'blazers') {
    console.log('blazers');
  }
});
