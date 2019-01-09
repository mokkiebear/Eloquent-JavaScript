
//cat car
verify(/ca[rt]/,
       ['my car', 'bad cats'],
       ['camper', 'high art']);
//pop prop
verify(/pr?op/,
       ['pop culture', 'mad props'],
       ['plop']);
//ferret ferry ferrari
verify(/ferr(et|y|ari)/,
       ['ferret', 'ferry', 'ferrari'],
       ['ferrum', 'transfer A']);
//ious
verify(/ious\b/,
       ['how delicious', 'spacious room'],
       ['ruinous', 'consciousness']);
// .:;,
verify(/\s[,:.;]/,
       ['bad punctuation .'],
       ['escape the dot']);
//more than 6 letters
verify(/\w{7,}\b/,
       ['hottentottententen'],
       ['no', 'hotten totten tenten']);
//without e
verify(/\b[^\se]+\b/,
       ['red platypus', 'wobbling nest'],
       ['earth bed', 'learning ape']);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source === '...') {return;};
  yes.forEach(function(s) {
    if (!regexp.test(s)){
        console.log('Не нашлось \'' + s + '\'');
    }
  });
  no.forEach(function(s) {
    if (regexp.test(s)){
        console.log('Неожиданное вхождение \'' + s + '\'');
    }
  });
}
