import logo from '../../assets/logo.svg'
import './styles.scss'

export default function Header() {
    return (
        <header className='header'>
            <div>
                <img alt='logo' src={logo} />
            </div>
        </header>
    )
}