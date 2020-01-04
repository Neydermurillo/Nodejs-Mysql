const synonyms = [
  'you', 'yourself', 'you yourself',
  'thee', 'thou', 'all of you', 'you too',
  'you alone', 'you all', 'y\'all'
];

function yourself() {
  return synonyms[Math.floor(Math.random()*synonyms.length)];
}

module.exports = yourself;