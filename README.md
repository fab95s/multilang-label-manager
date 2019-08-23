# Installation

```
npm i multilang-label-manager
```

## Usage

Create a global variable that you can use throughout the project. You must pass the request of the server as a parameter.

``` javascript
global.LabelManager = require("multilang-label-manager")(request);
```

Now you can adding your languages using the addLanguages(args) command, and add new labels using the addLabels(args) command.

``` javascript
global.LabelManager.addLanguages("cn", "es", "it");
global.LabelManager.addLabels({
    "cn": {
        "welcome": "欢迎"
    },
    "es": {
        "welcome": "bienvenida"
    },
    "it": {
        "welcome": "benvenuto"
    }
});
```

The defalt language is **en** to set new language as default use the command:

``` javascript
global.LabelManager.setDefault("es");
```