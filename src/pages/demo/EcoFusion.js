/* ******************************************************** */
import 'tailwindcss/tailwind.css'
import '../../app/globals.css'
/* ******************************************************** */
import HeadPage from '@/components/common/Head'
import EcoFusionProject from '@/components/sections/projects/demo/EcoFusionProject'
/* ******************************************************** */

const EcoFusion = () => {
  return (
    <div>
      <HeadPage />
      {/* <Navbar /> */}

      <EcoFusionProject />
      {/* <Footer /> */}
    </div>
  )
}

export default EcoFusion
