import { brands } from "../../../data";

export function createBrandsDefaultDataSource(){
    const brandItems = [...brands]
    brandItems.shift()
    return brandItems.map((brand,idx)=>{
        
        return {
          key: idx,
          name: brand,
          sum:0,
          profit:0,
          sellCostSum:0,
          profitability:0
        };
      })
  }

  export function getBrand(name){
    const re = /\(([a-zA-Zа-яА-я\s&]{0,})/gi
    return name.match(re)
  }


  export const filterByBrand = (products, brand) => {
    const res =  products.filter((product) => {
       return product.assortment.name.indexOf(brand) !== -1;
     });
     return res
   }
