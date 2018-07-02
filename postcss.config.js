// eslint-disable-next-line
const autoprefixer =  require('autoprefixer');

// eslint-disable-next-line
module.exports = ({ file, options, env }) => {
	return {
		plugins: [
			autoprefixer({
				env, // 针对.browserslistrc的环境变量
			})
		]
	};
};