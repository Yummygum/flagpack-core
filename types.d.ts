export declare const codeList: Array<{
  countryName: string;
  alpha2: string;
  alpha3: string;
  numeric: number;
}>;

export declare function isoToCountryCode(isoCode: string, keyToGet?: string): string;

export declare function imageUrl(assetCode: string, size: string): string;

export declare const flags: {
  [alpha2: string]: {
    s: string;
    m: string;
    l: string;
  };
};