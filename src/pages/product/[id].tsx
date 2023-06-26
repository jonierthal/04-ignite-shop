import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias illo animi ea exercitationem delectus a quas, accusamus dolores reiciendis sit itaque aliquam quos ab officia? Provident sunt atque maiores.</p>

                <button>
                    Comprar Agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}