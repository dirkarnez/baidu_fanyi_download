(function() {
    function script() {
        var button = document.createElement('button');
        button.innerHTML = "一鍵下載發音";
        button.className = "language-btn select-from-language";
        var parent = document.querySelector(".input-operate");
        button.addEventListener("click", function() {
            var url = require("translation:widget/translate/input/inputSoungUrlHandler").getInputSoundUrl();
            var a = document.createElement('a');
            a.href = url;
            a.target = '_blank';
            // Not working
            // a.download = require("translation:widget/translate/input/textarea").getVal();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
        parent.appendChild(button);
    }
  
    function inject(fn) {
      const script = document.createElement('script');
      script.text = `(${fn.toString()})();`;
      document.documentElement.appendChild(script);
    }
  
    inject(script);
  })()