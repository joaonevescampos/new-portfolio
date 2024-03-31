
  
import { Button } from "@/components/ui/button"
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuGroup,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuPortal,
DropdownMenuSeparator,
DropdownMenuSub,
DropdownMenuSubContent,
DropdownMenuSubTrigger,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaBars } from "react-icons/fa"

export function Menu() {
return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>  
        <FaBars className="text-xl opacity-50"></FaBars>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Meu portfólio</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem>
            <span>Home</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
            
            <span>Habilidades</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <span>Projetos</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <span>Recomendações</span>
        </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <span>Contato</span>
        </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
)
}
