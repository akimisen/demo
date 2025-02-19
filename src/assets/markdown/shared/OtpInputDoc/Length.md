```jsx
import { useState } from 'react'
import OtpInput from '@/components/shared/OtpInput'

const Length = () => {

    const [value, setValue] = useState('')

    const handleChange = (value: string) => {
        console.log(value)
        setValue(value)
    }

    return (
        <OtpInput
            value={value}
            length={4}
            onChange={handleChange}
        />
    )
}

export default Length
```
