const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		catalog: './src/js/catalog.js',
		product: './src/js/product.js',
		basket: './src/js/basket.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
