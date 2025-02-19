import Input from '@/components/ui/Input'
import useDebounce from '@/utils/hooks/useDebounce'
import { TbSearch } from 'react-icons/tb'
import type { ChangeEvent } from 'react'

type ProductListSearchProps = {
    onInputChange: (value: string) => void
}

const ProductListSearch = (props: ProductListSearchProps) => {
    const { onInputChange } = props

    function handleDebounceFn(value: string) {
        onInputChange?.(value)
    }

    const debounceFn = useDebounce(handleDebounceFn, 500)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        debounceFn(e.target.value)
    }

    return (
        <Input
            placeholder="Search"
            suffix={<TbSearch className="text-lg" />}
            onChange={handleInputChange}
        />
    )
}

export default ProductListSearch
