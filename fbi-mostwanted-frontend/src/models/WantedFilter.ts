import qs from "qs";

export class WantedFilter {
  sex?: "male" | "female";
  title?: string;
  field_offices: string[] = [];
  eyes: string[] = [];
  race: string[] = [];
  possible_states: string[] = [];
  poster_classification: string[] = [];
  possible_countries: string[] = [];
  person_classification: string[] = [];
  hair: string[] = [];
  status: string[] = [];
  age_min?: number;
  age_max?: number;
  height_min?: number;
  height_max?: number;
  weight_min?: number;
  weight_max?: number;
  build?: string;
  page: number = 1;
  pageSize: number = 20;

  constructor(partial?: Partial<WantedFilter>) {
    Object.assign(this, partial);
  }

  toQueryParams(): string {
    return qs.stringify(this, {
      arrayFormat: "repeat",
      skipNulls: true,
      allowEmptyArrays: true,
    });
  }
}
