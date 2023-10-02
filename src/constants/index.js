export const supportedChains = [11155111, 84531, 80001, 97];

export const networkInfoMap = {
    11155111: {
        chainId: `0x${(11155111).toString(16)}`,
        chainName: "Sepolia test network",
        rpcUrls: ["https://sepolia.infura.io/v3/"],
        blockExplorerUrls: ["https://sepolia.etherscan.io"],
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
    },
    84531: {
        chainId: `0x${(84531).toString(16)}`,
        chainName: "Base Goerli",
        rpcUrls: ["https://base-goerli.public.blastapi.io/"],
        blockExplorerUrls: ["https://goerli.basescan.org/"],
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
    },
    80001: {
        chainId: `0x${(80001).toString(16)}`,
        chainName: "Polygon Testnet",
        rpcUrls: ["wss://polygon-mumbai-bor.publicnode.com"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
        },
    },
    97: {
        chainId: `0x${(97).toString(16)}`,
        chainName: "Smart Chain - Testnet",
        rpcUrls: ["wss://bsc-testnet.publicnode.com"],
        blockExplorerUrls: ["https://testnet.bscscan.com/"],
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
        },
    },
};

export const defaultReadonlyChainId = 11155111;

export const rpcUrlsMap = {
    11155111: "https://endpoints.omniatech.io/v1/eth/sepolia/public",
    84531: "https://base-goerli.g.alchemy.com/v2/Nm1nL2ueUsq1thAC6Aznm6RnyglPUwKR",
    80001: "wss://polygon-mumbai-bor.publicnode.com",
    97: "wss://bsc-testnet.publicnode.com",
};
