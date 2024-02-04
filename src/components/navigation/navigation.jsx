import { useState } from 'react';
import './navigation.scss';
import MenuConf from '../../config/menu'

function Navigation({handler}) {
    
    const [activeMenuItem, setActiveMenu] = useState(localStorage.getItem("menu") || 'main');

    const menu = MenuConf;

    return (
        <nav>
            <ul className='navigation-list'>
                {
                    menu.map(element => {
                        return (
                            <li
                                key={element.link}
                                className={activeMenuItem === element.link ? 'active' : ''}
                                onClick={() => {
                                    handler(element.link);
                                    setActiveMenu(element.link);
                                }}>
                                    {element.name}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation;