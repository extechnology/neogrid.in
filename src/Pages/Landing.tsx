import HomeSlider from '../Components/HomeSlider'
import About from '../Components/About'
import OurDeliverables from '../Components/OurDeliverables'
import MileStone from '../Components/MileStone'
import Stats from '../Components/Stats'
import Partner from '../Components/Partner'
import ProductGrid from '../Components/ProductGrid'

function Landing() {


  window.scrollTo({ top: 0, behavior: 'smooth', });

  return (

    <>

      <section className='w-full'>

        {/* Home slider */}
        <div>

          <HomeSlider />

        </div>


        {/* About */}
        <div>

          <About />

        </div>

        {/* Hero-1 */}
        <div>

          <OurDeliverables />

        </div>


        {/* Hero-2 */}
        <div>

          <MileStone />

        </div>




        {/* Products */}
        <div>

          <ProductGrid />

        </div>



        {/* Stats */}
        <div>

          <Stats />

        </div>

        {/* Partner */}
        <div>

          <Partner />

        </div>



      </section>



    </>



  )



}

export default Landing