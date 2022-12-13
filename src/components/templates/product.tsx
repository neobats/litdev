import { graphql, PageProps } from "gatsby"
import React from "react"
import { Product } from "../../types/printify"
import { Heading, Text } from "../atoms"

export type ProductPageProps = {
  printifyProduct: Product
}
// pageContext is product id!
export const ProductTemplate: React.FC<PageProps<ProductPageProps>> = ({ data, pageContext: _pageContext }) => {
  console.log(data)
  const {
    title,
    description,
    images,
    tags
  } = data.printifyProduct
  
  const prepDescription = (description: string) => {
    if (description.includes("<p>")) {
      const descArray = description
        .replace(/<\/?p>/g, "{x}")
        .split("{x}")
        .filter((desc) => desc !== "" && desc !== "\n")
      console.table(descArray)
      return (
        <>
          <Heading>{descArray[0]}</Heading>
          <div>
            <Text>Details:</Text>
            {descArray.slice(1).map((desc, index) => (
              <p key={index + desc}>{desc}</p>
            ))}
          </div>
        </>
      )
    }
    return (<h2>{description}</h2>)
  }

  return (
    <div>
      <Heading as="h1">{title}</Heading>
      {prepDescription(description)}
      <div>
        {images.slice(0, 4).map((image, index) => (
          <img 
          src={image.src}
          alt={`product from position ${image.position}`}
          key={`${index}-${image.variant_ids[0]}`}
          />
        ))}
      </div>
      <div>
        <p>Tags:</p>
        <ul>
          {tags.map((tag, index) => (
            <li key={index + tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    printifyProduct(id: { eq: $id }) {
      title
      description
      images {
        src
        position
        variant_ids
      }
      tags
    }
  }
`

export default ProductTemplate