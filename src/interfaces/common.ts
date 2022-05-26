export interface IOption {
  id: string;
  value: string;
}

export interface NoRecordFound {}

export interface NoRecordFoundRow extends NoRecordFound {
  colSpan?: number;
  rowSpan?: number;
}
export interface OnLoadingRow extends NoRecordFoundRow {}
