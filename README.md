# homework-3

1: first what i did was creat the elements that i wanted to be selectable in the the html file.

        character: <input type="number" id="charNum" value="12" min="8" max="128" />
        
        number: <input type="checkbox" id="num"/>
        
        symbol: <input type="checkbox" id="sym"/>
        
        uppercase: <input type="checkbox" id="charUp"/>



 2: i created the arrays
        character
        characters uppercase
        numbers
        symbols

3: i created variables for my boxes with .getelementbyid and then linking thise the number, characters, symbols, etc..

4: then what i wanted to creat an event listener so when i clicked the boxes for number, symbols, and uppercase letters, while have the lowercase letters already selected by default.
   
        (numBox.checked) ? characters += num : "";
        (symBox.checked) ? characters += sym : "";
        (upper.checked) ? characters += charUp : "";

5: after i created that i created the function to incorperate all the variables

        function password(l,characters){
    var pwd = " ";

    for(var i = 0; i<l; i++){
        
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;