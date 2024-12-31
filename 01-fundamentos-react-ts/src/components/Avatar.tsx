import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean; // ?: significa que é opcional
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps){
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props} 
        />
    );
}


// # Esse codigo faz o seguinte
// 1. Extende o componente de img do react em um interface
// 2. Pega todos os elementos que vem além do hasborder para o component com o rest operator(...)
// 3. Passa para a img usando spread operator(...) para passar todas de um só vez para img 