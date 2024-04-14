
export function DesktopMenu() {
    return (
        <nav >
            <ul className="flex gap-12 font-semibold text-sm">
                <li>
                    <a href="#" className="hover:border-b-4 hover:border-purple-color01 hover:transition-all hover:font-bold">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:border-b-4 hover:border-purple-color01 hover:transition-all hover:font-bold">Habilidades</a>
                </li>
                <li>
                    <a href="#" className="hover:border-b-4 hover:border-purple-color01 hover:transition-all hover:font-bold">Projetos</a>
                </li>
                <li>
                    <a href="#" className="hover:border-b-4 hover:border-purple-color01 hover:transition-all hover:font-bold">Recomendações</a>
                </li>
                <li>
                    <a href="#" className="hover:border-b-4 hover:border-purple-color01 hover:transition-all hover:font-bold">Contato</a>
                </li>
            </ul>
        </nav>
    )
}