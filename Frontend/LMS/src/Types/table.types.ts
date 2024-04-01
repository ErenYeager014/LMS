export interface tableprops {
  isSearchable: boolean;
  isSortable: boolean;
  header: {
    id: string;
    header: string;
    component?: React.ReactElement<any>;
  }[];
  title: string;
  data: any[];
  isPagination: boolean;
}
