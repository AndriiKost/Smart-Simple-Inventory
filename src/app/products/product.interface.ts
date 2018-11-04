export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

// If you need methods please use clas

// export class Product implements IProduct {
//   constructor(
//     public productID: number;
//     public productName: string;
//     public productCode: string;
//     public releaseDate: string;
//     public price: number;
//     public description: string;
//     public starRating: string;
//     public imageUrl: string;
//     )
//     calculateDiscount(percent: number): number {
//       return this.price - (this.price * percent / 100);
//     }
// }
