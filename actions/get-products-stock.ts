import prismadb from "@/lib/prismadb"

export const getProductInStock = async (storeId:string) => {
  const productInStock = await prismadb.product.count({
    where:{ 
      storeId,
      isArchived:true
    }
  })
  
  return productInStock
}
