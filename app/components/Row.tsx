import { ReactNode } from 'react'
import rowStyles from 'app/styles/row.module.css'

type RowProps = {
  children: ReactNode
  color?: 'blue'|'black'
  collapsePadTop?: boolean
  noRowGap?: boolean
  thin?: boolean
  className?: string
}

const Row: React.FC<RowProps> = ({
  children,
  color,
  collapsePadTop,
  noRowGap,
  thin,
  className,
  ...props
}) => {
  return (
    <div 
      className={`
        ${rowStyles['row']} 
        ${color === 'blue' ? rowStyles['row--blue'] : rowStyles['row--black']} 
        ${collapsePadTop ? rowStyles['row--pt0'] : ''}
        ${noRowGap ? rowStyles['row--no-rowgap'] : ''}
        ${thin ? rowStyles['row--thin'] : ''}
        ${className ? className : ''}
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
