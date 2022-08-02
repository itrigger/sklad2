import { gql } from "@apollo/client";

export const GET_CONTENT = gql`
  query getContentQuery {
    posts(where: { id: 22 }) {
      nodes {
        title
          front_page {
              telcall
              telwt
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
    query getCategoriesQuery {
        productCategories {
            nodes {
                id
                name
            }
        }
    }
`;

export const GET_PRODUCTS_BY_CATID = gql`
    query getProductsQuery($categoryId: Int = 16) {
        products(where: {categoryId: $categoryId}) {
            nodes {
                id
                name
                productsacf {
                    measures
                    packs
                }
            }
        }
    }
`;

export const GET_TOKEN = gql`
    mutation LoginUser($password: String!, $username: String!) {
        login(
            input: {clientMutationId: "uniqueId", username: $username, password: $password}
        ) {
            authToken
            user {
                id
                name
                email
                lastName
                username
                wooSessionToken
            }
        }
    }
`;

export const GET_USER_INFO = gql`
    query userInfoQuery {
        viewer {
            email
            firstName
            lastName
        }
    }
`