var trie_words = "This is a trie implementation in Javascript.".split(' ');

trie_words = trie_words.filter(function (word) {
  return word != " ";
});

var trie = CreateTrie(trie_words);

function testTrie(){
  document.getElementById('trie_result').innerHTML ="Testing ...";
  var test_word = document.getElementById('test_word').value
  var result_trie = trie.containsWord(test_word);
  if(result_trie){
      document.getElementById('trie_result').innerHTML =`The word or prefix '${test_word}' is in the Trie.`;
  }
  else{
      document.getElementById('trie_result').innerHTML =`The word or prefix '${test_word}' is not  in the Trie.`;
  }
}