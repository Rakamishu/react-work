import { useState } from "react";

function SearchFilter() {    

    const arr = ['misho', 'zapryan', 'kris', 'viola']

    const [formData, setFormData] = useState({
        keyword: "",
        group: "",
        rememberme: true,
        radio: "",
        select: ""
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(oldFormData => {
            return {
                ...oldFormData,
                [name]: (type == 'checkbox') ? checked : value
            }
        })
    }
    const filter = arr.filter(keyword => keyword.includes(`${formData.keyword}`))


    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
    }


    return (
        <div>
            {filter.map(keyword => (`${keyword}`)).join(', ')}
            <form onSubmit={handleSubmit}>
                <label>
                    Klu4ova duma:
                    <input onChange={handleChange} value={formData.keyword} type="text" name="keyword" placeholder="keyword" /> <br />
                    <input type="checkbox" onChange={handleChange} name="rememberme" checked={formData.rememberme} /> Remember me <br />
                    <fieldset>
                        <legend>select radio</legend>
                        <input type="radio" onChange={handleChange} name="radio" id="radio1" value="radio1" checked={formData.radio === 'radio1'} /> <label htmlFor="radio1">Radio 1</label> <br />
                        <input type="radio" onChange={handleChange} name="radio" id="radio2" value="radio2" checked={formData.radio === 'radio2'} /> <label htmlFor="radio2">Radio 2</label> <br />
                        <input type="radio" onChange={handleChange} name="radio" id="radio3" value="radio3" checked={formData.radio === 'radio3'} /> <label htmlFor="radio3">Radio 3</label> <br />
                    </fieldset>
                    <select name="select" onChange={handleChange} value={formData.select}>
                        <option value="">-- choose --</option>
                        <option value="select1">select1</option>
                        <option value="select2">select2</option>
                        <option value="select3">select3</option>
                    </select><br /><br />
                    <button>Submit</button>
                </label>
            </form>
        </div>
    )
}

export default SearchFilter;