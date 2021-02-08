import { sizes } from "../data"

export function getSize(name){
  const re = /([0-9]+)-([0-9]+)|NB/g;
  return name.match(re)[0];
}

export function createDefaultDataSource(goods,inisialValue=""){
  return goods.map((good,idx)=>{
    return {
      key: idx,
      name:good,
      NB: inisialValue,
      "0-3": inisialValue,
      "1-2":inisialValue,
      "2-4":inisialValue,
      "3-6": inisialValue,
      "4-6": inisialValue,
      "6-9": inisialValue,
      "9-12": inisialValue,
      "12-18": inisialValue,
      "18-24": inisialValue,
      "24-36":inisialValue,
      "24-48":inisialValue,
      "36-48":inisialValue
    }
  })
}

export function createColumns(titles){
    const res = titles.map((title,idx)=>{
      return {
        title: title,
        dataIndex: title,
        key: idx,
        render(value, record) {
          //console.log(value, record)
          return {
            props: {
              style: { background: parseInt(value) > 0 ?  "#C7E78F": "#F5A283" }
            },
            children: <div>{value}</div>
          };
        }
      
      };
    })
    res.unshift(  {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    })
    return res
  }

  export const columns = createColumns(sizes)
