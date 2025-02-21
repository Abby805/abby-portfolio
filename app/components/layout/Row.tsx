import { ReactNode } from 'react'
import rowStyles from '../../styles/row.module.css'

type RowProps = {
  children: ReactNode
  color?: 'blue'|'black'
}

const Row: React.FC<RowProps> = ({
  children,
  color,
  ...props
}) => {
  let colorClass = color === 'blue' ? 
    rowStyles['row--blue'] : rowStyles['row--black'];

  return (
    <div className={`${rowStyles['row']} ${colorClass}`} {...props}>
      <div className={rowStyles['stage']}>
        {children}
      </div>
    </div>
  )
}

export default Row;
