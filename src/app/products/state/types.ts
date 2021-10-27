import { Item } from './../../search/search.service';

export interface Product extends Item {
  id: number;
  name: string;
}
