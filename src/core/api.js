import axios from "axios"



const folderLinks = {
  girls:"https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c9ac503e-1d16-11eb-0a80-050d002dcd9a",
  boys:"https://online.moysklad.ru/api/remap/1.2/entity/productfolder/00cfa023-1d16-11eb-0a80-050d002dade8",
  unisex:"https://online.moysklad.ru/api/remap/1.2/entity/productfolder/73475072-28e9-11eb-0a80-029000103030"
}
axios.defaults.headers.post["Content-Type"] = "application/json";
const instance = axios.create({baseURL:"https://kapri-server.herokuapp.com"})

export const fetchStock = async (options) => {
  const { folderName, inTransit } = options;
  const stockMode = inTransit ? "all" : "positiveOnly";
  const folderFilter = folderName === 'common' ?  "" : `&filter=productFolder=${folderLinks[folderName]}`
  const link = `https://online.moysklad.ru/api/remap/1.2/report/stock/all?groupBy=consignment&filter=stockMode=${stockMode}&filter=inTransitOnly=${inTransit}` + folderFilter

  const result = await instance.post("/", { link });
    return result.data;
}

export const fetchSales = async (
  counterparty,
  momentFrom,
  momentTo
) => {

  const counterpartyFilter = !!counterparty && counterparty !== "All" ?`&filter=counterparty=${counterparty}` : ""
  const link = `https://online.moysklad.ru/api/remap/1.2/report/profit/byvariant?momentFrom=${momentFrom} 00:00:00&momentTo=${momentTo} 23:59:59` + counterpartyFilter

  const result = await instance.post(
    '/',{link},
   
  );
  return result.data
};

export const fetchCounterparty = async () => {
  const link = "https://online.moysklad.ru/api/remap/1.2/report/profit/bycounterparty"
  const result = await instance.post("/", { link });
  return result.data
}

