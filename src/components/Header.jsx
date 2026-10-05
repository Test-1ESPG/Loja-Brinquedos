import React from 'react'

const Header = () => {
  return (
    <header>
        <h1>Loja <span>Brinquedos</span></h1>
        <nav>
            <li>
                <ul><a href='#'>Produtos</a></ul>
                <ul><a href='#'>Contato</a></ul>
                <ul><a href='#'>Login</a></ul>
                <ul>Carrinho: 0</ul>
            </li>
        </nav>
      
    </header>
  )
}

export default Header
