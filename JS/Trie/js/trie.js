
function CreateTrie(words){
    var root = new Node();
    var node = root;
    words.forEach(word => {
        word.split('').forEach(character => {
            if(character!=''&& character != undefined){
                node.addChildren(character);
                node = node.getChildren(character);
            }
        });   
        node = root; 
    });
    return root ;
}

function Node(chatacter= ''){
    this.nodes = new Map()
    this.character = chatacter;
    this.addChildren= function(chatacter){
        chatacter = chatacter.toLowerCase();
        if(this.nodes.get(chatacter) == undefined)
        this.nodes.set(chatacter, new Node(chatacter));
    }
    this.getChildren = function(chatacter){
        chatacter = chatacter.toLowerCase();
        return this.nodes.get(chatacter) ;
    }
    this.print = function (){
        console.log(`character ${this.character}`);
        this.printChildren();
    }
    this.printChildren = function (){
        this.nodes.forEach(this.logMapElements);
        this.nodes.forEach(value => value.printChildren());
        
    }
    this.logMapElements = function (value, key, map) {   
        console.log(`${value.character}`);
    }
    this.isLeaf= function(){
       return this.nodes.size == 0;
    }
    this.containsWord = function(word){
       return this.checkWord(this, word, 0);
    }
    this.checkWord= function(node, word, index){
        if(index == word.length){
            return index > 0;
        }
        var sub_node = node.getChildren(word[index]);
        if(sub_node != undefined){
            var new_index = index+1;
            return this.checkWord(sub_node, word,new_index);
        }
        else{
            return false;
        }
    }
}
