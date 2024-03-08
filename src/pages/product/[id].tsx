import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/product"
import { useRouter } from "next/router"


export default function Product(){
    const { query } = useRouter()


    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79.90</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum cumque consequuntur neque doloremque enim vel, aut nostrum ad dicta vitae rerum fugit laboriosam eum temporibus dolores exercitationem velit minima?</p>
                <button>
                    Comprar Agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}