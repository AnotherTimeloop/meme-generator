import React from 'react'

class Content extends React.Component {
    state = {
        name: "Content",
        image: "http://i.imgflip.com/1bij.jpg",
        allMemeImages: [],
        header: "",
        footer: ""

    }

    componentDidMount() {
        const allMemes = "https://api.imgflip.com/get_memes"
        fetch(allMemes)
        .then(images => images.json())
        .then(items => this.setState({allMemeImages: items.data.memes}))
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const randomMeme = Math.round(Math.random() * this.state.allMemeImages.length)
        console.log(randomMeme)
        console.log(this.state.allMemeImages[randomMeme])
        this.setState({
            image: this.state.allMemeImages[randomMeme].url
        })
    }

    render() {
        return(
            <div className="main">
                <h1>{this.state.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="header" value={this.state.header} onChange={this.handleChange} placeholder="Header" />
                    <input type="text" name="footer" value={this.state.footer} onChange={this.handleChange} placeholder="Footer" />
                    <button>Gen</button>
                </form>
                <div className="container">
                <img src={this.state.image} alt="meme" />
                <h2 className="headerText">{this.state.header}</h2>
                <h2 className="footerText">{this.state.footer}</h2>
                </div>
                <input type="checkbox" id="show-content" />
                <label htmlFor="show-content" >Show more content</label>
                    <div className="main-content">
                        <h2>Additional Content</h2>
                    </div>
            </div>
        )
    }
}

export default Content