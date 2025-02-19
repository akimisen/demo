```jsx
import { useState } from 'react'
import OtpInput from '@/components/shared/OtpInput'

const Basic = () => {

    const [value, setValue] = useState('')

    const handleChange = (value: string) => {
        console.log(value)
        setValue(value)
    }

    return (
        <OtpInput value={value} onChange={handleChange} />
    )
}

export default Basic
```
