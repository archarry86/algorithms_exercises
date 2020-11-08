
alert('script loaded');
function CreateTrie(words){
    var root = new Node();
    var node = root;
    words.forEach(word => {
        word.split('').forEach(character => {
            if(character!=''&& character!= undefined){
                node.addChildren(character);
                node = node.getChildren(character);
            }
        });   
        node = root; 
    });
    return root ;
}

function Node(_chatacter= ''){
    this.nodes = new Map()
    this.character = _chatacter;
    this.addChildren= function(_chatacter){
        _chatacter = _chatacter.toLowerCase();
        if(this.nodes.get(_chatacter) == undefined)
        this.nodes.set(_chatacter, new Node(_chatacter));
    }
    this.getChildren = function(_chatacter){
        _chatacter = _chatacter.toLowerCase();
        return this.nodes.get(_chatacter) ;
    }
    this.print = function (){
        console.log(`character ${this.character}`);
        this.print_schildren();
    }
    this.print_schildren = function (){
       
        this.nodes.forEach(this.sp);
        this.nodes.forEach(value => value.print_schildren());
        
    }
    this.sp = function logMapElements(value, key, map) {
        
        console.log(`${value.character}`);
    }


    this.is_leaf= function(){

       return this.nodes.size == 0;
    }

    this.containsWord = function(word){
        
       return this.checkWord(this, word, 0);
    }

    this.checkWord= function(node, word, index){
        debugger;
        if(index == word.length){
            debugger;
            return index > 0;
        }
        var subnode = node.getChildren(word[index]);
        if(subnode != undefined){
            var newindex = index+1;
            return this.checkWord(subnode, word,newindex);
        }
        else{
            return false;
        }
    }
}


var trie_words = "This is a trie implementation in Javascript.".split(' ');

 trie_words = trie_words.filter(function (el) {
    return el != " ";
  });

var trie = CreateTrie(trie_words);


function testTrie(){
    document.getElementById('trie_result').innerHTML ="Testing ...";
    var test_word = document.getElementById('test_word').value
    var result_trie = trie.containsWord(test_word);
    if(result_trie){

        document.getElementById('trie_result').innerHTML =`The word or prefix '${test_word}' is in the Trie.` ;
    }
    else{

        document.getElementById('trie_result').innerHTML =`The word or prefix '${test_word}' is not  in the Trie.` ;
    }
}

