import { Link } from 'react-router-dom' 
import './index.scss';
import VoxelLoader from '../Voxel/voxel-loader'
import dynamic from 'next/dynamic'
import { Container } from '@chakra-ui/react'
// import '../Voxel/simpleVox'


// const Voxel = dynamic(() => import('../Voxel/voxel-me'), {
//     ssr: false,
//     loading: () => <VoxelLoader />
//   })

const Home = () => {

    return (
        <div className = "container home-page">
             {/* <Container maxW="container.md" pt={14}>

                 <Voxel />

             </Container> */}

            <div className="text-zone">
                <h1>Hey There, 
                    <br />
                    I'm Nathanael
                    <br />
                </h1>
                <h2>
                    Aspiring Software Engineer
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>

    )
}

export default Home