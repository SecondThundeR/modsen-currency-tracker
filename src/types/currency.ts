export interface CurrencyType {
  id: string;
  name: string;
  iconSrc: string;
  rate?: number | undefined;
  rate_base?: string | undefined;
  details?: string | undefined;
}
