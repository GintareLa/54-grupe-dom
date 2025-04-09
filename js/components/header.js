export function header() {
    const menu = [
        { text: 'Home', pathname: '54-grupe-dom', href: '/' },
        { text: 'Text', pathname: '54-grupe-dom', href: '/text' },
        { text: 'Food', pathname: '54-grupe-dom', href: '/food' },
        { text: 'Darzas', pathname: '54-grupe-dom', href: '/darzas' },
        { text: 'Header', pathname: '54-grupe-dom', href: '/header' },
        { text: 'Click', pathname: '54-grupe-dom', href: '/click' },
    ];

    const lp = location.pathname;
    const currentPage = lp.length > 1 && lp.at(-1)=== '/'
    ? lp.slice(0, -1) : lp;
        let linksHTML = '';

    for (const link of menu) {
        let activePage = '';
        if(link.href === currentPage) {
        activePage = 'active';
    }

        linksHTML += `<a class="link ${activePage}" href="${link.href}">${link.text}</a>`;
    }

    const HTML = `
        <header class="main-header">
            <img class="logo" src="../food/Untitled.png" alt="Logo">
            <nav class="main-nav">${linksHTML}</nav>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', HTML);
}
    

    