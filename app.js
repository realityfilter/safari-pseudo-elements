const attachApp = (element) => {
    const root = element.attachShadow({mode: "open"})
    
    const style = document.createElement('link')
    style.rel= 'stylesheet'
    style.href = './app.css'
    root.append(style)
    
    const div = document.createElement('div')
    div.innerHTML = '<p>I should start with a blue I and have a bold first line.</p>'
    
    root.append(div)
}

document.querySelectorAll('.app').forEach(attachApp)
