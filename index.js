function introduction(name) {
    // todo
  }
  function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  console.log(introduction("Aki"));
// Output: Hi, my name is Aki.

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("Aki", "Ember.js"));
// Output: Hi, my name is Aki and I am learning to program in Ember.js.


function introductionWithLanguageOptional(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language="JavaScript"}.`;

}

function introductionWithLanguageOptional(name, language) {
  language = language || "JavaScript";
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}