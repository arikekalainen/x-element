/**
  X Element
  author: Ari Kekalainen <ari.kekalainen@gmail.com>
  File: x-element.ts

  description: X element's script
*/

// Example how to extend easily definitelyTyped's typedefinitions
// e.g. for own custom components
declare module polymer {
  interface Base {
    textChanged?: Function;
  }
}

(() => {
  // register a new element called base-element
  Polymer({
    is: "x-element",
    // add a callback to the element's prototype
    ready: function() {
      this.textFromInput = "textFromInput was just overwritten by this text";
    },
    properties: {
      textFromInput: {
        type: String,
        value: "This is the first text in textFromInput",
        observer: "textChanged"
      }
    },
    textChanged: function(newValue, oldValue) {
      // Just log for now...
      console.log("New value : " + newValue);
    }
  });
})();
