class Label {
	constructor(req) {
		this.DEFAULT_LANG = "en";
		this.req = req;
		this.actualLang = req.headers["accept-language"].slice(0, 2);
		this.labels = null;
		this.fs = require("fs");
	}

	loadLanguage() {
		let headerLang = this.req.headers["accept-language"].slice(0, 2);
		if(this.labels === null || this.actualLang !== headerLang) {
			this.actualLang = headerLang;
			try {
				this.labels = require(`./lang/${this.actualLang}.json`);
			} catch (error) {
				this.labels = require(`./lang/${this.DEFAULT_LANG}.json`);
			}
		}
	}

	getAvailableLang() {
		let langs = this.fs.readdirSync("./lang");
		return langs.map(el => el.slice(0, 2));
	}

	addLabel(obj) {
		this.getAvailableLang().forEach((el) => {
			let jsonLang = require(`./lang/${el}.json`);
			this.fs.writeFile(`./lang/${el}.json`, JSON.stringify({...jsonLang, ...obj[el]}), err => {
				if(err) {
					console.log("Error while writing file", err);
				}
			});
		});
	}
	
	renderLabel(label) {
		this.loadLanguage();
		return this.labels[label];
	}

	setDefaultLang(lang) {
		this.DEFAULT_LANG = lang;
	}
}

module.exports = (req) => new Label(req);