class App
{
    runApplication()
    {

        const  appName = "Coole app"
        let versienummer =  1.0
        let versiedatum = "24/11/2022"
        const author = "Rein Verhaag"
        const copyright = "All rights reserved by Rein Verhaag"
        const distributeur = "MA"
        let darkmode = false
        console.log(appName, versienummer, versiedatum, author, copyright, distributeur, darkmode);

    }
}

let app = new App();
app.runApplication();