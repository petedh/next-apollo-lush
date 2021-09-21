import Image from 'next/image'

const FourOhFour = () => {   
    return (
        <div>
            <Image alt="404 image" src="https://res.cloudinary.com/lush/image/upload/f_auto,q_auto/v1542208897/lush_com/site_assets/404-Moving.gif" width={400} height={200}></Image>
            <h3>Not Found</h3>
            <p>Sorry, we can&apos;t find the page you are looking for…</p>
        </div>
    )
}              
export default FourOhFour