import { useState } from "react"

const PersonalInfo = () => {

    const [isValid, setIsValid] = useState(false)
    const [isDirty, setIsDirty] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDirty(true)
        setIsValid(e.target.value.length>3)
    }
    return(
        <div>
            <div><img src="" alt="" /></div>
            <form action="">
                <input type="text" name="" id="" placeholder="First Name" onChange={handleInputChange}/>
                <input type="text" name="" id="" placeholder="Last Name" onChange={handleInputChange}/>
                <input type="text" name="" id="" placeholder="Gender" onChange={handleInputChange}/>
                <input type="text" name="" id="" placeholder="Nationality" onChange={handleInputChange}/>
                <div>
                    <button>Previous</button>
                    <button disabled={!isValid || !isDirty}>Next</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo