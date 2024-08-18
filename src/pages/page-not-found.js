const PageNotFoundImage = require('src/assets/image/maintenance, error _ website, webpage, browser, fix, repair, alert, warning, man, people@2x.png')

export function PageNotFound(){
    const screenHeight = document.documentElement.clientHeight;
    const containerClassname = "container h-["+screenHeight+"px] flex flex-col justify-center items-center gap-3";

    return(
        <div className={containerClassname}>
            <h1 className='text-7xl font-bold text-yellow-500'>Oops!</h1>
            <h1 className='text-xl font-medium'>The page you’re looking for seems to have wandered off. Let’s get you back on track!</h1>
            <img className='w-80' src={PageNotFoundImage}></img>
            <a className= 'px-20 py-2 mt-5 bg-black text-white rounded-2xl text-xl' href='/'>HOMEPAGE</a>
        </div>
    )
}