require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain unfold guess nasty fresh seed'; 
let testAccounts = [
"0xddb7bf666510878d75ef08074dfe53380825e77ffeecd66ab4533783708476b3",
"0xd195b20f1cb2ae0fd0437819070a0aaeab66f3d348dacf53a17ca77e616d4afe",
"0x11aa9fcf38f732489ae257079e64933f792961d6a99549a014e0e809794bcf10",
"0x4c4b6550ee4d939bf850ea259381acc5c5a70029de7d236e495474179dac88b4",
"0x2f42e2a19934e99591a959f39c95372d816584fe4194e4c1287b897218f7cedc",
"0xd4fb96aa60e58557a51825ccd3e7a20102a9360ecd179a379133f6092080c0e1",
"0xb3f6b9d2d29a7ea42445bdd0e905d249678df96c365247fe0554b4db63f642d9",
"0x9a17d30f58a4c2965dc6fe20158ed3ef623f949ae31ea37ef2f9a696fd01ce78",
"0x47de0d96204fad8331f9030cff56f85a01cc7a75166df3d539682dab3edee9b8",
"0x1b7494c588df9a4a32934d63e238a898713284053d8343e73595c4d94e500af6"
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

