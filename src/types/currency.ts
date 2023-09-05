interface CurrencyTypeDetails {
  rate?: number | undefined;
  rate_base?: string | undefined;
  details?: string | undefined;
}

export interface CurrencyType extends CurrencyTypeDetails {
  id: string;
  name: string;
  iconSrc: string;
}
