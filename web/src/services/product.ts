import { graphQlClinet } from "@/lib/graph-ql-request";
import { gql } from "graphql-request";

interface getAllProductPropVariableType {
  page: number,
  perPage: number,
  sortOrder: 'asc' | 'desc',
  sortField: string
  filter: object
}

interface Product {
  id: string
  priceInCents: number
  imageUrl: string
  name: string
}

interface getProductPropVariableType {
  id: string
}

interface getProductsPropVariableTypeResponse {
  allProducts: Product[]
  _allProductsMeta : {
    count : number
  }
}

// sortField: '' , filter: $sortFilte

async function getAllProduct({ sortField, page, perPage, sortOrder,filter }: getAllProductPropVariableType): Promise<getProductsPropVariableTypeResponse> {
  const res : getProductsPropVariableTypeResponse = await graphQlClinet.request(gql`
    query GET_PRODUCTS($page: Int, $perPage: Int, $sortOrder: String, $sortField: String ,$filter : ProductFilter) {
      allProducts(page: $page, perPage: $perPage, sortOrder: $sortOrder, sortField: $sortField ,filter : $filter) {
        id
        name
        imageUrl: image_url
        priceInCents: price_in_cents
        category
      }
    }
  `, {
    page,
    perPage,
    sortOrder,
    sortField,
    filter
  })

  return res
}

async function getProduct({ id }: getProductPropVariableType) {
  const res = await graphQlClinet.request(gql`
  query GET_PRODUCT($id: ID!) {
    Product(id: $id) {
      id
      name
      description
      imageUrl: image_url
      priceInCents: price_in_cents
      category
    }
  }
`, {
    id
  })

  return res
}

export { getAllProduct, getProduct }