export interface IOption {
  id: string;
  value: string;
}

export interface IOptionV2 {
  id: string;
  name: string;
}

export interface ISuburb {
  id: string;
  name: string;
  post_code: string;
}
export interface NoRecordFound {}

export interface NoRecordFoundRow extends NoRecordFound {
  colSpan?: number;
  rowSpan?: number;
}
export interface OnLoadingRow extends NoRecordFoundRow {}
