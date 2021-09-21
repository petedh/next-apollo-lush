import parse from 'html-react-parser'
import Image from 'next/image'

const Pdp = ({product}) => {
    if (product) {
        const description = JSON.parse(product.description)
        return (
            <main>      
                <div >
                    <h2>{product.name}</h2>
                    <h3>Price: </h3>
                    <Image src={product.thumbnail.url} title={product.seoTitle} alt={product.seoTitle} width={255} height={255}></Image>
                    {description.blocks.map((block) => (
                        <div key={product.id}>
                            {parse(block.data.text)}
                        </div>
                    ))}
                </div>
            </main>
        )
    } else {
        return (
            <div>
                <Image alt="404 image" src="https://res.cloudinary.com/lush/image/upload/f_auto,q_auto/v1542208897/lush_com/site_assets/404-Moving.gif" width={400} height={200}></Image>
                <h3>Not Found</h3>
                <p>Sorry, we can&apos;t find the page you are looking for…</p>
            </div>
        )
    }
}              
export default Pdp