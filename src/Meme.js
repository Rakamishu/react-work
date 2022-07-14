import { useEffect, useState } from "react";

function Meme() {  
    
    const [meme, setMeme] = useState({
        topText: 'upper text',
        bottomText: 'lower tet',
        randomImage: 'https://i.imgflip.com/1bil.jpg'
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomImage = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomImage].url
        setMeme(oldValue => {
            return {
                ...oldValue,
                randomImage: url
            }
        })
    }

    function handleInput(event) {
        const { name, value } = event.target
        setMeme(oldValue => {
            return {
                ...oldValue,
                [name]: value
            }
        })
    }

    return (
        <div>
            <button onClick={getMemeImage}>get memes</button><br />
            <input type="text" name="topText" onChange={handleInput} placeholder="Top text" /><br />
            <input type="text" name="bottomText" onChange={handleInput} placeholder="Top text" /><br />

            <h2>{meme.topText}</h2>
            <img src={meme.randomImage} style={{ width: '400px' }} />
            <h2>{meme.bottomText}</h2>
        </div>
    )
}

export default Meme;