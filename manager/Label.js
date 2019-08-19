class Label {
	constructor() {
		this.DEFAULT_LANG = "en";
		this.lang = null;
	}
	
	getLabel(msg) {
		if(this.lang === null) {
			try {
				this.lang = require(`./lang/${global.Lang}.json`);
			} catch (error) {
				this.lang = require(`./lang/${this.DEFAULT_LANG}.json`);
			}
		}
		return this.lang[msg];
	}

	setDefaultLang(lang) {
		this.DEFAULT_LANG = lang;
	}
}

module.exports = new Label();