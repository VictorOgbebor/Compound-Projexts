export declare const constants: {
    PriceFeed: string;
    Maximillion: string;
    CompoundLens: string;
    GovernorBravo: string;
    Comptroller: string;
    Reservoir: string;
    KNC: string;
    LINK: string;
    BTC: string;
    cBAT: string;
    cCOMP: string;
    cDAI: string;
    cETH: string;
    cLINK: string;
    cREP: string;
    cSAI: string;
    cTUSD: string;
    cUNI: string;
    cUSDC: string;
    cUSDT: string;
    cWBTC: string;
    cZRX: string;
    BAT: string;
    COMP: string;
    DAI: string;
    ETH: string;
    GRT: string;
    REP: string;
    SAI: string;
    SNX: string;
    TUSD: string;
    UNI: string;
    USDC: string;
    USDT: string;
    WBTC: string;
    XTZ: string;
    ZRX: string;
};
export declare const address: {
    mainnet: {
        PriceFeed: string;
        Maximillion: string;
        CompoundLens: string;
        GovernorBravo: string;
        Comptroller: string;
        Reservoir: string;
        COMP: string;
        cBAT: string;
        cCOMP: string;
        cDAI: string;
        cETH: string;
        cLINK: string;
        cREP: string;
        cSAI: string;
        cTUSD: string;
        cUNI: string;
        cUSDC: string;
        cUSDT: string;
        cWBTC: string;
        cZRX: string;
        BAT: string;
        DAI: string;
        LINK: string;
        REP: string;
        SAI: string;
        TUSD: string;
        UNI: string;
        USDC: string;
        USDT: string;
        WBTC: string;
        ZRX: string;
    };
    rinkeby: {
        PriceFeed: string;
        Maximillion: string;
        CompoundLens: string;
        GovernorAlpha: string;
        Comptroller: string;
        Reservoir: string;
        COMP: string;
        cBAT: string;
        cDAI: string;
        cETH: string;
        cREP: string;
        cSAI: string;
        cUSDC: string;
        cUSDT: string;
        cWBTC: string;
        cZRX: string;
        BAT: string;
        DAI: string;
        REP: string;
        SAI: string;
        USDC: string;
        USDT: string;
        WBTC: string;
        ZRX: string;
    };
    goerli: {
        PriceFeed: string;
        Maximillion: string;
        CompoundLens: string;
        GovernorAlpha: string;
        Comptroller: string;
        Reservoir: string;
        COMP: string;
        cBAT: string;
        cDAI: string;
        cETH: string;
        cREP: string;
        cSAI: string;
        cUSDC: string;
        cUSDT: string;
        cWBTC: string;
        cZRX: string;
        BAT: string;
        DAI: string;
        REP: string;
        SAI: string;
        USDC: string;
        USDT: string;
        WBTC: string;
        ZRX: string;
    };
    kovan: {
        PriceFeed: string;
        Maximillion: string;
        CompoundLens: string;
        GovernorBravo: string;
        Comptroller: string;
        Reservoir: string;
        COMP: string;
        cBAT: string;
        cDAI: string;
        cETH: string;
        cREP: string;
        cSAI: string;
        cUSDC: string;
        cUSDT: string;
        cWBTC: string;
        cZRX: string;
        BAT: string;
        DAI: string;
        REP: string;
        SAI: string;
        USDC: string;
        USDT: string;
        WBTC: string;
        ZRX: string;
    };
    ropsten: {
        PriceFeed: string;
        Maximillion: string;
        CompoundLens: string;
        GovernorBravo: string;
        Comptroller: string;
        Reservoir: string;
        COMP: string;
        cBAT: string;
        cDAI: string;
        cETH: string;
        cREP: string;
        cSAI: string;
        cUNI: string;
        cUSDC: string;
        cUSDT: string;
        cWBTC: string;
        cZRX: string;
        BAT: string;
        DAI: string;
        REP: string;
        SAI: string;
        UNI: string;
        USDC: string;
        USDT: string;
        WBTC: string;
        ZRX: string;
    };
};
export declare const abi: {
    Erc20: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: any[];
        payable: boolean;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
    })[];
    cErc20: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        signature: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        signature: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        signature: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    cEther: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        signature: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        signature: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
        signature?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        signature: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    COMP: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        signature: string;
        anonymous?: undefined;
        name?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        signature: string;
        payable?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        signature: string;
        anonymous?: undefined;
    })[];
    GovernorBravo: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    Comptroller: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        signature: string;
        anonymous?: undefined;
    } | {
        inputs: any[];
        payable: boolean;
        stateMutability: string;
        type: string;
        signature: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
        signature?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        signature: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        signature: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        signature: string;
        anonymous?: undefined;
    })[];
    PriceFeed: string[];
    CompoundLens: {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
};
export declare const cTokens: string[];
export declare const underlyings: string[];
export declare const opfAssets: string[];
export declare const decimals: {
    cBAT: number;
    cCOMP: number;
    cDAI: number;
    cETH: number;
    cLINK: number;
    cREP: number;
    cSAI: number;
    cTUSD: number;
    cUNI: number;
    cUSDC: number;
    cUSDT: number;
    cWBTC: number;
    cZRX: number;
    BAT: number;
    BTC: number;
    COMP: number;
    DAI: number;
    ETH: number;
    GRT: number;
    KNC: number;
    LINK: number;
    REP: number;
    SAI: number;
    SNX: number;
    TUSD: number;
    UNI: number;
    USDC: number;
    USDT: number;
    WBTC: number;
    XTZ: number;
    ZRX: number;
};
export declare const errorCodes: {
    comptroller: {
        codes: {
            0: {
                error: string;
                description: string;
                hint: string;
            };
            1: {
                error: string;
                description: string;
                hint: string;
            };
            2: {
                error: string;
                description: string;
                hint: string;
            };
            3: {
                error: string;
                description: string;
                hint: string;
            };
            4: {
                error: string;
                description: string;
                hint: string;
            };
            5: {
                error: string;
                description: string;
                hint: string;
            };
            6: {
                error: string;
                description: string;
                hint: string;
            };
            7: {
                error: string;
                description: string;
                hint: string;
            };
            8: {
                error: string;
                description: string;
                hint: string;
            };
            9: {
                error: string;
                description: string;
                hint: string;
            };
            10: {
                error: string;
                description: string;
                hint: string;
            };
            11: {
                error: string;
                description: string;
                hint: string;
            };
            12: {
                error: string;
                description: string;
                hint: string;
            };
            13: {
                error: string;
                description: string;
                hint: string;
            };
            14: {
                error: string;
                description: string;
                hint: string;
            };
            15: {
                error: string;
                description: string;
                hint: string;
            };
            16: {
                error: string;
                description: string;
                hint: string;
            };
            17: {
                error: string;
                description: string;
                hint: string;
            };
        };
        info: {
            0: {
                error: string;
                description: string;
                hint: string;
            };
            1: {
                error: string;
                description: string;
                hint: string;
            };
            2: {
                error: string;
                description: string;
                hint: string;
            };
            3: {
                error: string;
                description: string;
                hint: string;
            };
            4: {
                error: string;
                description: string;
                hint: string;
            };
            5: {
                error: string;
                description: string;
                hint: string;
            };
            6: {
                error: string;
                description: string;
                hint: string;
            };
            7: {
                error: string;
                description: string;
                hint: string;
            };
            8: {
                error: string;
                description: string;
                hint: string;
            };
            9: {
                error: string;
                description: string;
                hint: string;
            };
            10: {
                error: string;
                description: string;
                hint: string;
            };
            11: {
                error: string;
                description: string;
                hint: string;
            };
            12: {
                error: string;
                description: string;
                hint: string;
            };
            13: {
                error: string;
                description: string;
                hint: string;
            };
            14: {
                error: string;
                description: string;
                hint: string;
            };
            15: {
                error: string;
                description: string;
                hint: string;
            };
            16: {
                error: string;
                description: string;
                hint: string;
            };
            17: {
                error: string;
                description: string;
                hint: string;
            };
            18: {
                error: string;
                description: string;
                hint: string;
            };
        };
    };
};
