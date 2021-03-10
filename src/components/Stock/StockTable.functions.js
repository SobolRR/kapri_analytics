import { productGroups, sizes } from "../../data"
import { defineProductsBySex, getSize } from "../../utils/utils"

function createDefaultStock(sex){
    const products = defineProductsBySex(sex,productGroups)
    return products.map((product)=>{
      return    {
        name: product,
        sizes: sizes.reduce((acc,size)=>{
          return{...acc,[size]:{ width: 0, depth: 0,inTransit:0,}}
        },{})
      }
    })
  }

export const filterByBrand = (products, brand) => {
    return products.filter((product) => {
       return product.name.indexOf(brand) !== -1;
     });
   }
   
export function calculateStock(products, sex, inTransit) {
  const stockData = createDefaultStock(sex);
  products.forEach((good) => {
    const size = getSize(good.name);
    stockData.forEach((item) => {
      if (good.folder.name === item.name && !!item.sizes[size]) {
        item.sizes[size].width += 1;
        item.sizes[size].depth += inTransit ? good.inTransit : good.stock;
      }
    });
  });
  return stockData;
}
   
export function createDefaultDataSource(sex,initial=""){
  const products = defineProductsBySex(sex, productGroups)
  const sizesInitialValues = sizes.reduce((acc,size)=>{
    return {...acc,[size]:initial}
  },{})
  return products.map((product,idx)=>{
  
    return {
      key: idx,
      name: product,
      NB: initial,
      ...sizesInitialValues,
      total: initial,
      
     
    };
  })
}