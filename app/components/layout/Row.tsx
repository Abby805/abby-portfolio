import { ReactNode } from 'react'
import rowStyles from '../../styles/row.module.css'

type RowProps = {
  children: ReactNode
  color?: 'blue'|'black'
  collapsePadTop?: boolean
}

const Row: React.FC<RowProps> = ({
  children,
  color,
  collapsePadTop,
  ...props
}) => {
  return (
    <div 
      className={`
        ${rowStyles['row']} 
        ${color === 'blue' ? rowStyles['row--blue'] : rowStyles['row--black']} 
        ${collapsePadTop ? rowStyles['pt0'] : ''}
      `} 
      {...props}
    >
      <div className={rowStyles['stage']}>
        {children}
      </div>
    </div>
  )
}

export default Row;
