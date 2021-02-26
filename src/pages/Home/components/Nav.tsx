import React, {ReactElement} from 'react'
import styled from 'styled-components'

import {FaTwitter, FaRegListAlt} from 'react-icons/fa'
import {FiMail, FiBookmark, FiUser} from 'react-icons/fi'
import {BiHomeCircle, BiSearch, BiBell} from 'react-icons/bi'
import {NavLink} from 'react-router-dom'

const SNav = styled.nav`

`
const SNavList = styled.ul`
  display: flex;
  flex-direction: column;
`

const SNavItemHovered = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 50px;
  padding: 7px 24px;
  transition: all .1s ease;
  
  & svg {
      margin-right: 15px;
    }
    
  & span {
  font-size: 20px;
  font-weight: 800;
}
`

const SNavItem = styled.li`
  margin-bottom: 8px;
  
  & a {
    display: flex;
    &:hover {
      ${SNavItemHovered} {
        background: rgba(29, 161,242, 0.1);
        color: rgba(29,161,242,1.00);
      }
    }
  }
  
  & a.active {
    ${SNavItemHovered} {
      color: rgba(29,161,242,1.00);
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`



export const Nav: React.FC = (): ReactElement => {
    return (
        <SNav>
            <SNavList>
                <SNavItem>
                    <NavLink exact to='/'>
                        <SNavItemHovered>
                            <FaTwitter size={30} style={{fill: 'rgba(29,161,242,1.00)'}}/>
                            <span></span>
                        </SNavItemHovered>
                    </NavLink>
                </SNavItem>
                <SNavItem>
                    <NavLink exact to='/'>
                        <SNavItemHovered>
                            <BiHomeCircle size={30} />
                            <span>Главная</span>
                        </SNavItemHovered>
                    </NavLink>
                </SNavItem>
                <SNavItem>
                    <NavLink to='/search'>
                        <SNavItemHovered>
                            <BiSearch size={30} />
                            <span>Поиск</span>
                        </SNavItemHovered>
                    </NavLink>
                </SNavItem>
                <SNavItem>
                    <NavLink to='/notifications'>
                        <SNavItemHovered>
                            <BiBell size={30} />
                            <span>Уведомления</span>
                        </SNavItemHovered>
                    </NavLink>
                </SNavItem>
                <SNavItem>
                    <NavLink to='/messages'>
                        <SNavItemHovered>
                            <FiMail size={30} />
                            <span>Сообщения</span>
                        </SNavItemHovered>
                    </NavLink>
                </SNavItem>
                <SNavItem>
                    <NavLink to='/bookmarks'>
                        <SNavItemHovered>
                            <FiBookmark size={30} />
                            <span>Закладки</span>
                        </SNavItemHovered>
                    </NavLink>
                </SNavItem>
                <SNavItem>
                    <NavLink to='/list'>
                        <SNavItemHovered>
                            <FaRegListAlt size={30} />
                            <span>Списоки</span>
                        </SNavItemHovered>
                    </NavLink>
                </SNavItem>
                <SNavItem>
                    <NavLink to='/profile'>
                        <SNavItemHovered>
                            <FiUser size={30} />
                            <span>Профиль</span>
                        </SNavItemHovered>
                    </NavLink>
                </SNavItem>
            </SNavList>
        </SNav>
    );
};


