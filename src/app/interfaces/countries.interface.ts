export interface CountryInfo {
    id: {
        cca2: string;
        cca3: string;
        ccn3: string;
    };
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    region: string;
    population: number;
    capital: string[];
    borders: string[];
    tld: string[];
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    languages: {
        [key: string]: string;
    };
}