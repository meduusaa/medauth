import { useState } from "react"


const ProfessionInfo = () => {
    const [isValid, setIsValid] = useState(false)
    const [isDirty, setIsDirty] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDirty(true)
        setIsValid(e.target.value.length > 3)
    }
    return (
        <div>
            <div><img src="" alt="" /></div>
            <i className="fa-solid fa-arrow-left"></i>
            <form action="">
                <input type="text" name="Profession" id="" placeholder="Profession" onChange={handleInputChange}/>
                <input type="text" name="Years-Experience" id="" placeholder="Years of experience" onChange={handleInputChange}/>
                <input type="url" name="Patron-link" id="" placeholder="Patron-link" onChange={handleInputChange}/>
                <input type="url" name="Linkedln-link" id="" placeholder="Linkedln-link" onChange={handleInputChange}/>
                <div>
                    <button>Previous</button>
                    <button disabled={!isValid || !isDirty}>Next</button>
                </div>
            </form>
        </div>
    )
}

export default ProfessionInfo