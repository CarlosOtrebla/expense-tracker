import * as C from './styles'
import { Item } from '../../types/item'
import { formatDate } from '../../helpers/dateFilter'
import { Category } from '../../types/Category'

type Props = {
    item: Item
}



export const TableItem = ({ item }: Props) => {
    return(
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>R$ {item.value}</C.TableColumn>

        </C.TableLine>

    )
}