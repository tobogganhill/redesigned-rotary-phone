require('dotenv').config({ path: __dirname + '/.env' });
require('@nomiclabs/hardhat-ethers');
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
	solidity: '0.8.3',
	defaultNetwork: 'goerli',
	networks: {
		hardhat: {},
		goerli: {
			url: API_URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
};
