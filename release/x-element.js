/**
  X Element
  author: Ari Kekalainen <ari.kekalainen@gmail.com>
  File: x-element.ts

  description: X element's script
*/
(function () {
    Polymer({
        is: "x-element",
        ready: function () {
            this.textFromInput = "textFromInput was just overwritten by this text";
        },
        properties: {
            textFromInput: {
                type: String,
                value: "This is the first text in textFromInput",
                observer: "textChanged"
            }
        },
        textChanged: function (newValue, oldValue) {
            console.log("New value : " + newValue);
        }
    });
})();
