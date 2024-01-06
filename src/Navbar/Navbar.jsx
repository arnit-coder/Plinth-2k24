import React from 'react'
import { Link } from 'react-router-dom'
import { useBreakpointValue} from '@chakra-ui/react';

const Navbar = () => {
    const isDesktop=useBreakpointValue({base:false,md:false,lg:true})
    let fontSize = 30;

  if (!isDesktop) {
    fontSize = 10;
  }

  let textAlign = 'center';

  if(!isDesktop){
    textAlign='left';
  }

    return (
    <>
        <div style={{width: '100%', height: '100%', paddingTop: 39, paddingBottom: 39, paddingLeft: 51, paddingRight: 53, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 300, display: 'inline-flex'}}>
        <div style={{textAlign: {textAlign}, color: 'white', fontSize: {fontSize}, fontFamily: 'Akira Expanded', fontWeight: '800', wordWrap: 'break-word'}}>plinth’24</div>
       {isDesktop && <div style={{width: 482, position: 'relative'}}>
            <div style={{width: 100, height: 23, left: 213, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <Link to="/signup" >
                <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', wordWrap: 'break-word'}}>Sign Up</div>
                </Link>
                </div>
            <div style={{width: 56, height: 23, left: 426, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <Link to="/competitions">
                <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', wordWrap: 'break-word'}}>Competitions</div>
            </Link >
                </div>
            <div style={{width: 100, height: 23, left: 0, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <Link to="/aboutus">
                <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Poppins', wordWrap: 'break-word'}}>About Us</div>
                </Link>
            </div>
        </div> }
        {/* <div style={{width: 40, height: 34, position: 'relative'}}>
             <div style={{width: 40, height: 8, left: 0, top: 0, position: 'absolute', background: 'white', borderTopLeftRadius: 16}} />
            <div style={{width: 40, height: 8, left: 0, top: 13, position: 'absolute', background: 'white', borderTopLeftRadius: 5.50}} />
           <div style={{width: 40, height: 8, left: 0, top: 26, position: 'absolute', background: 'white', borderTopLeftRadius: 5.50}} />
         </div>  */}
    </div>
</div>
    </>
  )
}

export default Navbar