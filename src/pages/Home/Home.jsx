import { Cards } from '../../components/Cards/Cards'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Slogan } from '../../components/Slogan/Slogan'
import s from './style.module.scss'

export function Home(){
    return<div className={s.container}>
    <Header/>
    <Slogan/>
    <Cards/>
    <Footer/>
    </div>
}