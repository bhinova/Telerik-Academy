var SpecialConsole = (function (){
    function formatText(text, optionalParams){
        //second version
        if(optionalParams) {
            for (var i = 0; i < arguments.length - 1; i++) {
                var placeHolder = '\\{' + i + '\\}';
                var regex = new RegExp(placeHolder, "g");
                text = text.replace(regex, arguments[i + 1].toString());
            }
        }

        return text.toString();
    }

    var writeLine = function(text, optionalParams){
        var console = document.getElementById('console');
        var textArea = document.createElement('p');

        var result = formatText.apply(null, arguments);

        //first version
        /*var placeHolder = '{0}';

        var index = text.indexOf(placeHolder);

        if(index > -1) {
           text = text.replace(placeHolder, '');
           text = text.insert(index, optionalParams);
        }*/

        textArea.innerText = result;
        textArea.appendChild(document.createElement('br'));
        console.appendChild(textArea);
    };

    var writeError = function(inputText, formatString){
        writeLine(inputText, formatString);
    };

    var writeWarning = function(inputText, formatString){
        writeLine(inputText, formatString);
    };

    /*String.prototype.insert = function (index, string) {
        if (index > 0)
            return this.substring(0, index) + string + this.substring(index, this.length);
        else
            return string + this;
    };*/

    return{
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning
    }
})();

SpecialConsole.writeLine("Message: hello");
//logs to the console "Message: hello"
SpecialConsole.writeLine("Message: {0}", "hello");
//logs to the console "Message: hello"
SpecialConsole.writeError("Error: {0}", "Something happened");
SpecialConsole.writeWarning("Warning: {0}", "A warning");
