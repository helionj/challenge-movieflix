import { ReactComponent as ImgBanner} from 'assets/images/main-image.svg';
import './styles.css'
const Home = () => {

    return (
        <div className = "home-main-container">
            <div className = "home-banner-container">
                <h1>Avalie Filmes</h1>
                <p>Diga o que você achou do seu filme favorito</p>
                <ImgBanner/>
            </div>
            <div className = "home-login-card">
                <h1>Card de Login</h1>
            </div>
        </div>
    );

}

export default Home;