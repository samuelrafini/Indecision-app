console.log("app.js is running");

const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subTitle: 'this is my subTitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
    }
    renderApp();
}

const removeAll = (e) => {
    e.preventDefault();

    app.options = [];
    renderApp();

}

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    alert(option);

}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>Sub Title: {app.subTitle}</p>}
            <p>another text</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>text: {app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAll}>remove All</button>
            
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );


    ReactDOM.render(template, appRoot);
}

renderApp();