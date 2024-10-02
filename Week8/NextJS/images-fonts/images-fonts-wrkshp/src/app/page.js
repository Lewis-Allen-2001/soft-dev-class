import MyImage from "@/../public/images/JumpingSpiderFella.png";
import Image from "next/image";
import {Lilita_One} from "next/font/google"


const lilita_one = Lilita_One({
  fontFamily: ['Lilita One', 'static'],
  subsets: ['latin'],
  weight: ['400'],
  size:['x-Large']
})


export default function Home() {
  return (
  <div>
<h1 className={lilita_one.className}>Jumping Spiders!</h1>

<Image src ={MyImage} alt="Phidippus Regius" width={572} height={542}/>

    <h2>Jumping spiders are a group of spiders that constitute the family Salticidae. As of 2019, this family contained over 600 described genera and over 6,000 described species, making it the largest family of spiders at 13% of all species. Jumping spiders have some of the best vision among arthropods and use it in courtship, hunting, and navigation. Although they normally move unobtrusively and fairly slowly, most species are capable of very agile jumps, notably when hunting, but sometimes in response to sudden threats or crossing long gaps. Both their book lungs and tracheal system are well-developed, and they use both systems bimodal breathing. Jumping spiders are generally recognized by their eye pattern. All jumping spiders have four pairs of eyes, with the anterior median pair being particularly large.</h2>
    </div>
  );
}
