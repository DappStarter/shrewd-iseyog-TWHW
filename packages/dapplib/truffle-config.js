require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift regret snow quality hunt define army genius'; 
let testAccounts = [
"0x041a8e01b60a7c2bc20324e98ab843a1646eb49f00703f6ac695932c68cc7e38",
"0x684c3e121e4456186257cbb2dee518dc2b364ef82155a22a2e4373cd4d738f86",
"0x3da9592192c4168a0684adf916cc2cf0df24717b1eec76ef614f0d59cc1ac836",
"0xafd3305d6d24cdfa790e7dd2685b367f95ed57ceb87aab88a72016e8aa03f949",
"0xe89576db8dadb05d06e123cf3d1a9822890e0ad78a6abf027aaba677b5478d22",
"0xf7dc88953eff59d0ecb9aa16b4c4d792efb48dc0d852696b49225e8ce0995d27",
"0x83cca119a4d92ddd01c2c909634114e305fca8e15d5781dfa70da1ba76f0d2cc",
"0xccb684198bffc35960105801a0e248a9faa07c82fc9b6dac2d90f10a0dbba908",
"0xcd0dce38fc4a8a05b085f069a75a0fbb40155c83a40e2202e25f207eb7b9aee9",
"0x9fe233a9a657c6a1efbe78a5def396c06a55a72d5004bb8299e6fe18cc72a2d8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

