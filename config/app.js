let config = {};

let app_env = 'production';

config = {
	'production': {
		'APP_URL': "localhost",
		'PORT': '8000',
	}
};

module.exports = config[app_env];

