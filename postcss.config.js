// eslint-disable-next-line
module.exports = ({ file, options, env }) => {
	return {
		plugins: {
			'autoprefixer':  env === 'production' ? false : {browsers: 'last 3 version'},
		}
	};
};